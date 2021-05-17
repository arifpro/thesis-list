import mongoose from "mongoose";
import shortid from "shortid";

const { Schema, model } = mongoose;

const judgeSchema = new Schema(
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
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

judgeSchema.methods.authenticate = function(password) {      
  return this.password === password;
}

export default model("Judge", judgeSchema);
