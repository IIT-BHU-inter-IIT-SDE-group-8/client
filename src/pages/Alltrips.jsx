import React from "react";
import Trip from "../components/trip";
import SideFilterBar from "../components/SideFilterBar";
import BottomNavbar from '../components/BottomNavbar';

const AllTrips = () => {

  const url =
  
    {
  "result": [
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
    },
    {
      "trip_id": 49,
      "trip_name": "new jabalpur Trip",
      "trip_origin": "banaras",
      "trip_destination": "jabalpur",
      "trip_desc": "we are going to jabalpur",
      "trip_departure_datetime": "2023-09-05T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-07T04:53:58.392Z"
    },
    {
      "trip_id": 50,
      "trip_name": "new bangalore Trip",
      "trip_origin": "banaras",
      "trip_destination": "bangalore",
      "trip_desc": "we are going to bangalore",
      "trip_departure_datetime": "2023-09-05T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-07T04:53:58.392Z"
    },
    {
      "trip_id": 51,
      "trip_name": "new hyderabad Trip",
      "trip_origin": "banaras",
      "trip_destination": "hyderabad",
      "trip_desc": "we are going to hyderabad",
      "trip_departure_datetime": "2023-09-07T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-09T04:53:58.392Z"
    },
    {
      "trip_id": 52,
      "trip_name": "new ganga Trip",
      "trip_origin": "banaras",
      "trip_destination": "ganga",
      "trip_desc": "we are going to ganga",
      "trip_departure_datetime": "2023-09-08T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-10T04:53:58.392Z"
    },
    {
      "trip_id": 53,
      "trip_name": "new ganga Trip",
      "trip_origin": "banaras",
      "trip_destination": "ganga",
      "trip_desc": "we are going to ganga",
      "trip_departure_datetime": "2023-09-08T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-10T04:53:58.392Z"
    },
    {
      "trip_id": 54,
      "trip_name": "new assi Trip",
      "trip_origin": "banaras",
      "trip_destination": "assi",
      "trip_desc": "we are going to assi",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 55,
      "trip_name": "new new york Trip",
      "trip_origin": "banaras",
      "trip_destination": "new york",
      "trip_desc": "we are going to new york",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 56,
      "trip_name": "new las vegas Trip",
      "trip_origin": "banaras",
      "trip_destination": "las vegas",
      "trip_desc": "we are going to las vegas",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 57,
      "trip_name": "new washington Trip",
      "trip_origin": "banaras",
      "trip_destination": "washington",
      "trip_desc": "we are going to washington",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 58,
      "trip_name": "new bhopal Trip",
      "trip_origin": "banaras",
      "trip_destination": "bhopal",
      "trip_desc": "we are going to bhopal",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 59,
      "trip_name": "new indore Trip",
      "trip_origin": "banaras",
      "trip_destination": "indore",
      "trip_desc": "we are going to indore",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 60,
      "trip_name": "new darbhanga Trip",
      "trip_origin": "banaras",
      "trip_destination": "darbhanga",
      "trip_desc": "we are going to darbhanga",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 61,
      "trip_name": "new kashmir Trip",
      "trip_origin": "banaras",
      "trip_destination": "kashmir",
      "trip_desc": "we are going to kashmir",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 68,
      "trip_name": "new jammu1 Trip",
      "trip_origin": "banaras",
      "trip_destination": "jammu13",
      "trip_desc": "we are going to jammu1",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 62,
      "trip_name": "new jammu Trip",
      "trip_origin": "banaras",
      "trip_destination": "jammu",
      "trip_desc": "we are going to jammu",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 63,
      "trip_name": "new jammu Trip",
      "trip_origin": "banaras",
      "trip_destination": "jammu",
      "trip_desc": "we are going to jammu",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 64,
      "trip_name": "new jammu1 Trip",
      "trip_origin": "banaras",
      "trip_destination": "jammu1",
      "trip_desc": "we are going to jammu1",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 65,
      "trip_name": "new jammu1 Trip",
      "trip_origin": "banaras",
      "trip_destination": "jammu1",
      "trip_desc": "we are going to jammu1",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    },
    {
      "trip_id": 66,
      "trip_name": "new jammu1 Trip",
      "trip_origin": "banaras",
      "trip_destination": "jammu1",
      "trip_desc": "we are going to jammu1",
      "trip_departure_datetime": "2023-09-09T23:55:55.392Z",
      "trip_arrival_datetime": "2023-09-11T04:53:58.392Z"
    }
  ]
}
    return (
        <>
        <div className="AllTripsContainer">
          <SideFilterBar/>
          <p style={{fontSize:'1.5vw', fontWeight:'bold'}}>All Trips</p>
          {url.result.map((ele) => {
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