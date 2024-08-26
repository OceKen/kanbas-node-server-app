import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema(
  {
    _id: String,
    name: { type: String, required: true },
    decription: String,
    course: { type: String, required: true },
    lesson: [],
  },
  { collection: "modules" }
);
export default moduleSchema;
