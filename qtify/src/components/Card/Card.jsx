import React from "react";
import { Tooltip ,Chip } from "@mui/material";
import style from "./Card.module.css"
// import {useNavigate} from "react-router-dom"
function Card({data,type}) {  
  // const navigate=useNavigate();
   const getCard=(type)=>{
    if(type==="album"){
      return (
        <Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
          {/* <div className={style.wrapper} onClick={()=>navigate(`/album/${data?.slug}`)}  > */}
          <div className={style.wrapper}  >
            <div className={style.card} >
              <img src={data.image} alt="album"  />
              <div className={style.banner} >
                <Chip label={`${data.follows} Follows`} className={style.chip} size="small" />

              </div>
                 
            </div>
            <div className={style.titleWrapper}>
              <p style={{color:"white"}} >{data.title}</p>
            </div>

          </div>
        </Tooltip>
      )

    }else if(type==="songs"){
      return (
        <div className={style.wrapper} >
          <div className={style.card} >
            <img src={data.image} alt="song" loading="lazy" />
            <div className={style.banner}>
              <div id={style.pill}>
                <p style={{color:"white"}} >{data.likes}</p>
              </div>
            </div>
          </div>
          <div className={style.titleWrapper}>
            <p>{data.title}</p>
          </div>
        </div>
      )

    }
  }
  return getCard(type);
}
// https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800

export default Card;
