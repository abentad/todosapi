import myModel from "../models/myModel.js";

export const getAllTodos = async (req, res) => {
  const allTodos = await myModel.find();
  res.json({ allTodos: allTodos });
};

export const createTodo = async (req, res) => {
  const newTodo = await myModel.create(req.body);
  res.status(201).json({ newTodo });
};

export const getTodoById = async (req, res) => {
  const requiredTodo = await myModel.findById(req.params.id);
  if (!requiredTodo) {
    res.status(404).json({ error: "No todo found" });
  } else {
    res.json({ requiredTodo });
  }
};

export const deleteTodoById = async (req, res) => {
  const deletedTodo = await myModel.findByIdAndDelete(req.params.id);
  if (!deletedTodo) {
    res.status(404).json({ error: "No to do found to delete" });
  } else {
    res.json({ deletedTodoID: deletedTodo.id });
  }
};
