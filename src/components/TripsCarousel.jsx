import React, { useState, useEffect } from 'react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import TripCarouselCard from './TripCarouselCard';
import Cookies from "universal-cookie";
import { getCookieValue } from "../components/cookieFunc";





const TripsCarousel = () => {


    const [data, setData] = useState([
        {
            "trip_id": 67,
            "trip_name": "new jammu1 Trip",
            "trip_origin": "banaras",
            "trip_destination": "jammu1",
            "trip_desc": "we are going to jammu1",
            "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
            "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
        },
        {
            "trip_id": 45,
            "trip_name": "new mumbai Trip",
            "trip_origin": "banaras",
            "trip_destination": "mumbai",
            "trip_desc": "we are going to mumbai",
            "trip_departure_datetime": "2023-09-03T23:55:55.392Z",
            "trip_arrival_datetime": "2023-09-05T04:53:58.392Z"
        },
        {
            "trip_id": 46,
            "trip_name": "new delhi Trip",
            "trip_origin": "banaras",
            "trip_destination": "delhi",
            "trip_desc": "we are going to delhi",
            "trip_departure_datetime": "2023-09-03T23:55:55.392Z",
            "trip_arrival_datetime": "2023-09-05T04:53:58.392Z"
        },
        {
            "trip_id": 47,
            "trip_name": "new gurgaon Trip",
            "trip_origin": "banaras",
            "trip_destination": "gurgaon",
            "trip_desc": "we are going to gurgaon",
            "trip_departure_datetime": "2023-09-03T23:55:55.392Z",
            "trip_arrival_datetime": "2023-09-05T04:53:58.392Z"
        },
        {
            "trip_id": 48,
            "trip_name": "new narsinghpur Trip",
            "trip_origin": "banaras",
            "trip_destination": "narsinghpur",
            "trip_desc": "we are going to narsinghpur",
            "trip_departure_datetime": "2023-09-05T23:55:55.392Z",
            "trip_arrival_datetime": "2023-09-07T04:53:58.392Z"
        }])

        const authToken = getCookieValue(document.cookie,'authtoken');
  const userDataCookie = getCookieValue(document.cookie,'data');

  const userData = JSON.parse(decodeURIComponent(userDataCookie));
  const userId = userData.user.id;


    useEffect(() => {
        fetch(`http://localhost:8000/users/${userId}/trips`, {
            method: "GET"
        }).then(res => res.json()).then(res => {
            setData(res)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };
    return (
        <div style={{ "marginTop": "30px" }}>
            <h2>Trips Your Friends are on</h2>
            <div className='Carousel'>
                <div onClick={handlePrev} style={{ "cursor": "pointer" }}>
                    <AiOutlineLeft className='arrowIcon' />
                </div>
                {
                    data.slice(currentIndex, currentIndex + 3).map((trip) => (
                        <TripCarouselCard key={trip.trip_id} trip_name={trip.trip_name} />
                    ))
                }
                <div onClick={handleNext} style={{ "cursor": "pointer" }} s>
                    <AiOutlineRight className='arrowIcon' />
                </div>
            </div>
        </div>
    )
}

export default TripsCarousel