import { NextFunction, Request, Response } from "express";
import ApplicationModel from "../../models/application.model";
import AppEventEmitter from "../../events/event.emitter";

export const updateApplicationRound = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { applicationId } = req.params;
    const { newStatus, nextRound } = req.body; // e.g., newStatus: "ROUND_CLEARED", nextRound: 2

    // Find and update the application in one atomic operation
    const updatedApplication = await ApplicationModel.findByIdAndUpdate(
      applicationId,
      { status: newStatus, currentRound: nextRound },
      { new: true } // This option returns the updated document
    ).populate("studentId jobId"); // Populate related data for the notification

    if (!updatedApplication) {
      return res.status(404).json({ message: "Application not found." });
    }

    // EMIT THE EVENT: Notify the system that a student's status has changed.
    AppEventEmitter.emit("student.application.updated", updatedApplication);

    res.status(200).json({ success: true, data: updatedApplication });
  } catch (error) {
    next(error); // Pass errors to your central error handler
  }
};

// NEW - create application (dev/test)
export const createApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { jobId, studentId, companyId } = req.body;
    const application = await ApplicationModel.create({
      jobId,
      studentId,
      companyId,
      status: undefined, // default will apply
    });
    return res.status(201).json({ success: true, data: application });
  } catch (err) {
    next(err);
  }
};
