import React from "react";
import '../styles/Trip.css';
import searchIcon from '../assets/search-interface-symbol.png';

const SideFilterBar = () => {
    return (
        <>
            <div className="mainFilterContainer">
                <p style={{ color: 'white', fontSize: '1.7vw' }}>Search For a Trip</p>
                <div className="tripInputContainer">
                    <input className="tripInput leftTripInput" type="text" placeholder="Origin" />
                    <input className="tripInput" type="text" placeholder="Destination" />
                    <div className="input-group">
                        <label htmlFor="departure" className="input-tag">Departure Date</label>
                        <input className="tripInput" type="date" id="departure" />
                    </div>                    {/* <label>Input time range between which you are searching for trip</label> */}
                    <div className="input-group">
                        <label htmlFor="from_time" className="input-tag">From time</label>
                        <input className="tripInput" type="time" placeholder="from time" id="from_time" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="to_time" className="input-tag">To time</label>
                        <input className="tripInput rightTripInputContainer" type="time" id="to_time" />
                    </div>

                    <div className="search">
                        <img style={{ height: '2vw' }} src={searchIcon} alt="searcg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideFilterBar;