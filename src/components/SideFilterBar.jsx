import React from "react";
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
                {/* <label>Input time range between which you are searching for trip</label> */}
                <input className="tripInput" type="text" placeholder="from time"/>
                <input className="tripInput rightTripInputContainer" type="text" placeholder="to time"/>
                
                <div className="search">
                    <img style={{height:'2vw'}} src={searchIcon} alt="searcg" />
                </div>
            </div>
         </div>
        </>
    )
}

export default SideFilterBar;