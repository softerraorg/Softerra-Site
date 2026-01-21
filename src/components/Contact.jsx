import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import bgDecoration from '../assets/portfolio-right-bg-image.png';
import upworkLogo from '../assets/upwork-logo.png';
import freelancerLogo from '../assets/upwork-logo.png';
import fiverrLogo from '../assets/upwork-logo.png';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        projectBudget: '',
        aboutProject: ''
    });

    // Testimonials data
    const testimonials = [
        {
            id: 1,
            platform: "Upwork",
            logo: upworkLogo,
            content: "Working with Softerra was one of the best decisions we made during our rebranding and digital overhaul. As a growing e-commerce brand focused on sustainability, we needed more than just a nice-looking site—we needed a fast, secure, and scalable platform that could support our expanding product lines and offer a smooth customer experience across all devices. They didn't just take our brief and run with it—they pushed us to clarify our priorities and rethink parts of our user journey we hadn't considered. Their UX designer, Haseeb, was incredible.",
            author: "Alicia Bennett",
            position: "Head of E-Commerce, WildNest Organics",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&crop=face"
        },
        {
            id: 2,
            platform: "Freelancer",
            logo: freelancerLogo,
            content: "Softerra helped us rebuild our client dashboard from scratch, and I can honestly say the experience was one of the best I've had working with an external dev team. Their team was technically solid—strong on React and Node, and they even helped us rethink parts of our architecture to make the system more modular.",
            author: "Michael Rodriguez",
            position: "CTO, InnovateLab",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face"
        },
        {
            id: 3,
            platform: "Fiverr",
            logo: fiverrLogo,
            content: "The e-commerce platform Softerra built for us exceeded our expectations. Not only did they deliver a beautiful, user-friendly interface, but they also integrated complex inventory management features that streamlined our operations. Sales increased by 60% within the first three months of launch.",
            author: "Emily Watson",
            position: "Operations Manager, GreenTech Solutions",
            avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop&crop=face"
        }
    ];

    // Initialize Splide for testimonials
    useEffect(() => {
        let currentSplideInstance = null;

        const initSplide = async () => {
            // Dynamically import Splide
            const { Splide } = await import('@splidejs/splide');

            const splide = new Splide('#testimonials-slider', {
                type: 'loop',
                perPage: 1,
                perMove: 1,
                gap: 20,
                pagination: true,
                arrows: false,
                autoplay: false,
                interval: 5000,
                pauseOnHover: true,
            });

            splide.mount();
            currentSplideInstance = splide;
        };

        // Load Splide CSS and JS
        const loadSplide = () => {
            // Load CSS
            if (!document.querySelector('link[href*="splide"]')) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
                document.head.appendChild(link);
            }

            initSplide();
        };

        loadSplide();

        return () => {
            if (currentSplideInstance) {
                currentSplideInstance.destroy();
            }
        };
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            // Replace these with your actual EmailJS credentials
            const result = await emailjs.sendForm(
                'service_pb5qrtm', // Replace with your EmailJS service ID
                'template_7fkc2rh', // Replace with your EmailJS template ID
                form.current,
                'hdi5JnHDo6gXgtKAs' // Replace with your EmailJS public key
            );

            console.log('Email sent successfully:', result.text);
            setMessage('Message sent successfully! We\'ll get back to you soon.');

            // Reset form
            setFormData({
                fullName: '',
                email: '',
                projectBudget: '',
                aboutProject: ''
            });
            form.current.reset();

        } catch (error) {
            console.error('Error sending email:', error);
            setMessage('Failed to send message. Please try again.');
        }

        setIsLoading(false);
    };

    return (
        <section className="contact-section section-padding" id="contact">
            <img src={bgDecoration} alt="" className="ST-contact-bg-shape" aria-hidden="true" />

            <div className="container">
                <div className="contact-section-header">
                    <h2 className="contact-section-title">
                        Let's Work <span className="contact-highlight">Together</span>
                    </h2>
                    <p className="contact-section-subtitle">
                        Ready to transform your digital presence? Get in touch with us today
                    </p>
                </div>

                <div className="contact-container">
                    <div className="contact-content">
                        <h2 className="contact-title">
                            Contact Us
                        </h2>

                        <form ref={form} onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="projectBudget">Project Budget</label>
                                <input
                                    type="text"
                                    id="projectBudget"
                                    name="projectBudget"
                                    value={formData.projectBudget}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="aboutProject">About Project</label>
                                <textarea
                                    id="aboutProject"
                                    name="aboutProject"
                                    value={formData.aboutProject}
                                    onChange={handleChange}
                                    rows="4"
                                    className="form-textarea"
                                    required
                                ></textarea>
                            </div>

                            <div className="form-footer">
                                <p className="privacy-text">
                                    By sending this form, I confirm that, I have read and accept the{' '}
                                    <a href="/privacy-policy" className="privacy-link">privacy policy</a>
                                </p>

                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Sending...' : 'Submit'}
                                </button>
                            </div>

                            {message && (
                                <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
                                    {message}
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="contact-slider">
                        <div className="testimonials-wrapper">
                            <div className="splide" id="testimonials-slider">
                                <div className="splide__track">
                                    <div className="splide__list">
                                        {testimonials.map((testimonial) => (
                                            <div key={testimonial.id} className="splide__slide">
                                                <div className="testimonial-card">
                                                    <div className="testimonial-header">
                                                        <div className="platform-logo">
                                                            <img src={testimonial.logo} alt={testimonial.platform} />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p className="testimonial-text">
                                                            {testimonial.content}
                                                        </p>
                                                    </div>
                                                    <div className="testimonial-author">
                                                        <div className="author-avatar">
                                                            <img
                                                                src={testimonial.avatar}
                                                                alt={testimonial.author}
                                                            />
                                                        </div>
                                                        <div className="author-info">
                                                            <h4 className="author-name">{testimonial.author}</h4>
                                                            <p className="author-position">{testimonial.position}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
