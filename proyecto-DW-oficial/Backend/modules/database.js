require('../config');
var mongoose = require('mongoose');


var servidor = 'localhost:27017';
var db = 'egroweb';

class Database{
    constructor(){
        //Promesas
        mongoose.connect(process.env.URLDB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(()=>{
            console.log('Se conecto a mongo');
        }).catch((error)=>{
            console.log(error);
        });
    }
}

module.exports = new Database();