const express = require('express');
const taskRouter = require('./routes/taskRouter');

const app = express();
app.use(express.json());

app.use('/tasks', taskRouter); //ou se trouve les routes!

app.listen(3000, () => {
  console.log('http://localhost:3000/tasks');
});