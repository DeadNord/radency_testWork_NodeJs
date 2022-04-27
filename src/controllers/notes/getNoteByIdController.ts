const { Note } = require("../../models/index");
import { Request, Response } from "express";

const getNoteByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const note = await Note.findById(id);

  if (note) {
    res.json({
      status: "success",
      code: 200,
      data: {
        note,
      },
    });
  }
  if (!note) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Note with id=${id} not found`,
    });
  }
};

module.exports = getNoteByIdController;
export {}