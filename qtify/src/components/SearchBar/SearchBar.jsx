import React from 'react'
import SearchIcon from "../../assets/search-icon.svg"
import style  from "./SearchBar.module.css"

function SearchBar() {
  return (
    <div style={{display:"flex", alignItems:"center"}} >
        <input type="text"  placeholder='Search a song of your choice' style={{height:"2rem",borderRadius:"6px",outline:"none",width:"25rem" }} />      
      <button className={style.button} style={{borderRadius:"6px",backgroundColor:"white",width:"40px",height:"2.3rem"}} ><img src={SearchIcon} alt="" /></button>                                               
    </div>
  )
}

export default SearchBar