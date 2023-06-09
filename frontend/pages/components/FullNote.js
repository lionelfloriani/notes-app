import React, { useState, useEffect } from 'react'

function FullNote({ data, createdAt, onUpdatedNote }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedNote, setEditedNote] = useState({})

  useEffect(() => {
    setEditedNote({ ...data })
  }, [data])

  const handleSaveNote = () => {
    setIsEditing(false)
    // Make an API call to update the note
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
        } else {
          console.error('Error updating note:', response.statusText)
          // Handle the error case if needed
        }
      })
      .catch((error) => {
        console.error('Error updating note:', error)
        // Handle the error case if needed
      })
  }

  return (
    <div className="flex flex-col p-4 bg-white">
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
      <p className="text-gray-500 text-xs mb-2">{data.createdAt}</p>
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
