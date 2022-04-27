const { Note } = require("../../models/index");
import { Request, Response } from "express";

const patchNoteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const updateNote = await Note.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (updateNote) {
    res.json({
      status: "success",
      code: 200,
      data: {
        result: updateNote,
      },
    });
  }
  if (!updateNote) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Note with id=${id} not found`,
    });
  }
};

module.exports = patchNoteController;
export {}