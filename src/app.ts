import express from "express";
import cors from "cors";
import authRouter from "./api/auth/auth.routes";
import organisationRouter from "./api/organisation/organisation.routes";
import jobRouter from "./api/job/job.routes";
import applicationRouter from "./api/application/application.routes";
import { mockAuth } from "./middleware/mockAuth"; // dev helper

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DEV: attach mock user if "x-mock-user" header is present
if (process.env.NODE_ENV !== "production") {
  app.use(mockAuth);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRouter);
app.use("/api/organisation", organisationRouter);
app.use("/api/jobs", jobRouter);
app.use("/api/applications", applicationRouter);

export default app;
