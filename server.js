const http = require('http');
const port = 3000;

let students = [];

function handleMyRequest(request, response) {
  if (request.url === '/students') {
    response.end('Hi!')
  } else if (request.url === '/bobjane') {
    response.end('BUY TYRES HERE!!!!');
  } else {
    response.writeHead(418);
    response.end();
  }
}

const server = http.createServer(handleMyRequest)

console.log(`Server is running on port ${port}`)
server.listen(port);
