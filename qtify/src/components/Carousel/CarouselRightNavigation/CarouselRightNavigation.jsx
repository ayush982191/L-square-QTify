import React, { useEffect, useState } from 'react'
import  RightArrow from "../../../assets/RightArrow.svg"
import { useSwiper } from 'swiper/react'
import style from "../Carousel.module.css"

function CarouselRightNavigation() {
  const swiper = useSwiper();

	const [isEnd, setIsEnd] = useState(swiper.isEnd);

	useEffect(() => {
		swiper.on("slideChange", () => {
			setIsEnd(swiper.isEnd);
		});
 	}, []);
  return (
    <div className={style.rightNavigation} >
     {
      !isEnd && <embed src={RightArrow} onClick={()=>swiper.slideNext()} type="" />
     }
    </div>
  )
}

export default CarouselRightNavigation