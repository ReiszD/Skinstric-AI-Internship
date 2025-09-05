import React, { useState } from "react";
import "./Demographics.css";
import AnalysisNavbar from "../components/AnalysisNavbar";
import AITag from "../components/AITag";
import DemographicsFooter from "../components/DemographicsFooter";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import button_unselected from "../assets/radio-button.png";
import button_selected from "../assets/radio-button-selected.png";

const Demographics = () => {
  const raceData = [
    { label: "East Asian", value: 96 },
    { label: "White", value: 6 },
    { label: "Black", value: 3 },
    { label: "South Asian", value: 2 },
    { label: "Latin Hispanic", value: 0 },
    { label: "South East Asian", value: 0 },
    { label: "Middle Eastern", value: 0 },
  ];

  const ageData = [
    { label: "0-9", value: 0 },
    { label: "10-19", value: 4 },
    { label: "20-29", value: 96 },
    { label: "30-39", value: 2 },
    { label: "40-49", value: 0 },
    { label: "50-59", value: 0 },
    { label: "60-69", value: 0 },
    { label: "70+", value: 0 },
  ];

  const genderData = [
    { label: "Male", value: 72 },
    { label: "Female", value: 27 },
  ];
  const [activeTab, setActiveTab] = useState("race" || "age" || "sex");
  const [selectedRace, setSelectedRace] = useState(raceData[0]);
  const [selectedAge, setSelectedAge] = useState(ageData[0]);
  const [selectedGender, setSelectedGender] = useState(genderData[0]);

  const getDataforTab = () => {
    if (activeTab == "race")
      return {
        data: raceData,
        selected: selectedRace,
        setSelected: setSelectedRace,
      };
    if (activeTab == "age")
      return {
        data: ageData,
        selected: selectedAge,
        setSelected: setSelectedAge,
      };
    if (activeTab == "sex")
      return {
        data: genderData,
        selected: selectedGender,
        setSelected: setSelectedGender,
      };
  };
  const { data, selected, setSelected } = getDataforTab();

  return (
    <div className="demographics">
      <AnalysisNavbar />
      <AITag />
      <div className="demographics__description">
        <h1>Demographics</h1>
        <p>Predicted Race & Age</p>
      </div>

      <section className="demographics__tabs">
        <div className="left__column">
          <div
            className={`tab__card ${activeTab === "race" ? "active" : ""}`}
            onClick={() => setActiveTab("race")}
            style={{ cursor: "pointer" }}
          >
            <h2>{selectedRace.label}</h2>
            <h3>Race</h3>
          </div>
          <div
            className={`tab__card ${activeTab === "age" ? "active" : ""}`}
            onClick={() => setActiveTab("age")}
            style={{ cursor: "pointer" }}
          >
            <h2>{selectedAge.label}</h2>
            <h3>Age</h3>
          </div>
          <div
            className={`tab__card ${activeTab === "sex" ? "active" : ""}`}
            onClick={() => setActiveTab("sex")}
            style={{ cursor: "pointer" }}
          >
            <h2>{selectedGender.label}</h2>
            <h3>Sex</h3>
          </div>
        </div>

        <div className="middle__column">
          <h2>{selected.label}</h2>
          <div className="graph">
          <CircularProgressbar
            value={selected.value}
            text={`${selected.value}%`}
            strokeWidth={2}
            styles={buildStyles({
              textSize: "14px",
              pathColor: "#1a1b1c",
              textColor: "#1a1b1c",
              trailColor: "#c1c2c3",
              strokeLinecap: "butt"
            })}
          />
          </div>
        </div>

        <div className="right__column">
          <div className="right__column--title">
            <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
            <h3>A.I. Confidence</h3>
          </div>
          <div className="right__column--description">
            {data.map((item, index) => (
              <div
                key={index}
                className={`row ${
                  selected.label === item.label ? "active" : ""
                }`}
                onClick={() => setSelected(item)}
              >
                <div className="label">
                  <img
                    src={
                      selected.label === item.label
                        ? button_selected
                        : button_unselected
                    }
                    alt="radio button"
                    className="button__icon"
                  />
                  {item.label}
                </div>
                <div className="percent">{item.value}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <DemographicsFooter />
    </div>
  );
};

export default Demographics;
