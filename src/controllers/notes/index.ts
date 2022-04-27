const getNotesController = require("./getNotesController");
const getNotesStatsController = require("./getNotesStatsController");
const getNoteByIdController = require("./getNoteByIdController");
const addNoteController = require("./addNoteController");
const removeNoteByIdController = require("./removeNoteByIdController");
const patchNoteController = require("./patchNoteController");

module.exports = {
  getNotesController,
  getNotesStatsController,
  getNoteByIdController,
  addNoteController,
  removeNoteByIdController,
  patchNoteController,
};
export {}