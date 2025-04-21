import React from "react";
import "./Signup.css"
import signupLogo from './image/LogoSignup.png'
import fbLogo from './image/fbLogo.png'
import googleLogo from './image/googleLogo.png'
import userIcon from './image/user.png'
import passwordIcon from './image/password.png'
import emailIcon from './image/email.png'
import visibilityIcon from './image/visibility.png'

const Signup = () => {
    return(
        <div className="signup-page">
        <div className="circle-design"></div>
        <div className="rect-design"></div>
        <div className="signup-container">
            <div className="left-signup">
                <div className="signup-logo">
                    <img src={signupLogo} alt="safe city signup logo" />
                </div>
                <div className="signup-intro">
                    <div className="signup-intro-text">
                            <div className="signup-intro-text-heading">
                                <h2>Welcome to SafeCity!</h2>
                            <p className="signup-slogan">report, track, transform your city</p>
                            </div>
                        
                        <p className="left-signup-summ">SafeCity lets you quickly report problems like potholes or broken streetlights—right when you spot them</p>
                    </div>
                    <div className="left-signup-btn"><button>sign up</button></div>
                </div>
            </div>

            <div className="right-signup">
                <div className="right-signup-form">
                    <div className="signup-options">
                        <div className="signup-option1">
                            <form action="" id="signup-form" className="signup-form">
                                <div className="signup-form-header">
                                    <h1>create account</h1>
                                </div>
                                <div className="form-input">
                                    <img className="input-icon" src={userIcon} alt="user icon" />
                                    <input type="text" name="username" id="username" placeholder="Name" required/></div>
                                <div className="form-input">
                                    <img className="input-icon" src={emailIcon} alt="" />
                                    <input type="text" name="username" id="username" placeholder="Email/Phone Number" required/></div>
                                <div className="form-input">
                                    <img className="input-icon" src={passwordIcon} alt="" />
                                    <img className="input-icon visibility" src={visibilityIcon} alt="" />
                                    <input type="text" name="username" id="username" placeholder="Create Password" required/></div>
                                <div className="form-input">
                                <img className="input-icon" src={passwordIcon} alt="" />
                                <img className="input-icon visibility" src={visibilityIcon} alt="" />
                                    <input type="text" name="username" id="username" placeholder="Confirm Password" required/></div>
                            </form>
                            <div className="right-signup-btn"><button>sign up</button></div>
                        </div>
                        <div className="signup-option2">
                            <p>or Sign Up with</p>
                        <div className="signupLogos">
                            <div className="fbLogo">
                            <img src={fbLogo} alt="facebook logo" className="fb-logo" /></div>
                            <div className="googleLogo">
                            <img src={googleLogo} alt="google logo" className="google-logo" /></div>
                        </div>
                        </div>
                    </div>
                    <div className="ask-account">
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Signup;