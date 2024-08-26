import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    _id: String,
    name: { type: String, required: true },
    number: { type: String, required: true },
    startDate: String,
    endDate: String,
    department: String,
    credits: Number,
    decription: String,
    image: String,
  },
  { collection: "courses" }
);
export default courseSchema;
