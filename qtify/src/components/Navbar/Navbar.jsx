import React,{useState } from 'react' 
import style from "./Navbar.module.css"
import FeedbakModal from '../Modals/FeedbackModal/FeedbakModal';
import SearchBar from "../SearchBar/SearchBar"
import Logo from '../Logo/Logo';




function Navbar({logo=false, feedback=false, search=false }) {
  const [isFeedBackModelOpen,setIsFeedBackModelOpen]=useState(false);                                        
  const _toggelFeedBackModel=(value=false)=>{
    setIsFeedBackModelOpen(value);
  }
 const _onSuccess=()=>{
  // showToast("Feed")
  console.log("Feedback shown");
 }


  return (
     <>
    <div className={style.Navbar}>
    <ul className={style.wrapper} >
      <li> 
        { logo?
        <>
        {<Logo />}
        </>:null }

      </li>
      <li>
        {search?<>
        {<SearchBar placeholder="search album of your choice" />}
        </>:null}

      </li>
      <li>
        {feedback?<>
        <div onClick={()=>_toggelFeedBackModel(true)} className={style.button}>
          Give Feedback
        </div>
        </>:null}
        <FeedbakModal isOpen={isFeedBackModelOpen} onSuccess={_onSuccess} onDismiss={_toggelFeedBackModel}  />

      </li>
    </ul>


    </div>
   
    </>
  )
}

export default Navbar