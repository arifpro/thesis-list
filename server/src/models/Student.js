import mongoose from "mongoose";

const { Schema, model } = mongoose;

const studentSchema = new Schema(
  {
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
    选题质量: {
      type: String,
      default: "",
    },
    研究水平与实际能力: {
      type: String,
      default: "",
    },
    论文撰写质量: {
      type: String,
      default: "",
    },
    学术水平与创新: {
      type: String,
      default: "",
    },
    答辩: {
      type: String,
      default: "",
    },
    scoreUpdatedBy: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default model("Student", studentSchema);
