import React, { useState } from 'react';
import '../styles/Faqs.css';

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What Is The Difference Between A Landing Page And A Website?",
            answer: "A landing page is a single, focused web page designed for a specific marketing campaign or goal, while a website is a collection of interconnected pages. Landing pages are optimized for conversions with minimal distractions, whereas websites provide comprehensive information about your business, products, and services across multiple pages."
        },
        {
            question: "What Are The Main Benefits Of Using A Landing Page?",
            answer: "Landing pages offer higher conversion rates due to their focused design, better tracking and analytics for specific campaigns, improved ad relevance and quality scores, reduced bounce rates, and the ability to tailor messaging to specific audience segments. They eliminate distractions and guide visitors toward a single desired action."
        },
        {
            question: "My Homepage Is Great, Why Do I Need A Landing Page?",
            answer: "While your homepage serves multiple purposes and audiences, a landing page is laser-focused on a single campaign goal. Homepages typically have navigation menus, multiple calls-to-action, and various content sections that can distract visitors. Landing pages eliminate these distractions and match the specific message from your ads or campaigns, resulting in significantly higher conversion rates."
        },
        {
            question: "Do I Need A Landing Page For Each Product/Service I Offer?",
            answer: "It's not always necessary, but it's highly recommended for optimal results. Each product or service may appeal to different audiences with unique pain points and motivations. Dedicated landing pages allow you to tailor messaging, imagery, and offers specifically to each audience segment, leading to better conversion rates and more effective marketing campaigns."
        },
        {
            question: "Can You Make Landing Page For E-Commerce Websites?",
            answer: "Absolutely! E-commerce landing pages are extremely effective for promoting specific products, seasonal sales, new collections, or special offers. They can showcase product benefits, customer reviews, and compelling visuals while directing visitors to make a purchase. We specialize in creating high-converting e-commerce landing pages that integrate seamlessly with your online store."
        },
        {
            question: "How Much Does It Cost?",
            answer: "Our landing page costs vary depending on complexity, features, and customization requirements. We offer packages starting from basic single-page designs to comprehensive solutions with advanced integrations. Contact us for a personalized quote based on your specific needs, goals, and budget. We always provide transparent pricing with no hidden fees."
        },
        {
            question: "How Does It Takes?",
            answer: "Typical landing page development takes 5-10 business days, depending on the complexity and scope of the project. This includes initial consultation, design mockups, development, content integration, testing, and revisions. Rush projects can be accommodated for an additional fee. We'll provide you with a detailed timeline during our initial consultation based on your specific requirements."
        }
    ];

    return (
        <section className="ST-landing-faq-main section-padding">
            <div className="radial-blur"></div>
            
            <div className="container">
                <div className="ST-landing-faq-header">
                    <h2 className="ST-landing-faq-title">
                        Frequently Asked <span className="ST-faq-highlight">Questions</span>
                    </h2>
                    <p className="ST-landing-faq-subtitle">
                        Find Answers To Commonly Asked Questions About Our Services
                    </p>
                </div>

                <div className="ST-landing-faq-content">
                    {faqData.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`ST-landing-faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <div 
                                className="ST-landing-faq-question-wrapper"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="ST-landing-faq-icon">
                                    <img src="./images/softerra-favicon.png" alt="FAQ Icon" />
                                </div>
                                <div className="ST-landing-faq-question">{faq.question}</div>
                                <div className="ST-landing-faq-toggle">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="ST-landing-faq-answer-wrapper">
                                <div className="ST-landing-faq-answer">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;