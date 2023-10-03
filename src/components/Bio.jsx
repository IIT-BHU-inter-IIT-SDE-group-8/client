import React, { useState } from "react";
import '../auth.css'
import authImage from '../assets/signup1.jpg'
import logoImage from '../assets/logo.png'

const Auth1 = () => {

    const url = 'http://localhost:4000/bio';

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    }

    return (
        <>
            <div>
                <div className="mainContainer">
                    <div className="imageContainer" style={{ backgroundColor: "black" }}>
                        <img className="imageContainer" src={authImage} alt="authImage" />
                    </div>
                    <div className="inputContainer">
                        
                            <div className="logoContainer">
                                <img style={{ height: '80px', marginBottom: '10px' }} className="logoImage" src={logoImage} alt="logoImage" />
                            </div>
                            <h3>Bio</h3>
                            <div className="inputFields">
                                <input
                                    className="input dimension"
                                    name="phone"
                                    type="number"
                                    placeholder="Phone Number"
                                    required />
                                <input
                                    className="input dimension"
                                    name="location"
                                    type="text"
                                    placeholder="Favourite Location"
                                    required />
                                <input
                                    className="input dimension"
                                    type="text"
                                    name="vehicle"
                                    placeholder="Preferred Vehicle"
                                    required
                                />
                                <input
                                    className="input dimension"
                                    type="text"
                                    name="bio"
                                    placeholder="Something About You"
                                    required
                                />
                                <label style={{marginBottom:'1.5vh', fontFamily:'sans-serif', fontWeight:'bold'}} htmlFor="profilePhote">Upload Profile Photo</label>
                                <input
                                    // className="input dimension"
                                    name="profilePhoto"
                                    type="file"
                                    style={{fontSize:'2vh', fontFamily:'sans-serif',height:'5vh',width:'18vw', fontWeight:'bold'}}
                                    accept="image/*"
                                    // placeholder="Upload your profile photo"
                                    onChange={handleFileInputChange}
                                    required />
                                <button className="btn">Finish</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth1;