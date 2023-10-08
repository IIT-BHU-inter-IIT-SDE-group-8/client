import React from 'react'
import CreateCommunityBar from '../components/CreateCommunityBar'
import CommunityCard from '../components/CommunityCard'

const MyCommunities = () => {
  return (
    <div>
        <CreateCommunityBar />
        <div style={{"display": "flex", "justifyContent": "center"}}>
        <div className="MyCommunities">
          <h2>My Communities</h2>
          <CommunityCard />
        </div>
        </div>
    </div>
  )
}

export default MyCommunities