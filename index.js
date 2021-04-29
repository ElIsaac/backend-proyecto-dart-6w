const express = require('express');
const cors = require('cors');

const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('port', process.env.PORT || 4000);

app.use(cors());

app.use(require("./rutas"));

app.listen(app.get('port'), ()=>{
    console.log("servidor corriendo en puerto: ",app.get('port'));
})