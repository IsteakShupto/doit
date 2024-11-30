require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

const { Schema } = mongoose;

const todoSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
