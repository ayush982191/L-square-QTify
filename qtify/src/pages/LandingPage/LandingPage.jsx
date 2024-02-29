import React, { useEffect, useState } from 'react'
import { fetchAllSongs, fetchNewAlbums, fetchTopAlbums } from '../../api/api'
import Navbar from "../../components/Navbar/Navbar"
// import HeroSection from "../components/HeroSection/HeroSection"
// import HeroSection from "./"
import Section from '../../components/Section/Section.jsx'
import HeroSection from "../../components/HeroSection/HeroSection.jsx"
import style from "./LandingPage.module.css"
import FilterTabs from '../../components/FilterTabs/FilterTabs.jsx'


function LandingPage() {

  const [topAlbumData,setTopAlbumData]=useState([]);
  const [newAlbumData,setNewAlbumData]=useState([]);
  const [allSongsData,setAllSongsData]=useState([]);
  const [loadingState,setLoadingState]=useState({
    topAlbum: true,
    newAlbum: true,
    allSongs: true
  })





  const generateTopAlbumData=async ()=>{
    try {
      const data=await fetchTopAlbums();
      setTopAlbumData(data);
      // console.log("top Album=",data);
    } catch (error) {
      console.log("error");
    }
  }
  
  const generateNewAlbumData=async ()=>{
    try {
      const data=await fetchNewAlbums();
      setNewAlbumData(data);
      // console.log("New Album=",data);
    } catch (error) {
      console.log("error");
    }
  }
  const generateAllSongsData= async ()=>{
    try {
      const data=await fetchAllSongs();
      setAllSongsData(data);
      // console.log("All Album=",data);
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  },[])


  return (
    <>
    <Navbar logo={true} search={true} feedback={true}/>
    <HeroSection/>
    <div className={style.sectionWrapper}>
    <Section title={"Top Albums"} data={topAlbumData} type="album" loadingState={loadingState.topAlbum} />
    <Section title={"New Albums"} data={newAlbumData} type="album" loadingState={loadingState.newAlbum} />
   <hr />
   <FilterTabs loadingState={loadingState.allSongs} data={allSongsData}  />
   
    </div>
    <div className="" style={{height:"30rem"}}></div>

    </>
  )
}

export default LandingPage