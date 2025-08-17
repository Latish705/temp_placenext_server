// src/api/job/job.controller.ts
import { Request, Response, NextFunction } from "express";
import { JobApprovalProxy } from "../../paterns/proxy/jobApproval.proxy";

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
