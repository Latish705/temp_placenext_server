import { Router } from "express";

import {
  studentRegistration,
  studentSignin,
  studentSignup,
} from "./auth.controller";
import { verifyToken } from "../../middleware/verifyToken";
import { upload } from "../../config/mutler";

const authRouter = Router();

authRouter.post("/student_signup", verifyToken, studentSignup);

authRouter.post("/student_signin", verifyToken, studentSignin);

authRouter.post(
  "/student_registration",
  verifyToken,
  upload.fields([
    { name: "sem1_marksheet", maxCount: 1 },
    { name: "sem2_marksheet", maxCount: 1 },
    { name: "sem3_marksheet", maxCount: 1 },
    { name: "sem4_marksheet", maxCount: 1 },
    { name: "sem5_marksheet", maxCount: 1 },
    { name: "sem6_marksheet", maxCount: 1 },
    { name: "sem7_marksheet", maxCount: 1 },
    { name: "sem8_marksheet", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  studentRegistration
);

export default authRouter;
