const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-Parser');

let todos2 = [
             { task: 'Pick up car from garage', status: false },
             { task: 'Buy 4D printer', status: false }
             ];

// BodyParser to make it easy to read POST data
app.use(bodyParser.json());

// GET /api/todos2
app.get('/api/todos2', (req, res) => {
  console.log('GET todos2');
  // Send the user a list of students
  res.send(todos2);
})

// POST /api/todos2
app.post('/api/todos2', (req, res) => {
  // Add the new task to our array
  todos2.push(req.body);
  // Send the user a list of tasks
  res.send(todos2);
})

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port);
