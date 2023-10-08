import React from 'react'
import Profile from '../assets/Profile.jpeg'
import PrimaryButton from "./PrimaryButton";

const CommunityCard = () => {
  return (
    <>
        <div className="mainCardContainer">
            <div className="CommunityImage">
                <img style={{borderRadius: '30px', width:'7.5vw', margin:'3vw'}} src={Profile} alt="Profile" />
            </div>
            <div style={{"paddingBottom": "20px"}}>
                <h2>Community name</h2>
                <span>No. of Participants: 20</span>
            </div>
            <PrimaryButton width="150px" text="Invite Members" />
        </div>
    </>
  )
}

export default CommunityCard