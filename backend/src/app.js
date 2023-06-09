const fastify = require('fastify')({ logger: true })
const fastifyCors = require('@fastify/cors')
const mongoose = require('mongoose')
require('dotenv').config()

// import routes
const NoteRoutes = require('./routes/note.routes')
// connect to db
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((error) => console.log(error))

// cors
fastify.register(fastifyCors, {
  origin: 'http://localhost:3000', // Replace with your frontend URL
})

// start server
fastify.register(NoteRoutes, { prefix: '/api/v1/notes' })

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000)
    fastify.log.info(`Server is running on port ${fastify.server.address().port}`)
  } catch (error) {}
}

start()
