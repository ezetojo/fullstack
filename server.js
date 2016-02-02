'use strict';

const http = require('http');
const utils = require('./urlUtils.js');

const hostname = '127.0.0.1';
const port = 1337;

let visitas = 0; //genera el contador

http.createServer((req, res) => {
  //Manejo de informacion recibida
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if(req.url.indexOf('favicon') !== -1) //chequea el req del favicon
    return; //continua
    visitas=++visitas;
  // result.visitas = visitas; //suma el contador
  res.end(JSON.stringify(utils.getJSONObjectFromURLParams(req.url)));
  // res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
