const { Router } = require('express');
const router = Router();

router.get("/dia/lunes", (req, res) => {
    res.json(
        {
            "articulos":[
                {manzana: 1000}, 
                {pera: 1000}, 
                {iphone:1000}, 
                {bolo: 1000}, 
                {teclado: 1000},
                {pantalla: 1000},
                {nintendo: 1000},
                {moneda: 1000}
            ],
            "subTotal":8000, 
            "descuento":15
        }
            );
})

router.get("/dia/martes", (req, res) => {
    res.json(
        {
            "articulos":[
                {bonafont: 1000}, 
                {reloj: 1000}, 
                {iphone:1000}, 
                {bolo: 1000}, 
                {tarjeta: 1500}
            ],
            "subTotal":5500, 
            "descuento":5
        }
            );
})

router.get("/dia/miercoles", (req, res) => {
    res.json(
        {
            "articulos":[
                {vaso: 1000}, 
                {tasa: 1000}, 
                {iphone:1000}, 
                {jabon: 1000}, 
            ],
            "subTotal":4000, 
            "descuento":10
        }
            );
})

router.get("/dia/jueves", (req, res) => {
    res.json(
        {
            "articulos":[
                {tele: 1000}, 
                {pera: 1000}, 
                {tomate:1000},  
                {pantalla: 1000},
                {toronja: 1000},
                {moneda: 1000},
                {jabon:1000}
            ],
            "subTotal":7000, 
            "descuento":20
        }
            );
})

router.get("/dia/viernes", (req, res) => {
    res.json(
        {
            "articulos":[
                {tele: 1000}, 
                {pera: 1000}, 
                {tomate:1000}, 
                {bolo: 1000}, 
                {teclado: 1000},
                {pantalla: 1000},
                {toronja: 1000},
                {moneda: 1000},
                {jabon:1000},
                {oro: 1000}
            ],
            "subTotal":10000, 
            "descuento":25
        }
            );
})



module.exports = router