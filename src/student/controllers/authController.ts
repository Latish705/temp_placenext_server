import { Request, Response } from "express";
import { Student } from "../model/Student";
import dbStudent from "../model/dbStudent";

export const signin = async (req: Request, res: Response): Promise<any> => {
  try {
    //@ts-ignore
    const user = req.user;
    //@ts-ignore
    const student: Student = await dbStudent.findOne({
      firebaseId: user.firebaseId,
    });

    student.signin();

    return res.status(200).json({
      succes: false,
      message: "Sigin is successful ",
    });
  } catch (error: any) {
    console.log("Error in signin: ", error.message);
    res.status(500).send("Internal Server Error");
  }
};
