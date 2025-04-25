import "./Hero.css"
import React from 'react'
import heroHomeImage from './assets/Hero eection Image.png'
import { FaArrowRight } from "react-icons/fa"


const Hero = () => {
  return (
    <section className="hero-home" id="home">
      <div className="container hero-home-container">
        <div className="hero-home-content">
          <h1 className="hero-home-title">
            REPORT. TRACK. TRANSFORM.
          </h1>
          <p className="hero-home-text">
            See a problem? With <span className="span-highlight">SafeCity</span>, report it in minutes, track real-time
            progress, and help build a better city.
          </p>
          <div className="hero-home-buttons">
            <button className="report-btn">Report an Issue <FaArrowRight/></button>
            <button className="demo-btn">View Demo</button>
          </div>
        </div>
        <div className="hero-home-image">
          <img src={heroHomeImage} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
