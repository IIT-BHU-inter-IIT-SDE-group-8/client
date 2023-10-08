import React, {useState} from "react";
import ModalInputBox from "./ModalInputBox";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

const CreateCommunityBar = () => {
    const [showModal, setShowModal] = useState(false);
    const [desc, setDesc] = useState('');
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
            <p style={{color: 'white', fontSize:'1.7vw'}}>Create Your Community</p>
            <div className="communityInputContainer">
                <input className="tripInput leftTripInput" type="text" placeholder="Name"/>
                <div className="tripInput" id="ParticipantsBox" style={{"width": "250px", "overflowX": "scroll"}}>
                    <div className="participant"><span>Participant 1</span></div>
                    <div className="participant"><span>Participant 1</span></div>
                    <div className="participant"><span>Participant 1</span></div>
                    <div className="participant"><span>Participant 1</span></div>
                </div>
                <SecondaryButton text={"Add Participants"} width="150px"/>
                <PrimaryButton text={"Create"} width="6vw"/>
            </div>
         </div>
         {showModal && <ModalInputBox closeModal= {closeModal} setDescriptionValue = {setDescriptionValue}/>}
        </>
    )
}

export default CreateCommunityBar