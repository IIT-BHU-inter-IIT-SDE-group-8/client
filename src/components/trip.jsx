import React, {useState} from "react";
import '../styles/Trip.css'
import Profile from '../assets/Profile.jpeg'
import Modal from "./Modal";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Trip = ({origin, destination, desc, arrival, departure}) => {
    const [showModal, setShowModal] = useState(false);
    const closeShowModal = () =>{
        return setShowModal(false);
    } 
        
    return(
        <>
        <div className="mainCardContainer">
            <div className="TripImageContainer">
                <img style={{borderRadius: '30px', width:'7.5vw', margin:'3vw'}} src={Profile} alt="Profile" />
            </div>
            <div className="TripCreatorNameContainer">
                <p style={{fontSize:'1.5vw', fontFamily:'sans-serif'}}>Posted By</p>
                <p style={{fontSize:'1.3vw', fontFamily:'sans-serif'}}>Name</p>
            </div>
            <div className="TripInfoContainer">
                <span><p style={{fontFamily:'sans-serif',fontSize:'1vw'}}>From : {origin}</p><p style={{fontFamily:'sans-serif',fontSize:'1vw'}}>To : {destination}</p><p style={{fontFamily:'sans-serif',fontSize:'1vw'}}>Starting Date/Time : {arrival}</p><p style={{fontFamily:'sans-serif',fontSize:'1vw'}}>End Date/Time : {departure}</p></span>
            </div>
            <div className="Info"></div>
            <div className="ButtonsContainer">
                <SecondaryButton text={"Info"} setShowModal={setShowModal} width={"6vw"}/>
                <PrimaryButton text={"Join"} width={"6vw"}/>
            </div>
        </div>
        {showModal && <Modal closeModal = {closeShowModal} desc = {desc}/>}
        </>
    )
}

export default Trip