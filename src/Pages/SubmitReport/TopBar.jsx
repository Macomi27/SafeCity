import React from 'react';
import  "./SubmitReport.css";
import logo from "../../Assets/images/logo.png";

const TopBar = () => {
  return (
    <div className="top-bar">
        <img src={logo} alt="SafeCity Logo" className="logo" />
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input type="text" placeholder="Search here" className="search-input" />
      </div>

      <div className="topbar-right">
        <div className="topbar-icons">
            <i className="fas fa-medal">
             <span ClassName="medal-p"> My Badges</span>
            </i>
            <i className="fas fa-bell notification-icon">
                <span className="notification-badge">10</span>
            </i>
        </div>
        <div className="profile">
          <div className="profile-circle">MO</div>
          <div className="profile-info">
            <p className="name">Rose McCurley</p>
            <p className="role">Citizen</p>
          </div>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
