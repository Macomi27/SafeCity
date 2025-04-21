import React from "react";
import "./UserProfile.css";
const UserProfile = () => {
    return (
    <div id="user-profile">
          <h1>USER PROFILE SETUP PAGE</h1>
        <div id="user">
        <nav className="navbar">
            
            <div>
            <img src=""alt="logo" />
            </div>
            <form >
                <label for="Search here"></label>
                <input type="text" id="search" placeholder="search here"></input>
            </form>
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
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///+Xl5eSkpKwsLCUlJTl5eWPj4/v7+/y8vKioqKmpqbi4uK0tLTAwMDb29vExMSbm5vT09PMzMy4uLjx8fH4+Pjq6urR0dHDw8O8vLxp0sPhAAAHeklEQVR4nO2d67qqOAyGtdQqpwJFUO//RoceUM6kDKyWmby/9rMU5CM9JGnafbkgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIg/xduWRKASbLa9fPaUkeEWkGCu+tntoITerWEktj1U1twY7b6JOREVsytLaisGLl+bjCxNiFhYIi+4Ob6yaF8lAlzXt+A1IU24sf1k0MJlUG4zSWFsmJ+1BPtTJUrizysLlINm52kmdbKHqHdRQk9UTNVLY4mdhdx9VroMU+0N2qgIcLuoup6omYaKYW2HsqJmqkeaEhleRk/z2h61/O97WXmxZzBOVXGoIH1dX4004pnZbKCmu+p5UBz+TbT5ZuXGbdt/jbUAQNEfdetrc3432uBJAsOi5ZTi6CPbXjTCfD2lB3TlKuIgPVtGxM5+AdIdERTjWxivg0DTQP8F6ilTwihNC+YEggs2/QbbP3O5i2Qcm+BsRZI85THEOwCC8Nj/b48zbcPZYsE6r7kc+RQDaP6kO39YJ6n8lNouu9dN5Iqiey5601fXjmN2r977XrPUnlU9n7KMQj1NPuONTog8iV4q2Wf2Tn3qBQyXzK2DzUq7DslosK/BRVu4c8V1u90QPH70F+Fj5qL7J2+M8HrZbeuGseF7DdX+anwUST5VXrOKoolpAnmi3mvJB4vz3XcNA8VViJko/C5idZDMWfKcBRmsN86iHcK64TMxbaEJNNuRMWHdFIXnimsg8XkByWBtavkl8Kyq093QdUZuxpLy5jMJ4X8Sn/qSB6V2avgxSsro5zQzkdWa40+KfyQn6EiUXdNVdUi+pnXLnvmjcJfdo7QbGpmeGbX7zdssme+KLy3FRkknw9Wi7zNcOXwu3uisDZdkNLlvFtG2++BU9l+KHwagSRae/D625ih9/dCYWWaKGgISZlpqMC+6IVCkyEHposKk40FPrQPCs00AZ7nuHkhsOySBwq5bnYMPpFbXeGBQtMHbTKahYmXIF3RvcLSLAGMP6luhRCiuE3o0JlsUBbUucJaCRznMx8ionIRuYn1aDSODPXgBEnKOleoV3GGE/ijpJ0wo/l3OdB4B6+4uFaoC4TJwJMRWp6Mn0zsRIdlU0KvuKwb0bVCsxzf+1sVqEQ8yYOPeIk0yJVeFvT7Yw40omOFFRtP9VWoro++lSIVj5TksNdS9cTPVldXHSvUba1nQiWQXvurtrH062jYixm1EVdXyB0rnCgYkleTceNLyHDEFbDKVLcKzYjYDXgFm54c1RTYG26ek6PwCLcKdfls1zIPOjt8yEGp9zIiUGmqW4XJ6BmlhzO3Ph4OvJgXqLzYrcJw2M5ky5stDZFFLKRjRF0ivhYnOlX4uA4fsRk9FhakG/+nZ3ClkKzMF04VjpfYm0sXtl7IWraw/+11t8apQl0+2+laFVluddd+HaOugi/mvy9xqlDNaN3ZMGbLVROymXZ6qYCUtThVmA1t0Mwei6VUzQWDrzcK38s/4lRhqhR2+l1jlEWTyDfQ+Vy38pUEnV8KBzYaIRV2HNETKhR02Uc5nQ1H/fC1pR+u1EC6HUuHY6EcS5di2tONpf92Pky9nw9vlj5NPOXTrFU4O1X41H5p5y9NR1topk0j7cX01Hu/dDq2YHNGuQ1ii7v/scVEfJgsxYe0Hw2+QLvC3CocP6O0y0yyXm7i6OUsghPE+CZP0+1JmWyKU66m+qDbC3V06XmexhTSj3NtYyt+zplr03N2v+NVOjXaj2tvIRktbOthyvd8qf75/hT4VBJp8BtSY1XtRvNemY3evLb+M67XLYKpdQtVb0EJDbKCFyLQy1DDMiGd8l7fZeBa4Y2Me+K3bEaV7rX/HIw+Zu1pfcuWa4WtEQffrhPWrcKkLBkuMM4srI5xrlAbcfyo9yxnqvKSEJZno5vpFwMwoXuF7Tr+RJT34K93momp7YmZfi+Q4zTcK6xMLcZKENTDlJuAznxxr7B9XArf56lbNvCleKDQtFO4xNh8H7Yx1AeF37o2WEPl56trMz50cw1kU3fWll8CN756odCsk0m/ZW3sqIL2q9ASWj8UXuq29ncl3BNtHREF77vwROGl/tZ5hwura2Fb532FbyzxReHlEbZuGpne4FSJVl8zyNh0cl8UXi7JdwtaE1UMtqo9iybCaD9mVucHeKTwUnT2zBBGg1RwHnMu0oB2NrPRq43345fCS5X09z2153d0/8gSy1M0vFLY+GNRL2oaQllkfYaHZwrbjMW0PmKvz0OFcoNTSMZ7SCkJ35uOfPJQYUMtAhP/UhMDB2LriVZ+KpQ84kKkZVmmoth2RE97H28V7sVxCv/LZ5uUoBWTvwJWwbjhnt6cMaTPKd73fevzLKeyZw54A5P/dpizvlbKsf6E90w69l/yPa8ti6GHdB9CnJmQDJI5tqNsI3HQmXvH0T7G7mfuqSV3f+jv09iJ6huPu+cQgRd5cKMfZmwCyqMON6wDavk/jxwAofaHoVjwLFKL/z3mAJK08MU7RhAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEOSX/AB6dXoaiORRzAAAAAElFTkSuQmCC"alt="profile"/>
                    </div>
                    <div className="text">
                    <h3>Rose McCauley</h3>
                    <p>rosemccauley@gmail.com</p>
                    </div>
                    <p className="tet">Edit</p>
                   
                  </div>
                
                  <form id="user-form">
                 <div>
                    <label for="Full Name"> Full Name</label><br></br>
                     <input type="text"placeholder="Your Full Name" /><br></br>
                    <label for="Phone Number"> Phone Number</label><br></br>  
                    <input type="text"placeholder="Phone Number" /><br></br>
                    <label for="Gender"> Gender</label><br></br>
                    <input type="text"placeholder="Gender"  /><br></br>
                    <label for="Role/Affliation"> Role/Affiliation</label><br></br>
                    <input type="text"placeholder="Citizen" />
                 </div>
                 <div>
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
                    <p>Update Profile</p>
                </div>
           </main>
              
        </div>
    </div>
    );
}
export default UserProfile;