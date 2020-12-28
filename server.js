import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import myRoute from "./routes/myRoute.js";

//enviroment variables initialized
dotenv.config();
// const { PORT } = process.env;
const port = process.env.PORT || 3000;

//
(async () => {
  //connect to the Database
  await connectDB();

  //express initialized
  const app = express();

  //middle wares
  app.use("/api/todos/", myRoute);
  //for posting
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.get("/", (req, res) => {
    res.json(
      "message: welcome to todo list api add /api/todos/ to view all todos"
    );
  });

  //app listening port
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
})();
