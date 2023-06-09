import axios from 'axios'
import cors from 'cors'

export default function handler(req, res) {
  // Enable CORS for this route
  cors(corsOptions)(req, res, async () => {
    try {
      // Fetch data from your API or desired source
      const response = await axios.get('http://localhost:5000/api/v1/notes')

      // Extract the required data from the API response
      const { title, createdAt, content } = response.data

      // Send the extracted data as a response
      res.status(200).json({ title, createdAt, content })
    } catch (error) {
      console.error('Error fetching data:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })
}
