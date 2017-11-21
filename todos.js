const http = require('http');
const port = 3000;

let todos = [
             { item: 'wash clothes', done: false },
             { item: 'drink coffee', done: true }
            ];

function handleMyRequest(request, response) {
  if ((request.url === '/api/todos') && (request.method === 'GET')) {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify(todos));
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

//tag simon
