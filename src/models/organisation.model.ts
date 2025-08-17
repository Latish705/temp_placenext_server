import mongoose, { model, Schema } from "mongoose";

import { OrganisationType } from "./enums";

export interface IOrganisation extends Document {
  name: string;
  type: OrganisationType;
  website: string;
  isVerified: boolean;
  createdBy: Schema.Types.ObjectId;
}

const organisationSchema = new Schema<IOrganisation>({
  name: { type: String, required: true },
  type: { type: String, enum: Object.values(OrganisationType), required: true },
  website: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const OrganisationModel = model<IOrganisation>(
  "Organisation",
  organisationSchema
);

export default OrganisationModel;
