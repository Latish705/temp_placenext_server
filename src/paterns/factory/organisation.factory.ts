import { Model } from "mongoose";
import { IOranisation } from "../../models/organisation.model";
import CompanyModel, { ICompany } from "../../models/company.model";

import { OrganisationType } from "../../models/enums";

export class OrganisationFactory {
  constructor(private companyModel: Model<ICompany>) {}

  async create(
    type: OrganisationType,
    params: Partial<IOranisation>
  ): Promise<IOranisation> {
    switch (type) {
      case OrganisationType.COMPANY:
        return this.companyModel.create(params);
      default:
        throw new Error("Invalid organisation type");
    }
  }
}
