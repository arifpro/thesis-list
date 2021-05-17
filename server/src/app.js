import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";

const app = express();
config();

// database connection
import database from "./configs/db.js";
database();

// import routers
import judgeRoutes from "./routes/judgeRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
// import studentRoutes from "./routes/studentRoutes.js";

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/judge", judgeRoutes);
app.use("/api/teacher", teacherRoutes);
// app.use("/api/student", studentRoutes);

// Run Server
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
