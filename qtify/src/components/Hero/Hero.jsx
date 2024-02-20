import React from 'react'
import HeroImage from "../../assets/hero_headphones.png"
function Hero() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"black",color:"white",height:"25.5rem"}}>
        <h1>100 Thousand Songs, ad-free
             <br /> Over thousands podcast episodes</h1>
        <img src={HeroImage} alt="" />
    </div>
  )
}

export default Hero