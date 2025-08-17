// src/patterns/proxy/jobApprover.ts (Updated)
import JobModel, { IJob } from "../../models/job.model";
import { JobStatus } from "../../models/enums";
import AppEventEmitter from "../../events/event.emitter"; // Import emitter

export class JobApprover {
  async approve(jobId: string, approverId: string): Promise<IJob> {
    const job = await JobModel.findByIdAndUpdate(jobId, {
      status: JobStatus.APPROVED,
      approvedBy: approverId,
    }); // same as before
    if (!job) throw new Error("Job not found.");

    // EMIT THE EVENT: Fire and forget.
    AppEventEmitter.emit("job.approved", job);

    console.log(`CORE: Job ${jobId} approved. Event emitted.`);
    return job;
  }
}
