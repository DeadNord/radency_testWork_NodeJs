import {Request,Response,Application, NextFunction} from "express";

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const { notesRouter } = require("./src/routes/api/index");
const app: Application = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Not found" });
  next();
});

app.use((err:any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
  next();
});

module.exports = app;
