import React from 'react'
import './Btn.css'
import left_icon from "../assets/buttin-icon-shrunk.png";

const BackBtn = () => {
  return (
    <div className='back__btn'>
        <img src={left_icon} alt="" />
      <h2>Back</h2>
    </div>
  )
}

export default BackBtn
