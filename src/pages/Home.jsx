import React from 'react'
import './Home.css';
import rectangle_left from '../assets/Rectangle 2710.png';
import rectangle_right from '../assets/Rectangle 2711.png';
import left_dotted from '../assets/Rectangle 2779.png';
import right_dotted from '../assets/Rectangle 2778.png';
import left_icon from '../assets/buttin-icon-shrunk.png';
import right_icon from '../assets/buttin-icon-shrunk-right.png'

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="logo__section">
          <a href="/">Skinstric</a>
          <img src={rectangle_left} alt="" />
          <p>Intro</p>
          <img src={rectangle_right} alt="" />
        </div>
        <button className="code__btn">Enter Code</button>
      </header>
      <section className="home__title">
        <h1>
          <span>Sophisticated</span>
          <span>skincare</span>
        </h1>
      </section>
      <div className="caption__paragraph">
        <p>
          Skinstric developed an A.I. that creates a
          highly-personalised routine tailored to
          what your skin needs.
        </p>
      </div>
      <div className="dotted__section left">
        <img src={left_dotted} alt="Left Dots" className="dots" />
        <button className="icon__button--left">
          <img src={left_icon} alt="Icon" className="button__icon--left" />
          Discover A.I.
        </button>
      </div>
      <div className="dotted__section right">
        <img src={right_dotted} alt="Right Dots" className="dots" />
        <button className="icon__button--right">
          Take Test
          <img src={right_icon} alt="Icon" className="button__icon--right" />
        </button>
      </div>

    </div>
  )
}

export default Home;
