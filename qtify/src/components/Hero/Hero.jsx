import React from 'react'
import HeroImage from "../../assets/hero_headphones.png"
import styles from "./Hero.module.css"
function Hero() {
  return (
    <div className={styles.heroDiv} >
        <h1>100 Thousand Songs, ad-free
             <br /> Over thousands podcast episodes</h1>
        <img src={HeroImage} alt="" />
    </div>
  )
}

export default Hero