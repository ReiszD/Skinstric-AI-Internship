import React from 'react'
import './Footer.css'
import BackBtn from './BackBtn'
import { Link } from 'react-router-dom'

const DemographicsFooter = () => {
  return (
    <div className='footer'>
        <Link to='/analysis'>
      <BackBtn />
        </Link>
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
