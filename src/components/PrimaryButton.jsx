import React from 'react'

const PrimaryButton = ({text}) => {
  return (
    <button style={{margin: '0.7vw', height: '3vw', width: '6vw', borderRadius: '8px', backgroundColor: '#005fc2', cursor:'pointer', border:'0px', color: "white"}}><p className="buttonText">{text}</p></button>
  )
}

export default PrimaryButton