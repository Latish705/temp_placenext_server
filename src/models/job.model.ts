// src/models/job.model.ts
import mongoose, { Schema, Document, Model } from "mongoose";
import { JobStatus } from "./enums";

export interface IJob extends Document {
  title: string;
  description: string;
  status: JobStatus;
  companyId: Schema.Types.ObjectId;
  approvedBy?: Schema.Types.ObjectId;
}

const JobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(JobStatus),
      default: JobStatus.PENDING,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Organisation",
      required: true,
    },
    approvedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const JobModel: Model<IJob> = mongoose.model<IJob>("Job", JobSchema);
export default JobModel;
