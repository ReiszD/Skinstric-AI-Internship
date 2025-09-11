import React from 'react'
import './Footer.css'
import BackBtn from './BackBtn'
import { Link, useNavigate } from 'react-router-dom'

const DemographicsFooter = () => {
  const navigate = useNavigate();
  return (
    <div className='footer'>
      <div className='footer__back--btn'>
        <Link to='/analysis'>
          <BackBtn />
        </Link>
      </div>
        
        <div className='footer__description'>
        <h1 className='footer__text'>
          If A.I. estimate is wrong, select the correct one.
        </h1>
        <div className='footer__buttons'>
          <button className='reset__btn' onClick={() => navigate('/upload')}>Reset</button>
          <button className='confirm__btn' onClick={() => navigate('/submitted')}>Confirm</button>
        </div>
        </div>
      
    </div>
  )
}

export default DemographicsFooter
