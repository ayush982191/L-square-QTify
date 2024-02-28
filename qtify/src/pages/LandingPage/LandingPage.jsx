import React, { useEffect, useState } from 'react'
import { fetchAllSongs, fetchNewAlbums, fetchTopAlbums } from '../../api/api'
import Navbar from "../../components/Navbar/Navbar"
// import HeroSection from "../components/HeroSection/HeroSection"
// import HeroSection from "./"
import HeroSection from "../../components/HeroSection/HeroSection.jsx"

function LandingPage() {

  const [topAlbumData,setTopAlbumData]=useState([]);
  const [newAlbumData,setNewAlbumData]=useState([]);
  const [allSongsData,setAllSongsData]=useState([]);

  const generateTopAlbumData=async ()=>{
    try {
      const data=await fetchTopAlbums();
      setTopAlbumData(data);
      console.log("top Album=",data);
    } catch (error) {
      console.log("error");
    }
  }
  
  const generateNewAlbumData=async ()=>{
    try {
      const data=await fetchNewAlbums();
      setNewAlbumData(data);
      console.log("New Album=",data);
    } catch (error) {
      console.log("error");
    }
  }
  const generateAllSongsData= async ()=>{
    try {
      const data=await fetchAllSongs();
      setAllSongsData(data);
      console.log("All Album=",data);
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    // generateTopAlbumData();
    // generateNewAlbumData();
    // generateAllSongsData();
  },[])


  return (
    <>
    <Navbar logo={true} search={true} feedback={true}/>
    <HeroSection/>
    </>
  )
}

export default LandingPage