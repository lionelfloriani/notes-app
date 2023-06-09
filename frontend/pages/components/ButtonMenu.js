import React, { useState } from 'react'
import styles from './ButtonMenu.module.css'

function ButtonMenu({ selectedOption, options, onSelect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleOptionSelect = (option) => {
    onSelect(option)
    toggleMenu()
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleMenu}>
        Filter by {selectedOption}
      </button>
      {isMenuOpen && (
        <div className={styles.menu}>
          {/* Menu content */}
          <ul>
            {options.map((option) => (
              <li
                key={option}
                className={option === selectedOption ? styles.selected : ''}
                onClick={() => handleOptionSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ButtonMenu
