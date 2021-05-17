import mongoose from "mongoose";
import shortid from "shortid";

const { Schema, model } = mongoose;

const studentSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
    },
    studentId: {
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
    college: {
      type: String,
      default: "",
    },
    profession: {
      type: String,
      default: "",
    },
    year: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default model("Student", studentSchema);
