import React, { useEffect, useState } from 'react'; 
import Card from '../Card/Card';
import styles from "./Section.module.css"

import Container from '@mui/material/Container';
import Carousel from '../Carousel/Carousel';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';

// (line 42 explanation)
// The Carousel component receives two props: data and renderCardComponent.
// data is an array of items to be displayed within the carousel.
// renderCardComponent is a function that defines how each item in the data array should be rendered.
// In this specific case, renderCardComponent is an arrow function that takes an item from the data array and returns a Card component.
// Within the Card component, it sets the data prop to the current item being iterated over in the data array, and the type prop is passed from the Section component to the Card component.
function Section({title, data, type, header, loadingState }) {
   const [carouselToggle,setCarouselToggle]=useState(false);
   const _handleToggle=()=>{
    setCarouselToggle(!carouselToggle);
   }  
   return (
    <div className={styles.sectionWrapper}>
    {header === "all" ? (
        <></>
    ) : (
        <div className={styles.header}>
            <h3 style={{color:"white"}} >{title}</h3>
            <h4 className={styles.toggleText} onClick={_handleToggle}>
                {carouselToggle ? "Show all" : "Collapse"}
            </h4>
        </div>
    )}

    {data?.length ? (
        <div className={styles.cardWrapper}>
            {!carouselToggle ? (
                <div className={styles.wrapper}>
                    {data?.map((item) => (
                        <Card data={item} type={type} key={item.id} />
                    ))}
                </div>
            ) : (
                <Carousel
                    data={data}
                    renderCardComponent={(item) => <Card data={item} type={type} />}
                />
            )}
        </div>
    ) : loadingState ? (
        <SkeletonLoader name={"card"} count={5} />
    ) : (
        <p>No Data found</p>
    )}
</div>
);
};

export default Section;

