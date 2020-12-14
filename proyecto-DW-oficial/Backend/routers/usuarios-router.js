const { Router } = require('express');
const router = Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');
var jwt =require('jsonwebtoken');


router.get('/private-tareas',verifyToken, (req,res) =>{
    res.json([
        {
            _id:1,
            name: 'Task One',
            description: 'lorem ipsum',
            date: "2019-11-13"
        },
        {
            _id:2,
            name: 'Task Two',
            description: 'lorem ipsum',
            date: "2019-11-13"
        },
        {
            _id:3,
            name: 'Task Three',
            description: 'lorem ipsum',
            date: "2019-11-13"
        }
    ])
})

// =================================
// Obtener todos los Usuarios
// =================================
router.get('/', (req,res) =>{
    usuario.find()
    .then(result => {
        res.send(result);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    })
})



// =================================
// Autenticar un Usuario
// =================================

router.post('/signin', async(req,res) =>{
    const{ correo, contrasenia } = req.body
    const user = await usuario.findOne({correo})
    console.log(user);
    if(!user) return res.status(401).send("El correo no existe");
    if(user.contrasenia !== contrasenia) return res.status(401).send("Contraseña Incorrecta");
        
    const token = jwt.sign({_id: user._id}, 'secretKey');
    return res.status(200).json({token});
    
})




//db.usuarios.find({ "_id:""5fd60061dbae1a6cc0219615")})
// =================================
// Probar tareas con token
// =================================


// =================================
// Obtener un Usuario
// =================================
router.get('/:id', (req,res) =>{
    usuario.find({ "_id":" req.params.id"})
    .then(result => {
       return  res.send(result);

    })
    .catch(error => {
        return res.send(error);

    })
});


//db.usuarios.find({_id:ObjectId("5fd60061dbae1a6cc0219616")})

// =================================
// Registrar un Usuario
// =================================
router.post('/signup', (req,res)=>{

    const {correo, contrasenia } = req.body
    console.log(correo, contrasenia);

    let user = new usuario({
        nombreUsuario: req.body.nombre,
        apellidoUsuario:  req.body.apellido,
        correo: req.body.correo,
        contrasenia:  req.body.contrasenia,
        fechaNacimiento: req.body.fechaNacimiento,
        rol: req.body.rol,
        urlImagen: "0.jpg",
        plan: null,
        compra: null
    });
    user.save();

    const token = jwt.sign({_id: contrasenia}, 'secretKey')

    res.status(200).json({token});


})



//db.usuarios.find({"correo":"iancwsa@gmail.com"})

// =================================
// Asignar un Plan a Usuario
// =================================
router.put('/:id/plan', (req,res) =>{
    usuario.update({
        _id: req.params.id
    },
    {
        plan: mongoose.Types.ObjectId(req.body.plan)
    }).then(result =>{
        res.send(result);
        res.end();
    }).catch(error =>{
        res.send(error);
        res.end();
    })
})



//db.usuarios.update({"_id":"5fd608c6d801e92b58e969bb"},{"nombre": "xd"})

module.exports = router;

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send("No autorizado");
    }
    const token = req.headers.authorization.split(' ')[1]
    if(token==='null'){
        return res.status(401).send("No autorizado");
    }

    const payload = jwt.verify(token,'secretKey');
    req.userId = payload._id;
    next();
}