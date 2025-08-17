import mongoose, { Schema, Document, model } from "mongoose";
import UserModel from "./user.model";
import { CourseType } from "./enums";

export interface IStudent extends Document {
  fullName: string;
  phoneNumber: string;
  dob: Date;
  courseType: CourseType;
  year: number;
}

const studentSchema = new Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dob: { type: Date, required: true },
  courseType: { type: String, enum: Object.values(CourseType), required: true },
  year: { type: Number, required: true },
});

const StudentModel = UserModel.discriminator<IStudent>(
  "Student",
  studentSchema
);

export default StudentModel;
