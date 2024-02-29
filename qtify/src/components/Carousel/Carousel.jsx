import React, { useEffect } from 'react'
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";

// const Controls = ({ data }) => {
// 	const { swiper } = useSwiper();

// 	useEffect(() => {
// 		swiper?.slideTo(0);
//  	}, [data]);

// 	return <></>;
// };



const Carousel = ({ data, renderCardComponent }) => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	  };
	return (
		<div className={styles.wrapper}>
			 <Swiper
        slidesPerView={7}
        spaceBetween={4}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        navigation={true}
        className="mySwiper"
      >
				{data?.map((item) => (
					<SwiperSlide key={item?.id}>{renderCardComponent(item)}</SwiperSlide>
				))}
			</Swiper>
		</div>
		// <div className="">
		// 	 <Slider {...settings}>
		// 	 {data?.map((item) => (
		// 			 renderCardComponent(item)
		// 		))}

		// 	 </Slider>
		// </div>
	);
};


export default Carousel

