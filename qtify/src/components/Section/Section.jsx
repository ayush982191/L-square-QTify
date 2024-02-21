import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import style from "./Section.module.css"

function Section() {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        console.log("Enter in fetchData");
        try {
             const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
            setApiData(response.data);
            console.log("api data is",apiData[0]);
        } catch (error) {
             console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div>
                <div className="" style={{color:"white"}} >
                    <h1>Top Albums</h1>
                    <p>Collapse</p>
                </div>
                <div className={style.cardSection}>
                    {apiData.map(item => (
                        <Card  item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Section;
