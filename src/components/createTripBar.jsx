import React, {useState} from "react";
import ModalInputBox from "./ModalInputBox";

const CreateTripBar = () => {
    const [showModal, setShowModal] = useState(false);
    const [desc, setDesc] = useState('');
    console.log("desc:",desc)
    const setDescriptionValue = (value) => {
        setDesc(value);
    }
    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    return(
        <>
        
        <div className="mainFilterContainer">
            <p style={{color: 'white', fontSize:'1.7vw'}}>Create Your Own Trip</p>
            <div className="tripInputContainer">
                <input className="tripInput leftTripInput" type="text" placeholder="Trip Name"/>
                <input className="tripInput" type="text" placeholder="Origin"/>
                <input className="tripInput" type="text" placeholder="Destination"/>
                <input className="tripInput" type="text" placeholder="Start Date/Time"/>
                <input className="tripInput" type="text" placeholder="End Date/Time"/>
                <input className="tripInput rightTripInputContainer" type="text" placeholder="Description" value={desc} onClick={openModal}/>
                <button className="createbutton"><p style={{fontSize:'1vw', fontFamily:'sans-serif', textAlign:'center'}}>Create</p></button>
            </div>
         </div>
         {showModal && <ModalInputBox closeModal= {closeModal} setDescriptionValue = {setDescriptionValue}/>}
        </>
    )
}

export default CreateTripBar