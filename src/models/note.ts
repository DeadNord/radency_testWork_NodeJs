const { Schema, model } = require("mongoose");
const Joi = require("joi");

const noteSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for note"],
      unique: true,
    },
    category: {
      type: String,
      enum: ["Task", "Thought", "Idea"],
      required: [true, "Selecting category for note"],
    },
    content: {
      type: String,
      required: [true, "Enter content for note"],
    },
    dates: {
      type: Array,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const postJoiSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  category: Joi.string().valid("Task", "Thought", "Idea").required(),
  content: Joi.string().min(3).max(100).required(),
});

const patchJoiSchema = Joi.object({
  title: Joi.string().min(3).max(30),
  category: Joi.string().valid("Task", "Thought", "Idea"),
  content: Joi.string().min(3).max(100),
  status: Joi.bool(),
});

const Note = model("note", noteSchema);

module.exports = { Note, postJoiSchema, patchJoiSchema };

export {}
