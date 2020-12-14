var mongoose = require('mongoose');

var esquema = new mongoose.Schema(
    {
        nombreUsuario: String,
        apellidoUsuario: String,
        correo: String,
        contrasenia: String,
        fechaNacimiento: String,
        rol: String,
        plan: String,
        compras: Array,
        administrador: Boolean
    }
);

module.exports = mongoose.model('usuarios', esquema);