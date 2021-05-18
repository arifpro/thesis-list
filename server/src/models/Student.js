import mongoose from "mongoose";
import shortid from "shortid";

const { Schema, model } = mongoose;

const studentSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
    },
    课题名称: {
      type: String,
      default: "",
    },
    学年: {
      type: String,
      default: "",
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
    instructorId: {
      type: String,
      default: "",
    },
    instructorName: {
      type: String,
      default: "",
    },
    judgeName: {
      type: String,
      default: "",
    },
    judgeTitle: {
      type: String,
      default: "",
    },
    defenseGroup: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default model("Student", studentSchema);
