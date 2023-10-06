import React from "react";
import BottomNavbar from "./BottomNavbar";
import '../Profile.css'
import userProfile from '../assets/Profile.jpeg'
import Slider from "./Carousel";

const ProfilePage = () => {
    return (
        <>
        <div className="mainProfileContainer">
            <div className="userDetailsContainer">
                <div>
                    <img style={{borderRadius:'50%', width:'7vw'}} src={userProfile} alt="" />
                </div>
                <div style={{display:"flex", flexDirection:'row'}}>
                    <div className="column">
                        <p className="textStyle">Friends</p>
                        <p className="textStyle">1234</p>
                    </div>
                    <div className="column">
                        <p className="textStyle">Trips</p>
                        <p className="textStyle">140</p>
                    </div>
                    <div className="column">
                        <p className="textStyle">Communities</p>
                        <p className="textStyle">34</p>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:'row'}}>
                    <button className="profileBtn"><p className="btnText">Bio</p></button>
                    <button className="profileBtn"><p className="btnText">Edit profile</p></button>
                </div>
            </div>
            <div className="headingContainer">
                <p className="Heading">Mutual Trips</p>
                <button><p className="btnText">See All</p></button>
            </div>
            <div className="communityContainer">
                <Slider/>
            </div>
            <div className="tripContainer">
            </div>
            <div className="friendsContainer">
            </div>
        </div>
        <footer className="footer">
        <BottomNavbar/>
        </footer>
        </>
    )
}

export default ProfilePage