import React from "react";
import ProfilePicture from '../assets/Profile.jpeg'

const Participants = () => {
    return (
        <>
            <div className="participantsContainer">
                <div>
                    <img className="profilePicContainer" src={ProfilePicture} />
                </div>
                <div style={{ display: "flex", flexDirection: 'column' }}>
                    <p className="text fontSize" style={{ marginBottom: '0.8vw' }}>Name</p>
                    <p className="text fontSize">email</p>
                </div>
                <div style={{ display: "flex", flexDirection: 'column' }}>
                    <p className="text fontSize" style={{ marginBottom: '0.8vw' }}>Name</p>
                    <p className="text fontSize" >Email</p>
                </div>
                <div>
                    <button style={{ height: 'auto', width: 'auto', borderRadius: '15px', backgroundColor: '#005fc2', cursor: "pointer", margin: '1vw', padding: '0.3vw' }}><p className="text fontSize2">More Info</p></button>
                    <button style={{ height: 'auto', width: 'auto', borderRadius: '15px', backgroundColor: '#005fc2', cursor: "pointer", padding: '0.3vw' }}><p className="text fontSize2">Add Friend</p></button>
                </div>
            </div>
        </>
    )
}

export default Participants