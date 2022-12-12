import React from 'react'
import styles from './Header.module.css'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export default function Header({lightMode, setStatus, toggleLightMode}) {


  return (
 <>
   <header className={styles.header}>
    <button className={styles.modeIcon} onClick={()=> toggleLightMode()}>{lightMode ? <MdDarkMode/> : <MdLightMode/>}</button>
    <div className={styles.inner}>
        <button className={styles.button} onClick={()=> setStatus('All')}>All</button>
        <button className={styles.button} onClick={()=> setStatus('Active')}>Active</button>
        <button className={styles.button} onClick={()=> setStatus('Completed')}>Completed</button>
    </div>
   </header>
   </>
    
  )
}
