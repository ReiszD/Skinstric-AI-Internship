import React, { useCallback, useEffect, useRef, useState } from 'react'
import './Camera.css'
import Webcam from 'react-webcam'
import AnalysisNavbar from '../components/AnalysisNavbar'
import photo_camera from '../assets/Group 40037.png'
import button_unselected from "../assets/radio-button.png"
import button_selected from "../assets/radio-button-selected.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import left_button from '../assets/buttin-icon-shrunk.png'
import right_button from '../assets/buttin-icon-shrunk-right.png'
import camera_icon from "../assets/camera.png";
import full_rectangle from "../assets/Full_Rectangle.png";
import gsap from 'gsap'

const Camera = () => {
  const webcamRef = useRef(null)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const outerRef = useRef(null)
  const middleRef = useRef(null)
  const innerRef = useRef(null)
  const [imgSrc, setImgSrc] = useState(null)
  const [neutralExpression, setNeutralExpression] = useState(false)
  const [frontalPose, setFrontalPose] = useState(false)
  const [adequateLighting, setAdequateLighting] = useState(false)

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);

      useEffect(() => {
    if (outerRef.current && middleRef.current && innerRef.current) {
      gsap.to(outerRef.current, {rotation: 360, duration: 10, repeat: -1, ease: "linear"});
      gsap.to(middleRef.current, {rotation: 360, duration: 10, repeat: -1, delay: 0.5, ease: "linear"});
      gsap.to(innerRef.current, {rotation: 360, duration: 10, repeat: -1, delay: 0.8, ease: "linear"});
    }
  }, []);

  const capture = useCallback(() => {
    if (!webcamRef.current) return
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
    setNeutralExpression(true)
    setFrontalPose(true)
    setAdequateLighting(true)
  }, [webcamRef])

  const handleUpload = async () => {
    if (!imgSrc) return
    try {
      const base64 = imgSrc.split(",")[1]
      const res = await axios.post(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        { image: base64 },
        { headers: { "Content-Type": "application/json" } }
      )
      alert("Upload Success", res.data)
      localStorage.setItem("demographicsData", JSON.stringify(res.data.data))
      navigate("/demographics")
    } catch (err) {
      console.error("Upload Error:", err)
    }
  }

  return (
    <div className='camera'>
        {loading ? (
            <>
            <div className='camera__loading'>
                <img src={full_rectangle} alt="" className="form__img--outer" ref={outerRef} />
                <img src={full_rectangle} alt="" className="form__img--middle" ref={middleRef} />
                <img src={full_rectangle} alt="" className="form__img--inner" ref={innerRef} />
            <img src={camera_icon} alt="" className='camera__icon--loading' />
            <h4 className='loading__title'>Setting Up Camera</h4>
            </div>
            <div className='directions__loading'>
                <h1>To Get Better Results. Make Sure To Have</h1>
                <div className='directions__row'>
                <div className='direction__item--loading'>
                    <img src={button_unselected} alt="" />
                    <p>Neutral Expression</p>
                </div>
                <div className='direction__item--loading'>
                    <img src={button_unselected} alt="" />
                    <p>Frontal Pose</p>
                </div>
                <div className='direction__item--loading'>
                    <img src={button_unselected} alt="" />
                    <p>Adequate Lighting</p>
                </div>
                </div>
            </div>
            </>
        ) : (
            <>
      {!imgSrc ? (
        <Webcam ref={webcamRef} screenshotFormat='image/jpeg' className='webcam' />
      ) : (
        <img src={imgSrc} alt="Captured" className='webcam' />
      )}
      <div className='overlay'>
        <div className='navbar'>
          <AnalysisNavbar />
        </div>
        <div className='directions'>
          <h1>To Get Better Results Make Sure To Have</h1>
          <div className='directions__row'>
            <div className={`direction__item ${neutralExpression ? "met" : ""}`}>
              <img src={neutralExpression ? button_selected : button_unselected} alt="" />
              <p>Neutral Expression</p>
            </div>
            <div className={`direction__item ${frontalPose ? "met" : ""}`}>
              <img src={frontalPose ? button_selected : button_unselected} alt="" />
              <p>Frontal Pose</p>
            </div>
            <div className={`direction__item ${adequateLighting ? "met" : ""}`}>
              <img src={adequateLighting ? button_selected : button_unselected} alt="" />
              <p>Adequate Lighting</p>
            </div>
          </div>
        </div>
        <img src={left_button} alt="" className='left__arrow--btn' onClick={() => navigate("/analysis")} />
        {imgSrc ? (
            <>
            <div className='img__captured'>
                <h1>Great Shot!</h1>
            </div>
          <div className='camera__btns'>
            <button onClick={() => setImgSrc(null)} className='retake__btn'>Retake</button>
            <button onClick={handleUpload} className='upload__btn'>Upload
                <img src={right_button} alt="" className='right__arrow--btn' />
            </button>
          </div>
          </>
        ) : (
          <div className='bottombar'>
            <button onClick={capture} className='capture__btn'>
              Take Picture
              <img src={photo_camera} alt="" className='take__pic--btn' />
            </button>
          </div>
        )}
      </div>
      </>
      )}
    </div>
  )
}

export default Camera