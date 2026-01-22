const express = require("express");
const app = express();
const { connectDB } = require("./db/db");
const courseRouter = require("./routes/courseRouter");
const categoryRouter = require("./routes/categoryRouter");
const authRouter = require('./routes/authRouter');
require("dotenv").config();
app.use(express.json());


// Initialize Database
connectDB();

//
app.use("/course", courseRouter);
app.use('/category', require('./routes/categoryRouter'));
app.use('/auth', authRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});
