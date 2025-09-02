import React, { useRef, useState } from "react";
import "./Form.css";
import IntroNavbar from "../components/IntroNavbar";
import AnalysisTag from "../components/AnalysisTag";
import BackBtn from "../components/BackBtn";
import full_rectangle from "../assets/Full_Rectangle.png";
import axios from "axios";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const TestingForm = () => {
  const [step, setStep] = useState("name");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const rectangleRef = useRef(null);

  const handleHover = () => {
    gsap.to(rectangleRef.current, { rotate: 360, duration: 1, ease: "power2.out"})
  }

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
      <section className="home__title" onMouseEnter={handleHover}>
        <img src={full_rectangle} alt="" className="form__img--outer" ref={rectangleRef} />
        <img src={full_rectangle} alt="" className="form__img--middle" />
        <img src={full_rectangle} alt="" className="form__img--inner" />
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
          />
        </form>
      </section>
      <BackBtn />
    </div>
  );
};

export default TestingForm;
