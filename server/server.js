const path = require('path');
const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');

const employees = require('./employees');

var app = express();
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.use(bodyParser.json());

app.get('/employees/list', (req, res) => {
  res.send({employees: employees.getAll()})
})

app.post('/employees/add', (req, res) => {
  const employee = employees.addEmployee(req.body.employee);
  if(employee === undefined) {
    res.status(400).send()
  } else {
    res.send({ employee })
  }
})

app.post('/employees/edit', (req, res) => {
  const employee = employees.editEmployee(req.body.empId, req.body.updates);
  if(employee === undefined) {
    res.status(404).send()
  } else {
    res.send({ employee })
  }
})

app.get('/project/types', (req, res) => {
  res.send({ projectTypes: ['ORI', 'GBM', 'INAV'] })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(3000, () => {
  console.log(`started up at port 3000`);
});
