import { Router } from "express";

import { studentSignup } from "./auth.controller";
import { verifyToken } from "../../middleware/verifyToken";

const authRouter = Router();

authRouter.post("/student_signup", verifyToken, studentSignup);

export default authRouter;
