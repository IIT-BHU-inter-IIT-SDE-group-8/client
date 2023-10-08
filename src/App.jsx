import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import Auth1 from './pages/Auth'
import {BrowserRouter as Router,
        Route,
        Routes
    } from 'react-router-dom'

import 'stream-chat-react/dist/css/index.css';
import Bio from './pages/Bio';
import AllTrips from './pages/Alltrips';
import MyTrip from './pages/MyTips';
import CommunityTrips from './pages/CommunityTrips';
import TripPage from './pages/tripPage';
import ProfilePage from './pages/ProfilePage';
import Notifications from './pages/Notifications';
import { getCookieValue } from './components/cookieFunc';
import ChatApp from './pages/ChatApp';

const cookies = new Cookies();

const apiKey = 'pqbq6waxtf2e';

const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if(authToken) {
    client.connectUser({
        id: cookies.get('userId'),
        name: cookies.get('username'),
        fullName: cookies.get('fullName'),
        image: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword'),
        phoneNumber: cookies.get('phoneNumber'),
    }, authToken)
}


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
    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

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
<<<<<<< HEAD
                <Route path='/bio' element = {<Bio/>}/>
                <Route path='/allTrips' element={<AllTrips/>}/>
                <Route path='/myTrip' element={<MyTrip/>}/>
                <Route path='/community/communityTrips' element={<CommunityTrips/>}/>
                <Route path='/trips/:trip_id' element={<TripPage/>}/>
=======
                <Route path='/Bio' element = {<Bio/>}/>
                <Route path='/AllTrips' element={<AllTrips groupName = {"Trips of friend and Community"}/>}/>
                <Route path='/Notification' element={<Notifications/>}/>
                <Route path='/MyTrip' element={<MyTrip/>}/>
                <Route path='/Community/CommunityTrips' element={<CommunityTrips/>}/>
                <Route path='/trips/:trip_id' element={<TripPage/>}/>
                <Route path='/myProfile' element={<ProfilePage myData = {myData} myBio = {myBio} myTrips = {myTrips}/>}/>
                <Route path='/users/:user_id' element={<ProfilePage/>}/>
>>>>>>> f95923e7741bcbf38bb416570f6e2a5569b4201d
                <Route path='/chatapp' element={<ChatApp/>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
