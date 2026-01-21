
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="ST-footer-main">
            <div className="ST-footer-blur"></div>
            
            <div className="container">
                <div className="ST-footer-content">
                    {/* Logo and Description Section */}
                    <div className="ST-footer-brand-section">
                        <div className="ST-footer-logo-wrapper">
                            <h2 className="ST-footer-logo">
                                <img width="160" height="30" src={logo} alt="Softerra Logo" />
                            </h2>
                        </div>
                        <div className="ST-footer-description-wrapper">
                            <p className="ST-footer-description">
                                We combine innovation and digital experiences that convert. As a risk. our passion is elevating
                                brands from ordinary to extraordinary.
                            </p>
                        </div>
                        
                    </div>

                    {/* Links Section */}
                    <div className="ST-footer-links-section">
                        <div className="ST-footer-links-header">
                            <h3>Useful Links</h3>
                        </div>
                        <div className="ST-footer-links-wrapper">
                            <ul className="ST-footer-links-list">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#price">Price</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="ST-footer-links-section">
                        <div className="ST-footer-links-header">
                            <h3>Support</h3>
                        </div>
                        <div className="ST-footer-links-wrapper">
                            <ul className="ST-footer-links-list">
                                <li><a href="#terms">Terms of Service</a></li>
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><a href="#refund">Refund Policy</a></li>
                                <li><a href="#cookie">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="ST-footer-links-section">
                        <div className="ST-footer-links-header">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="ST-footer-contact-wrapper">
                            <div className="ST-footer-phone">
                                <a href="tel:+923015337280">+92 301 533 7280</a>
                            </div>
                            <div className="ST-footer-email">
                                <a href="mailto:softerraorg@gmail.com">softerraorg@gmail.com</a>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Copyright Section */}
                <div className="ST-footer-copyright-wrapper">
                    <p className="ST-footer-copyright">&copy; 2026 Softerra</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;