import express from "express";
const router = express.Router();
import { getAllTeachers, addTeacher, updateTeacher, deleteTeacher } from "../controllers/teacherControllers.js";

router.get("/get-all", getAllTeachers);
router.post("/add", addTeacher);
router.post("/update", updateTeacher);
router.post("/delete", deleteTeacher);

export default router;
