import React, {useState} from "react";
import {useNavigate } from "react-router-dom";
import "./Signup.css"
import signupLogo from './image/LogoSignup.png'
import fbLogo from './image/fbLogo.png'
import googleLogo from './image/googleLogo.png'
import userIcon from './image/user.png'
import passwordIcon from './image/password.png'
import emailIcon from './image/email.png'
import visibilityIcon from './image/visibility.png'
import visibilityOffIcon from './image/visibility-off.png'
import closeIcon from './image/x.png'

const Signup = () => {

     
    const navigate = useNavigate(); // Initialize useNavigate  
    const [username, setUsername] = useState('');  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [errors, setErrors] = useState({}); // Object to hold error messages  
    const [successMessage, setSuccessMessage] = useState(''); 

    const validateEmail = (email) => {  
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex  
        return regex.test(email);  
    };

        const [showPassword, setShowPassword] = useState(false); // State to manage password visibility  
    
        const togglePasswordVisibility = () => {  
            setShowPassword((prev) => !prev); // Toggle password visibility  
        }; 

        const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to manage password visibility  
    
        const toggleConfirmPasswordVisibility = () => {  
            setShowConfirmPassword((prev) => !prev); // Toggle password visibility  
        }; 

        const validateForm = () => {  
            const errors = {};  
            if (!username) errors.username = 'Username is required.';  
            if (!email) errors.email = 'Email is required.';  
            else if (!validateEmail(email)) errors.email = 'Email is not valid.';  
            if (!password) errors.password = 'Password is required.';  
            else if (password.length < 6) errors.password = 'Password must be at least 6 characters.';  
            if (!confirmPassword) errors.confirmPassword = 'Please confirm your password.';  
            else if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match.';  
    
            setErrors(errors); // Update errors state  
            return Object.keys(errors).length === 0; // Return true if no errors  
        }; 

        const handleSubmit = (e) => {  
            e.preventDefault(); // Prevent the default form submission  
            setErrors({}); // Clear previous errors  
            setSuccessMessage(''); // Clear any previous success messages  
    
            if (validateForm()) {  
                // If the form is valid  
                setSuccessMessage('Signup successful!'); // Update success message  
                // Here, you would typically handle the signup (e.g., API call)  
                console.log('Form submitted:', { username, email, password }); 
                navigate('/login'); // Redirect to the login page after successful signup
            }   
        }; 

        const handleCloseClick = () => {  
            navigate('/'); // Redirect to the home page when the close icon is clicked  
        };  

    return(
        <div className="signup-page">
        <div className="close-icon">
        <img  
                src={closeIcon} // Replace with the path to your close icon or you can use <FaTimes />  
                alt="Close"  
                onClick={handleCloseClick}  
            />
        </div>
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
                   
                </div>
            </div>

            <div className="right-signup">
                <div className="right-signup-form">
                    <div className="signup-options">
                        <div className="signup-option1">
                            <form method="POST" onSubmit={handleSubmit} id="signup-form" className="signup-form">
                                <div className="signup-form-header">
                                    <h1>create account</h1>
                                </div>
                                <div className="form-input">
                                    <img className="input-icon" src={userIcon} alt="user icon" />
                                    <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Name" required/>
                                    {errors.username && <p className="error">{errors.username}</p>} 
                                    </div>
                                <div className="form-input">
                                    
                                    <img className="input-icon" src={emailIcon} alt="" />
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email/Phone Number" required/>
                                    {errors.email && <p className="error">{errors.email}</p>} 
                                    </div>
                                <div className="form-input" onClick={togglePasswordVisibility}>
                                    <img className="input-icon" src={passwordIcon} alt="" />
                                    {showPassword ? 
                                <img className="visibility-off" src={visibilityOffIcon} alt="" />: 
                                <img className="visibility" src={visibilityIcon} alt="" />
                                }
                                    <input type={showPassword ? 'password' : 'text'} name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Create Password" required/>
                                    {errors.password && <p className="error">{errors.password}</p>} 
                                    </div>
                                <div className="form-input" onClick={toggleConfirmPasswordVisibility}>
                                <img className="input-icon" src={passwordIcon} alt="" />
                                {showConfirmPassword ? 
                                <img className="visibility-off" src={visibilityOffIcon} alt="" />: 
                                <img className="visibility" src={visibilityIcon} alt="" />
                                }
                                
                                    <input type={showConfirmPassword ? 'password' : 'text'} name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  placeholder="Confirm Password" required/>
                                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>} 
                                    </div>
                                    <div className="right-signup-btn"><button type="submit" onClick={validateForm}>sign up</button></div>
                            </form>
                            
                            {successMessage && <p className="signup-successful">{successMessage}</p>}  
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