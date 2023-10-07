import Carousel from "react-elastic-carousel"
import React, {useState} from "react"
import profilePhoto from '../assets/Profile.jpeg'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const Slider = ({groups}) => {

    return (
    <>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          {groups && groups.map((ele) => {
            return  <div className="Item">
            <p style={{fontSize:'1vw', fontFamily:'cursive', margin:'0', padding:'0', paddingBottom:'0.8vw'}}>{ele.trip_name}</p>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'space-around', width:'100%', marginBottom:'1.5vw'}}>
              <div>
                <img style={{borderRadius:'50%', width:'3vw'}} src={profilePhoto} alt="" />
              </div>
              <div>
                <p style={{fontSize:'0.8vw', fontFamily:'cursive', margin:'0', padding:'0', paddingBottom:'0.5vw'}}>Created By</p>
                <p style={{fontSize:'0.8vw', fontFamily:'cursive', margin:'0', padding:'0'}}>Aditya</p>
              </div>
            </div>
            <div style={{display:"flex", flexDirection:'row', alignItems:'center', justifyContent:'space-around', width:'100%'}}>
              <div>
                <p style={{fontSize:'0.8vw', fontFamily:'cursive', margin:'0', padding:'0', paddingBottom:'0.5vw'}}>From</p>
                <p style={{fontSize:'0.8vw', fontFamily:'cursive', margin:'0', padding:'0'}}>{ele.trip_origin}</p>
              </div>
              <button style={{padding:'0.3vw', borderRadius:'0.3vw', border:'none', backgroundColor:'#93c7fd'}}><p style={{fontSize:'0.8vw', fontFamily:'cursive', margin:'0', padding:'0'}}>More Info</p></button>
              <div>
                <p style={{fontSize:'0.8vw', fontFamily:'cursive', margin:'0', padding:'0', paddingBottom:'0.5vw'}}>To</p>
                <p style={{fontSize:'0.8vw', fontFamily:'cursive', margin:'0', padding:'0'}}>{ele.trip_destination}</p>
              </div>
            </div>
          </div>
          })}
          {/* <div className="Item">Two</div>
          <div className="Item">Three</div>
          <div className="Item">Four</div>
          <div className="Item">Five</div>
          <div className="Item">Six</div>
          <div className="Item">Seven</div>
          <div className="Item">Eight</div> */}
        </Carousel>
      </div>
    </>
    )
}

export default Slider
