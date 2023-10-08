import React ,{useState} from 'react'
import SuggestedFriendsCommunityCard from './SuggestedFriendsCommunityCard'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";


const SuggestedCommunities = () => {
  const [data, setData] = useState([{
    "id": "1",
    "name": "Community 1"
  },
  {
    "id": "2",
    "name": "Community 2"
  },
  {
    "id": "3",
    "name": "Community 3"
  },
  {
    "id": "4",
    "name": "Community 4"
  },
  {
    "id": "5",
    "name": "Community 5"
  },
  {
    "id": "6",
    "name": "Community 6"
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
            <h2>Suggested Communities</h2>
            <div className='Carousel'>
            <div onClick={handlePrev} style={{ "cursor": "pointer" }}>
                    <AiOutlineLeft className='arrowIcon' />
                </div>
                {
                    data.slice(currentIndex, currentIndex + 3).map((community) => (
                        <SuggestedFriendsCommunityCard buttonText={"Join"} name={community.name} key={community.id}/>
                    ))
                }
                <div onClick={handleNext} style={{ "cursor": "pointer" }} s>
                    <AiOutlineRight className='arrowIcon' />
                </div>
            </div>
        </div>
    )
}

export default SuggestedCommunities