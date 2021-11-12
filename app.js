const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Home Page')
});

app.get('*', (req, res) => {
  // res.send('404 | Page not found')
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () =>{
  console.log(`App listening at http://localhost:${port}`);
});

