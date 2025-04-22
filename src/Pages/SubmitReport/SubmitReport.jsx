
import React from "react"
import MapComponent from "../../Components/Map/MapComponent"
import "./SubmitReport.css";
import TopBar from "./TopBar";
import 'leaflet/dist/leaflet.css';
import ReportCat from "./ReportCat";
import logo from "../../Assets/images/Icon.png";

const SubmitReport = () => {
    return (
        <div className="report-page">
            <TopBar/>
            <div className="report-heading">
                <div className="make-report">
                    <h2>Make a Report</h2>
                    <p className="subtext">You're about to make your first report!</p>
                </div>
                <div className="view-report">
                    <p className="view-report-p">View All Reports</p>
                </div>
            </div>
            <div className="info-section">
                <div className="info-card">
                    <div className="report-icon-container">
                        <img src={logo} alt="report icon" className="report-icon" />
                        <h3>Reporting Guidelines</h3>
                    </div>
                    <ul>
                        <li>Be specific about the location</li>
                        <li>Include clear photos when possible</li>
                        <li>Provide context about the issue's severity</li>
                        <li>One issue per report for faster processing</li>
                    </ul>
                </div>
                <div className="info-card">
                    <h3>What Happens Next?</h3>
                    <p className="highlight">
                     Your report will be reviewed by the relevant government officials
                    </p>
                    <ul>
                        <li>Report is submitted and assigned an ID</li>
                        <li>Municipal worker reviews and categorizes the issue</li>
                        <li>Work is scheduled based on priority</li>
                        <li>You'll receive updates on the status</li>
                        <li>Issue is resolved and marked as completed</li>
                    </ul>
                </div>
            </div>
            <MapComponent />
            <ReportCat/>
        </div>
    );
  };
    
export default SubmitReport
  