import React, { useEffect, useState } from "react";
import "./Demographics.css";
import AnalysisNavbar from "../components/AnalysisNavbar";
import AITag from "../components/AITag";
import DemographicsFooter from "../components/DemographicsFooter";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import button_unselected from "../assets/radio-button.png";
import button_selected from "../assets/radio-button-selected.png";

const Demographics = () => {
  const [demographicsData, setDemographicsData] = useState({ race: [], age: [], gender: [], });
  const [activeTab, setActiveTab] = useState("race");
  const [selectedRace, setSelectedRace] = useState({ label: "-", value: 0 });
  const [selectedAge, setSelectedAge] = useState({ label: "-", value: 0 });
  const [selectedGender, setSelectedGender] = useState({ label: "-", value: 0 });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("demographicsData") || "{}");

    if (storedData && Object.keys(storedData).length > 0) {
      const formatData = (obj) =>
        Object.entries(obj || {}).map(([label, value]) => ({ label,
          value: Math.floor(value * 100) 
        }));

      const raceArray = formatData(storedData.race);
      const ageArray = formatData(storedData.age);
      const genderArray = formatData(storedData.gender);

      setDemographicsData({ race: raceArray, age: ageArray, gender: genderArray });
      setSelectedRace(raceArray[0] || { label: "-", value: 0 });
      setSelectedAge(ageArray[0] || { label: "-", value: 0 });
      setSelectedGender(genderArray[0] || { label: "-", value: 0 });
    }
  }, []);

  const getDataForTab = () => {
    if (activeTab === "race") return { data: demographicsData.race, selected: selectedRace, setSelected: setSelectedRace };
    if (activeTab === "age") return { data: demographicsData.age, selected: selectedAge, setSelected: setSelectedAge };
    if (activeTab === "sex") return { data: demographicsData.gender, selected: selectedGender, setSelected: setSelectedGender };
    return { data: [], selected: { label: "-", value: 0 }, setSelected: () => {} };
  };

  const { data, selected, setSelected } = getDataForTab();

  return (
    <div className="demographics">
      <AnalysisNavbar />
      <AITag />

      <div className="demographics__description">
        <h1>Demographics</h1>
        <p>Predicted Race, Age & Gender</p>
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
                strokeLinecap: "butt",
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
                className={`row ${selected.label === item.label ? "active" : ""}`}
                onClick={() => setSelected(item)}
              >
                <div className="label">
                  <img
                    src={selected.label === item.label ? button_selected : button_unselected}
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