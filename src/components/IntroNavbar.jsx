import React from 'react'
import './Navbar.css'
import rectangle_left from '../assets/Rectangle 2710.png';
import rectangle_right from '../assets/Rectangle 2711.png';
import { ToastContainer, toast } from 'react-toastify';

const IntroNavbar = () => {
  const notify = () => toast("Not Programmed Yet")
  return (
    <div className='intro__navbar'>
        <header className="header">
        <div className="logo__section">
          <a href="/">Skinstric</a>
          <img src={rectangle_left} alt="" />
          <p>Intro</p>
          <img src={rectangle_right} alt="" />
        </div>
        <ToastContainer position="top-right" />
        <button className="code__btn" onClick={notify}>Enter Code</button>
      </header>
    </div>
  )
}

export default IntroNavbar
