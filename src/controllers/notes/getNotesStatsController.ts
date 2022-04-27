const { Note } = require("../../models/index");
import { Request, Response } from "express";

const getNotesStatsController = async (req: Request, res: Response) => {
  const notes = await Note.find();

  const amountNotes = (category: string, status: boolean) => {
    return notes
      .filter((item: any) => item.category === category && item.status === status)
      .map((item: any )=> item.category).length;
  };

  const result = [
    {
      category: "Task",
      active: amountNotes("Task", true),
      archived: amountNotes("Task", false),
    },
    {
      category: "Thought",
      active: amountNotes("Thought", true),
      archived: amountNotes("Thought", false),
    },
    {
      category: "Idea",
      active: amountNotes("Idea", true),
      archived: amountNotes("Idea", false),
    },
  ];

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getNotesStatsController;
export {}