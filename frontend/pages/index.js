import { useState, useEffect } from 'react'
import MainTitle from './components/MainTitle'
import ScrollableDiv from './components/ScrollableDiv'
import Sort from './components/Sort'
import 'tailwindcss/tailwind.css'
import FullNote from './components/FullNote'
import { formateDate } from './utils/date.formatter'

export default function App() {
  const [data, setData] = useState([])
  const [selectedNote, setSelectedNote] = useState(data[0] || null)
  const [createdAt, setCreatedAt] = useState('')

  const fetchData = () => {
    fetch('http://localhost:5000/api/v1/notes')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setData(data.reverse())
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleNoteClick = async (noteId) => {
    try {
      // Perform API call to retrieve the selected note based on its ID
      // For example:
      const response = await fetch(`http://localhost:5000/api/v1/notes/${noteId}`)
      const clickedNote = await response.json()
      // Update the selected note in the state to display it on the right side
      setSelectedNote(clickedNote)
    } catch (error) {
      console.error('Error retrieving selected note:', error)
    }
  }

  const handleNewNoteClick = (newNote) => {
    const timestamp = formateDate(new Date())
    setSelectedNote(newNote)
    setCreatedAt(timestamp)
  }

  useEffect(() => {
    if (data.length > 0) {
      setSelectedNote(data[0])
    }
  }, [data])

  const handleDeleteNote = (noteId) => {
    // Make an API call to delete the note
    fetch(`http://localhost:5000/api/v1/notes/${noteId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Note deleted successfully, update the state
          setData((prevData) => prevData.filter((note) => note._id !== noteId))

          // Update the selected note if the currently selected note is the one being deleted
          if (selectedNote && selectedNote._id === noteId) {
            setSelectedNote(data[0] || null)
          }

          console.log('Note deleted successfully')
        } else {
          console.error('Error deleting note:', response.statusText)
          // Handle the error case if needed
        }
      })
      .catch((error) => {
        console.error('Error deleting note:', error)
        // Handle the error case if needed
      })
  }

  const handleUpdateNote = (id, updatedNote) => {
    setData((prevNotes) => prevNotes.map((note) => (note.id === id ? updatedNote : note)))
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-scree">
      <div className="flex">
        <div className="w-1/4 h-screen border-r-2 border-gray-300 bg-slate-50 flex flex-col">
          <MainTitle title="NOTES"></MainTitle>
          <ScrollableDiv data={data} handleNoteClick={handleNoteClick} handleDeleteNote={handleDeleteNote} />
          <Sort handleNewNoteClick={handleNewNoteClick}></Sort>
        </div>
        <div className="w-3/4 h-screen">
          {selectedNote && <FullNote data={selectedNote} createdAt={createdAt} onUpdatedNote={handleUpdateNote} />}
        </div>
      </div>
    </div>
  )
}
