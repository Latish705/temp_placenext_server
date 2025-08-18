import { Router } from "express";
import { createJob, approveJob } from "./job.controller";
// Import your auth middleware if needed
// import { authMiddleware } from "../../middleware/auth";

const jobRouter = Router();

// Add a route for creating jobs
jobRouter.post("/", createJob);

// Add a route for approving jobs
jobRouter.put("/:jobId/approve", approveJob);

export default jobRouter;
