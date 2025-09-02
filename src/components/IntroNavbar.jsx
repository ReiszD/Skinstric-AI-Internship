import React from 'react'
import './Navbar.css'
import rectangle_left from '../assets/Rectangle 2710.png';
import rectangle_right from '../assets/Rectangle 2711.png';

const IntroNavbar = () => {
  return (
    <div className='intro__navbar'>
        <header className="header">
        <div className="logo__section">
          <a href="/">Skinstric</a>
          <img src={rectangle_left} alt="" />
          <p>Intro</p>
          <img src={rectangle_right} alt="" />
        </div>
        <button className="code__btn">Enter Code</button>
      </header>
    </div>
  )
}

export default IntroNavbar
