import mongoose from "mongoose";

export default async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Ab:19875321ab@restapi.dgg3t.mongodb.net/restApi?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log(`Connected to mongoDB database ${conn.connection.name}`);
  } catch (error) {
    //will log the error to the console and quits the server
    console.error(error);
    process.exit(1);
  }
};
