const express = require("express");
const notesRouter = express.Router();
const NoteController = require("../Controllers/NotesController");
const validate = require("../middlewares/validationMiddleware");
const NotesValidation = require("../Validation/NotesValidation");
const UserAuthMiddleware = require("../middlewares/userAuthMiddleware");

// to add a new note
notesRouter
  .route("/notes")
  .post(validate(NotesValidation), UserAuthMiddleware, NoteController.AddNote);
// to fetch all notes of a particular id
notesRouter
  .route("/getNotes")
  .get(UserAuthMiddleware, NoteController.FetchNote);
// to delete a note
notesRouter
  .route("/getNotes/delete/:id")
  .delete(UserAuthMiddleware, NoteController.DeleteNote);
// to get a single note
notesRouter
  .route("/getNotes/:id")
  .get(UserAuthMiddleware, NoteController.getSingleNote);
// to update a note
notesRouter
  .route("/getNotes/edit/:id")
  .patch(UserAuthMiddleware, NoteController.editNote);

module.exports = notesRouter;
