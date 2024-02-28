import React from 'react'
import LogoImage from "../../assets/logo.png"
import style from "./Logo.module.css"

function Logo() {
  return  (
    <img src={LogoImage} alt="" width={50} />
  )
}

export default Logo