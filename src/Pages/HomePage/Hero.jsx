import "./Hero.css"
import React from 'react'
import heroImage from './assets/Hero eection Image.png'
import { FaArrowRight } from "react-icons/fa"


const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            REPORT. TRACK. TRANSFORM.
          </h1>
          <p className="hero-text">
            See a problem? With <span className="span-highlight">SafeCity</span>, report it in minutes, track real-time
            progress, and help build a better city.
          </p>
          <div className="hero-buttons">
            <button className="report-btn">Report an Issue <FaArrowRight/></button>
            <button className="demo-btn">View Demo</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
