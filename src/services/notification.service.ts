// src/services/notification.service.ts
import AppEventEmitter from "../events/event.emitter";
import { IJob } from "../models/job.model";

export class NotificationService {
  constructor() {
    this.listenForJobApprovals();
  }

  private listenForJobApprovals() {
    // Subscribe to the 'job.approved' event.
    AppEventEmitter.on("job.approved", (job: IJob) => {
      console.log(`--- OBSERVER PATTERN ---`);
      console.log(`EVENT DETECTED: Job "${job.title}" has been approved.`);
      console.log(`ACTION: Sending notifications to relevant students...`);
      // Add logic here to find students and send emails/push notifications.
      console.log(`----------------------`);
    });
  }
}
