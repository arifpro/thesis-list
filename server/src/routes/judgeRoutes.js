import express from "express";
const router = express.Router();
import { login, signup, changePassword } from "../controllers/judgeControllers.js";

router.post("/login", login);
router.post("/signup", signup);
router.post("/change-password", changePassword);

export default router;
