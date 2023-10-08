// import React, { useState } from 'react';
// import { StreamChat } from 'stream-chat';
// import { Chat } from 'stream-chat-react';
// import Cookies from 'universal-cookie';
import Auth1 from './pages/Auth'
import {BrowserRouter as Router,
        Route,
        Routes
    } from 'react-router-dom'

// import { ChannelListContainer, ChannelContainer, Auth } from './components';

// import 'stream-chat-react/dist/css/index.css';
import './styles/App.css';
import Bio from './pages/Bio';
import AllTrips from './pages/Alltrips';
import MyTrip from './pages/MyTips';
import CommunityTrips from './pages/CommunityTrips';
import TripPage from './pages/tripPage';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Community from './pages/Community';
import MyCommunities from './pages/Mycommunities';
import Map from './components/Map';

// const cookies = new Cookies();

// const apiKey = 'pqbq6waxtf2e';

// const authToken = cookies.get("token");

// const client = StreamChat.getInstance(apiKey);

// if (authToken) {
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

    // if (!authToken) return <Auth />

    // useEffect(() => {
    //     if('serviceWorker' in navigator) {
    //         navigator.serviceWorker.register('./sw.js').then(reg => {
    //             console.log("Serice Worker registered", reg);
    //         }).catch(err => console.log("Error registering ", err))
    //       }
    // },[])
    // if (!authToken) return <Auth />

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
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Profile' element={<Profile/>}/>
                <Route path='/Community' element={<Community/>}/>
                <Route path='/MyCommunities' element={<MyCommunities/>}/>
                <Route path='/map' element={<Map/>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
