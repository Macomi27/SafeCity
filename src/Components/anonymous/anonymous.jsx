"use client"
import "./anonymous.css"
import { AlertCircle } from 'react-feather';


export default function Anonymous() {
  return (
    <div className="anonymous-dashboard">
 
      {/* Header */}
      <header className="header">
        <div className="logo">SafeCity</div>
        <nav className="main-nav">
          <ul className="nav-list">
            <li><a href="#aboutus" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
            <li><a href="#login" className="nav-link">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>REPORT. TRACK. TRANSFORM.</h1>
          <p>See a problem? With <span>SafeCity</span>, report it in minutes, track real-time progress, and help build a better city.</p>
          <div className="hero-buttons">
            <button onClick={() => (window.location.href = "/report")}>Report</button>
            <button className="secondary">View Demo</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/Hero eection image.png" alt="3D City" />
        </div>
      </section>

      <section className="report-section">
  <h2 className="section-title">Make Your Report</h2>

  <div className="report-content-wrapper">
    {/* Left: Info Cards */}
    <div className="report-info-cards">
      {/* Full-width top card */}
      <div className="info-card full">
        <h3><AlertCircle className="step-icon" /> Speak Up, Stay Private</h3>
        <p>Your privacy is protected. We won’t collect your name or contact details. Reports are treated with the same priority and reviewed by the relevant authorities—without tracking your identity.</p>
      </div>

      {/* Two cards side by side */}
      <div className="info-card-row">
        <div className="info-card half-a">
          <h3><AlertCircle className="step-icon" /> Reporting Guidelines</h3>
          <ul>
            <li>Be specific about the location</li>
            <li>Include clear photos when possible</li>
            <li>Provide context about the issue’s severity</li>
            <li>One issue per report for faster processing</li>
          </ul>
        </div>

        <div className="info-card half">
          <h3>What Happens Next?</h3>
          <div className="highlight-box">
            Your report will be reviewed by the relevant government officials
          </div>
          <p>
            Report is submitted and assigned an ID<br />
            Municipal worker reviews and categorizes the issue<br />
            Work is scheduled based on priority<br />
            Issue is resolved and marked as completed
          </p>
        </div>
      </div>
    </div>

    {/* Right: Image */}
    <div className="report-image-container">
      <img src="/laptop.png" alt="Reporting Visual" className="report-side-image" />
  <img src="/Group 15.png" alt="circle" className="circle-orange2" />
    </div>
  </div>
</section>


  <img src="/Group 13.png" alt="circle" className="circle-orange" />


      {/* Map & Form Section */}
      <div className="map-form-section">
        <img src="/Select Location.png" alt="Map" className="map-image" />


      

        <h3 className="form-heading">Select Report Category</h3>
        <form className="report-form">
          <div className="form-row">
            <select className="form-control"><option>Environment & Sanitation Issues</option></select>
            <select className="form-control"><option>Public Safety Issues</option></select>
            <select className="form-control"><option>Community & Public Space Maintenance</option></select>
            <select className="form-control"><option>Infrastructure Issues</option></select>
            <select className="form-control"><option>Utilities & Public Services</option></select>
            <select className="form-control"><option>Health & Emergency Concerns</option></select>
          </div>

          <div className="form-group">
  <label>Upload a File:</label>
  <div className="upload-section" onClick={() => document.getElementById('upload-input').click()}>
    <div className="upload-icon">📁</div>
    <p>Click or drag a file to upload</p>
    <input id="upload-input" type="file" className="form-control-file" style={{ display: 'none' }} />
  </div>
</div>


          <div className="form-group">
            <p>Help us understand the issue-what did you see</p>
            <textarea rows="4" className="form-control" placeholder="Briefly describe the issue you want to report"></textarea>
          </div>

          <button type="submit" className="submit-button">Submit Report</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Ready to Transform Your Neighborhood With SafeCity?</p>
          <button onClick={() => (window.location.href = "/signup")}>Create Account</button>
        </div>
      </footer>
    </div>
  )
}
