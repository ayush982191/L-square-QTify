import React from 'react'
import LogoImage from "../../assets/logo.png"
import style from "./Logo.module.css"

function Logo() {
  return  <div className={style.logo}>
    <img src={LogoImage}  width={65} alt="QTify Logo" />
  </div>
}

export default Logo