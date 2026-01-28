import React from 'react';
import Hero from '../components/Hero';
import PortfolioCarousel from '../components/PortfolioCarousel';
import Services from '../components/Services';
import Map from '../components/Map';
import Faqs from '../components/Faqs';
import Contact from '../components/Contact';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <main className="main-content">
                <Hero />
                <Services />
                <PortfolioCarousel />
                <Map />
                <Faqs />
                <Contact />
            </main>
            <Footer />
        </>

    );
};

export default Home;

