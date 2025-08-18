// src/services/notification.service.ts
import AppEventEmitter from "../events/event.emitter";
import { IJob } from "../models/job.model";
import { IApplication } from "../models/application.model";

import { UserRole } from "../models/enums";
import UserModel from "../models/user.model";
import StudentModel from "../models/student.model";

export class NotificationService {
  constructor() {
    this.listenForJobCreation();
    this.listenForJobApprovals();
    this.listenForApplicationUpdates();
  }

  private listenForJobCreation() {
    // Subscribe to 'job.created' event
    AppEventEmitter.on("job.created", async (job: IJob) => {
      console.log(`--- OBSERVER PATTERN ---`);
      console.log(`EVENT DETECTED: New job "${job.title}" has been created.`);
      console.log(`ACTION: Notifying faculty members for approval...`);

      try {
        // Find all faculty members from the same college
        const facultyMembers = await UserModel.find({
          role: UserRole.FACULTY,
          // You might need to add a collegeId field to user model for this query
          // collegeId: job.collegeId
        });

        // In a real app, you would send emails or push notifications here
        facultyMembers.forEach((faculty) => {
          console.log(
            `Notifying faculty: ${faculty.email} about new job: ${job.title}`
          );
          // sendEmail(faculty.email, `New Job Requires Approval: ${job.title}`, emailTemplate);
          // or sendPushNotification(faculty.firebaseId, notificationPayload);
        });

        console.log(`Notified ${facultyMembers.length} faculty members`);
      } catch (error) {
        console.error("Error notifying faculty:", error);
      }

      console.log(`----------------------`);
    });
  }

  private listenForJobApprovals() {
    // Subscribe to the 'job.approved' event.
    AppEventEmitter.on("job.approved", async (job: IJob) => {
      console.log(`--- OBSERVER PATTERN ---`);
      console.log(`EVENT DETECTED: Job "${job.title}" has been approved.`);
      console.log(`ACTION: Sending notifications to eligible students...`);

      try {
        // Find all students (in a real app, you might filter by relevant criteria)
        const students = await UserModel.find({});

        // In a real app, you would send emails or push notifications here
        students.forEach((student) => {
          console.log(
            `Notifying student: ${student.email} about new job opportunity: ${job.title}`
          );
          // sendEmail(student.email, `New Job Opportunity: ${job.title}`, emailTemplate);
          // or sendPushNotification(student.firebaseId, notificationPayload);
        });

        console.log(
          `Notified ${students.length} students about the approved job`
        );
      } catch (error) {
        console.error("Error notifying students:", error);
      }

      console.log(`----------------------`);
    });
  }

  private listenForApplicationUpdates() {
    // Subscribe to the 'student.application.updated' event
    AppEventEmitter.on(
      "student.application.updated",
      async (application: IApplication) => {
        console.log(`--- OBSERVER PATTERN ---`);
        console.log(
          `EVENT DETECTED: Application status changed to ${application.status}`
        );
        console.log(`ACTION: Notifying student about round progression...`);

        try {
          // The application should have the studentId populated
          const studentId = application.studentId;
          const jobId = application.jobId;

          // In a real implementation, you would retrieve the full student and job details if needed
          console.log(
            `Notifying student ${studentId} about progress to round ${application.currentRound}`
          );

          // Here you would send the actual notification
          // sendEmail(student.email, `Congratulations! You've advanced to round ${application.currentRound}`, emailTemplate);
          // or sendPushNotification(student.firebaseId, notificationPayload);

          console.log(`Student notification sent successfully`);
        } catch (error) {
          console.error(
            "Error notifying student about application update:",
            error
          );
        }

        console.log(`----------------------`);
      }
    );
  }
}
