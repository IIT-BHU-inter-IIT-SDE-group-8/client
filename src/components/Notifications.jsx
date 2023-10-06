import React from "react";
import BottomNavbar from "./BottomNavbar";
import Slider from "./Carousel";

const Notifications = () => {
    return (
        <>
        <div style={{paddingBottom:'4vw', marginTop:'1vw'}} className="mainProfileContainer">
            <p style={{fontSize:'2vw', fontFamily:'cursive', margin:'0', padding:'0', paddingTop:'2vw'}}>Notifications</p>
            <div className="headingContainer">
                <p className="Heading">Trip Invites</p>
                <button className="HeadingBtn"><p className="btnText">See All</p></button>
            </div>
            <div style={{margin:'1vw'}} className="communityContainer">
                <Slider/>
            </div>
            <div className="headingContainer">
                <p className="Heading">Community Invites</p>
                <button className="HeadingBtn"><p className="btnText">See All</p></button>
            </div>
            <div style={{margin:'1vw'}} className="communityContainer">
                <Slider/>
            </div>
            <div className="headingContainer">
                <p className="Heading">Friend Requests</p>
                <button className="HeadingBtn"><p className="btnText">See All</p></button>
            </div>
            <div style={{margin:'2vw'}} className="communityContainer">
                <Slider/>
            </div>
        </div>
        <footer className="footer">
        <BottomNavbar/>
        </footer>
        </>
    )
}

export default Notifications