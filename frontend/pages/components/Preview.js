import React from 'react'
import PropTypes from 'prop-types'
import styles from './Preview.module.css'
import { useState } from 'react'

function Preview({ title, createdAt, label, content, onClick, id, onDelete }) {
  const [deleted, setDeleted] = useState(false)

  const contentPreview = (content) => {
    return content.substring(0, 75) + '...'
  }

  const processTitle = (title) => {
    return title.length > 15 ? title.substring(0, 15) + '...' : title
  }

  const handleDeleteClick = (event) => {
    event.stopPropagation()
    onDelete()
  }

  if (deleted) {
    // Note has been deleted, render null
    return null
  }

  return (
    <div className={`${styles.container} border`} onClick={onClick}>
      <div className="flex gap-2 mr-auto">
        <div className="border">{processTitle(title) || 'Loading...'}</div>
        <div className="border text-xs">{createdAt || 'Loading...'}</div>
        <div className="border text-xs">{label || 'Loading...'}</div>
        <div>
          <button className="border" onClick={handleDeleteClick}>
            X
          </button>
        </div>
      </div>
      <div className="flex gap-2 mr-auto">
        <div className={`${styles.content} border`}>{contentPreview(content) || 'Loading...'}</div>
      </div>
    </div>
  )
}

Preview.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  label: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string.isRequired, // id prop is required and should be a string
  onClick: PropTypes.func.isRequired, // onClick prop is required and should be a function
}

export default Preview
