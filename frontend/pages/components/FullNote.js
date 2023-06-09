import React from 'react'

function FullNote({ data, createdAt, isEditing, editedNote, onEdit, onSave }) {
  const handleSaveNote = () => {
    onSave(editedNote)
  }

  return (
    <div className="flex flex-col p-4 bg-white">
      {isEditing ? (
        <input
          type="text"
          value={editedNote.title}
          onChange={(e) => onEdit({ ...editedNote, title: e.target.value })}
          className="text-2xl font-bold mb-4"
        />
      ) : (
        <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      )}
      <p className="text-gray-500 text-xs mb-2">{createdAt}</p>
      {isEditing ? (
        <textarea
          value={editedNote.content}
          onChange={(e) => onEdit({ ...editedNote, content: e.target.value })}
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
          <button onClick={() => onEdit(data)}>Edit</button>
        )}
      </div>
    </div>
  )
}

export default FullNote
