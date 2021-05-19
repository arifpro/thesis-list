import Judge from "../models/Judge.js";
import { validationResult } from "express-validator";

// <==================== login ====================>
const login = async (req, res) => {
  const { jobId, password } = req.body;

  if (!(jobId.length > 0) || !(password.length > 0)) {
    return res.json({ message: "All fields must be required" });
  }

  try {
    Judge.findOne({
      jobId,
    }).exec((err, user) => {
      // check id if exist
      if (err || !user) {
        return res.status(400).json({
          error: "Judge with that id does not exist.",
        });
      }

      // authenticate with password
      if (!user.authenticate(password)) {
        return res.status(400).json({
          error: "Id and password do not match",
        });
      }

      return res.status(200).json({
        message: "Login success",
        judge: user,
      });
    });
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

// <==================== signup ====================>
const signup = (req, res) => {
  const { name, title, jobId, email, phone, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      error: firstError,
    });
  } else {
    Judge.findOne({
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

      const newJudge = new Judge({
        name,
        title,
        jobId,
        email,
        phone,
        password,
      });
      const save = newJudge.save();

      if (save) {
        return res.status(200).json({ message: "Registration successful" });
      }
    });
  }
};

// <==================== changePassword ====================>
const changePassword = async (req, res) => {
  const { _id, jobId, name, title, email, phone, password } = req.body;

  if (!(jobId.length > 0) || !(name.length > 0) || !(password.length > 0)) {
    return res.json({ message: "jobId, name and password must be required" });
  }

  try {
    const editJudge = Judge.findByIdAndUpdate(_id, {
      jobId,
      name,
      title,
      email,
      phone,
      password,
      updatedAt: Date.now(),
    });

    const edit = await editJudge.exec();

    if (edit) {
      return res.status(200).json({ success: "Judge updated successfully" });
    }
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

export { login, signup, changePassword };
