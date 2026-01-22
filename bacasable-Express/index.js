const express = require("express");
const app = express();
const { connectDB } = require('./db/sequelize/db');
const routerComputer = require('./router/routerComputer');
const routerPark = require('./router/routerPark');

// Important utiliser json 
app.use(express.json());

// Initialiser la BDD
connectDB();

app.use('/api/computer', routerComputer);
app.use('/api/park', routerPark);



app.listen(3000, () => { console.log("Server is running on port 3000 http://localhost:3000"); })
