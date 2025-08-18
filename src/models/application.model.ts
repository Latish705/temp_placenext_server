import mongoose, { Schema, Document, model } from "mongoose";
import { ApplicationStatus } from "./enums";

export interface IApplication extends Document {
  jobId: Schema.Types.ObjectId;
  studentId: Schema.Types.ObjectId;
  companyId: Schema.Types.ObjectId;
  status: ApplicationStatus;
  currentRound: number;
}

const applicationSchema = new Schema<IApplication>({
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
  studentId: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  status: {
    type: String,
    enum: Object.values(ApplicationStatus),
    default: ApplicationStatus.APPLIED,
  },
  currentRound: { type: Number, default: 1 },
});

const ApplicationModel = model<IApplication>("Application", applicationSchema);

export default ApplicationModel;
