
const express = require("express");
const app = express();
const { connectDB } = require("./db/db");
const bookRouter = require('./router/bookRouter');

// Important utiliser json 
app.use(express.json());

// Initialiser la BDD
connectDB();

app.use('/api/books', bookRouter);


app.listen(3000, () => { 
    console.log("Server is running on port 3000 http://localhost:3000"); 
    });
