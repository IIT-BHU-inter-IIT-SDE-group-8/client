import React from 'react'
import "../styles/Community.css";
import BottomNavbar from '../components/BottomNavbar';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Trip from '../components/trip';

function Community() {
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
      }
    ]
  }
  return (
    <div id='CommunityPage'>
      <div id='CommunityImage'>
        
      </div>
      <div id='CommunityBottom'>
        <div id='communityDesc'>
          <div id='leftCommunity'>
            <h2>Community name</h2>
            <p>Community Description</p>
          </div>
          <div id='rightCommunity'>
            <PrimaryButton text={"Join"} width={"6vw"}/>
            <SecondaryButton text={"Message"} width={"6vw"}/>
          </div>
        </div>
        <div id='TripsInCommunity'>
          <h2>Trips in the community</h2>
          {url.result.map((ele) => {
            return <div style={{marginBottom:'2.5vh'}} key={"AllTripsId_"+ele.trip_id}>
              <Trip origin = {ele.trip_origin} destination = {ele.trip_destination} desc = {ele.trip_desc} arrival = {ele.trip_arrival_datetime} departure = {ele.trip_departure_datetime} style={{"width": "60vw"}}/>
            </div>
          })}
        </div>
      </div>
      <BottomNavbar />
    </div>
  )
}

export default Community