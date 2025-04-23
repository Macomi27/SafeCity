import "./Hero.css"
import cityIllustration from "./assets/city-illustration.svg"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            REPORT. TRACK.
            <br />
            TRANSFORM.
          </h1>
          <p className="hero-text">
            See a problem? With <span className="highlight">SafeCity</span>, report it in minutes, track real-time
            progress, and help build a better city.
          </p>
          <div className="hero-buttons">
            <a href="#report" className="btn btn-primary">
              Report an Issue <span className="arrow-icon">→</span>
            </a>
            <a href="#demo" className="btn btn-outline hero-outline-btn">
              View Demo
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={cityIllustration || "/placeholder.svg"} alt="City Illustration" />
        </div>
      </div>
    </section>
  )
}

export default Hero
