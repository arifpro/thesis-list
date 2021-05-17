import Teacher from "../models/Teacher.js";
import { validationResult } from "express-validator";

// <==================== getAllTeachers ====================>
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find({}).sort({ jobId: -1 });

    if (teachers) {
      return res.status(200).json({ teachers });
    }
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

// <==================== addTeacher ====================>
const addTeacher = (req, res) => {
  const { jobId, name, email, phone } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      error: firstError,
    });
  } else {
    Teacher.findOne({
      jobId,
    }).exec((err, user) => {
      if (user) {
        return res.status(400).json({
          error: "jobId is taken already.",
        });
      }

      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      const newTeacher = new Teacher({ jobId, name, email, phone });
      const save = newTeacher.save();

      if (save) {
        return res.status(200).json({ message: "Teacher Added successfully" });
      }
    });
  }
};

// <==================== updateTeacher ====================>
const updateTeacher = async (req, res) => {
  const { _id, jobId, name, email, phone } = req.body;

  if (!(jobId.length > 0) || !(name.length > 0)) {
    return res.json({ message: "jobId and name must be required" });
  }

  try {
    const editTeacher = Teacher.findByIdAndUpdate(_id, {
      jobId,
      name,
      email,
      phone,
      updatedAt: Date.now(),
    });

    const edit = await editTeacher.exec();

    if (edit) {
      return res.status(200).json({ success: "Teacher updated successfully" });
    }
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

// <==================== deleteTeacher ====================>
const deleteTeacher = async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    return res.json({ error: "Id must be required" });
  }

  try {
    const delTeacher = await Teacher.findByIdAndDelete(_id);

    if (delTeacher) {
      return res.status(200).json({ success: "Teacher deleted successfully" });
    }

    return res.status(400).json({ message: "Id does not exist" });
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

export { getAllTeachers, addTeacher, updateTeacher, deleteTeacher };
