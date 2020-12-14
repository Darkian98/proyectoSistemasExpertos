var mongoose = require('mongoose');

var esquema = new mongoose.Schema(
    {
        nombreUsuario: String,
        apellidoUsuario: String,
        correo: String,
        contrasenia: String,
        fechaNacimiento: String,
        rol: String,
        urlImagen: String,
        plan: { type: mongoose.ObjectId, ref: "planes"},
        compra: Array,
    }
);


module.exports = mongoose.model('usuarios', esquema);