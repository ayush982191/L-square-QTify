import React from 'react'
import Logo from '../Logo/Logo'
import styles from "./Navbar.module.css"
import SearchBar from '../SearchBar/SearchBar'
import Button from '../Button/Button'
function Navbar() {
  return (
    <div className={styles.Navbar} >
        <Logo/>
       <SearchBar/>
       <Button/>


    </div>
  )
}

export default Navbar