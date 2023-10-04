import React, {useState} from "react";
import '../auth.css';
import Cookies from "universal-cookie";
import authImage from '../assets/signup1.jpg';
import logoImage from '../assets/logo.png';
import gSignIn from '../assets/googleSignIn.png';
import { Link } from "react-router-dom";

const Auth1 = () => {

    const cookies = new Cookies();
    const signUpUrl = 'http://localhost:4000/users';
    const loginUrl = 'http://localhost:4000/login';
    const googleSignUpUrl = 'http://localhost:4000/auth/google';

    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState({
        name : '',
        email: '',
        password: ''
    })
    const {name, email, password} = formData;

    let requestData = {};

    if (isSignUp) {
      requestData = {
        name,
        email,
        password,
      };
    } else {
      requestData = {
        email,
        password,
      };
    }

    const url = isSignUp ? signUpUrl : loginUrl;

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSignUp = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(url,{
                method:'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if(response.ok)
            {
                const json = await response.json();
                const authToken = json.authToken;
                cookies.set('authtoken',authToken);
            }
            else
            {
                console.log('signUp failed');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const swithSignUpMode = () => {
        setIsSignUp((prevIsSignUp) => !(prevIsSignUp))
    }

    return(
        <>
        <div>
            <div className="mainContainer">
                <div className="imageContainer" style={{backgroundColor: "black"}}>
                    <img className="imageContainer" src={authImage} alt="authImage" />
                </div>
                <div className="inputContainer">
                    <div>
                        <div className="logoContainer">
                            <img style={{height: '80px', marginBottom: '10px'}} className="logoImage" src={logoImage} alt="logoImage" />
                        </div>
                        <div className="inputFields">
                            <form style={{display:"flex", flexDirection:'column'}} onSubmit={handleSignUp}>
                            {isSignUp && (
                                <input
                                className="input dimension"
                                name="name"
                                type="text"
                                placeholder="Username"
                                onChange={handleInputChange}
                                required />
                            )}
                            <input
                            className="input dimension"
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            onChange={handleInputChange}
                            required/>
                            <input
                            className="input dimension" 
                            type="password"
                            name="password" 
                            placeholder="Password"
                            onChange={handleInputChange}
                            required
                            />
                            {isSignUp && (
                                <input 
                                className="input dimension"
                                type="password"
                                name="password" 
                                placeholder="Confirm Password"
                                required
                                />
                            )}
                            <button type="submit" className="btn">{isSignUp ? "Sign Up" : "Sign In"}</button>
                            </form>
                            <p>
                             {isSignUp
                              ? "Already have an account ?" 
                              : "Don't have an account ?"
                              }
                              <span style={{cursor:'pointer'}} onClick={swithSignUpMode}>
                              {isSignUp ? ' Sign In' : ' Sign Up'}
                              </span>
                         </p>
                        </div>
                        <div className="OrContainer input">
                            <div className="horizontalLine input" style={{margin: '8px'}}></div>
                            OR
                            <div className="horizontalLine" style={{margin: '8px'}}></div>
                        </div>
                        <div className="googleSignUpContainer">
                            <Link to={googleSignUpUrl}>
                            <img src={gSignIn} style={{height: '6vh', margin: '8px', cursor:'pointer'}} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Auth1;