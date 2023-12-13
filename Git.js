// Importing the 'http' module
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
  // Setting the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Sending the response
  res.end('This is branch1');
});

// Setting the port and IP address to listen on
const port = 3000;
const host = '127.0.0.1';

// Starting the server
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});