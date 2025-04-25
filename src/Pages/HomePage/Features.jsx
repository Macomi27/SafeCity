import "./Features.css"

const Features = () => {
  return (
    <section className="features section">
      <div className="features-header">
        <h1>Why Choose SafeCity</h1>
        <p>SafeCity is more than a reporting tool, it’s a platform for action, collaboration and change.</p>
      </div>
      <div className="container">
        <div className="features-grid">
          <div className="feature-card green-card">
            <h2 className="feature-title">Instant Reporting</h2>
            <p className="feature-text">Quickly alert local authorities about infrastructure issues.</p>
            <div className="green-shape"></div>
          </div>

          <div className="feature-card blue-card">
            <h2 className="feature-title">Government Collaboration</h2>
            <p className="feature-text">We partner with government agencies to ensure faster responses.</p>
            <div className="blue-shape"></div>
          </div>

          <div className="feature-card orange-card">
            <h2 className="feature-title">Community Engagement</h2>
            <p className="feature-text">Be part of a collective effort to improve your neighborhood.</p>
            <div className="orange-shape"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
