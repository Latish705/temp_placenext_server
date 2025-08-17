// src/patterns/factory/organisation.factory.ts
import CollegeModel, { ICollege } from "../../models/college.model";
import CompanyModel, { ICompany } from "../../models/company.model";
import { OrganisationType } from "../../models/enums";

export class OrganisationFactory {
  static async create(
    type: OrganisationType,
    params: any
  ): Promise<ICollege | ICompany> {
    switch (type) {
      case OrganisationType.COLLEGE:
        return CollegeModel.create(params);
      case OrganisationType.COMPANY:
        return CompanyModel.create(params);
      default:
        throw new Error(`Invalid organisation type: ${type}`);
    }
  }
}
