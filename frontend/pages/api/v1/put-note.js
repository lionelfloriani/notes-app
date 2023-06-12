import cors from 'cors'
import Note from '../../../models/note'
const formatDate = require('../utils/date.formatter')

import { v4 as uuidv4 } from 'uuid'

export default function handler(req, res) {
  // Enable CORS for this route
  cors()(req, res, async () => {
    try {
      // Get the note data from the request body
      const { title, content, label } = req.body

      // Create a new instance of the Note model with the provided data and generated ID
      const newNote = new Note({
        _id: uuidv4(),
        title,
        content,
        label,
        createdAt: formateDate(new Date()),
      })

      // Save the new note to the database
      await newNote.save()

      // Send a success response
      res.status(201).json(newNote)
    } catch (error) {
      console.error('Error saving note:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })
}
