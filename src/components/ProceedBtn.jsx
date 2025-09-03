import React from 'react'
import './Btn.css'
import right_icon from '../assets/buttin-icon-shrunk-right.png'

const ProceedBtn = () => {
  return (
    <div className='proceed__btn'>
      <h2>Proceed</h2>
        <img src={right_icon} alt="" />
    </div>
  )
}

export default ProceedBtn
