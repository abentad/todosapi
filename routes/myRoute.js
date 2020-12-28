import express from "express";
import { getAllTodos } from "../controllers/myController.js";

const router = express.Router();

router.route("/").get(getAllTodos).post();
router.route("/:id").get().patch().delete();

export default router;
