import React from "react";
import { useNavigate } from "react-router-dom";
import logoLarge from './image/LogoLarge.png'
import "./Header.css"

const Header = () => {

    const navigate = useNavigate(); // Initialize useNavigate

    const handleClickLogin = () => {
        navigate('/login'); // Navigate to the login page
    }

    const handleClickSignup = () => {
        navigate('/signup'); // Navigate to the login page
    }

    return(
    <nav className="header-nav">
        {/* <div className="navbar"> */}
            <div className="home-logo"><img src={logoLarge} alt="" /></div>
            <ul className="landing-headernavlinks">
                <li className="home"><a href="#home">Home</a></li>
                <li className="how-it-works"><a href="#home">How It Works</a></li>
                <li className="make-a-report"><a href="#home">Make a Report</a></li>
                <li className="contact"><a href="#home">Contact Us</a></li>
            </ul>
            <div className="nav-btns">
                <button className="btn-login" onClick={handleClickLogin}>Login</button>
                <button className="btn-signup" onClick={handleClickSignup}>Sign Up</button>
            </div>
        {/* </div> */}
    </nav>
    )
}
export default Header;