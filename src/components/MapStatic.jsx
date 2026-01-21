import React from 'react';
import '../styles/Map.css';
import mapImage from '../assets/map-image.png';

const Map = () => {
  return (
    <section className="ST-map-main section-padding">
      <div className="radial-blur"></div>
      
      <div className="container">
        <div className="ST-map-header-wrapper">
          <h2 className="ST-map-header-title">
            Digital <span className="ST-map-highlight">Innovation</span>
          </h2>
          <p className="ST-map-header-subtitle">
            Pioneering Digital Innovation Across 30+ Countries
          </p>
        </div>

        <div className="ST-map-image-wrapper">
          <img
            className="ST-map-image"
            src={mapImage}
            alt="World Map showing our global presence across 30+ countries"
            loading="lazy"
          />
        </div>

        <div className="ST-map-description-wrapper">
          <p className="ST-map-description">
            We're Proud To Deliver Expert Solutions Across Shopify, WordPress, Framer, And Funnel Development—Empowering Brands To Scale With Confidence. From High-Performing ECommerce Stores To Optimized Email Marketing Systems And Conversion-Focused Funnels, We Partner With Businesses Worldwide To Achieve Exceptional Growth And Innovation. Our Capabilities Go Beyond Boundaries, Ensuring Every Project Is Built With Precision, Creativity, And Measurable Results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;