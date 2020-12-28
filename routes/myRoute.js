import express from "express";
import {
  createTodo,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodoById,
} from "../controllers/myController.js";

const router = express.Router();
//middle wares
//for posting
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.route("/").get(getAllTodos).post(createTodo);
router
  .route("/:id")
  .get(getTodoById)
  .patch(updateTodoById)
  .delete(deleteTodoById);

export default router;
