import mongoose from "mongoose";
import shortid from "shortid";

const { Schema, model } = mongoose;

const teacherSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
    },
    jobId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default model("Teacher", teacherSchema);
