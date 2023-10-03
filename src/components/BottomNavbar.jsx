import React from "react";
import '../Navbar.css';
import TripIcon from '../assets/airplane.png';
import HomeIcon from '../assets/home.png';
import CommunityIcon from '../assets/group.png'
import NotificationIcon from '../assets/bell.png';
import messageIcon from '../assets/message.png';
import ProfileIcon from '../assets/user.png'

const BottomNavbar = () => {
    return(
        <>
            <nav className="Navbar">
                <div className="ItemContainer">
                    <img className="ItemContainer" src={TripIcon} alt="Trip" />
                </div>
                <div className="ItemContainer">
                    <img className="ItemContainer" src={HomeIcon} alt="Home" />
                </div>
                <div className="ItemContainer">
                    <img className="ItemContainer" src={CommunityIcon} alt="Community" />
                </div>
                <div className="ItemContainer">
                    <img className="ItemContainer" src={NotificationIcon} alt="Nptification" />
                </div>
                <div className="ItemContainer">
                    <img className="ItemContainer" src={messageIcon} alt="chat" />
                </div>
                <div className="ItemContainer">
                    <img className="ItemContainer" src={ProfileIcon} alt="chat" />
                </div>
            </nav>
        </>
    )
}

export default BottomNavbar