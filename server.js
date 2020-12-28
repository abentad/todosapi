import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

//enviroment variables initialized
dotenv.config();
const { PORT } = process.env;

//express initialized
const app = express();

//middle wares
app.use(morgan("dev"));

//basic route
app.get("/api/todos/:id/", (req, res) => {
  res.json({ id: req.params.id });
});

//app listening port
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
