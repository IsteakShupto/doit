const express = require("express");
const Todo = require("../db");
const router = express.Router();

// user can see all of their todos
router.get("/todos", async (req, res) => {
  const todos = await Todo.find({});

  res.json({
    todos: todos,
  });
});

// user can check / uncheck their todo
router.put("/todos/:todo", async (req, res) => {
  const id = req.params.todo;

  const get_todo = await Todo.findById(id);

  const todo = await Todo.updateOne(
    {
      _id: id,
    },
    {
      completed: !get_todo.completed,
    }
  );

  res.json({
    todo: await Todo.findById(id),
  });
});

// user can create todo
router.post("/todo", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const completed = req.body.completed;

  const todo = await Todo.create({
    title: title,
    description: description,
    completed: completed,
  });

  res.json({
    message: `Your todo has been created: ${todo._id}`,
  });
});

// user can delete a todo
router.delete("/todos/:todo", async (req, res) => {
  const id = req.params.todo;

  if (id !== undefined) {
    const todo_deleted = await Todo.findByIdAndDelete(id);

    res.json({
      message: todo_deleted,
    });
  }
});

module.exports = router;
