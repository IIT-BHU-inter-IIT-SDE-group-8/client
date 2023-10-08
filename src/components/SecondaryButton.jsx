import React from 'react'

const SecondaryButton = ({text, setShowModal}) => {
  return (
    <button style={{margin: '0.7vw', height: '3vw', width: '6vw', borderRadius: '8px', backgroundColor: '#93c7fd', cursor: "pointer", border:'0px'}} onClick={()=>setShowModal(true)}><p className="buttonText">{text}</p></button>
  )
}

export default SecondaryButton