const { log } = require('console');
const http = require('http');

http.createServer((req, res)=> {

  // console.log(req);
  // res.writeHead(202, {'Content-Type': 'application/json'});
  // res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
  // res.writeHead(200, {'Content-Type': 'application/csv'});

  const person = {
    id: 1,
    name: 'Alejandro'
  };

  res.write('Hello World')
  res.end();

})
.listen(8080);

console.log('Escuchando el puerto', 8080);
