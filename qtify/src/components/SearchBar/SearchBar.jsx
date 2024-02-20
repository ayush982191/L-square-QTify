import React from 'react'
// import { ReactComponent as SearchIcon} from "../../assets/search-icon.svg"

function SearchBar() {
  return (
    <div>
        <input type="text"  placeholder='Search a song of your choice' style={{height:"2rem",borderRadius:"6px",outline:"none",width:"25rem" }} />      
      {/* <SearchIcon/>                                                 */}
    </div>
  )
}

export default SearchBar