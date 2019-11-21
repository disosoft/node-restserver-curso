require('./config/config');

const express = require('express');
const app = express();

var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello World')
});

app.get('/usuario', function(req, res) {
    res.send('get Usuario')
});

app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        })
    }
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
    res.send('put Usuario')
});

app.delete('/usuario', function(req, res) {
    res.send('delete Usuario')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando port 3000');
})