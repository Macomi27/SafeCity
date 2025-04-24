import "./AboutUs.css"

const AboutUs = () => {
  return (
    <section className="about-us section" id="about">
      <div className="container">
        <div className="about-header">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            SafeCity is a platform that helps everyday citizens report infrastructure issues to local authorities,
            quickly and easily.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card mission-card">
            <div className="icon icon-green">
              <i className="target-icon"></i>
            </div>
            <h3 className="card-title">Mission Statement</h3>
            <p className="card-text">
              Safe city empowers citizens to improve their communities by making infrastructure reporting simple and
              effective.
            </p>
          </div>

          <div className="about-card vision-card">
            <div className="icon icon-blue">
              <i className="eye-icon"></i>
            </div>
            <h3 className="card-title">Vision Statement</h3>
            <p className="card-text">
              Safe city helps citizens report local infrastructure issues (e.g potholes, broken street light etc) to
              city authority there by bridging the gap by providing a seamless, digital reporting system that connects
              citizens directly with government authorities, ensuring timely issue resolution, increased accountability
              and improved urban living conditions.
            </p>
          </div>

          <div className="about-card values-card">
            <div className="icon icon-orange">
              <i className="check-icon"></i>
            </div>
            <h3 className="card-title">Core Values</h3>

            <div className="values-grid">
              <div className="value-item">
                <h4 className="value-title">Transparency</h4>
                <p className="value-text">Real-time updates through interactive maps</p>
              </div>

              <div className="value-item">
                <h4 className="value-title">Accountability</h4>
                <p className="value-text">Data-driven oversight to track municipal performance</p>
              </div>

              <div className="value-item">
                <h4 className="value-title">Community Engagement</h4>
                <p className="value-text">Enabling residents to report local issues and provide feedback</p>
              </div>

              <div className="value-item">
                <h4 className="value-title">Efficiency</h4>
                <p className="value-text">Optimized resource allocation for effective use of public funds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
