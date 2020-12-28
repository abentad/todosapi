import myModel from "../models/myModel.js";

//To get all todos
export const getAllTodos = async (req, res) => {
  const allTodos = await myModel.find();
  res.json({ allTodos: allTodos });
};

//to create a new todo
export const createTodo = async (req, res) => {
  const newTodo = await myModel.create(req.body);
  res.status(201).json({ newTodo });
};

//to get a todo by its id
export const getTodoById = async (req, res) => {
  const requiredTodo = await myModel.findById(req.params.id);
  if (!requiredTodo) {
    res.status(404).json({ error: "No todo found" });
  } else {
    res.json({ requiredTodo });
  }
};

//to delete a todo by its id
export const deleteTodoById = async (req, res) => {
  const deletedTodo = await myModel.findByIdAndDelete(req.params.id);
  if (!deletedTodo) {
    res.status(404).json({ error: "No to do found to delete" });
  } else {
    res.json({ deletedTodoID: deletedTodo.id });
  }
};

//update a todo by its id
export const updateTodoById = async (req, res) => {
  const requiredTodo = await myModel.findById(req.params.id);
  if (!requiredTodo) {
    res.status(400).json({ error: "No todo found" });
  } else {
    requiredTodo.isCompleted = !requiredTodo.isCompleted;
    requiredTodo.save();
    res.json({ requiredTodo });
  }
};
