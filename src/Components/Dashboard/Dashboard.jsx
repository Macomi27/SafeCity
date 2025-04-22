import './Dashboard.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import SupportTrendsChart from "./Support-trends-chart.jsx"


const Dashboard = ()=>{
    const tableData = [
        {
          id: '#12345',
          category: 'Pothole',
          location: 'Toyin street',
          date: 'March 15, 2025',
          status: 'Resolved',
          action: 'Repaired by the City Council',
        },
        {
          id: '#12346',
          category: 'Broken Streetlight',
          location: 'Toyin street',
          date: 'March 16, 2025',
          status: 'Pending',
          action: 'Awaiting technician',
        },
      ];
      
   

    return(
        <div className="dashboard">
            <div className="dash-head">
                <div className="welcome">
                    <p >Welcome back, Rose McCurley!</p>
                    <p>Here’s a quick update on your reports and city’s status.</p>
                </div>
                <div className="report-btns">
                    <button><i class="bi bi-plus"></i> Report Issue</button>
                    <button>View All Reports</button>
                </div>
            </div>
            <div className="reports-status">
                <div className="total-reports">
                    <div className="report-doc">
                        <i class="bi bi-file-earmark-text"></i>
                        <p>Total Reports</p>
                    </div>
                    <div className="total-report-number">
                        <p>310</p>
                        <div className="reports-month">
                            <div className="percentage">
                                <p>10%</p>
                            <i class="bi bi-arrow-up"></i>
                            </div>
                            
                            <p>Since this month</p>
                        </div>
                    </div>
                </div>
                <div className="pending-reports">
                    <div className="report-doc">
                        <i class="bi bi-file-earmark-text"></i>
                        <p>Pending Reports</p>
                    </div>
                    <div className="total-report-number">
                        <p>50</p>
                        <div className="reports-month">
                            <div className="percentage">
                                <p>8%</p>
                            <i class="bi bi-arrow-up"></i>
                            </div>
                            
                            <p>Since Last month</p>
                        </div>
                    </div>
                </div>
                <div className="resolved-reports">
                    <div className="report-doc">
                        <i class="bi bi-file-earmark-text"></i>
                        <p>Resolved Reports</p>
                    </div>
                    <div className="total-report-number">
                        <p>150</p>
                        {/* <div className="reports-month">
                            <div className="percentage">
                                <p>10%</p>
                            <i class="bi bi-arrow-up"></i>
                            </div>
                            
                            <p>Since this month</p>
                        </div> */}
                    </div>
                </div>
                <div className="reports-location">
                    <div className="report-doc">
                        <i class="bi bi-file-earmark-text"></i>
                        <p>Reports with Location</p>
                    </div>
                    <div className="total-report-number">
                        <p>55</p>
                        {/* <div className="reports-month">
                            <div className="percentage">
                                <p>10%</p>
                            <i class="bi bi-arrow-up"></i>
                            </div>
                            
                            <p>Since this month</p>
                        </div> */}
                    </div>
                </div>

            </div>
            <div className="charts">
                <div className="line-chart">
                </div>
                <div className="pie-chart">

                </div>

            </div>
            <div className="overview">
                <p>Reported Issues Overview</p>
                <div className="map">
                    <img src="./images/Frame 547.png" alt="" />

                </div>

            </div>
            <div className="report-history">
                <div className="history-head">
                    <div className="title">
                        <p>Report History</p>
                    </div>
                    <div className="view-all">
                        <p>View all</p>
                        <i class="bi bi-arrows-angle-expand"></i>
                    </div>
                    
                </div>
                <table className='table'>
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
                        {
                            tableData.map((item,index)=>(
                                <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.category}</td>
                                <td>{item.location}</td>
                                <td>{item.date}</td>
                                <td >
                                    <div className={`table-status ${item.status.toLowerCase()}`}>
                                       <i className="bi bi-dot"></i>
                                       <p>{item.status}</p>
                                    </div>
                                  
                                </td>
                                <td>{item.action}</td>
                              </tr> 
                            ))
                        }
                
                    </tbody>
                    
                    
                </table>


            </div>
        </div>
    )
}
export default Dashboard;