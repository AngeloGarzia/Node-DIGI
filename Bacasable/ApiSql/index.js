const express = require("express");
const app = express();
const { connectDB } = require("./db/db");
const taskRouter = require("./routes/taskRouter");
const listsRouter = require("./routes/listsRouter");
const authRouter = require('./routes/authRouter');
require("dotenv").config();
app.use(express.json());


// Initialize Database
connectDB();

//
app.use("/tasks", taskRouter);
app.use('/lists', require('./routes/listsRouter'));
app.use('/auth', authRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});
