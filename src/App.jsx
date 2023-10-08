// import React, { useState } from 'react';
// import { StreamChat } from 'stream-chat';
// import { Chat } from 'stream-chat-react';
// import Cookies from 'universal-cookie';
import Auth1 from './components/Auth'
import {BrowserRouter as Router,
        Route,
        Routes
    } from 'react-router-dom'

// import { ChannelListContainer, ChannelContainer, Auth } from './components';

// import 'stream-chat-react/dist/css/index.css';
import './App.css';
import Bio from './components/Bio';
import AllTrips from './components/Alltrips';
import MyTrip from './components/MyTips';
import CommunityTrips from './components/CommunityTrips';
import TripPage from './components/tripPage';
import ProfilePage from './components/ProfilePage';
import Notifications from './components/Notifications';
import { getCookieValue } from './components/cookieFunc';

// const cookies = new Cookies();

// const apiKey = 'pqbq6waxtf2e';

// const authToken = cookies.get("token");

// const client = StreamChat.getInstance(apiKey);

// if(authToken) {
//     client.connectUser({
//         id: cookies.get('userId'),
//         name: cookies.get('username'),
//         fullName: cookies.get('fullName'),
//         image: cookies.get('avatarURL'),
//         hashedPassword: cookies.get('hashedPassword'),
//         phoneNumber: cookies.get('phoneNumber'),
//     }, authToken)
// }


const App = () => {
    const authToken = getCookieValue(document.cookie,'authtoken');
    const userDataCookie = getCookieValue(document.cookie,'data');

    const newuserData = JSON.parse(decodeURIComponent(userDataCookie));
    const userId = newuserData.user.id;
    const myData = `http://localhost:4000/users/${userId}`;
    const myBio = `http://localhost:4000/users/bio`;
    const myTrips = `http://localhost:4000/trips/myTrips`;
    const userData = ``;
    const userBio = ``;
    const userTrips = ``;
//     const [createType, setCreateType] = useState('');
//     const [isCreating, setIsCreating] = useState(false);
//     const [isEditing, setIsEditing] = useState(false);

    // if(!authToken) return <Auth />

    return (
        
        <>
        {/* <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
                <ChannelContainer 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    createType={createType}
                />
            </Chat>
        </div> */}
        <Router>
            <Routes>
                <Route path='/' element = {<Auth1/>}/>
                <Route path='/Bio' element = {<Bio/>}/>
                <Route path='/AllTrips' element={<AllTrips groupName = {"Trips of friend and Community"}/>}/>
                <Route path='/Notification' element={<Notifications/>}/>
                <Route path='/MyTrip' element={<MyTrip/>}/>
                <Route path='/Community/CommunityTrips' element={<CommunityTrips/>}/>
                <Route path='/trips/:trip_id' element={<TripPage/>}/>
                <Route path='/myProfile' element={<ProfilePage myData = {myData} myBio = {myBio} myTrips = {myTrips}/>}/>
                <Route path='/users/:user_id' element={<ProfilePage/>}/>
            </Routes>
        </Router>
        </>
    );
}

export default App;
