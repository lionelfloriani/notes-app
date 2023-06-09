import React, { useState } from 'react'
import styles from './Sort.module.css'
import ButtonMenu from './ButtonMenu'

function Sort() {
  const options = ['date', 'work', 'perso', 'others']
  const [selectedOption, setSelectedOption] = useState('date')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    setIsMenuOpen(false)
  }

  return (
    <div className={styles.container}>
      <ButtonMenu
        selectedOption={selectedOption}
        options={options}
        onSelect={handleOptionSelect}
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
      />
      <button className="border">New Note</button>
    </div>
  )
}

export default Sort
