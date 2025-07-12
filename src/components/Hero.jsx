import React, { useEffect, useRef } from 'react';

const Hero = ({ translate }) => {
    const headerRef = useRef(null);

    // Parallax Effect (Integrated into component logic or main App logic)
    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const scrolled = window.pageYOffset;
                headerRef.current.style.backgroundPositionY = `${-scrolled * 0.3}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="artistic-header" id="inicio" ref={headerRef}>
            <div className="title-container">
                <h1 className="artistic-title" id="hero-title" data-lang-key="hero_title">
                    {translate('hero_title', 'ARTE PURO')}
                </h1>
                <p className="subtitle" id="hero-subtitle" data-lang-key="hero_subtitle">
                    {translate('hero_subtitle', 'Donde la realidad se transforma en sueño')}
                </p>
            </div>
        </header>
    );
};

export default Hero;