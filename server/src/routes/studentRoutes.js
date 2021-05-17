import express from "express";
const router = express.Router();
import { getAllStudents, addStudent, updateStudent, deleteStudent } from "../controllers/studentControllers.js";

router.get("/get-all", getAllStudents);
router.post("/add", addStudent);
router.post("/update", updateStudent);
router.post("/delete", deleteStudent);

export default router;
