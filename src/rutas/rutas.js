const { Router } = require('express');
const router = Router();
const getController=require("../controllers/get")

router.get("/producto/",getController.mandarProductos )
router.get("/usuario/",getController.mandarUsuarios )
/* 
router.post("/producto/nuevo",postController.crearProducto )
router.post("/usuario/nuevo",postController.crearUsuario ) */



module.exports = router