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
    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element = {<Auth1/>}/>
                <Route path='/bio' element = {<Bio/>}/>
                <Route path='/allTrips' element={<AllTrips/>}/>
                <Route path='/myTrip' element={<MyTrip/>}/>
                <Route path='/community/communityTrips' element={<CommunityTrips/>}/>
                <Route path='/trips/:trip_id' element={<TripPage/>}/>
                <Route path='/chatapp' element={<ChatApp/>} />
                
            </Routes>
        </Router>
        </>
    );
}

export default App;
