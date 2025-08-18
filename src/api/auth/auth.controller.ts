import { NextFunction, Request, Response } from "express";
import { StudentAuthStrategy } from "../../paterns/strategy/studentAuth.strategy";
import UserModel from "../../models/user.model";
import StudentModel from "../../models/student.model";
import { UserRole } from "../../models/enums";

export const studentSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    // @ts-ignore
    const user = req.user;
    const { firebaseId, email } = user;

    const dbUser = await StudentModel.find({ firebaseId: firebaseId });

    if (!dbUser) {
      return res.status(200).json({
        success: true,
        message: "User already exists",
        isFirstSignin: true,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User already exists",
        isFirstSignin: false,
      });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const studentSignin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
  } catch (error) {}
};
