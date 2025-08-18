import { Request, Response, NextFunction } from "express";
import admin from "../config/firebase";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify the token;
    const decoded = await admin.auth().verifyIdToken(token);
    //@ts-ignore
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};
