// src/models/college.model.ts
import mongoose, { Schema, Model } from "mongoose";
import OrganisationModel, { IOrganisation } from "./organisation.model";

export interface ICollege extends IOrganisation {
  affiliatedTo: string;
}

const CollegeSchema = new Schema<ICollege>({
  affiliatedTo: { type: String, required: true },
});

const CollegeModel: Model<ICollege> = OrganisationModel.discriminator<ICollege>(
  "COLLEGE",
  CollegeSchema
);
export default CollegeModel;
