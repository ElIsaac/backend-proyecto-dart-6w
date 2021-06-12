/* const Usuario=require("../models/Usuario")
const Producto = require("../models/Producto") */

async function mandarProductos(req,res){
    res.json(
        [
            {"Nombre":"kg. pera premium","precio":15},
            {"Nombre":"tele","precio":175},
            {"Nombre":"bolsa","precio":5},
            {"Nombre":"mouse","precio":20}

        ]
    );
}
async function mandarUsuarios(req,res){
    res.json(
        [
            {"Nombre":"isaac ramirez","rol":"admin"},
            {"Nombre":"toro bolo","rol":"resurtidor"},
            {"Nombre":"alex bolo","rol":"cajero"},

        ]
    );
}
module.exports={
    mandarProductos,
    mandarUsuarios
}