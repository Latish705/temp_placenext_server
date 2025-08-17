import express from "express";
import cors from "cors";
import authRouter from "./api/auth/auth.routes";
import organisationRouter from "./api/organisation/organisation.routes";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRouter);
app.use("/api/organisation", organisationRouter);

export default app;
