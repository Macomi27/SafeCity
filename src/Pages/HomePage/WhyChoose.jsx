import "./WhyChoose.css"

const WhyChoose = () => {
  return (
    <section className="why-choose-section section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Why Choose SafeCity</h2>
          <p className="section-subtitle">
            SafeCity is more than a reporting tool, it's a platform for action, collaboration and change.
          </p>
        </div>

        <div className="features-cards">
          <div className="feature-box green-box">
            <div className="feature-icon">
              <i className="feature-icon-img"></i>
            </div>
            <h3 className="feature-box-title">Instant Reporting</h3>
            <p className="feature-box-text">Quickly alert local authorities about infrastructure issues.</p>
          </div>

          <div className="feature-box blue-box">
            <div className="feature-icon">
              <i className="feature-icon-img"></i>
            </div>
            <h3 className="feature-box-title">Government Collaboration</h3>
            <p className="feature-box-text">We partner with government agencies to ensure government responsiveness.</p>
          </div>

          <div className="feature-box orange-box">
            <div className="feature-icon">
              <i className="feature-icon-img"></i>
            </div>
            <h3 className="feature-box-title">Community Engagement</h3>
            <p className="feature-box-text">
              Enabling residents to report local issues and provide feedback to encourage civic participation.
            </p>
          </div>

          <div className="feature-box teal-box">
            <div className="feature-icon">
              <i className="feature-icon-img"></i>
            </div>
            <h3 className="feature-box-title">Transparency</h3>
            <p className="feature-box-text">Optimized resource allocation for effective use of public funds.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
