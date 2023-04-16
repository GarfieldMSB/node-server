require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

const options = {
    nombre: 'Matias Sepulveda',
    titulo: 'Curso de Node'
}

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Contenido estatico
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render('home', options)
});

app.get('/generic', (req, res) => {
    res.render('generic', options)
});

app.get('/elements', (req, res) => {
    res.render('elements', options);
});



app.listen(port, () => {
    console.log('Servidor corriendo en puerto:', port);
})