const express = require("express");

const taskRouter = express.Router();
const {
  getTasks,
  createNewTask,
  singleTask,
  updateTask,
  deleteTasks,
  updateTaskField
} = require("../controllers/taskController");

const authenticateUser = require("../middlewares/auth.Middleware");


taskRouter.get("/tasks", getTasks);
taskRouter.post("/create/Task", authenticateUser, createNewTask)
taskRouter.get("/task/:id", authenticateUser, singleTask);
taskRouter.put("/tasks/:id", authenticateUser, updateTask);
taskRouter.patch("/tasks/:id", authenticateUser, updateTaskField);
taskRouter.delete("/tasks/:id", authenticateUser, deleteTasks);

module.exports = taskRouter;