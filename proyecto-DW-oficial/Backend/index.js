require('./config');
var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var usuariosRouter = require('./routers/usuarios-router');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/usuarios', usuariosRouter);


app.get('/',(req,res)=>{
    res.send("Funciona Backend");
});

app.listen(process.env.PORT, ()=>{
    console.log('Servidor del backend levantado en 8888');
});