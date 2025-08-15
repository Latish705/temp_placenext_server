import express from "express";
import cors from "cors";
import studentRouter from "./student/routes/studentRoutes";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/student", studentRouter);

export default app;
