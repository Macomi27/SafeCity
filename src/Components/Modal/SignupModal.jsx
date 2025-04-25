import React from "react";
import { useNavigate } from "react-router-dom";
import './SignupModal.css'
import { FaCheck } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa'; // Importing the close icon from react-icons

const SignupModal = ({ onClose }) => {
    const navigate = useNavigate(); // Initialize useNavigate
    const handleClickContinue = () => {
        navigate('/dashboard'); // Navigate to the home page
    }
    const handleClickShare = () => {
        // Logic to share the app (e.g., open a share dialog)
        alert("Share functionality is not implemented yet.");
    }

    const handleCloseClick = () => {  
        navigate('/'); // Redirect to the home page when the close icon is clicked  
    }; 

    return(
        <div className="signup-modal">
            <div className="signup-modal-close">
                <FaTimes onClick={handleCloseClick}/>
            </div>
        <div className="confirmation-container"> 
            <div className="confirmation-icon">
                <FaCheck />
            </div> 
            <div className="confirmation-texts"><h2>account created successfully!</h2>  
            <p>Welcome to SafeCity! You can now report local issues, track progress, and contribute to a safer community.</p> </div>
            <div className="confirmation-buttons">
                <button className="continue" onClick={handleClickContinue}>Contine</button>
                <button className="share" onClick={handleClickShare}>Share <FaShareNodes/></button>
            </div>
        </div> 
        </div>
    )
}

export default SignupModal;