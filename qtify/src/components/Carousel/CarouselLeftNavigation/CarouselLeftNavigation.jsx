import React from 'react'
import { useSwiper } from 'swiper/react'
import { useState ,useEffect } from 'react'
import style from "../Carousel.module.css"
import  LeftArrow from "../../../assets/LeftArrow.svg"


function CarouselLeftNavigation() {
  const swiper = useSwiper();
	const [isBeginning, setIsBeginning] = useState(swiper.isBeginning); // Initialize isBegin to true.
  console.log("swipper beginnig =",isBeginning);
	useEffect(() => {
		swiper.on("slideChange", () => {
			setIsBegin(swiper.isBeginning); // Update isBegin when slideChange event occurs.
		});
	}, []); // Include swiper in the dependencies array.

  return (
   
    <div className={style.leftNavigation} >
    { isBeginning &&  <embed src={LeftArrow} onClick={()=>swiper.slidePrev()} type="" />}
    </div>
  )
}

export default CarouselLeftNavigation