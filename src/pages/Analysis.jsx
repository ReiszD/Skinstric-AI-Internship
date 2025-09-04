import React, { useEffect, useRef, useState } from "react";
import "./Analysis.css";
import full_rectangle from "../assets/Full_Rectangle.png";
import AnalysisNavbar from "../components/AnalysisNavbar";
import DemographicsTag from "../components/DemographicsTag";
import BackBtn from "../components/BackBtn";
import SummaryBtn from "../components/SummaryBtn";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";

const Analysis = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const outerRef = useRef(null);
  const middleRef = useRef(true);
  const innerRef = useRef(true);
  const outerLoadingRef = useRef(true);
  const middleLoadingRef = useRef(true);
  const innerLoadingRef = useRef(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      gsap.to(outerLoadingRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
      gsap.to(middleLoadingRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        delay: 0.5,
        ease: "linear",
      });
      gsap.to(innerLoadingRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        delay: 0.8,
        ease: "linear",
      });
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
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
  }, [loading]);

  return (
    <div className="analysis">
      {loading ? (
        <>
          <img
            src={full_rectangle}
            alt=""
            className="diamond__outer"
            ref={outerLoadingRef}
          />
          <img
            src={full_rectangle}
            alt=""
            className="diamond__middle"
            ref={middleLoadingRef}
          />
          <img
            src={full_rectangle}
            alt=""
            className="diamond__inner"
            ref={innerLoadingRef}
          />
          <section className="analysis__title">
            <div className="loading">
              <h1>Preparing Your Analysis...</h1>
            </div>
          </section>
        </>
      ) : (
        <>
          <AnalysisNavbar />
          <DemographicsTag />
          <div className="page__description">
            <p>
              <span>A. I. has estimated the following.</span>
              <span>Fix the estimated information if needed</span>
            </p>
          </div>
          <img
            src={full_rectangle}
            alt=""
            className="diamond__outer"
            ref={outerRef}
          />
          <img
            src={full_rectangle}
            alt=""
            className="diamond__middle"
            ref={middleRef}
          />
          <img
            src={full_rectangle}
            alt=""
            className="diamond__inner"
            ref={innerRef}
          />
          <section className="analysis__title">
            <div className="diamond" onClick={() => navigate("/demographics")}>
              <h1>Demographcis</h1>
            </div>
            <div className="diamond">
              <h2>Skin Type Details</h2>
            </div>
            <div className="diamond">
              <h3>Cosmetic Concerns</h3>
            </div>
            <div className="diamond">
              <h4>Weather</h4>
            </div>
          </section>
          <Link to="/">
            <BackBtn />
          </Link>
          <Link to="/demographics">
            <SummaryBtn />
          </Link>
        </>
      )}
    </div>
  );
};

export default Analysis;
