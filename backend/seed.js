const faker = require('faker')
const mongoose = require('mongoose')
const Note = require('./src/models/note.model')
require('dotenv').config()

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')

    // Generate and save fake data
    for (let i = 0; i < 25; i++) {
      const fakeData = {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        label: faker.random.arrayElement(['work', 'personal', 'others']),
      }

      // Create a new document using your Mongoose model
      const document = new Note(fakeData)

      // Save the document to the database
      document
        .save()
        .then(() => {
          console.log('Document saved:', document)
        })
        .catch((err) => {
          console.error('Error saving document:', err)
        })
    }
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err)
    process.exit(1)
  })
