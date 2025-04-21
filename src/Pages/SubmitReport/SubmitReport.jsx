
import React from "react"
import MapComponent from "../../Components/Map/MapComponent"
import "./SubmitReport.css"
import 'leaflet/dist/leaflet.css';
import ReportCat from "./ReportCat";

const SubmitReport = () => {
    return (
        <div className="report-page">
            <div className="report-heading">
                <h2>Make a Report</h2>
                <p className="subtext">You're about to make your first report!</p>
            </div>
            <div className="info-section">
                <div className="info-card">
                    <h3>Reporting Guidelines</h3>
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
  
            <h3>Select a location</h3>
            <MapComponent />
            <ReportCat/>
        </div>
    );
  };
    
export default SubmitReport
  