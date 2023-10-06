import Carousel from "react-elastic-carousel"
import React from "react"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const Slider = () => {
    return (
        <>
      {/* <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1> */}
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <div className="Item">One</div>
          <div className="Item">Two</div>
          <div className="Item">Three</div>
          <div className="Item">Four</div>
          <div className="Item">Five</div>
          <div className="Item">Six</div>
          <div className="Item">Seven</div>
          <div className="Item">Eight</div>
        </Carousel>
      </div>
    </>
    )
}

export default Slider
