var http = require('http');

// will invoke the anonomous function inside .createServer for every request on port 3000
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world!');
}).listen(3000);

console.log('Server starter on localhost:3000; press Ctrl-C to terminate...');
