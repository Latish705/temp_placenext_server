import OrganisationModel, { IOrganisation } from "./organisation.model";
import mongoose, { Schema, model, Document } from "mongoose";

export interface ICompany extends IOrganisation {
  industry: string;
  numberOfEmployees: number;
}

const companySchema = new Schema<ICompany>({
  industry: { type: String, required: true },
  numberOfEmployees: { type: Number, required: true },
});

const CompanyModel = OrganisationModel.discriminator<ICompany>(
  "Company",
  companySchema
);

export default CompanyModel;
