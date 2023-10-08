import React from 'react'
import Profile from '../assets/Profile.jpeg'
import PrimaryButton from './PrimaryButton';

const SuggestedFriendsCommunityCard = ({buttonText}) => {
  return (
    <div className='carouselCard'>
                    <div className='UpperCarousel'>
                        <div style={{display: "flex", flexDirection: "column", paddingLeft: "10px"}}>
                            <img src={Profile} alt="Profile" className='profileImage'/>
                            <span>Name</span>
                        </div>
                    </div>
                    <div className='lowerCarousel'>
                        <PrimaryButton text={buttonText} width="6vw"/>
                    </div>
                </div>
  )
}

export default SuggestedFriendsCommunityCard