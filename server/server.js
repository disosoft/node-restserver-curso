require('./config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');


var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//habilitar carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// parse application/json
app.use(bodyParser.json());

//Routes global configuration
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err) throw err;
    console.log('Base de datos online');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando port 3000');
})