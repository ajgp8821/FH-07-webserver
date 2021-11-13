require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials', (err) =>{ console.log(err)} );

// Servir contenido estatico
app.use(express.static('public'));

// No se ejecuta
// app.get('/', (req, res) => {
//   res.send('Home Page')
// });

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Alejandro Gil',
    title: 'Road Trip'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Alejandro Gil',
    title: 'Road Trip'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Alejandro Gil',
    title: 'Road Trip'
  });
});

app.get('*', (req, res) => {
  // res.send('404 | Page not found')
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () =>{
  console.log(`App listening at http://localhost:${port}`);
});
