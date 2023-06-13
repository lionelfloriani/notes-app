import React, { useState, useEffect } from 'react'
import MainTitle from './components/MainTitle'
import ScrollableDiv from './components/ScrollableDiv'
import Sort from './components/Sort'
import 'tailwindcss/tailwind.css'
import FullNote from './components/FullNote'
import { formateDate } from './utils/date.formatter'

export const AppContext = React.createContext()

export default function App() {
  const [data, setData] = useState([])
  const [selectedNote, setSelectedNote] = useState(data[0] || null)
  const [createdAt, setCreatedAt] = useState('')
  const [refreshData, setRefreshData] = useState(false)
  const [filterOption, setFilterOption] = useState('date')

  const fetchData = () => {
    let apiUrl = 'http://localhost:5000/api/v1/notes'

    if (filterOption !== 'date') {
      apiUrl += `/label/${filterOption}`
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => compareCreatedAt(a.createdAt, b.createdAt))
        setData(sortedData)
        setRefreshData(false)
        console.log(filterOption)
        console.log('Filtered Data:', sortedData) // Add this line to log the filtered data
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  const parseCreatedAt = (createdAt) => {
    const [time, date] = createdAt.split(' - ')
    const [hours, minutes] = time.split(':')
    const [day, month, year] = date.split('/')
    // Assuming the year is represented with two digits, converting it to four digits by assuming the current century
    const fullYear = new Date().getFullYear().toString().substr(0, 2) + year
    return new Date(fullYear, month - 1, day, hours, minutes)
  }

  const compareCreatedAt = (createdAtA, createdAtB) => {
    const dateA = parseCreatedAt(createdAtA)
    const dateB = parseCreatedAt(createdAtB)
    return dateB.getTime() - dateA.getTime() // Sort in descending order
  }

  useEffect(() => {
    fetchData()
  }, [refreshData, filterOption])

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
    } else {
      setSelectedNote(null)
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
    setData((prevData) => prevData.map((note) => (note._id === id ? { ...note, ...updatedNote } : note)))
  }

  const handleSaveSuccess = () => {
    fetchData() // Fetch the updated data from the API
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-scree">
      <AppContext.Provider value={{ data, setData }}>
        <div className="flex">
          <div className="w-1/4 h-screen border-r-2 border-gray-300 bg-slate-50 flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <MainTitle title="NOTES"></MainTitle>
              <div className="flex items-center">
                <span className="mr-2 text-gray-500">Filter:</span>
                <select
                  className="px-2 py-1 border border-gray-300 rounded"
                  value={filterOption}
                  onChange={(e) => setFilterOption(e.target.value)}>
                  <option value="date">Date</option>
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <ScrollableDiv data={data} handleNoteClick={handleNoteClick} handleDeleteNote={handleDeleteNote} />
            <Sort handleNewNoteClick={handleNewNoteClick} />
          </div>
          <div className="w-3/4 h-screen">
            {selectedNote && (
              <FullNote
                data={selectedNote}
                createdAt={createdAt}
                onUpdatedNote={handleUpdateNote}
                onSaveSuccess={handleSaveSuccess}
              />
            )}
          </div>
        </div>
      </AppContext.Provider>
    </div>
  )
}
