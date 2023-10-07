import React, {useState, useEffect} from "react";
import {getCookieValue} from './cookieFunc'
import Participants from './Participants'

const TripParticipants = ({closeModal}) => {
    const getParticipantsUrl = `http://localhost:4000/trips/45/participants`;
    const [participants, setParticipants] = useState([]);
    const authToken = getCookieValue(document.cookie,'authtoken');
    useEffect(()=>{
        fetchParticipants();
    },[])

    const fetchParticipants = async () => {
        try {
            const response = await fetch(getParticipantsUrl, {
                method: 'GET',
                headers:{
                    'auth-token':authToken,
                    'Content-Type':'application/json',
                }
            })

            if(response.ok)
            {
                const json = await response.json();
                setParticipants(json.results);
            }
        } catch (error) {
            console.log(error);
        }
    }
        return (
            <>
            <div className="modal-wrapper" onClick={closeModal}></div>
            <div className="modal-container">
                <p className="participant">Participants</p>
                {participants && participants.map((ele) => {
                    return <div>
                        <Participants name = {ele.user_name} email = {ele.user_email}/>
                    </div>
                })}   
                <button style={{height:'auto', width:'auto',borderRadius:'0.6svw', backgroundColor:'#005fc2', cursor:"pointer", padding:'0.4vw'}} onClick={closeModal}><p className="text fontSize3">Close</p></button>
            </div>
            
        </>
        )
}

export default TripParticipants;