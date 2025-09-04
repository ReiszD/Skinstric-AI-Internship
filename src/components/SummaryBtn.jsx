import React from 'react'
import './Btn.css'
import right_icon from '../assets/buttin-icon-shrunk-right.png'

const SummaryBtn = () => {
  return (
    <div className='proceed__btn'>
      <h2>Get Summary</h2>
        <img src={right_icon} alt="" />
    </div>
  )
}

export default SummaryBtn
