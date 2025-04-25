import "./HowItWorks.css"
// import appPreview from "./assets/app-preview.png"
import React from 'react'
import previewImage from './assets/Image.png'

const HowItWorks = () => {
  return (
    <section className="how-it-works section" id="howitworks">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">How SafeCity Works</h2>
          <p className="section-subtitle">
            Easily report infrastructure issues and track their resolution in real-time.
          </p>
        </div>

        <div className="steps-container">
          <div className="steps-content">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-info">
                <h3 className="step-title">Create an Account</h3>
                <p className="step-text">
                  Create a SafeCity account and become an active force in building safer, cleaner communities.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">02</div>
              <div className="step-info">
                <h3 className="step-title">Report the Issue</h3>
                <p className="step-text">
                  Capture and submit a report of any infrastructure problem in your area—quick and easy
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">03</div>
              <div className="step-info">
                <h3 className="step-title">Track the Progress</h3>
                <p className="step-text">
                  Stay updated with real-time tracking as your report moves through the resolution process.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">04</div>
              <div className="step-info">
                <h3 className="step-title">See the Change</h3>
                <p className="step-text">Watch your city improve as authorities respond and fix reported issues.</p>
              </div>
            </div>
          </div>

          <div className="steps-image">
            <div className="app-preview">
              <img src={previewImage} alt="SafeCity App Preview" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
