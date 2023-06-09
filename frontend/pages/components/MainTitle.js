import React from 'react'
import styles from './MainTitle.module.css'

function MainTitle({ title }) {
  return <div className={`flex items-center justify-center border ${styles.container} text-5xl`}>{title}</div>
}

export default MainTitle
