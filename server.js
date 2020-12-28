import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/connectDB.js";
import myRoute from "./routes/myRoute.js";

//enviroment variables initialized
dotenv.config();
const { PORT } = process.env;

(async () => {
  //connect to the Database
  await connectDB();

  //express initialized
  const app = express();

  //middle wares
  app.use(morgan("dev"));
  app.use("/api/todos/", myRoute);

  //app listening port
  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  });
})();
