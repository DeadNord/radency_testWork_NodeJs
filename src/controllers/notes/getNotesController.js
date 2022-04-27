const { Note } = require("../../models/index");

const getNotesController = async (req, res, next) => {
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
