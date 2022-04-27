const { Note } = require("../../models/index");
import { Request, Response } from "express";

const removeNoteByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleteNote = await Note.findByIdAndRemove(id);

  if (deleteNote) {
    res.json({
      status: "success",
      code: 200,
      data: {
        result: deleteNote,
      },
    });
  }
  if (!deleteNote) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Note with id=${id} not found`,
    });
  }
};

module.exports = removeNoteByIdController;
export {}