import React, { useEffect, useRef, useState } from "react";
import "./Form.css";
import IntroNavbar from "../components/IntroNavbar";
import AnalysisTag from "../components/AnalysisTag";
import BackBtn from "../components/BackBtn";
import ProceedBtn from "../components/ProceedBtn";
import full_rectangle from "../assets/Full_Rectangle.png";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Submission = () => {
  const [loading, setLoading] = useState(true);
  const outerRef = useRef(null);
  const middleRef = useRef(null);
  const innerRef = useRef(null);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    if (outerRef.current && middleRef.current && innerRef.current) {
      gsap.to(outerRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
      gsap.to(middleRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        delay: 0.5,
        ease: "linear",
      });
      gsap.to(innerRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        delay: 0.8,
        ease: "linear",
      });
    }
  }, []);

  return (
    <div className="form">
      <IntroNavbar />
      <AnalysisTag />
      <section className="form__title">
        <img
          src={full_rectangle}
          alt=""
          className="form__img--outer"
          ref={outerRef}
        />
        <img
          src={full_rectangle}
          alt=""
          className="form__img--middle"
          ref={middleRef}
        />
        <img
          src={full_rectangle}
          alt=""
          className="form__img--inner"
          ref={innerRef}
        />
        {loading ? (
          <>
            <h4>Processing Your Submission</h4>
            <p>•••</p>
          </>
        ) : (
          <>
            <h4>Thank You!</h4>
            <p>Proceed for the Next Steps</p>
          </>
        )}
      </section>
      <Link to="/">
        <BackBtn />
      </Link>
      <Link to="/upload">
        <ProceedBtn />
      </Link>
    </div>
  );
};

export default Submission;
