const { Note } = require("../../models/index");
import {Request,Response} from "express";

const addNoteController = async (req: Request, res: Response) => {
  const { content } = req.body;

  console.log(content);

  const newNote = await Note.create({
    ...req.body,
    created: new Date().toLocaleDateString(),
    dates: content.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g),
    status: true,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newNote,
    },
  });
};

module.exports = addNoteController;
export {}