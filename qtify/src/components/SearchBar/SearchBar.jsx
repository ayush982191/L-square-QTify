import React from 'react'
// import SearchIcon from "../../assets/search-icon.svg"
import style  from "./SearchBar.module.css"

function SearchBar() {
  return (
    <form action="">
    <input name='search' style={{width:"30rem", height:"2rem",borderRadius:"8px",outline:"none"}} placeholder='Search album of your choice'  />
    {/* <button >{searchIcon}</button> */}
    </form>
  )
}

export default SearchBar