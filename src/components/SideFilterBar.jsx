import React from "react";
import '../Trip.css';
import searchIcon from '../assets/search-interface-symbol.png';

const SideFilterBar = () => {
    return(
        <>
         <div className="mainFilterContainer">
            <p style={{color: 'white', fontSize:'1.7vw'}}>Search For a Trip</p>
            <div className="tripInputContainer">
                <input className="tripInput leftTripInput" type="text" placeholder="Origin"/>
                <input className="tripInput" type="text" placeholder="Destination"/>
                <input className="tripInput" type="text" placeholder="Date"/>
                <div>
                    <div style={{display:'flex'}}>
                        <input className="tripInput" type="text" placeholder="from time"/>
                        <input className="tripInput rightTripInputContainer" type="text" placeholder="to time"/>
                    </div>
                    <p style={{padding:'0', margin:'0', position:'absolute', fontSize:'1vw'}}>Input time range between which you are searching for trip</p>
                </div>
                <div className="search">
                    <img style={{height:'2vw'}} src={searchIcon} alt="searcg" />
                </div>
            </div>
         </div>
        </>
    )
}

export default SideFilterBar;