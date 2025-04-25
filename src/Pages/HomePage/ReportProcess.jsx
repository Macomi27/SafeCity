import "./ReportProcess.css"

const ReportProcess = () => {
  return (
    <section className="report-process section">
      <div className="container">
        <div className="process-cards">
          <div className="process-card">
            <div className="process-icon">
              <i className="message-icon"></i>
            </div>
            <h3 className="process-title">Describe the Issue</h3>
            <p className="process-text">Tell us what is wrong and how it's affecting the area.</p>
          </div>

          <div className="process-card">
            <div className="process-icon">
              <i className="check-icon"></i>
            </div>
            <h3 className="process-title">Review & Submit</h3>
            <p className="process-text">Confirm your details and send the report - we'll take it from there.</p>
          </div>

          <div className="process-card">
            <div className="process-icon">
              <i className="eye-off-icon"></i>
            </div>
            <h3 className="process-title">Choose to Stay Anonymous</h3>
            <p className="process-text">You can report anonymously without creating an account.</p>
            <a href="#anonymous" className="report-link">
              Report Anonymously <span className="arrow-icon">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReportProcess
