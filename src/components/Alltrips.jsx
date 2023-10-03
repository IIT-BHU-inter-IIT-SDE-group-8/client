import React from "react";
import Trip from "./trip";
import '../Trip.css'
import SideFilterBar from "./SideFilterBar";

const AllTrips = () => {

    return (
        <>
        <div className="AllTripsContainer">
          <SideFilterBar/>
          <p style={{fontSize:'1.5vw', fontWeight:'bold'}}>All Trips</p>
          <div style={{marginBottom:'2.5vh'}}>
          <Trip/>
          </div>
        </div>
        </>
    )

}

export default AllTrips