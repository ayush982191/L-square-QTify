import React,{useState } from 'react' 
import styles from "./Navbar.module.css"
import FeedbakModal from '../Modals/FeedbackModal/FeedbakModal';
import SearchBar from "../SearchBar/SearchBar"
import Logo from '../Logo/Logo';




function Navbar({logo=false, feedback=false, search=false }) {
  const [isFeedBackModalOpen,setIsFeedBackModelOpen]=useState(false);                                        
  const _toggleFeedBackModal=(value=false)=>{
    setIsFeedBackModelOpen(value);
  }
 const _onSuccess=()=>{
  // showToast("Feed")
  console.log("Feedback shown");
 }


  return (
     
    <div className={styles.wrapper}>
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper} onClick={() => navigate(`/`)}>
        {logo ? <Logo id={styles.logo} /> : null}
      </div>
      {search ? (
        <div className={styles.searchWrapper}>
          <SearchBar
            placeholder="Search a album of your choice"
             
          />
        </div>
      ) : null}

      {feedback ? (
        <div
          className={styles.nav_link}
          onClick={() => _toggleFeedBackModal(true)}>
          Feedback
        </div>
      ) : null}
    </nav>
    <FeedbakModal
      isOpen={isFeedBackModalOpen}
      onSuccess={_onSuccess}
      onDismiss={_toggleFeedBackModal}
    />
  </div>
   
    
  )
}

export default Navbar