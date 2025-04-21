import React from "react";
import "./UserProfile.css";
const UserProfile = () => {
    return (
    <div id="user-profile">
          <h1>USER PROFILE SETUP PAGE</h1>
        <div id="user">
        <nav className="navbar">
            
            <div>
            <img src = "./Images/icon.png" alt="logo" />
            </div>
            <form >
                <label for="Search here"></label>
                <input type="text" id="search" placeholder="search here"></input>
            </form>
            <div className="badges">
              <img src="data:image/png;base64,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" alt="badge"></img>
            </div>
            <p>My Badges</p>
            <div className="bell">
            <img src="data:image/png;base64,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"alt="bell" />
            </div>
       <h3>MO</h3>
       <div className="prof">
       <h4>Rose McCauley</h4>
       <span>Citizen</span>
       </div>
        </nav>
        <section className="sidebar-container">
           <aside className="sidebar">
                <p>Dashboard</p>
               <p>Report</p>
                <p>Analytics</p>
                <p>Notifications</p>
               <p>My Badges</p>
             <div className="sidebar-content">
                <p>Settings</p>
                <p> Help & Support</p>
                <button> &rarr;Log Out</button>
                <p className="safe">© 2025 Safecity. All rights reserved</p>
              </div>
            </aside>
        </section>
          <main>
                    
                 <div className="profile-header">
                    <h2>Welcome Rose</h2>
                    <p>Wed, 11th April 2025</p>
                     <div className="profile-header-icons">
                     <div>
                        <img src="data:image/png;base64,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"alt="profile"/>
                    </div>
                    <div className="text">
                    <h3>Rose McCauley</h3>
                    <p>rosemccauley@gmail.com</p>
                    </div>
                    <p className="tet">Edit</p>
                   
                  </div>
                
                  <form id="user-form">
                 <div id="user-form-left">
                    <label for="Full Name"> Full Name</label><br></br>
                     <input type="text"placeholder="Your Full Name" /><br></br>
                    <label for="Phone Number"> Phone Number</label><br></br>  
                    <input type="text"placeholder="Phone Number" /><br></br>
                    <label for="Gender"> Gender</label><br></br>
                    <select  id="gender"name="Gender" >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer not to say">Prefer not to say</option>
                      </select><br></br>
                    <label for="Role/Affliation"> Role/Affiliation</label><br></br>
                    <select id="Citizen" name="citizen">
                      <option value="citizen">Citizen</option>
                      <option value="citizen by birth">Citizen by birth</option>
                      <option value="citizen by registration">Citizen by Registration</option>
                      <option value="non-citizen">Non citizen</option>
                    </select>
                 </div>
                 <div className="user-form-right">
                        <label for="User Name">User Name</label>
                        <br></br>
                        <input type="text"placeholder="User Name" /><br></br>
                        <label for="Email Address">Email Address</label>
                        <br></br>
                        <input type="text"placeholder="Email Address" /><br></br>
                        <label for="Location">Location</label>
                        <br></br>
                        <input type="text"placeholder="Full Address/City" />
                    </div>
                    </form>
                    <button className="button">Update Profile</button>
                </div>
           </main>
              
        </div>
    </div>
    );
}
export default UserProfile;