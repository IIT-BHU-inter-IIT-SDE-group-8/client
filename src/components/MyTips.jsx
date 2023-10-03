import React from "react";
import CreateTripBar from "./createTripBar";
import Trip from "./trip";

const MyTrip = () => {
    return (
        <>
        <div className="AllTripsContainer">
        <CreateTripBar/>
        <p style={{fontSize:'1.5vw', fontWeight:'bold'}}>My Trips</p>
        <Trip/>
        </div>
        </>
    )
}

export default MyTrip