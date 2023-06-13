import React, { useState, useEffect, useContext } from 'react'
import styles from './FullNote.module.css'

function FullNote({ data, onUpdatedNote, onSaveSuccess }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedNote, setEditedNote] = useState({ ...data })

  useEffect(() => {
    setEditedNote({ ...data })
  }, [data])

  const handleSaveNote = () => {
    setIsEditing(false)

    if (data._id) {
      // Update existing note
      fetch(`http://localhost:5000/api/v1/notes/${data._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedNote),
      })
        .then((response) => {
          if (response.ok) {
            // Note updated successfully, update the state in the parent component
            onUpdatedNote(data._id, editedNote)
            console.log('Note updated successfully')
            onSaveSuccess()
          } else {
            console.error('Error updating note:', response.statusText)
            // Handle the error case if needed
          }
        })
        .catch((error) => {
          console.error('Error updating note:', error)
          // Handle the error case if needed
        })
    } else {
      // Create new note
      fetch('http://localhost:5000/api/v1/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedNote),
      })
        .then((response) => {
          if (response.ok) {
            // Note created successfully, handle the response
            return response.json()
          } else {
            console.error('Error creating note:', response.statusText)
            // Handle the error case if needed
          }
        })
        .then((createdNote) => {
          // Handle the created note data
          console.log('Note created successfully:', createdNote)
          onSaveSuccess()
        })
        .catch((error) => {
          console.error('Error creating note:', error)
          // Handle the error case if needed
        })
    }
  }

  return (
    <div className={`flex flex-col p-4 bg-white ${isEditing ? styles.editMode : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedNote.title}
          onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}
          className="text-2xl font-bold mb-4"
        />
      ) : (
        <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      )}
      <p className="text-gray-500 text-xs mb-2">
        {data.createdAt} - {data.label}
      </p>
      {isEditing ? (
        <textarea
          value={editedNote.content}
          onChange={(e) => setEditedNote({ ...editedNote, content: e.target.value })}
          className="flex-1 bg-transparent outline-none"
        />
      ) : (
        <p className="flex-1 bg-transparent outline-none">{data.content}</p>
      )}
      <div className="flex justify-end">
        {isEditing ? (
          <button onClick={handleSaveNote} className="mr-2">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  )
}

export default FullNote
