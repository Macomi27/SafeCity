"use client"

import { useState } from "react"
import "./Dashboard.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const Dashboard = () => {
  const tableData = [
    {
      id: "#12345",
      category: "Pothole",
      location: "Toyin street",
      date: "March 15, 2025",
      status: "Resolved",
      action: "Repaired by the City Council",
    },
    {
      id: "#12346",
      category: "Broken Streetlight",
      location: "Toyin street",
      date: "March 16, 2025",
      status: "Pending",
      action: "Awaiting technician",
    },
  ]

  // Monthly trend data
  const trendData = [
    { month: "Jan", reports: 400 },
    { month: "Feb", reports: 380},
    { month: "Mar", reports: 200},
    { month: "Apr", reports: 450 },
    { month: "May", reports: 390 },
    { month: "Jun", reports: 350 },
    { month: "Jul", reports: 480 },
    { month: "Aug", reports: 230 },
    { month: "Sep", reports: 300 },
    { month: "Oct", reports: 240 },
    { month: "Nov", reports: 460 },
    { month: "Dec", reports: 190 },
  ]

  // Breakdown data with exact positions for labels
  const breakdownData = [
    { name: "Road Issues", value: 45, color: "#4285F4", reports: 90, labelPosition: "top" },
    { name: "Streetlights", value: 25, color: "#0F5132", reports: 50, labelPosition: "left" },
    { name: "Waste", value: 25, color: "#9C27B0", reports: 50, labelPosition: "bottom" },
    { name: "Public Amenities", value: 10, color: "#FFC107", reports: 20, labelPosition: "bottom-right" },
    { name: "Others", value: 5, color: "#FF9800", reports: 10, labelPosition: "right" },
  ]

  const [trendPeriod, setTrendPeriod] = useState("Monthly")
  const [breakdownPeriod, setBreakdownPeriod] = useState("Monthly")


  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180
    const radius = outerRadius * 1.2 
    let x = 0
    let y = 0

    const item = breakdownData[index]
    switch (item.labelPosition) {
      case "top":
        x = cx
        y = cy - radius
        break
      case "left":
        x = cx - radius
        y = cy
        break
      case "bottom":
        x = cx
        y = cy + radius
        break
      case "bottom-right":
        x = cx + radius * 0.7
        y = cy + radius * 0.7
        break
      case "right":
        x = cx + radius
        y = cy
        break
      default:
        // Calculate position based on angle if no specific position is set
        x = cx + radius * Math.cos(-midAngle * RADIAN)
        y = cy + radius * Math.sin(-midAngle * RADIAN)
    }

    return (
      <text
        x={x}
        y={y}
        fill={item.color}
        textAnchor="middle"
        dominantBaseline="central"
        fontWeight="bold"
        fontSize="14"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="dashboard-wrapper">
     <nav className="custom-navbar">
      <div className="search-container">
        <i className="bi bi-search search-icon"></i>
        <input type="text" placeholder="Search here" className="search-input" />
      </div>

      <div className="nav-links">
        <div className="dashboard-nav-link-item">
          <i className="bi bi-award"></i>
          <span>My Badges</span>
        </div>

        <div className="user-profile">
          <div className="notification-icon">
            <i className="bi bi-bell"></i>
          </div>
          <div className="user-avatar">
            <div className="user">
                <div className="Avater-label"><p>MO</p>
                </div>
                <div className="user-info">
                <p className="user-name">Rose McCurley</p>
                <p className="user-role">Citizen</p>
                </div>
            </div>
            
            <i className="bi bi-chevron-down dropdown-icon"></i>
          </div>
        </div>
      </div>
    </nav>
         <div className="dashboard">
      
      <div className="dash-head">
        <div className="welcome">
          <p>Welcome back, Rose McCurley!</p>
          <p>Here's a quick update on your reports and city's status.</p>
        </div>
        <div className="report-btns">
          <button>
            <i className="bi bi-plus"></i> Report Issue
          </button>
          <button>View All Reports</button>
        </div>
      </div>
      <div className="reports-status">
        <div className="total-reports">
          <div className="report-doc">
            <i className="bi bi-file-earmark-text"></i>
            <p>Total Reports</p>
          </div>
          <div className="total-report-number">
            <p>310</p>
            <div className="reports-month">
              <div className="percentage">
                <p>10%</p>
                <i className="bi bi-arrow-up"></i>
              </div>

              <p>Since this month</p>
            </div>
          </div>
        </div>
        <div className="pending-reports">
          <div className="report-doc">
           <i class="bi bi-hourglass"></i>
            <p>Pending Reports</p>
          </div>
          <div className="total-report-number">
            <p>50</p>
            <div className="reports-month">
              <div className="percentage">
                <p>8%</p>
                <i class="bi bi-arrow-down"></i>
              </div>

              <p>Since Last month</p>
            </div>
          </div>
        </div>
        <div className="resolved-reports">
          <div className="report-doc">
          <i class="bi bi-map-fill"></i>
            <p>Resolved Reports</p>
          </div>
          <div className="total-report-number">
            <p>150</p>
          </div>
        </div>
        <div className="reports-location">
          <div className="report-doc">
          <i class="bi bi-map-fill"></i>
            <p>Reports with Location</p>
          </div>
          <div className="total-report-number">
            <p>55</p>
          </div>
        </div>
      </div>

      {/* Charts section */}
      <div className="charts">
        <div className="chart-card line-chart">
          <div className="chart-header">
            <h5>Report Trends</h5>
            <div className="dropdown">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {trendPeriod}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setTrendPeriod("Daily")}>
                    Daily
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setTrendPeriod("Weekly")}>
                    Weekly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setTrendPeriod("Monthly")}>
                    Monthly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setTrendPeriod("Yearly")}>
                    Yearly
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="chart-content">
            <div className="simple-area-chart">
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={trendData} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF6F00" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FF6F00" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis
                    dataKey="month"
                    axisLine={true}
                    tickLine={false} 
                    dy={10} 
                  />
                  <YAxis
                    domain={[0, 500]}
                    axisLine={true}
                    tickLine={false} 
                    ticks={[0, 50, 100, 200, 500]}
                    allowDecimals={false}
                    interval={0}
                    dx={-10} 
                  />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="reports"
                    stroke="#FF5722"
                    fillOpacity={1}
                    fill="url(#colorReports)"
                    baseLine={0}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="chart-card pie-chart">
          <div className="chart-header">
            <h5>Report Breakdown</h5>
            <div className="dropdown">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {breakdownPeriod}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setBreakdownPeriod("Daily")}>
                    Daily
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setBreakdownPeriod("Weekly")}>
                    Weekly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setBreakdownPeriod("Monthly")}>
                    Monthly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setBreakdownPeriod("Yearly")}>
                    Yearly
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="chart-content">
            <div className="pie-chart-container">
              <div className="pie-chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart margin={{ top: 30, right: 30, bottom: 30, left: 30 }}>
                    <Pie
                      data={breakdownData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      cornerRadius={4}
                      label={renderCustomizedLabel}
                      labelLine={false} 
                    >
                      {breakdownData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="legend-container">
                {breakdownData.map((item, index) => (
                  <div key={index} className="legend-item">
                    <div className="legend-color" style={{ backgroundColor: item.color }}></div>
                    <span className="legend-name">{item.name}</span>
                    <span className="legend-value">
                      {item.value}% (Total {item.reports} Reports)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overview">
        <p>Reported Issues Overview</p>
        <div className="map">{/* <img src="./imagess/basemap/png" alt="" /> */}</div>
      </div>

      <div className="report-history">
        <div className="history-head">
          <div className="title">
            <p>Report History</p>
          </div>
          <div className="view-all">
            <p>View all</p>
            <i className="bi bi-arrows-angle-expand"></i>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Issue Category</th>
              <th>Location</th>
              <th>Date Reported</th>
              <th>Status</th>
              <th>Action Taken</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.location}</td>
                <td>{item.date}</td>
                <td>
                  <div className={`table-status ${item.status.toLowerCase()}`}>
                    <i className="bi bi-dot"></i>
                    <p>{item.status}</p>
                  </div>
                </td>
                <td>{item.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
   
  )
}

export default Dashboard
