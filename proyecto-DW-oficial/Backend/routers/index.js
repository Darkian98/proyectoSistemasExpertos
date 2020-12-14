/*const { Router } = require('express');
const router = Router();
var jwt =require('jsonwebtoken');



module.exports = router

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

    */