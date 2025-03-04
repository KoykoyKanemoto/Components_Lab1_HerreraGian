const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
require('dotenv').config();

app.use(cors());

const employees = [
  { name: 'Gian', role: 'Developer', salary: 30000 },
  { name: 'Yoshinori', role: 'Developer', salary: 45000 },
  { name: 'Haruto', role: 'Developer', salary: 70000 },
  { name: 'Junghwan', role: 'Developer', salary: 55000 },
  { name: 'Jeongwoo', role: 'Developer', salary: 40000 },
  { name: 'Jaehyuk', role: 'Developer', salary: 65000 },
];


app.get('/api/employees', (req, res) => {
  res.json(employees);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


