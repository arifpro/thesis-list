import mongoose from "mongoose";
const { Schema, model } = mongoose;

const judgeSchema = new Schema(
  {
    jobId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

judgeSchema.methods.authenticate = function (password) {
  return this.password === password;
};

export default model("Judge", judgeSchema);
