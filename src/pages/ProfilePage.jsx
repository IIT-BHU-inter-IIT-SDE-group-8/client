import React, {useState ,useEffect} from "react";
import BottomNavbar from "../components/BottomNavbar";
import '../styles/imports/Profile.css'
import userProfile from '../assets/Profile.jpeg'
import Slider from "../components/Carousel";
import Modal from "../components/Modal";
import { getCookieValue } from "../components/cookieFunc";


const ProfilePage = ({myData,myBio, myTrips}) => {

    const [userData, setUserData] = useState([]);
    const [userBio, setUserBio] = useState([]);
    const [trips, setTrips] = useState([]);
    const userInfoUrl = myData;
    const authToken = getCookieValue(document.cookie, 'authtoken');
    const userBioUrl = myBio;
    const myTripUrl = myTrips;
    useEffect(() => {
        fetchUserDetails();
        fetchUserBio();
        fetchAllMyTrips();
    },[])

    const fetchUserDetails = async() => {
        try {
            const response = await fetch(userInfoUrl,{
                method:'GET',
                headers:{
                    'auth-token':authToken,
                    'Content-Type':'application/json'
                }
            })

            if(response.ok)
            {
                const json = await response.json();
                setUserData(json);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchAllMyTrips = async () => {
        const headers = {
            'auth-token':authToken,
            'Content-Type':'application/json'
        }

        const response = await fetch(myTripUrl,{
            method:'GET',
            headers:headers
        })

        if(response.ok)
        {
            const allParsedtrips = await response.json();
            setTrips(allParsedtrips.result);
        }
        else
        {
            console.log("error occured while fetching all your trips:",response.status);
        }
    }

    const fetchUserBio = async () => {
        try {
            const response = await fetch(userBioUrl,{
                method:'GET',
                headers:{
                    'auth-token':authToken,
                    'Content-Type':'application/json',
                }
            })

            if(response.ok)
            {
                const json = await response.json();
                setUserBio(json.result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div style={{paddingBottom:'6vw', marginTop:'1vw'}} className="mainProfileContainer">
                <div className="userDetailsContainer">
                    {userBio && userBio.map((ele) => {
                        return <div>
                        <img style={{ borderRadius: '50%', width: '7vw' }} src={ele.user_profile_photo ? ele.user_profile_photo : userProfile} alt="" />
                    </div>
                    })}
                    {userData && userData.map((ele) => {
                        return <div style={{ display: "flex", flexDirection: 'row' }}>
                        <div className="column">
                            <p className="textStyle">Username</p>
                            <p className="textStyle">{ele.user_name}</p>
                        </div>
                        <div className="column">
                            <p className="textStyle">Email</p>
                            <p className="textStyle">{ele.user_email}</p>
                        </div>
                        {userBio && userBio.map((ele) => {
                            return <div className="column">
                            <p className="textStyle">Phone</p>
                            <p className="textStyle">{ele.user_phone}</p>
                        </div>
                        })}
                    </div>
                    })}
                    <div style={{ display: "flex", flexDirection: 'row' }}>
                        <button onClick={openModal} className="profileBtn"><p className="btnText">Bio</p></button>
                        <button className="profileBtn"><p className="btnText">Edit profile</p></button>
                    </div>
                </div>
                <div className="headingContainer">
                    <p className="Heading">My Trips</p>
                    <button className="HeadingBtn"><p className="btnText">See All</p></button>
                </div>
                 <div className="communityContainer">
                        <Slider groups = {trips} />
                    </div>
                <div className="headingContainer">
                    <p className="Heading">My Communities</p>
                    <button className="HeadingBtn"><p className="btnText">See All</p></button>
                </div>
                <div className="communityContainer">
                    <Slider />
                </div>
                <div className="headingContainer">
                    <p className="Heading">My Friends</p>
                    <button className="HeadingBtn"><p className="btnText">See All</p></button>
                </div>
                <div className="communityContainer">
                    <Slider />
                </div>
                <div className="tripContainer">
                </div>
                <div className="friendsContainer">
                </div>
            </div>
            <footer className="footer">
                <BottomNavbar />
            </footer>
            {showModal && userBio && userBio.map((ele) => {
                return <Modal closeModal={closeModal} desc={ele.bio}/>
            })}
        </>
    )
}

export default ProfilePage