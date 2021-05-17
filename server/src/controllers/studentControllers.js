import Student from "../models/Student.js";
import { validationResult } from "express-validator";

// <==================== getAllStudents ====================>
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({}).sort({ studentId: -1 });

    if (students) {
      return res.status(200).json({ students });
    }
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

// <==================== addStudent ====================>
const addStudent = (req, res) => {
  const { studentId, name, email, phone, college, profession, year } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      error: firstError,
    });
  } else {
    Student.findOne({
      studentId,
    }).exec((err, user) => {
      if (user) {
        return res.status(400).json({
          error: "studentId is taken already.",
        });
      }

      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      const newStudent = new Student({
        studentId,
        name,
        email,
        phone,
        college,
        profession,
        year,
      });
      const save = newStudent.save();

      if (save) {
        return res.status(200).json({ message: "Student Added successfully" });
      }
    });
  }
};

// <==================== updateStudent ====================>
const updateStudent = async (req, res) => {
  const { _id, studentId, name, email, phone, college, profession, year } = req.body;

  if (!(studentId.length > 0) || !(name.length > 0)) {
    return res.json({ message: "studentId and name must be required" });
  }

  try {
    const editStudent = Student.findByIdAndUpdate(_id, {
      studentId,
      name,
      email,
      phone,
      college,
      profession,
      year,
      updatedAt: Date.now(),
    });

    const edit = await editStudent.exec();

    if (edit) {
      return res.status(200).json({ success: "Student updated successfully" });
    }
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

// <==================== deleteStudent ====================>
const deleteStudent = async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    return res.json({ error: "Id must be required" });
  }

  try {
    const delStudent = await Student.findByIdAndDelete(_id);

    if (delStudent) {
      return res.status(200).json({ success: "Student deleted successfully" });
    }

    return res.status(400).json({ message: "Id does not exist" });
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

export { getAllStudents, addStudent, updateStudent, deleteStudent };
