const { Note } = require("../../models/index");

const removeNoteByIdController = async (req, res, next) => {
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
