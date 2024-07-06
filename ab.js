var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200,{'Content-Type':'text/plain'}); 
  res.end('Hello world\n');
}).listen(5001);
console.log("Server running at http://localhost:5001/");