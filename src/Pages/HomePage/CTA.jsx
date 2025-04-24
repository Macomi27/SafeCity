import "./CTA.css"

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Transform Your Neighborhood With <span className="highlight">SafeCity</span>?
          </h2>
          <a href="#signup" className="btn btn-white cta-button">
            Create Your Account
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
