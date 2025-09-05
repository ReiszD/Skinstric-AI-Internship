import React from 'react'
import './Footer.css'
import BackBtn from './BackBtn'

const DemographicsFooter = () => {
  return (
    <div className='footer'>
      <BackBtn />
        <h1 className='footer__text'>
          If A.I. estimate is wrong, select the correct one.
        </h1>
        <div className='footer__buttons'>
          <button className='reset__btn'>Reset</button>
          <button className='confirm__btn'>Confirm</button>
        </div>
      
    </div>
  )
}

export default DemographicsFooter
