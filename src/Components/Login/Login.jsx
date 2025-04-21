import React from "react";
import "./login.css"
import loginLogo from '../Signup/image/LogoSignup.png'
import fbLogo from '../Signup/image/fbLogo.png'
import googleLogo from '../Signup/image/googleLogo.png'
import passwordIcon from '../Signup/image/password.png'
import emailIcon from '../Signup/image/email.png'
import visibilityIcon from '../Signup/image/visibility.png'

const Login = () => {
    return(
        <div className="login-page">
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
                    <div className="left-login-btn"><button>sign in</button></div>
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
                                    <input type="text" name="username" id="username" placeholder="Email/Phone Number" required/></div>
                                <div className="form-input">
                                    <img className="input-icon" src={passwordIcon} alt="" />
                                    <img className="input-icon visibility" src={visibilityIcon} alt="" />
                                    <input type="text" name="username" id="username" placeholder="Create Password" required/></div>
                                
                            </form>
                            <div className="right-login-btn"><button>Login</button></div>
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