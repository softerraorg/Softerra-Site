import React from 'react';
import '../styles/style.css';
import '../styles/Hero.css';
import Stats from './Stats';
import heroLeftImage from '../assets/hero-left-image.png';
import heroRightImage from '../assets/hero-right-image.png';

const Hero = () => {
    return (
        <section className="ST-Hero-section-main section-padding">
            <div className="radial-blur"></div>
            <img src={heroLeftImage} alt="" className="ST-hero-left-image" aria-hidden="true" />
            <img src={heroRightImage} alt="" className="ST-hero-right-image" aria-hidden="true" />
            
            <div className="container">
                <div className="ST-Hero-section-wrapper">
                    <div className="ST-Hero-upwork-box-wrapper">
                        <div className="ST-Hero-success-rate-text">Top Rank</div>
                        <img src="./images/upwork-logo.png" alt="Upwork Logo" width="74" height="auto" />
                        <img src="./images/5-stars.png" alt="Star Logo" width="77" height="auto" />
                        <div className="ST-Hero-success-rate-text">100% Success Rate</div>
                    </div>

                    <div>
                        <h1 className="ST-Hero-title">
                            Your go-to team for
                            <span className="highlight">advanced Shopify</span>
                        </h1>
                        <p className="ST-Hero-subtitle">Web design & Development that drives results. We build exceptional digital experiences that convert visitors into customers.</p>
                    </div>

                    <div className="ST-Hero-buttons-wrapper">
                        <a href="#contact" className="ST-Hero-button-dark">
                            Get Started
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.70684 1.21725C1.70008 1.1189 1.71278 1.02018 1.74421 0.926737C1.77563 0.833296 1.82517 0.746967 1.89 0.672689C1.95482 0.598411 2.03365 0.537641 2.12197 0.493856C2.2103 0.450071 2.30639 0.424129 2.40476 0.417515L8.47739 0.00173607C8.58419 -0.00550712 8.6913 0.0101948 8.79153 0.0477881C8.89176 0.0853814 8.98278 0.143994 9.05847 0.219687C9.13416 0.295379 9.19278 0.386398 9.23037 0.486625C9.26796 0.586852 9.28366 0.693966 9.27642 0.800766L8.86064 6.8734C8.85587 6.97304 8.83126 7.07073 8.78826 7.16074C8.74527 7.25076 8.68474 7.33129 8.61024 7.39763C8.53574 7.46396 8.44875 7.51477 8.35437 7.54708C8.25998 7.57938 8.16011 7.59253 8.06058 7.58576C7.96105 7.57898 7.86388 7.55242 7.77474 7.50763C7.68561 7.46284 7.60631 7.40072 7.54147 7.3249C7.47664 7.24908 7.42759 7.16109 7.39719 7.06608C7.36678 6.97107 7.35564 6.87095 7.3644 6.77158L7.64371 2.69511L1.28046 9.05836C1.13981 9.19901 0.949039 9.27803 0.750127 9.27803C0.551215 9.27803 0.360449 9.19901 0.219797 9.05836C0.0791452 8.91771 0.000127497 8.72694 0.000127571 8.52803C0.000127655 8.32912 0.079145 8.13835 0.219797 7.9977L6.58234 1.63515L2.50587 1.91446C2.30747 1.92792 2.11184 1.86204 1.962 1.73129C1.81216 1.60055 1.72038 1.41565 1.70684 1.21725Z" fill="white" />
                            </svg>
                        </a>
                        <a href="#portfolio" className="ST-Hero-button-light">
                            View Our Project
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.70684 1.21725C1.70008 1.1189 1.71278 1.02018 1.74421 0.926737C1.77563 0.833296 1.82517 0.746967 1.89 0.672689C1.95482 0.598411 2.03365 0.537641 2.12197 0.493856C2.2103 0.450071 2.30639 0.424129 2.40476 0.417515L8.47739 0.00173607C8.58419 -0.00550712 8.6913 0.0101948 8.79153 0.0477881C8.89176 0.0853814 8.98278 0.143994 9.05847 0.219687C9.13416 0.295379 9.19278 0.386398 9.23037 0.486625C9.26796 0.586852 9.28366 0.693966 9.27642 0.800766L8.86064 6.8734C8.85587 6.97304 8.83126 7.07073 8.78826 7.16074C8.74527 7.25076 8.68474 7.33129 8.61024 7.39763C8.53574 7.46396 8.44875 7.51477 8.35437 7.54708C8.25998 7.57938 8.16011 7.59253 8.06058 7.58576C7.96105 7.57898 7.86388 7.55242 7.77474 7.50763C7.68561 7.46284 7.60631 7.40072 7.54147 7.3249C7.47664 7.24908 7.42759 7.16109 7.39719 7.06608C7.36678 6.97107 7.35564 6.87095 7.3644 6.77158L7.64371 2.69511L1.28046 9.05836C1.13981 9.19901 0.949039 9.27803 0.750127 9.27803C0.551215 9.27803 0.360449 9.19901 0.219797 9.05836C0.0791452 8.91771 0.000127497 8.72694 0.000127571 8.52803C0.000127655 8.32912 0.079145 8.13835 0.219797 7.9977L6.58234 1.63515L2.50587 1.91446C2.30747 1.92792 2.11184 1.86204 1.962 1.73129C1.81216 1.60055 1.72038 1.41565 1.70684 1.21725Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>

                    <Stats />
                </div>
            </div>
        </section>
    );
};

export default Hero;
