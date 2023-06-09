import cors from 'cors'
import Note from '../../../models/note'

export default function handler(req, res) {
  // Enable CORS for this route
  cors()(req, res, async () => {
    try {
      // Get the note ID from the request parameters
      const noteId = req.params.param

      // Delete the note using the Note model
      await Note.findByIdAndDelete(noteId)

      // Send a success response
      res.status(204).send()
    } catch (error) {
      console.error('Error deleting note:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })
}
