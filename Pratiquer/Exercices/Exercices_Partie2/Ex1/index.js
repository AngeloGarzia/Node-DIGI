const express = require("express");
const app = express();
const taskRouter = require("./router/taskRouter");

// Middleware to parse JSON bodies
app.use(express.json());

// Main route for tasks
app.use("/tasks", taskRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});
