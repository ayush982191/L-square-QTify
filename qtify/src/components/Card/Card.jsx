import React from "react";
import Chip from "@mui/material/Chip";
import style from "./Card.module.css";
function Card(item) { 
  // {title,description,follows,id,image,slug,songs}
  console.log("item is ",item?.item);
  return ( 
    <>
    
      <div className={style.mainDiv} >
        {/* <h1>Top Albums</h1> */}
        <div className={style.cardDiv} >
          <div className={style.imageDiv}  >
          <img src={item?.item?.image} style={{width:"100%"}} alt="" />
          <p >{item?.item?.description}</p>
          </div>
          {/*  */}
          <Chip
                label={`${item?.item?.follows} follows`} 
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  width: "8rem",
                  fontSize: "10px",
                  marginBottom:"7px"
                }}
                variant="outlined"
              />


        </div>
        <p style={{color:"white"}} >{item.item.title}</p>
      </div>
    </>
  );
}
// https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800

export default Card;