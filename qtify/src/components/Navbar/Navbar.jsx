import React from 'react'
import Logo from '../Logo/Logo'
import styles from "./Navbar.module.css"
import SearchBar from '../SearchBar/SearchBar'
import Button from '../Button/Button'
function Navbar() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#34C948",height:"74px",padding:"0px 32px"}} >
        <Logo/>
       <SearchBar/>
       <Button/>


    </div>
  )
}

export default Navbar