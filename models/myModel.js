import mongoose from "mongoose";

const mySchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("myModel", mySchema);
