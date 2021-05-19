import Student from "../models/Student.js";
import { validationResult } from "express-validator";

// <==================== getAllStudents ====================>
const getAllStudents = async (req, res) => {
  try {
    // const students = await Student.find({}).sort({ studentId: -1 });
    const students = await Student.find({}).sort({ instructorId: -1 });

    if (students) {
      return res.status(200).json({ students });
    }
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

// <==================== addStudent ====================>
const addStudent = (req, res) => {
  const {
    课题名称,
    学年,
    email,
    phone,
    college,
    profession,
    year,
    instructorId,
    instructorName,
    judgeName,
    judgeTitle,
    defenseGroup,
    选题质量,
    研究水平与实际能力,
    论文撰写质量,
    学术水平与创新,
    答辩,
    studentId,
    name,
    scoreUpdatedBy,
  } = req.body;
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
        课题名称,
        学年,
        email,
        phone,
        college,
        profession,
        year,
        instructorId,
        instructorName,
        judgeName,
        judgeTitle,
        defenseGroup,
        选题质量,
        研究水平与实际能力,
        论文撰写质量,
        学术水平与创新,
        答辩,
        studentId,
        name,
        scoreUpdatedBy,
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
  const {
    课题名称,
    学年,
    email,
    phone,
    college,
    profession,
    year,
    instructorId,
    instructorName,
    judgeName,
    judgeTitle,
    defenseGroup,
    选题质量,
    研究水平与实际能力,
    论文撰写质量,
    学术水平与创新,
    答辩,
    studentId,
    name,
    _id,
    scoreUpdatedBy,
  } = req.body;

  if (!(studentId.length > 0) || !(name.length > 0)) {
    return res.json({ message: "studentId and name must be required" });
  }

  try {
    const editStudent = Student.findByIdAndUpdate(_id, {
      课题名称: 课题名称,
      学年: 学年,
      email,
      phone,
      college,
      profession,
      year,
      instructorId,
      instructorName,
      judgeName,
      judgeTitle,
      defenseGroup,
      选题质量: 选题质量,
      研究水平与实际能力: 研究水平与实际能力,
      论文撰写质量: 论文撰写质量,
      学术水平与创新: 学术水平与创新,
      答辩: 答辩,
      studentId,
      name,
      scoreUpdatedBy,
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
