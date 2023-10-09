import React from 'react'
import Profile from '../assets/Profile.jpeg'
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';

const TripCarouselCard = ({trip_name, trip_to, trip_on}) => {
  return (
    <div className='carouselCard'>
                    <div className='UpperCarousel'>
                        <div style={{display: "flex", flexDirection: "column", paddingLeft: "10px"}}>
                            <img src={Profile} alt="Profile" className='profileImage'/>
                            <span>{trip_name}</span>
                        </div>
                        <div className='rightCarousel'>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <span>To</span>
                                <span>{trip_to} </span>
                            </div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <span>On</span>
                                <span>{trip_on} </span>
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