const http = require('http');

const server = http.createServer((request, response) => response.end("Hello, Galvanize!"));

server.listen(3000, "localhost", () => console.log(`Server running on localhost:3000`));