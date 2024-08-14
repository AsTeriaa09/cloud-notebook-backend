const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  tags: {
    type: "string",
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Notes = new mongoose.model("Notes", NoteSchema);
module.exports = Notes;
