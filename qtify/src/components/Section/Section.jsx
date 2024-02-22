import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import style from "./Section.module.css"

import Container from '@mui/material/Container';



function Section() {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        console.log("Enter in fetchData");
        try {
             const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
            // setApiData(response.data);
            // console.log("api data is",apiData[0]);
            // console.log("api data is ",apiData);
            // console.log("response coming is ",response);
            // console.log("response coming is ",response);
            console.log("response data is ",response.data);
            console.log("response data length is ",response.data.length);
            setApiData(response.data);

        } catch (error) {
             console.error('Error fetching data:', error);
        }                                                                                                                           
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
             {/* <Container > */}
             <div className={style.mainDiv}   >
             
                <div className={style.albumText}  >
                    <h1 >Top Albums</h1>
                    <button >Collapse</button>
                </div>
                <div className={style.cardSection} >
                    {apiData.map(item => ( 
                        <Card  item={item} />
                    ))}
                </div>
                </div>
                {/* </Container> */}
        </>
    );
}

export default Section;
