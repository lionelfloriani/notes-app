import React, { useState } from 'react'
import styles from './Sort.module.css'
import ButtonMenu from './ButtonMenu'
import { formateDate } from '../utils/date.formatter'

function Sort({ handleNewNoteClick, handleSortOptionSelect }) {
  const options = ['date', 'work', 'personal', 'others']
  const [selectedOption, setSelectedOption] = useState('date')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    setIsMenuOpen(false)
    handleSortOptionSelect(option) // Update the sort option in the App component
  }

  const handleNewNote = () => {
    const createdAt = formateDate(new Date())
    const newNote = {
      _id: null,
      title: 'Title',
      content: 'Content...',
      label: 'others',
      createdAt: createdAt,
    }
    handleNewNoteClick(newNote)
  }

  return (
    <div className={styles.container}>
      {/* <ButtonMenu
        selectedOption={selectedOption}
        options={options}
        onSelect={handleOptionSelect}
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
      /> */}
      <button className="border" onClick={handleNewNote}>
        New Note
      </button>
    </div>
  )
}

export default Sort
