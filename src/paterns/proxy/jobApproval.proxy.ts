// src/patterns/proxy/jobApproval.proxy.ts
import { JobApprover } from "./jobApprover";
import { IUser } from "../../models/user.model"; // Assuming you create a user.model.ts
import { UserRole } from "../../models/enums";

// This is the Proxy that controls access.
export class JobApprovalProxy {
  private realApprover: JobApprover;
  constructor() {
    this.realApprover = new JobApprover();
  }

  async approve(jobId: string, user: IUser) {
    // SECURITY CHECK: The proxy's main job.
    if (user.role !== UserRole.FACULTY) {
      throw new Error("Unauthorized: Only Faculty can approve jobs.");
    }
    // If authorized, delegate to the real object.
    return this.realApprover.approve(jobId, user._id as string);
  }
}
