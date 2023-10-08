import React from 'react'
import Profile from '../assets/Profile.jpeg'
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';

const TripCarouselCard = () => {
  return (
    <div className='carouselCard'>
                    <div className='UpperCarousel'>
                        <div style={{display: "flex", flexDirection: "column", paddingLeft: "10px"}}>
                            <img src={Profile} alt="Profile" className='profileImage'/>
                            <span>Name</span>
                        </div>
                        <div className='rightCarousel'>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <span>To</span>
                                <span>Place</span>
                            </div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <span>On</span>
                                <span>Date</span>
                            </div>
                        </div>
                    </div>
                    <div className='lowerCarousel'>
                        <SecondaryButton text={"Open"} />
                        <PrimaryButton text={"Close"} />
                    </div>
                </div>
  )
}

export default TripCarouselCard