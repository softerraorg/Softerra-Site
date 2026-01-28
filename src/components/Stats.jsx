import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import '../styles/Stats.css';

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);

    const statsData = [
        {
            number: '500+',
            label: 'Projects Completed',
            value: 500,
            suffix: '+',
            useCounter: true
        },
        {
            number: '20+',
            label: 'Countries Served',
            value: 20,
            suffix: '+',
            useCounter: true
        },
        {
            number: '100%',
            label: 'Client Satisfaction',
            value: 100,
            suffix: '%',
            useCounter: true
        },
        {
            number: '24/7',
            label: 'Support Availabel',
            value: 24,
            suffix: '/7',
            useCounter: false
        }
    ];

    useEffect(() => {
        const element = statsRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div className="ST-Stats-wrapper" ref={statsRef}>
            {statsData.map((stat, index) => (
                <div key={index} className="ST-Stat-item">
                    <div className="ST-Stat-number">
                        {isVisible && stat.useCounter ? (
                            <CountUp
                                start={0}
                                end={stat.value}
                                duration={2.5}
                                suffix={stat.suffix}
                                decimals={0}
                            />
                        ) : (
                            stat.number
                        )}
                    </div>
                    <div className="ST-Stat-label">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default Stats;

