import React from "react";
import SideFilterBar from "../components/SideFilterBar";
import Trip from "../components/trip";

const CommunityTrips = () => {
    return(
        <>
        <div className="mainCommunityTripContainer">
            <SideFilterBar/>
            <h3>Community Trips</h3>
            <Trip/>
        </div>
        </>
    )
}

export default CommunityTrips