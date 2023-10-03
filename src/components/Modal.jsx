import React, { useEffect } from "react";
import '../Modal.css'

const Modal = ({ closeModal }) => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return() => {
            document.body.style.overflow = "scroll";
        }
    })

    return (
        <>
            <div className="modal-wrapper" onClick={closeModal}></div>
            <div className="modal-container">
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda suscipit quasi voluptatibus sit, illo molestias nisi sed quibusdam alias sunt numquam corrupti? Molestiae, eligendi. Laborum illum molestias adipisci rerum ipsum, amet obcaecati repudiandae quibusdam.</p>
                <button style={{height:'5vh', width:'7vw',borderRadius:'15px', backgroundColor:'#005fc2', cursor:"pointer"}} onClick={closeModal}>Close</button>
            </div>
        </>
    )
}

export default Modal