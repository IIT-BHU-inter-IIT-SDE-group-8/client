import React, {useState, useEffect} from "react";
import Participants from './Participants'

const TripParticipants = ({closeModal}) => {
        return (
            <>
            <div className="modal-wrapper" onClick={closeModal}></div>
            <div className="modal-container">
                <p className="participant">Participants</p>
                    <div>
                    <Participants/>
                    </div>
                <button style={{height:'auto', width:'auto',borderRadius:'0.6svw', backgroundColor:'#005fc2', cursor:"pointer", padding:'0.4vw'}} onClick={closeModal}><p className="text fontSize3">Close</p></button>
            </div>
            
        </>
        )
}

export default TripParticipants;