import React ,{useState} from 'react'
import SuggestedFriendsCommunityCard from './SuggestedFriendsCommunityCard'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";


const SuggestedCommunities = () => {
  const [data, setData] = useState([])
    return (
        <div style={{ "margin-top": "30px" }}>
            <h2>Suggested Communities</h2>
            <div className='Carousel'>
                <AiOutlineLeft className='arrowIcon' />
                <SuggestedFriendsCommunityCard buttonText={"Join"}/>
                <SuggestedFriendsCommunityCard buttonText={"Join"}/>
                <SuggestedFriendsCommunityCard buttonText={"Join"}/>
                <AiOutlineRight className='arrowIcon' />
            </div>
        </div>
    )
}

export default SuggestedCommunities