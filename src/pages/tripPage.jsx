import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import ProfilePicture from '../assets/Profile.jpeg'
import messsage from '../assets/message.png'

const TripPage = () => {
    return (
        <>
        <div className="mainTripPageContainer">
            <div className="mainProfilePicContainer">
                <div className="TopContainer">
                    <div className="imageBox">
                        <img className="profileImg" style={{borderRadius: '50%', height: '8vw'}} src={ProfilePicture} alt="ProfilePicture" />
                    </div>
                    <div className="TripCreatorInfoBox">
                        <p className="mediumSizeTag">Trip Creator Name : Name</p>
                        <p className="smallTag">Trip Creator Email : Email</p>
                        <img style={{width: '2.5vw'}} src={messsage} alt="message" />
                    </div>
                    <div className="ButtonBox">
                        <button className="seeParticipantsBtn"><p className="smallTag">See Paticipants</p></button>
                    </div>
                </div>
                <div className="rightContainer">
                    <div style={{display:"flex", flexDirection:'row'}}>
                        <div className="smallLeftContainer">
                            <p className="mediumSizeTag">Trip Name :</p>
                            <p className="mediumSizeTag">Trip Origin :</p>
                            <p className="mediumSizeTag">Trip Destination :</p>
                            <p className="mediumSizeTag">Trip Start Date/Time :</p>
                            <p className="mediumSizeTag">Trip End Date/Time :</p>
                        </div>
                        <div className="smallrightContainer">
                            <p className="mediumSizeTag">Name</p>
                            <p className="mediumSizeTag">Origin</p>
                            <p className="mediumSizeTag">Destination</p>
                            <p className="mediumSizeTag">Start</p>
                            <p className="mediumSizeTag">End</p>
                        </div>
                    </div>
                    <div className="descriptionContainer">
                        <p className="headingStyle">Description</p>
                        <p style={{marginLeft:'1vw', fontSize:'1vw', fontFamily:'cursive'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ad nobis saepe accusamus maxime. Tempore provident est animi pariatur? Veritatis similique nostrum vero debitis? Qui vero totam aliquam laboriosam voluptatum facilis rem modi, aut harum excepturi rerum omnis ad ipsam expedita! Consequuntur vitae libero rerum. Facilis corrupti ut reiciendis rerum?</p>
                    </div>
                </div>
            </div>
            <div className="BottonNavbar">
                <BottomNavbar/>
            </div>
        </div>
        </>
    )
}

export default TripPage;