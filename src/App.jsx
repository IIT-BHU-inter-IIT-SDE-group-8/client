import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

import 'stream-chat-react/dist/css/index.css';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Map from './components/Map';

const cookies = new Cookies();

const apiKey = 'pqbq6waxtf2e';

const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

if (authToken) {
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

    // if (!authToken) return <Auth />

    // useEffect(() => {
    //     if('serviceWorker' in navigator) {
    //         navigator.serviceWorker.register('./sw.js').then(reg => {
    //             console.log("Serice Worker registered", reg);
    //         }).catch(err => console.log("Error registering ", err))
    //       }
    // },[])

    return (
        <div className="app__wrapper">
            <Router>
                <Routes>
                    <Route exact path='/chat' element={<Chat client={client} theme="team light">
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
                    </Chat>} />
                    <Route exact path='/map' element={<Map />} />

                </Routes>

            </Router>
        </div>
    );
}

export default App;
