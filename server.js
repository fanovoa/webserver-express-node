const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000

//midleware instrución o calback que siempre se va a ejcutar
app.use(express.static(__dirname + '/public'));

//HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'nuevo usuario'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
});