const noteController = require('../controllers/note.controller')

async function routes(fastify, options) {
  fastify.get('/', noteController.getAllNotes)
  fastify.get('/label/:param', noteController.getNoteByLabel)
  fastify.get('/:param', noteController.getNoteById)
  fastify.post('/', noteController.createNote)
  fastify.put('/:param', noteController.updateNote)
  fastify.delete('/:param', noteController.deleteNote)
}

module.exports = routes
