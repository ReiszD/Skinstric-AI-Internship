import React from 'react';
import './Navbar.css';
import rectangle_left from '../assets/Rectangle 2710.png';
import rectangle_right from '../assets/Rectangle 2711.png';

const AnalysisNavbar = () => {
  return (
        <div className='intro__navbar'>
        <header className="header">
        <div className="logo__section">
          <a href="/">Skinstric</a>
          <img src={rectangle_left} alt="" />
          <p>Analysis</p>
          <img src={rectangle_right} alt="" />
        </div>
      </header>
    </div>
  )
}

export default AnalysisNavbar
