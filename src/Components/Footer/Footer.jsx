import React from "react";
import './Footer.css'
import { FaInstagram, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { faFacebook } from "react-icons/fa";
import {faTwitter} from "react-icons/fa";
import {faLinkedin} from "react-icons/fa";

const Footer = () => {
    <section className="footer" id="contactus">
        <div className="footer-container">
            <div className="right-footer">
                <div className="right-footer-content">
                    <h3>SafeCity</h3>
                    <p>A digital reporting system that helps citizens report infrastructure issues directly to government authorities, easily and quickly.</p>
                </div>
                <p className="right-footer-copyright">© 2025 SafeCity. All rights reserved.</p>
            </div>

            <div className="left-footer">
                <div className="quicklinks">
                    <h5>Quick Links</h5>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#aboutus">About Us</a></li>
                        <li><a href="#howitworks">How It Works</a></li>
                        <li><a href="#reportanissue">Contact Us</a></li>
                        <li><a href="#yourreports">Your Reports</a></li>
                        <li><a href="#faq">FAQs</a></li>
                    </ul>
                </div>
                <div className="contactus">
                    <h5>Contact Us</h5>
                    <div>
                        <FaMailBulk className="mail-icon" />
                        <a href="#home">support@SafeCity.com</a>
                    </div>
                    <div>
                        <FaPhoneAlt className="phone-icon" />
                        <a href="#home">+234 800 111 222</a>
                    </div>
                    <div>
                        <FaMapMarkerAlt className="location-icon" />
                        <a href="#home">111, SafeCity Drive, Lagos, Nigeria</a>
                    </div>
                </div>
                <div className="followus">
                    <h5>Follow us</h5>
                    <div>
                        <faFacebook className="facebook-icon" />
                        <faTwitter className="twitter-icon" />
                        <FaInstagram className="instagram-icon" />
                        <faLinkedin className="linkedin-icon" />
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Footer;