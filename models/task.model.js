const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  completed: {
    type:Boolean,
    default: false
  },
  createdAt: {
    type:Date,
    default:Date.now
  }
});

const task = mongoose.model("Task", taskSchema);

module.exports = task;