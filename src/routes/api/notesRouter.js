const express = require("express");

const { validationMiddleware } = require("../../middlewares/index");

const {
  getNotesController,
  getNotesStatsController,
  getNoteByIdController,
  addNoteController,
  removeNoteByIdController,
  patchNoteController,
} = require("../../controllers/notes/index");

const { postJoiSchema, patchJoiSchema } = require("../../models/note");

const router = express.Router();

router.get("/", getNotesController);

router.get("/stats", getNotesStatsController);

router.get("/:id", getNoteByIdController);

router.post("/", validationMiddleware(postJoiSchema), addNoteController);

router.delete("/:id", removeNoteByIdController);

router.patch("/:id", validationMiddleware(patchJoiSchema), patchNoteController);

module.exports = router;
