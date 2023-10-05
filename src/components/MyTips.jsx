import React from "react";
import CreateTripBar from "./createTripBar";
import Trip from "./trip";
import BottomNavbar from "./BottomNavbar";
const {getCookieValue} = require('./cookieFunc')

const MyTrip = () => {

    const authToken = getCookieValue(document.cookie, 'authtoken')

    return (
        <>
        <div className="AllTripsContainer">
        <CreateTripBar/>
        <p style={{fontSize:'1.5vw', fontWeight:'bold'}}>My Trips</p>
        <Trip/>
        </div>
        <footer className="footer">
        <BottomNavbar/>
        </footer>
        </>
    )
}

export default MyTrip