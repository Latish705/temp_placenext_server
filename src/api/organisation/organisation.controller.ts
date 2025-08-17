import { Request, Response, NextFunction } from "express";

import { OrganisationFactory } from "../../paterns/factory/organisation.factory";

import CompanyModel from "../../models/company.model";

import { OrganisationType } from "../../models/enums";

export const createOrganisation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { type, ...orgData } = req.body;
    //@ts-ignore
    const userId = req.user.uid;

    if (!type || !Object.values(OrganisationType).includes(type)) {
      return res.status(400).json({ message: "Invalid organisation type" });
    }

    const factory = new OrganisationFactory(CompanyModel);
    const organisation = await factory.create(type, {
      ...orgData,
      createdBy: userId,
    });

    return res.status(201).json(organisation);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
