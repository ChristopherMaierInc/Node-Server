const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-Parser');

// Our array of students
let students = ['Simon', 'Scott'];

// BodyParser to make it easy to read POST data
app.use(bodyParser.json());

// GET /students
app.get('/students', (req, res) => {
  console.log('GET students');
  // Send the user a list of students
  res.send(students);
})

// POST /students
app.post('/students', (req, res) => {
  // Add the new student to our array
  students.push(req.body.name);
  // Send the user a list of students
  res.send(students);
})

app.listen(port);
