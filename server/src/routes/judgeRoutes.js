import express from "express";
const router = express.Router();
import { login, signup } from "../controllers/judgeControllers.js";

router.post("/login", login);
router.post("/signup", signup);

export default router;
