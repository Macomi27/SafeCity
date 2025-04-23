import "./ReportSteps.css"

const ReportSteps = () => {
  return (
    <section className="report-steps section" id="report">
      <div className="container">
        <div className="report-header">
          <h2 className="report-title">How to Make a Report on SafeCity</h2>
          <div className="report-cta">
            <p>It only takes a few steps to make your voice heard.</p>
            <a href="#report-form" className="btn btn-primary">
              Click Here to Report an Issue <span className="arrow-icon">→</span>
            </a>
          </div>
        </div>

        <div className="steps-grid">
          <div className="report-step-card">
            <div className="step-icon location-icon">
              <i className="map-pin-icon"></i>
            </div>
            <h3 className="step-card-title">Select your Location</h3>
            <p className="step-card-text">
              Enter your location, or pin where the issue us happening using your map or current GPS.
            </p>
          </div>

          <div className="report-step-card">
            <div className="step-icon category-icon">
              <i className="grid-icon"></i>
            </div>
            <h3 className="step-card-title">Choose a Category</h3>
            <p className="step-card-text">
              Pick the type of issue from a list of categories - roads, streetlights, waste, or others.
            </p>
          </div>

          <div className="report-step-card">
            <div className="step-icon upload-icon">
              <i className="upload-icon"></i>
            </div>
            <h3 className="step-card-title">Upload an Image</h3>
            <p className="step-card-text">Include a picture to help authorities better understand the issue.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReportSteps
