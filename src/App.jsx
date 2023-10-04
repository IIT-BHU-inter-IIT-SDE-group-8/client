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
                <Route path='/AllTrips' element={<AllTrips/>}/>
                <Route path='/MyTrip' element={<MyTrip/>}/>
                <Route path='/Community/CommunityTrips' element={<CommunityTrips/>}/>
                <Route path='/trips/:trip_id' element={<TripPage/>}/>
            </Routes>
        </Router>
        </>
    );
}

export default App;
