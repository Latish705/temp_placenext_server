// src/api/job/job.controller.ts
import { Request, Response, NextFunction } from "express";
import { JobApprovalProxy } from "../../paterns/proxy/jobApproval.proxy";
import JobModel from "../../models/job.model";
import AppEventEmitter from "../../events/event.emitter";

export const createJob = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobData = req.body;
    // @ts-ignore
    const user = req.user;

    // Assuming user.companyId is available or extracting from request
    const companyId = jobData.companyId || user.companyId;

    // Create the job
    const newJob = await JobModel.create({
      ...jobData,
      companyId,
      // Set initial status to PENDING by default (from your enums)
    });

    // Emit the job.created event
    AppEventEmitter.emit("job.created", newJob);

    console.log(`CORE: New job "${newJob.title}" created. Event emitted.`);

    res.status(201).json({ success: true, data: newJob });
  } catch (error) {
    next(error);
  }
};

export const approveJob = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { jobId } = req.params;
    // @ts-ignore
    const user = req.user;

    // The controller only knows about the Proxy.
    const approvalService = new JobApprovalProxy();
    const approvedJob = await approvalService.approve(jobId, user);

    res.status(200).json({ success: true, data: approvedJob });
  } catch (error) {
    next(error);
  }
};
