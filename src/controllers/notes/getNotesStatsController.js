const { Note } = require("../../models/index");

const getNotesStatsController = async (req, res, next) => {
  const notes = await Note.find();

  const amountNotes = (category, status) => {
    return notes
      .filter(item => item.category === category && item.status === status)
      .map(item => item.category).length;
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
