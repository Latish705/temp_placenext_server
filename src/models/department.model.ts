import mongoose, { Schema, model, Document } from "mongoose";
import { ICollege } from "./college.model";

export interface IDepartment extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
  collegeId: ICollege["_id"];
  headOfDepartment: Schema.Types.ObjectId;
}

const departmentSchema = new Schema<IDepartment>({
  name: { type: String, required: true },
  collegeId: { type: Schema.Types.ObjectId, ref: "College", required: true },
  headOfDepartment: { type: Schema.Types.ObjectId, ref: "User" },
});

const departmentModel = model("Department", departmentSchema);
export default departmentModel;
