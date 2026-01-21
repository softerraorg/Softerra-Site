import React from 'react';
import '../styles/Services.css';


const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: "./images/services/shopify-icon.svg",
      title: "Shopify Development",
      description: "Shopify Development Transform your e-commerce vision into reality with our expert Shopify development services. From stunning custom themes to powerful apps and integrations, we craft seamless shopping experiences that drive conversions and grow your brand."
    },
    {
      id: 2,
      icon: "./images/services/ghl-icon.svg",
      title: "Go High Level",
      description: "Go High Level Revolutionize your marketing and sales automation with our Go High Level expertise. We implement all-in-one solutions that streamline your business operations, capture leads, and nurture customer relationships through sophisticated automation workflows."
    },
    {
      id: 3,
      icon: "./images/services/click-funnels-icon.svg",
      title: "Click Funnel",
      description: "ClickFunnel Convert visitors into customers with our strategic ClickFunnel solutions. We design and optimize high-converting sales funnels that guide your prospects through a seamless journey, maximizing your revenue potential at every step."
    },
    {
      id: 4,
      icon: "./images/services/sem-icon.svg",
      title: "Shopify Email Marketing",
      description: "Shopify Email Marketing Boost your e-commerce success with our targeted Shopify email marketing services. We create and manage compelling email campaigns that engage customers, recover abandoned carts, and drive repeat purchases through personalized communication strategies."
    },
    {
      id: 5,
      icon: "./images/services/framer-icon.svg",
      title: "Framer",
      description: "Framer Bring your web designs to life with our Framer development services. We create captivating, interactive websites that combine stunning aesthetics with powerful functionality. Our Framer expertise ensures your site stands out with smooth animations and responsive designs."
    },
    {
      id: 6,
      icon: "./images/services/wordpress-icon.svg",
      title: "WordPress",
      description: "Wordpress Development Bring your web designs to life with our Wordpress development services. We create captivating, interactive websites that combine stunning aesthetics with powerful functionality. Our Wordpress expertise ensures your site stands out with smooth animations and responsive designs."
    }
  ];

  return (
    <section className="ST-services-main section-padding" id="services">
      <div className="container">
        <div className="ST-services-header">
          <h2 className="ST-services-header-title">Services <span className="highlight">We Provide</span></h2>
          <p className="ST-services-header-description">Comprehensive digital solutions tailored to your business needs</p>
        </div>
      </div>

      <div className="ST-services-cards-wrapper-main">
        <div className="container">
          <div className="ST-services-cards-wrapper">
            {servicesData.map((service) => (
              <div key={service.id} className="ST-services-card">
                <div className="ST-services-card-number">
                  {service.id < 10 ? `0${service.id}` : service.id}
                </div>
                <div className="ST-services-card-content">
                  <div className="ST-services-card-image-wrapper">
                    <img src={service.icon} alt={service.title} className="ST-services-card-icon" />
                  </div>
                  <h3 className="ST-services-card-title">{service.title}</h3>
                  <p className="ST-services-card-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;