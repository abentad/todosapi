import myModel from "../models/myModel.js";

export const getAllTodos = async (req, res) => {
  const allTodos = await myModel.find();
  res.json({ allTodos: allTodos });
};
