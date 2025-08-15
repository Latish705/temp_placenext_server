import { Request, Response } from "express";
import { Student } from "../model/Student";
import dbStudent from "../model/dbStudent";

export const signin = async (req: Request, res: Response): Promise<any> => {
  try {
    //@ts-ignore
    const user = req.user;
    //@ts-ignore
    const dbstud = await dbStudent.findOne({
      firebaseId: user.firebaseId,
    });

    if (!dbstud) {
      return res
        .status(400)
        .json({ success: false, message: "register first" });
    }
    return res.status(200).json({
      succes: false,
      message: "Sigin is successful ",
    });
  } catch (error: any) {
    console.log("Error in signin: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const signup = async (req: Request, res: Response): Promise<any> => {
  try {
    // @ts-ignore
    const user = req.user;
    const dbStud = await dbStudent.findOne({ firebaseId: user.firebaseId });
    if (!dbStud) {
      return res.status(200).json({ success: true, isFirsLogin: false });
    }
    return res.status(200).json({ success: true, isFirsLogin: true });
  } catch (error: any) {
    console.log("Error in singup: ", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const applicationForm = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    // @ts-ignore
    const user = req.user;
    const bo = req.body;
  } catch (error: any) {
    console.log("Error in Application Form: ", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
