import React, { useEffect, useRef, useState } from "react";
import "./Form.css";
import IntroNavbar from "../components/IntroNavbar";
import AnalysisTag from "../components/AnalysisTag";
import BackBtn from "../components/BackBtn";
import full_rectangle from "../assets/Full_Rectangle.png";
import axios from "axios";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";

const TestingForm = () => {
  const [step, setStep] = useState("name");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const outerRef = useRef(null);
  const middleRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if(outerRef.current && middleRef.current && innerRef.current) {
  gsap.to(outerRef.current, { rotation: 180, duration: 10, repeat: -1, ease: "slow"})
  gsap.to(middleRef.current, { rotation: 180, duration: 10, repeat: -1, delay: 0.5, ease: "slow"})
  gsap.to(innerRef.current, { rotation: 180, duration: 10, repeat: -1, delay: 0.8, ease: "slow"})
  }})

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === "name") {
      if (!name.trim()) return;
      setStep("location")
    } else if (step === "location") {
      if (!location.trim()) return;

      try {
        const response = await axios.post("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
          { name: name.trim(), location: location.trim(), },
          { headers: { "Content-Type": "application/json" } }
        );
        console.log("Data Submitted:", response.data);
        localStorage.setItem("demographicsData", JSON.stringify(response.data.data))
        navigate("/submitted")
      } catch (err) {
        console.error("Error Submitting Data:", err.response?.data || err);
      }
    }
  };

  return (
    <div className="form">
      <IntroNavbar />
      <AnalysisTag />
      <section className="form__title">
        <img src={full_rectangle} alt="" className="form__img--outer" ref={outerRef} />
        <img src={full_rectangle} alt="" className="form__img--middle" ref={middleRef} />
        <img src={full_rectangle} alt="" className="form__img--inner" ref={innerRef} />
        <h3>
          {step === "name" ? "Click to Type Name" : "Click to Type Location"}
        </h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={step === "name" ? name : location}
            placeholder={
              step === "name" ? "Introduce Yourself" : "Where Are You From"
            }
            onChange={(e) =>
              step === "name"
                ? setName(e.target.value)
                : setLocation(e.target.value)
            }
            className="name__input"
            autoFocus
            pattern="[A-Za-z\s\-]+"
            title="Only letters, spaces, and hyphens are allowed"
          />
        </form>
      </section>
      <Link to="/">
      <BackBtn />
      </Link>
    </div>
  );
};

export default TestingForm;
