import React, {useState, useEffect} from "react";
import BottomNavbar from "./BottomNavbar";
import '../Trip.css';
import ProfilePicture from '../assets/Profile.jpeg'
import messsage from '../assets/message.png'
import {getCookieValue} from './cookieFunc'
import TripParticipants from './ParticipantsModel'

const TripPage = () => {

    const authToken = getCookieValue(document.cookie,'authtoken');
    const [showModal, setShowModal] = useState(false);
    const getTripDataUrl = `http://localhost:4000/trips/45`;
    const getParticipantsUrl = `http://localhost:4000/trips/45/participants`;
    const [trips, setTrips] = useState([]);

    const handleShosModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    useEffect(() => {
        fetchTrip();
    },[])

    const fetchTrip = async () => {
        try {
            const response = await fetch(getTripDataUrl,{
                method:'GET',
                headers:{
                    'auth-token':authToken,
                    'Content-Type':'application/json',
                },
            })

            if(response.ok)
            {
                const json = await response.json();
                setTrips(json);
            }
            else
            {
                console.log("error occured while setting the value of the trip:",response.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        {trips.map((ele) => { 
            return <div className="mainTripPageContainer">
            <div className="mainProfilePicContainer">
                <div className="TopContainer">
                    <div className="imageBox">
                        <img className="profileImg" style={{borderRadius: '50%', height: '8vw'}} src={ProfilePicture} alt="ProfilePicture" />
                    </div>
                    <div className="TripCreatorInfoBox">
                        <p className="mediumSizeTag">Trip Creator Name : Name</p>
                        <p className="smallTag">Trip Creator Email : Email</p>
                        <img style={{width: '2.5vw'}} src={messsage} alt="message" />
                    </div>
                    <div className="ButtonBox">
                        <button onClick = {handleShosModal} className="seeParticipantsBtn"><p className="smallTag">See Paticipants</p></button>
                    </div>
                </div>
                <div className="rightContainer">
                    <div style={{display:"flex", flexDirection:'row'}}>
                        <div className="smallLeftContainer">
                            <p className="mediumSizeTag">Trip Name :</p>
                            <p className="mediumSizeTag">Trip Origin :</p>
                            <p className="mediumSizeTag">Trip Destination :</p>
                            <p className="mediumSizeTag">Trip Start Date/Time :</p>
                            <p className="mediumSizeTag">Trip End Date/Time :</p>
                        </div>
                        <div className="smallrightContainer">
                            <p className="mediumSizeTag">{ele.trip_name}</p>
                            <p className="mediumSizeTag">{ele.trip_origin}</p>
                            <p className="mediumSizeTag">{ele.trip_destination}</p>
                            <p className="mediumSizeTag">{ele.trip_departure_datetime}</p>
                            <p className="mediumSizeTag">{ele.trip_arrival_datetime}</p>
                        </div>
                    </div>
                    <div className="descriptionContainer">
                        <p className="headingStyle">Description</p>
                        <p style={{marginLeft:'1vw', fontSize:'1vw', fontFamily:'cursive'}}>{ele.trip_desc}</p>
                    </div>
                </div>
            </div>
            <div className="BottonNavbar">
                <BottomNavbar/>
            </div>
            <div>
            {showModal && <TripParticipants closeModal = {closeModal}/>}
            </div>
        </div>
        })}
        </>
    )
}

export default TripPage;