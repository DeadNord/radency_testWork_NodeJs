const { Note } = require("../../models/index");
import { Request, Response } from "express";

const getNotesController = async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.json({
    status: "success",
    code: 200,
    data: {
      notes,
    },
  });
};

module.exports = getNotesController;

export {}