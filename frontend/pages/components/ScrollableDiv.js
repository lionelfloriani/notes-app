import React from 'react'
import Preview from './Preview'
import styles from './ScrollableDiv.module.css'

function ScrollableDiv({ data, handleNoteClick, handleDeleteNote }) {
  return (
    <div className={styles.container}>
      {data.length > 0 ? (
        data.map((item) => (
          <Preview
            key={item._id}
            title={item.title}
            createdAt={item.createdAt}
            label={item.label}
            content={item.content}
            onClick={() => handleNoteClick(item._id)}
            onDelete={() => handleDeleteNote(item._id)}
            id={item._id}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default ScrollableDiv
