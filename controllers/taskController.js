const Task = require("../models/task.model");
const mongoose = require("mongoose");


// ALL TASKS

const getTasks = async (req, res) => {

  try {
    //pagination
    const { page = 1, limit =5 } = req.query;
    const noOfPages = (page - 1) * limit;
    const task = await Task.find().skip(noOfPages).limit(Number(limit));
    const total=await Task.countDocuments();
    //if task is not found
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({
      message: "Task is found",
      task,
      total
    })
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }

}

//create a New Task


const createNewTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      createdAt:new Date()
    })
    res.status(201).json({
      message: "new Task created",
      task
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server Error"
    })
  }

}

//single task

const singleTask = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId(id)) {
      return res.status(400).json({ message: "Invalid Id" });
    }
    //find One Task using Id 
    const task = await task.findOne(id);


    //if task is not found
    if (!task) {
      return res.status(404).json({
        message: "Task not Found"
      })
    }
    res.status(200).json({
      task
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || "Interval Server Error"
    })
  }
}

//update a Task


const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true
    });
    //check if task exists or not
    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      })
    }
    res.status(200).json({
      message: "task updated",
      task
    })

  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error"
    })
  }
}

//update Task field 


const updateTaskField = async (req, res) => {

  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await Task.findByIdAndUpdate(id, {
      title, description, completed
    }, {
      new: true
    });
    //if task does not exists
    if (!task) {
      return res.status(404).json({
        message: "Task not Found"
      })
    }
    res.status(200).json({
      message: "field has been updated sucessfully",
      task
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error"
    })
  }

}
//delete task
const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    //check if task exists or been deleted before
    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      })
    }
    res.status(200).json({
      message: "Task deleted sucessfully",
      task
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error"
    })
  }
}



module.exports = {
  getTasks,
  createNewTask,
  singleTask,
  updateTask,
  deleteTasks,
  updateTaskField
}