
//======================================
//  Puerto
//======================================
process.env.PORT = process.env.PORT || 8888;

//======================================
//  Entorno
//======================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//======================================
//  Semilla de auth
//======================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//======================================
//  DB
//======================================
let urlDB;

if ( process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/egroweb'
} else {
    //mongodb+srv://Darkian98:aprilbabe98@cluster0.ox4w6.mongodb.net/egroweb?retryWrites=true&w=majority
    urlDB = process.env.MONGODB_URI;
}

// usar url para cambiar conexion
process.env.URLDB =  urlDB;