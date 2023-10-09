import React ,{useState} from 'react'
import SuggestedFriendsCommunityCard from './SuggestedFriendsCommunityCard'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";


const SuggestedFriends = () => {
  const [data, setData] = useState([])
    return (
        <div style={{ "margin-top": "30px" }}>
            <h2>Suggested Friends</h2>
            <div className='Carousel'>
                <AiOutlineLeft className='arrowIcon' />
                <SuggestedFriendsCommunityCard buttonText={"Add Friend"}/>
                <SuggestedFriendsCommunityCard buttonText={"Add Friend"}/>
                <SuggestedFriendsCommunityCard buttonText={"Add Friend"}/>
                <AiOutlineRight className='arrowIcon' />
            </div>
        </div>
    )
}

export default SuggestedFriends