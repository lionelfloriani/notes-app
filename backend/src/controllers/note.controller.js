const Note = require('../models/note.model')
const formateDate = require('../utils/date.formatter')

async function getAllNotes(req, rep) {
  try {
    const notes = await Note.find()
    rep.send(notes)
  } catch (error) {
    rep.status(500).send(error)
  }
}

async function getNoteByLabel(req, rep) {
  try {
    const notes = await Note.find({ label: req.params.param })
    rep.send(notes)
  } catch (error) {
    rep.status(500).send(error)
  }
}

async function getNoteById(req, rep) {
  try {
    const notes = await Note.findById(req.params.param)
    rep.send(notes)
  } catch (error) {
    rep.status(500).send(error)
  }
}

async function createNote(req, rep) {
  try {
    const notes = new Note(req.body)
    const result = await notes.save()
    rep.send(result)
  } catch (error) {
    rep.status(500).send(error)
  }
}

async function updateNote(req, rep) {
  try {
    const notes = await Note.findByIdAndUpdate(
      req.params.param,
      { ...req.body, createdAt: formateDate(new Date()) },
      {
        new: true,
      }
    )
    rep.send(notes)
  } catch (error) {
    rep.status(500).send(error)
  }
}

async function deleteNote(req, rep) {
  try {
    await Note.findByIdAndDelete(req.params.param)
    rep.status(204).send('')
  } catch (error) {
    rep.status(500).send(error)
  }
}

module.exports = {
  getAllNotes,
  getNoteByLabel,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
}
