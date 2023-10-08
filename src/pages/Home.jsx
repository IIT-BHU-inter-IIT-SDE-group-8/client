import React from 'react'
import SideFilterBar from '../components/SideFilterBar'
import {Link} from "react-router-dom"
import TripsCarousel from '../components/TripsCarousel'
import BottomNavbar from '../components/BottomNavbar'
import SuggestedFriends from '../components/SuggestedFriends'
import SuggestedCommunities from '../components/SuggestedCommunities'

const Home = () => {
  return (
    <div id='Home'>
      <SideFilterBar />
      <div id='HomeBottom'>
      <Link to="/profile" style={{"color": "black", "position":"relative", "top": "20px"}}>See Your Profile</Link>
      </div>
      <TripsCarousel />
      <SuggestedFriends />
      <SuggestedCommunities />
      <BottomNavbar />
    </div>
  )
}

export default Home