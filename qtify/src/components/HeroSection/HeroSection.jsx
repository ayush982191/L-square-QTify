import React from 'react'
import headphones from "../../assets/hero_headphones.png"
import style from "./HeroSection.module.css"


function HeroSection() {
  return (
    <>
    <div className={style.wrapper }>
        <div className={style.heroImageWrapper }>
            <div className={style.bannner }>
            <h1 style={{color:'white'}} >100 Thousand Songs, ad free</h1>
			<h1 style={{color:'white'}} >Over thousands podcast episodes</h1>
            </div>
            <div className="">
                <img src={headphones}  />
            </div>
        </div>
    </div>
        
    </>
  )
}

export default HeroSection