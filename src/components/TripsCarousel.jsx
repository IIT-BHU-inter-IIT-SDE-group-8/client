import React, { useState } from 'react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import TripCarouselCard from './TripCarouselCard';



const TripsCarousel = () => {

    const [data, setData] = useState([])
    return (
        <div style={{ "margin-top": "30px" }}>
            <h2>Trips Your Friends are on</h2>
            <div className='Carousel'>
                <AiOutlineLeft className='arrowIcon' />
                <TripCarouselCard />
                <TripCarouselCard />
                <TripCarouselCard />
                <AiOutlineRight className='arrowIcon' />
            </div>
        </div>
    )
}

export default TripsCarousel