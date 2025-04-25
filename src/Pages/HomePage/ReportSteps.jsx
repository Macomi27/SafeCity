import "./ReportSteps.css"
import React from "react";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const ReportSteps = () => {
  return (
    <section className="report-steps section" id="report">
      <div className="container">
        <div className="report-header">
          <h2 className="report-title">How to Make a Report on SafeCity</h2>
          <div className="report-cta">
            <p>It only takes a few steps to make your voice heard.</p>
            <a href="#report-form">
              Click Here to Report an Issue  <FaArrowRight/>
            </a>
          </div>
        </div>

        <div className="steps-grid">
          <div className="report-step-card">
            <div className="step-icon upload-icon">
              <FaMapMarkerAlt className="location-icon" />
            </div>
            <h3 className="step-card-title">Select your Location</h3>
            <p className="step-card-text">
              Enter your location, or pin where the issue us happening using your map or current GPS.
            </p>
          </div>

          <div className="report-step-card">
            <div className="step-icon upload-icon">
              <FaTh className="category-icon" />
            </div>
            <h3 className="step-card-title">Choose a Category</h3>
            <p className="step-card-text">
              Pick the type of issue from a list of categories - roads, streetlights, waste, or others.
            </p>
          </div>

          <div className="report-step-card">
            <div className="step-icon upload-icon">
              <FaUpload className="upload-icon" />
            </div>
            <h3 className="step-card-title">Upload an Image</h3>
            <p className="step-card-text">Include a picture to help authorities better understand the issue.</p>
          </div>

          <div className="report-step-card">
            <div className="step-icon upload-icon">
              <FaMessage className="message-icon" />
            </div>
            <h3 className="step-card-title">Describe the Issue</h3>
            <p className="step-card-text">Tell us what is wrong and how it’s affecting the area.</p>
          </div>

          <div className="report-step-card">
            <div className="step-icon upload-icon">
              <FaCheckCircle className="checkcircle-icon" />
            </div>
            <h3 className="step-card-title">Review & Submit</h3>
            <p className="step-card-text">Confirm your details and send the report - we’ll take it from there.</p>
          </div>

          <div className="report-step-card">
            <div className="step-icon upload-icon-eyeslash">
              <FaEyeSlash className="eyeslash-icon" />
            </div>
            <h3 className="step-card-title">Choose to Stay Anonymous</h3>
            <p className="step-card-text">You can report anonymously without creating an account.</p>
            <div className="anonymous">
              <a href="anonymousreport">Report anonymously <FaArrowRight/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReportSteps
