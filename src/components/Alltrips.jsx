import React, {useEffect, useState} from "react";
import Trip from "./trip";
import '../Trip.css'
import SideFilterBar from "./SideFilterBar";
import BottomNavbar from './BottomNavbar';

const AllTrips = () => {

  const [trips, setTrips] = useState([]);
  const fetchAllTripsUrl = `http://localhost:4000/trips`;
  const authToken = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith('authtoken='))
    ?.split('=')[1];

  useEffect(()=>{
    fetchAllTrips();
  },[])

  const fetchAllTrips = async () => {
    try {
      const headers = {
        'auth-token': authToken, // Assuming you are using Bearer token authentication
        'Content-Type': 'application/json',
      };
  
      const response = await fetch(fetchAllTripsUrl, {
        method: 'GET',
        headers: headers,
      });
  
      if (response.ok) {
        const allParsedtrips = await response.json();
        console.log("all trips are:", allParsedtrips);
        setTrips(allParsedtrips.result);
      } else {
        // Handle the case where the request was not successful (e.g., authentication failed)
        console.log('Request failed with status:', response.status);
        // You may want to handle different HTTP status codes differently.
      }
    } catch (error) {
      console.error(error);
    }
  }
  
    return (
        <>
        <div className="AllTripsContainer">
          <SideFilterBar/>
          <p style={{fontSize:'1.5vw', fontWeight:'bold'}}>All Trips</p>
          {trips.map((ele) => {
            return <div style={{marginBottom:'2.5vh'}} key={"AllTripsId_"+ele.trip_id}>
              <Trip origin = {ele.trip_origin} destination = {ele.trip_destination} desc = {ele.trip_desc} arrival = {ele.trip_arrival_datetime} departure = {ele.trip_departure_datetime}/>
            </div>
          })}
        <BottomNavbar/>
        </div>
        </>
    )

}

export default AllTrips