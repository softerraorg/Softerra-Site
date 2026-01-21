import { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';
import '../styles/PortfolioCarousel.css'; 

// Assets
import bgDecoration from '../assets/portfolio-right-bg-image.png';
import project1 from '../assets/project-1.webp';
import project2 from '../assets/project-2.webp';
import project3 from '../assets/project-3.webp';
import project4 from '../assets/project-4.webp';
import project5 from '../assets/project-5.webp';
import project6 from '../assets/project-6.webp';

const PortfolioCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(4);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const projects = [
        { id: 1, image: project1, alt: 'Project 1', width: 600, height: 400 },
        { id: 2, image: project2, alt: 'Project 2', width: 600, height: 400 },
        { id: 3, image: project3, alt: 'Project 3', width: 600, height: 400 },
        { id: 4, image: project4, alt: 'Project 4', width: 600, height: 400 },
        { id: 5, image: project5, alt: 'Project 5', width: 600, height: 400 },
        { id: 6, image: project6, alt: 'Project 6', width: 600, height: 400 },
    ];

    // Handle responsive items per slide
    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth <= 600) {
                setItemsPerSlide(1); // Mobile
            } else if (window.innerWidth <= 1024) {
                setItemsPerSlide(3); // Tablet requested: 3
            } else {
                setItemsPerSlide(4); // Desktop
            }
        };

        updateItemsPerSlide();
        window.addEventListener('resize', updateItemsPerSlide);
        return () => window.removeEventListener('resize', updateItemsPerSlide);
    }, []);

    // Reset slide when items per slide changes to avoid "empty" views
    useEffect(() => {
        setCurrentSlide(0);
    }, [itemsPerSlide]);

    // CALCULATE PAGES: Total projects divided by items currently shown
    const totalSlides = Math.ceil(projects.length / itemsPerSlide);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    const goToSlide = (index) => setCurrentSlide(index);

    // Touch handlers for swipe gestures
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50; // Minimum distance for a swipe
        
        if (distance > minSwipeDistance) {
            // Swiped left - go to next slide
            nextSlide();
        } else if (distance < -minSwipeDistance) {
            // Swiped right - go to previous slide
            prevSlide();
        }
        
        // Reset values
        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <section className="ST-portfolio-carousel-section-main section-padding" id="portfolio">
            <div className="radial-blur"></div>
            <img src={bgDecoration} alt="" className="ST-portfolio-bg-shape" aria-hidden="true" />

            <div className="container">
                <div className="ST-portfolio-carousel-section-wrapper">
                    <header className="ST-portfolio-header">
                        <h2 className="section-title">Our <span className="highlight">Portfolio</span></h2>
                        <p className="section-description">
                            Explore Our Latest Projects And See How We Transform Ideas Into Reality
                        </p>
                    </header>

                    <div className="ST-portfolio-carousel-wrapper">
                        <div 
                            className="ST-portfolio-carousel"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div 
                                className="ST-portfolio-carousel-track" 
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {projects.map((project, index) => (
                                    <div key={project.id} className="ST-portfolio-project-item">
                                        <div className="ST-portfolio-project-image-wrapper">
                                            <OptimizedImage
                                                src={project.image}
                                                alt={project.alt}
                                                className="ST-portfolio-project-image"
                                                width={project.width}
                                                height={project.height}
                                                priority={index < itemsPerSlide}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {totalSlides > 1 && (
                                <>
                                    <button className="ST-carousel-arrow ST-carousel-arrow-prev" onClick={prevSlide} aria-label="Prev">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </button>
                                    <button className="ST-carousel-arrow ST-carousel-arrow-next" onClick={nextSlide} aria-label="Next">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 16L14 10L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="ST-carousel-dots">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`ST-carousel-dot ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="ST-portfolio-footer">
                        <button className="ST-view-all-btn">
                            View All Projects 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.06414 8.57962C9.05738 8.48127 9.07008 8.38254 9.10151 8.2891C9.13293 8.19566 9.18247 8.10933 9.2473 8.03505C9.31212 7.96078 9.39095 7.90001 9.47927 7.85622C9.5676 7.81244 9.66369 7.78649 9.76206 7.77988L15.8347 7.3641C15.9415 7.35686 16.0486 7.37256 16.1488 7.41015C16.2491 7.44775 16.3401 7.50636 16.4158 7.58205C16.4915 7.65774 16.5501 7.74876 16.5877 7.84899C16.6253 7.94922 16.641 8.05633 16.6337 8.16313L16.2179 14.2358C16.2132 14.3354 16.1886 14.4331 16.1456 14.5231C16.1026 14.6131 16.042 14.6937 15.9675 14.76C15.893 14.8263 15.806 14.8771 15.7117 14.9094C15.6173 14.9417 15.5174 14.9549 15.4179 14.9481C15.3184 14.9413 15.2212 14.9148 15.132 14.87C15.0429 14.8252 14.9636 14.7631 14.8988 14.6873C14.8339 14.6114 14.7849 14.5235 14.7545 14.4284C14.7241 14.3334 14.7129 14.2333 14.7217 14.1339L15.001 10.0575L8.63776 16.4207C8.4971 16.5614 8.30634 16.6404 8.10743 16.6404C7.90851 16.6404 7.71775 16.5614 7.5771 16.4207C7.43644 16.2801 7.35743 16.0893 7.35743 15.8904C7.35743 15.6915 7.43644 15.5007 7.5771 15.3601L13.9396 8.99752L9.86317 9.27682C9.66477 9.29029 9.46914 9.2244 9.3193 9.09366C9.16946 8.96292 9.07768 8.77802 9.06414 8.57962Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioCarousel;