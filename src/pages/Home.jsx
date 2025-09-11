import React, { useState, useRef } from "react";
import "./Home.css";
import left_dotted from "../assets/Rectangle 2779.png";
import right_dotted from "../assets/Rectangle 2778.png";
import left_icon from "../assets/buttin-icon-shrunk.png";
import right_icon from "../assets/buttin-icon-shrunk-right.png";
import IntroNavbar from "../components/IntroNavbar";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const notify = () => toast("Not Programmed Yet")
  const titleRef = useRef(null);
  const leftButtonRef = useRef(null);

  const handleHover = () => {
    gsap.to(titleRef.current, { x: "-20%", textAlign: "left", duration: 0.6, ease: "power2.out" });
    gsap.to(leftButtonRef.current, { x: "-50%", opacity: 0, duration: 0.6, ease: "power2.out" });
  };

  const handleHoverOut = () => {
    gsap.to(titleRef.current, { x: "0%", duration: 0.6, ease: "power2.out" });
    gsap.to(leftButtonRef.current, { x: "0%", opactiy: 1, duration: 0.6, ease: "power2.out" });
  }

  return (
    
    <div className="home">
      <IntroNavbar />
      <ToastContainer position="top-right" />
      <div className="dotted__section right" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
        <img src={right_dotted} alt="Right Dots" className="dots" />
        <Link to="/form" className="icon__btn--link">
          <button className="icon__button--right">
            Take Test
            <img src={right_icon} alt="Icon" className="button__icon--right" />
          </button>
        </Link>
      </div>

      <div className="dotted__section left" ref={leftButtonRef}>
        <img src={left_dotted} alt="Left Dots" className="dots" />
        <button className="icon__button--left">
          <img src={left_icon} alt="Icon" className="button__icon--left" onClick={notify} />
          Discover A.I.
        </button>
      </div>

      <section className="home__title" ref={titleRef}>
        <h1>
          <span>Sophisticated</span>
          <span>skincare</span>
        </h1>
      </section>

      <div className="caption__paragraph">
        <p>
          Skinstric developed an A.I. that creates a highly-personalised routine
          tailored to what your skin needs.
        </p>
      </div>
    </div>
  );
};

export default Home;
