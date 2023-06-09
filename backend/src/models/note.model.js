const mongoose = require('mongoose')
const formateDate = require('../utils/date.formatter')

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
    enum: ['work', 'personal', 'others'],
    default: 'others',
  },
  createdAt: {
    type: String,
    default: function () {
      return formateDate(new Date())
    },
  },
})

const Note = mongoose.model('Note', NoteSchema, 'notes') // 'notes' is the name of the collection in MongoDB

module.exports = Note
