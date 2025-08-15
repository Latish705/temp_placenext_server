import mongoose, { Schema, Model, Document, model } from "mongoose";

import { CourseType } from "../../college/models/CourseType";
import { User } from "../../model/User";

export interface IStudent {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  address: string;
  dob: Date;
  courseType: string;
  year: number;
  isSystemVerified: boolean;
  isAdminVerified: boolean;
  admission_year: Date;
  sem1_grade: number;
  sem2_grade: number;
  sem3_grade: number;
  sem4_grade: number;
  sem5_grade: number;
  sem6_grade: number;
  sem7_grade: number;
  sem8_grade: number;
  cet: number;
  jee: number;
  diploma: number;
  hsc: number;
  ssc: number;
  hsc_board_name: string;
  ssc_board_name: string;
  diploma_board_name: string;
  adhar_number: number;
  pan: number;
  photo_with_signature: string;
  gap_certificate: string;
  handicap_certificate: string;
}

const studentSchema = new Schema<IStudent>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: Date, required: true },

  courseType: {
    type: String,
    required: true,
    enum: Object.values(CourseType),
  },
  year: { type: Number, required: true },

  isSystemVerified: { type: Boolean, required: true },
  isAdminVerified: { type: Boolean, required: true },
  admission_year: { type: Date, required: true },
});

const dbStudent = model("Student", studentSchema);

export default dbStudent;
