import { NextFunction, Request, Response } from "express";
import { StudentAuthStrategy } from "../../paterns/strategy/studentAuth.strategy";
import UserModel from "../../models/user.model";
import StudentModel from "../../models/student.model";
import { UserRole } from "../../models/enums";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { role } = req.body;
    //@ts-ignore
    const firebaseUser = req.user;

    const signupData = {
      ...req.body,
      firebaseId: firebaseUser.uid,
      email: firebaseUser.email,
    };

    if (role == UserRole.STUDENT) {
      const strategy = new StudentAuthStrategy(UserModel, StudentModel);
      const student = await strategy.signup(signupData);
      return res.status(201).json(student);
    } else {
      // Handle other roles if needed
      const user = await UserModel.create(signupData);
      return res.status(201).json(user);
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
