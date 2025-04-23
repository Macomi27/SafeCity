import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"
import loginLogo from '../Signup/image/LogoSignup.png'
import fbLogo from '../Signup/image/fbLogo.png'
import googleLogo from '../Signup/image/googleLogo.png'
import passwordIcon from '../Signup/image/password.png'
import emailIcon from '../Signup/image/email.png'
import visibilityIcon from '../Signup/image/visibility.png'
import visibilityOffIcon from '../Signup/image/visibility-off.png'
import { FaTimes } from "react-icons/fa";

const Login = () => {
        const navigate = useNavigate(); // Initialize useNavigate

        const [showPassword, setShowPassword] = useState(false); // State to manage password visibility  
            
                const togglePasswordVisibility = () => {  
                    setShowPassword((prev) => !prev); // Toggle password visibility  
                }; 

                const handleCloseClick = () => {  
                    navigate('/'); // Redirect to the home page when the close icon is clicked  
                }; 

    return(
        <div className="login-page">
            <div className="login-close">
                <FaTimes />
            </div>
        <div className="circle-design"></div>
        <div className="rect-design"></div>
        <div className="login-container">
            <div className="left-login">
                <div className="login-logo">
                    <img src={loginLogo} alt="safe city login logo" />
                </div>
                <div className="login-intro">
                    <div className="login-intro-text">
                            <div className="login-intro-text-heading">
                                <h2>Welcome Back!</h2>
                            <p className="login-slogan">report, track, transform your city</p>
                            </div>
                        
                        <p className="left-login-summ">SafeCity lets you quickly report problems like potholes or broken streetlights—right when you spot them</p>
                    </div>
                    
                </div>
            </div>

            <div className="right-login">
                <div className="right-login-form">
                    <div className="login-options">
                        <div className="login-option1">
                            <form action="" id="login-form" className="login-form">
                                <div className="login-form-header">
                                    <h1>Login</h1>
                                </div>
                                <div className="form-input">
                                    <img className="input-icon" src={emailIcon} alt="" />
                                    <input type="email" name="email" id="email" placeholder="Email/Phone Number"  required/></div>
                                <div className="form-input" onClick={togglePasswordVisibility}>
                                    <img className="input-icon" src={passwordIcon} alt="" />
                                    {showPassword ? 
                                <img className="visibility-off" src={visibilityOffIcon} alt="" />: 
                                <img className="visibility" src={visibilityIcon} alt="" />
                                }
                                    <input type="password" name="password" id="password" placeholder="Password" required/></div>
                                 <div className="right-login-btn"><button>Login</button></div>
                            </form>
                           
                        </div>
                          <div className="forgot-password"><a href="/">forgot password?</a></div>  
                        <div className="login-option2">
                            <p>or continue with</p>
                        <div className="loginLogos">
                            <div className="googleLogo">
                            <img src={googleLogo} alt="google logo" className="google-logo" /></div>
                            <div className="fbLogo">
                            <img src={fbLogo} alt="facebook logo" className="fb-logo" /></div>
                        </div>
                        </div>
                    </div>
                    <div className="ask-account">
                    <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                </div>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Login;