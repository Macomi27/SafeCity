import React from "react";
import logoLarge from './image/LogoLarge.png'
import "./Header.css"

const Header = () => {
    return(
    <nav>
        <div className="navbar">
            <div className="home-logo"><img src={logoLarge} alt="" /></div>
            <ul className="nav-links">
                <li className="home"><a href="#home">Home</a></li>
                <li className="how-it-works"><a href="#howitworks">How It Works</a></li>
                <li className="make-a-report"><a href="#makeareport">Make a Report</a></li>
                <li className="contact"><a href="#contact">Contact Us</a></li>
            </ul>
            <div className="nav-btns">
                <button className="btn-login" onClick={window.location.href = '/login'}>Login</button>
                <button className="btn-signup" onClick={() => window.location.href = '/signup'}>Sign Up</button>
            </div>
        </div>
    </nav>
    )
}
export default Header;