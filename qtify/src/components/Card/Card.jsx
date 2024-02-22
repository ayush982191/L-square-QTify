import React from "react";
import Chip from "@mui/material/Chip";
import style from "./Card.module.css";
function Card({item}) { 
  // {title,description,follows,id,image,slug,songs}
  console.log("item is ",item);
  return ( 
    <>
    
      <div className={style.mainDiv} >
         <div className={style.cardDiv} >
          <div className={style.imageDiv}  >
          <img src={item?.image}  alt="" />
          {/* <p >{item?.item?.description}</p> */}
          </div>
          {/*  */}
          <Chip
                label={`${item?.follows} follows`} 
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  width: "8rem",
                  fontSize: "10px",
                  marginBottom:"7px",
                  marginLeft:"5px"
                }}
                variant="outlined"
              />


        </div>
        <p className={style.songName} >{item?.title}</p>
      </div>
    </>
  );
}
// https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800

export default Card;
