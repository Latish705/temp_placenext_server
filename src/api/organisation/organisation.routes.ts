import { Router } from "express";
import { createOrganisation } from "./organisation.controller";

const organisationRouter = Router();

organisationRouter.post("/create", createOrganisation);

export default organisationRouter;
