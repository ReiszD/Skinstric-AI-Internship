import React, { useEffect, useRef, useState } from "react";
import "./UploadImage.css";
import IntroNavbar from "../components/IntroNavbar";
import AnalysisTag from "../components/AnalysisTag";
import BackBtn from "../components/BackBtn";
import camera_icon from "../assets/camera.png";
import picture_icon from "../assets/gallery-icon.png";
import vector_line from "../assets/Vector 1.png";
import circle_icon from "../assets/Ellipse 126.png";
import full_rectangle from "../assets/Full_Rectangle.png";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UploadImage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const outerRef = useRef(null);
  const middleRef = useRef(null);
  const innerRef = useRef(null);
  const outerPicRef = useRef(null);
  const middlePicRef = useRef(null);
  const innerPicRef = useRef(null);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (err) => reject(err);
    });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const base64 = await toBase64(file);
      const res = await axios.post(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        { image: base64 },
        { headers: { "Content-Type": "application/json" } });
      console.log("Upload success:", res.data);
      localStorage.setItem(
        "demographicsData",
        JSON.stringify(res.data.data)
      );
      navigate("/analysis");
    } catch (err) {
      console.error("Upload Error:", err);
    }
    e.target.value = "";
  };

  useEffect(() => {
      gsap.to(outerRef.current, {rotation: 180, duration: 10, repeat: -1, ease: "slow"});
      gsap.to(middleRef.current, {rotation: 180, duration: 10, repeat: -1, delay: 0.5, ease: "slow"});
      gsap.to(innerRef.current, {rotation: 180, duration: 10, repeat: -1, delay: 0.8, ease: "slow"});
      gsap.to(outerPicRef.current, {rotation: 180, duration: 10, repeat: -1, ease: "slow"});
      gsap.to(middlePicRef.current, {rotation: 180, duration: 10, repeat: -1, delay: 0.5, ease: "slow"});
      gsap.to(innerPicRef.current, {rotation: 180, duration: 10, repeat: -1, delay: 0.8, ease: "slow"});
  }, []);

  return (
    <div className="upload__image">
      <IntroNavbar />
      <AnalysisTag />
      <section className="upload__options">
        <div className="option__card--camera">
          <img src={full_rectangle} alt="" className="border__outer--cam" ref={outerRef} />
          <img src={full_rectangle} alt="" className="border__middle--cam" ref={middleRef} />
          <img src={full_rectangle} alt="" className="border__inner--cam" ref={innerRef} />
          <div className="camera__card">
            <div className="option__circle">
              <img src={camera_icon} alt="Camera Upload" className="camera__icon" />
            </div>
          </div>
          <p>Allow A.I.</p>
          <p>to scan your face.</p>
          <img src={circle_icon} alt="" className="camera__circle" />
          <img src={vector_line} alt="" className="camera__line" />
        </div>

        <div className="option__card--picture">
          <img src={full_rectangle} alt="" className="border__outer--pic" ref={outerPicRef} />
          <img src={full_rectangle} alt="" className="border__middle--pic" ref={middlePicRef} />
          <img src={full_rectangle} alt="" className="border__inner--pic" ref={innerPicRef} />

          <div className="picture__card">
            <div className="option__circle">
              <input
                id="fileInput"
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <label htmlFor="fileInput">
                <img
                  src={picture_icon}
                  alt="Gallery Upload"
                  className="picture__icon"
                />
              </label>
            </div>
          </div>
          <p>Allow A.I.</p>
          <p>to access gallery</p>
          <img src={circle_icon} alt="" className="picture__circle" />
          <img src={vector_line} alt="" className="picture__line" />
        </div>
      </section>

      <Link to="/">
        <BackBtn />
      </Link>
    </div>
  );
};

export default UploadImage;