import React ,{useState} from 'react'
import SuggestedFriendsCommunityCard from './SuggestedFriendsCommunityCard'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";


const SuggestedFriends = () => {
  const [data, setData] = useState([{
    "id": "1",
    "name": "Friend 1"
  },
  {
    "id": "2",
    "name": "Friend 2"
  },
  {
    "id": "3",
    "name": "Friend 3"
  },
  {
    "id": "4",
    "name": "Friend 4"
  },
  {
    "id": "5",
    "name": "Friend 5"
  },
  {
    "id": "6",
    "name": "Friend 6"
  }])

  const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };
    return (
        <div style={{ "margin-top": "30px" }}>
            <h2>Suggested Friends</h2>
            <div className='Carousel'>
            <div onClick={handlePrev} style={{ "cursor": "pointer" }}>
                    <AiOutlineLeft className='arrowIcon' />
                </div>
                {
                    data.slice(currentIndex, currentIndex + 3).map((friend) => (
                        <SuggestedFriendsCommunityCard buttonText={"Add Friend"} key={friend.id} name={friend.name} />
                    ))
                }
                <div onClick={handleNext} style={{ "cursor": "pointer" }} s>
                    <AiOutlineRight className='arrowIcon' />
                </div>
            </div>
        </div>
    )
}

export default SuggestedFriends