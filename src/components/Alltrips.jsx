import React, {useEffect, useState} from "react";
import Trip from "./trip";
import '../Trip.css'
import SideFilterBar from "./SideFilterBar";
import BottomNavbar from './BottomNavbar';
const {getCookieValue} = require('./cookieFunc')

const AllTrips = () => {

  const authToken = getCookieValue(document.cookie,'authtoken');
  const userDataCookie = getCookieValue(document.cookie,'data');

  const userData = JSON.parse(decodeURIComponent(userDataCookie));
  const userId = userData.user.id;

  const [filterData, setFilterData] = useState({
    origin:'',
    destination:'',
    date:'',
    timeRangeStartTime:'',
    timeRangeEndTime:''
  })

  const handleFilterData = (value) => {
    setFilterData(value);
  }

  const { origin, destination, date, timeRangeEndTime, timeRangeStartTime } = filterData;

  const [trips, setTrips] = useState([]);
  const fetchAllTripsUrl = `http://localhost:4000/users/${userId}/trips?origin=${origin}&destination=${destination}&date=${date}&timeRangeStartTime${timeRangeStartTime}&timeRangeEndTime=${timeRangeEndTime}`;



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
        setTrips(allParsedtrips.results);
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
        <div>
        <div className="AllTripsContainer">
          <SideFilterBar handleFilterData = {handleFilterData} fetchAllTrips= {fetchAllTrips}/>
          <p style={{fontSize:'1.5vw', fontWeight:'bold'}}>All Trips</p>
          <div style={{marginBottom:'4vw'}}>
          {trips.map((ele) => {
            return <div style={{marginBottom:'2.5vh'}} key={"AllTripsId_"+ele.trip_id}>
              <Trip origin = {ele.trip_origin} destination = {ele.trip_destination} desc = {ele.trip_desc} arrival = {ele.trip_arrival_datetime} departure = {ele.trip_departure_datetime}/>
            </div>
          })}
          </div>
        </div>
        <footer className="footer">
        <BottomNavbar/>
        </footer>
        </div>
        </>
    )

}

export default AllTrips