import { Router } from "express";
import {
  updateApplicationRound,
  createApplication,
} from "./application.controller";

const applicationRouter = Router();

applicationRouter.post("/", createApplication); // NEW - create application
applicationRouter.put("/:applicationId/round", updateApplicationRound);

export default applicationRouter;
