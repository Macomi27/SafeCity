import React from 'react';
import "./ReportCat.css";

const ReportCategories = [
    "Environmental & Sanitation Issues",
    "Infrastructure Issues",
    "Public Safety Issues",
    "Utilities & Public Services",
    "Community & Public Space Maintenance",
    "Health & Emergency Concerns",
  ];
  
  const ReportCat = () => {
    return (
      <div className="category-container">
        <h2 className="category-title">Select Report Category</h2>
        <div className="category-grid">
          {ReportCategories.map((category, idx) => (
            <select key={idx} className="category-select">
              <option value="">{category}</option>
              <option value="example1">Issue 1</option>
              <option value="example2">Issue 2</option>
              <option value="other">Other</option>
            </select>
          ))}
        </div>
      </div>
    );
  };
  
export default ReportCat;
