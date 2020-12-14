db.usuarios.insertMany([
    {
        "nombre":"Ian",
        "apellido":"Santos",
        "correo": "iancwsa@gmail.com",
        "contrasenia": "asd.456",
        "fechaNacimiento": "17-08-2020",
        "rol": "administrador",
        "urlImagen": "0.jpg",
        "bloques": null,
        "tarjeta": "",
        "plan": ObjectId("5fd5d661dbae1a6cc021960a"),
        "compra": null,

    },
    
    {
        "nombre":"Maddy",
        "apellido":"Franco",
        "correo": "maddy@gmail.com",
        "contrasenia": "asd.456",
        "fechaNacimiento": "30-03-2020",
        "rol": "empresarial",
        "urlImagen": "15.jpg",
        "bloques": null,
        "tarjeta": "asdasd",
        "plan": ObjectId("5fd5d661dbae1a6cc021960c"),
        "compra": null,
        "empresa": {
            "nombreEmpresa": "XD",
            "eslogan": "Poco pero mucho",
            "Paginas": [],
            "activa": true        }
    }
])

//db.usuarios.find( { "name.last": "Hopper" } )
//db.usuarios.find({bloques: {$exists:true} }) #Saber si existe un campo
//db.usuarios.find({"rol":"administrador"}).pretty() #Sabe si el campo tiene un valor
//db.usuarios.find({"rol":"administrador"},{_id:true, nombre:true}).pretty() Sabe si el campo tiene un valor UNICAMENTE CON DOS CAMPOS
//db.collection.find({<filtro>},{<campo>})

db.plantillas.insertMany([
    {
            "nombrePlantilla": "Nice",
            "html": "<div>Hola</div>",
            "css": "color: blue",
            "predeterminado": true,
            "js": ""
    },
    {
        "nombrePlantilla": "Are you ready?",
        "html": "<div>Hey</div>",
        "css": "color: blue",
        "predeterminado": true,
        "js": ""
    },
    {
        "nombrePlantilla": "Love",
        "html": "<div>U</div>",
        "css": "color: blue",
        "predeterminado": true,
        "js": ""
    
    },
    {
        "nombrePlantilla": "Woods",
        "html": "<div>cx</div>",
        "css": "color: blue",
        "predeterminado": true,
        "js": ""
    }
])

db.planes.insertMany([
    {
        "nombrePlan": "Hoja",
        "precioPlan": "5",
        "limitacion": {
            "segundosRetardo": "5",
            "cantidadImagen": "10",
            "clienteActivos": "1",
            "cantidadPagina": "1"
        }
    },
    {
        "nombrePlan": "Rama",
        "precioPlan": "10",
        "limitacion": {
            "segundosRetardo": "3",
            "cantidadImagen": "20",
            "clienteActivos": "5",
            "cantidadPagina": "2"
        }
    },
    {
        "nombrePlan": "Arbol",
        "precioPlan": "20",
        "limitacion": {
            "segundosRetardo": "",
            "cantidadImagen": "100",
            "clienteActivos": "",
            "cantidadPagina": "4"
        }
    }
])

db.bloques.insertMany([
    {
        "tituloTema": "Azul",
        "descripcion": "Medio medio",
        "css": "color: yellow",
        "javascript": "<script> console.log('funciona')</script>",
        "imagenes": []
    }
])

/*
plan tiene empresas 
empresas tiene productos*/