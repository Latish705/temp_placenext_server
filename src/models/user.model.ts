import mongoose, { Schema, Document, model, Model } from "mongoose";
import { UserRole } from "./enums";

export interface IUser extends Document {
  firebaseId: string;
  email: string;
  role: UserRole;
}

const userSchema = new Schema<IUser>(
  {
    firebaseId: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), required: true },
  },
  {
    timestamps: true,
    discriminatorKey: "role",
  }
);

const UserModel: Model<IUser> = model<IUser>("User", userSchema);

export default UserModel;
