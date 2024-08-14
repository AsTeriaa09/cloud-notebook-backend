const Notes = require("../models/Notes");

// to add a new note
const AddNote = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    userId = req.userId;
    const notes = await Notes.create({
      title,
      description,
      tags,
      user: userId,
    });

    res.status(200).json({ notes });
  } catch (error) {
    res.status(500).json({ msg: "Failed to add note Note" });
  }
};

// to fetch notes of the logged in user
const FetchNote = async (req, res) => {
  try {
    userId = req.userId;
    // console.log(userId)
    const GetNotes = await Notes.find({ user: userId });
    //console.log(GetNotes);
    if (!GetNotes || GetNotes.length === 0) {
      return res.status(404).json({ msg: "No Notes Found" });
    }
    res.status(200).json({ GetNotes });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching notes" });
  }
};

// to delete a note
const DeleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteNote = await Notes.deleteOne({ _id: id });
    return res.status(200).json({ msg: "note deleted successfully!" });
  } catch (error) {
    res.status(500).json({ msg: "error deleting note  !" });
  }
};

// to get a single note
const getSingleNote = async (req, res) => {
  try {
    const id = req.params.id;
    const singleNote = await Notes.findOne({ _id: id });
    return res.status(200).json(singleNote);
  } catch (error) {
    return res.status(500).json({ msg: "error getting single note" });
  }
};

// to edit a note
const editNote = async (req, res) => {
  try {
    const id = req.params.id;
    const Edited = req.body;
    //console.log(req.body)
    // const { title, description, tags } = req.body;
    // const Edited = {};
    // if (title) {
    //   Edited.title = title;
    // }
    // if (description) {
    //   Edited.description = description;
    // }
    // if (tags) {
    //   Edited.tags = tags;
    // }
    //console.log(Edited);
    const updateNote = await Notes.updateOne({ _id: id }, { $set: Edited });
    //console.log("updated data", updateNote);
    res.status(200).json({updateNote});
  } catch (error) {
    return res.status(500).json({ msg: "error updating note" });
  }
};

module.exports = { AddNote, FetchNote, DeleteNote, getSingleNote, editNote };
