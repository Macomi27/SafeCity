import "./Features.css"

const Features = () => {
  return (
    <section className="features section">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card green-border">
            <h2 className="feature-title">Instant Reporting</h2>
            <p className="feature-text">Quickly alert local authorities about infrastructure issues.</p>
            <div className="feature-shape green-shape"></div>
          </div>

          <div className="feature-card blue-border">
            <h2 className="feature-title">Government Collaboration</h2>
            <p className="feature-text">We partner with government agencies to ensure faster responses.</p>
            <div className="feature-shape blue-shape"></div>
          </div>

          <div className="feature-card orange-border">
            <h2 className="feature-title">Community Engagement</h2>
            <p className="feature-text">Be part of a collective effort to improve your neighborhood.</p>
            <div className="feature-shape orange-shape"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
