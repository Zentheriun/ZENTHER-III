import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GallerySection from './components/GallerySection';
import FeaturedArtists from './components/FeaturedArtists';
import Footer from './components/Footer';
import translationsData from './data/translations';
import './styles/main.css'; // Import the main CSS file

const App = () => {
    const [currentLanguage, setCurrentLanguage] = useState('es'); // Default language

    // Function to handle translations
    const translate = (key, defaultText) => {
        const langData = translationsData[currentLanguage];
        return (langData && langData[key]) ? langData[key] : defaultText;
    };

    // Function to change language
    const changeLanguage = (lang) => {
        setCurrentLanguage(lang);
    };

    // --- Interactive Effects and Animations (Extracted from original <script>) ---

    // 1. Particle Generation
    useEffect(() => {
        const createParticles = () => {
            const particleContainer = document.getElementById('particles');
            if (!particleContainer) return;

            const particleCount = 100;
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.animationDelay = Math.random() * 30 + 's';
                particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
                particle.style.width = Math.random() * 5 + 3 + 'px';
                particle.style.height = particle.style.width;
                particleContainer.appendChild(particle);
            }
        };
        createParticles();
    }, []);

    // 2. Interactive Cursor Effect
    useEffect(() => {
        const setupInteractiveCursor = () => {
            const cursor = document.getElementById('cursor');
            if (!cursor) return;

            let mouseX = 0;
            let mouseY = 0;

            const handleMouseMove = (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;

                requestAnimationFrame(() => {
                    cursor.style.left = mouseX + 'px';
                    cursor.style.top = mouseY + 'px';
                    cursor.style.opacity = '0.8';
                });
            };

            const handleMouseLeave = () => {
                cursor.style.opacity = '0';
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);

            // Hide cursor over interactive elements
            document.querySelectorAll('a, .artwork-card, .artist-card, .language-selector').forEach(element => {
                element.addEventListener('mouseover', () => {
                    cursor.style.opacity = '0';
                });
                element.addEventListener('mouseout', () => {
                    cursor.style.opacity = '0.8';
                });
            });
        };
        setupInteractiveCursor();
    }, []);

    // 3. Smooth Parallax Effect (Partial, as Hero component handles its own parallax)
    useEffect(() => {
        const setupParallax = () => {
            const fluidCanvas = document.querySelector('.fluid-canvas');

            const handleScroll = () => {
                const scrolled = window.pageYOffset;
                if (fluidCanvas) {
                    // Note: The original JS used translateY(${scrolled * 0.2}px)
                    // We'll apply this specific transformation here
                    fluidCanvas.style.transform = `translateY(${scrolled * 0.2}px)`;
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        };
        setupParallax();
    }, []);

    // 4. Scroll Animations (Intersection Observer)
    useEffect(() => {
        const setupScrollAnimations = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.artwork-card, .artist-card').forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(80px)';
                element.style.transition = 'opacity 1s ease, transform 1s ease';
                observer.observe(element);
            });
        };
        setupScrollAnimations();
    }, []);

    // 5. Lazy Loading for Images (Combined into a single function for simplicity in App.jsx)
    // Note: In a real React application, lazy loading is usually handled by libraries or React.lazy(),
    // but we will implement the vanilla JS logic from the original file here.
    useEffect(() => {
        const setupLazyLoading = () => {
            const lazyImages = document.querySelectorAll('.artwork-image');

            if ('IntersectionObserver' in window) {
                let lazyObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            let img = entry.target;

                            // Check if image has a data-src attribute for lazy loading
                            const dataSrc = img.getAttribute('data-src');
                            if (dataSrc) {
                                // Only update src if it's different to avoid re-rendering issues
                                if (img.src !== dataSrc) {
                                    img.src = dataSrc;
                                }
                                img.classList.add('loading');

                                img.onload = () => {
                                    img.classList.remove('loading');
                                };
                                img.onerror = () => {
                                    console.error('Failed to load image: ' + dataSrc);
                                    img.classList.remove('loading');
                                };
                            }
                            observer.unobserve(img);
                        }
                    });
                }, {
                    rootMargin: '0px 0px 200px 0px' // Load images 200px before they enter the viewport
                });

                lazyImages.forEach(function(img) {
                    lazyObserver.observe(img);
                });
            } else {
                // Fallback for browsers without IntersectionObserver
                lazyImages.forEach(function(img) {
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                });
            }
        };

        // We run setupLazyLoading after the component has rendered the image elements
        // A slight delay or use of a state update might be necessary in a complex React app,
        // but for this direct adaptation, we call it in useEffect.
        setupLazyLoading();
    }, [currentLanguage]); // Rerunning lazy loading when language changes to ensure all elements are observed

    return (
        <>
            <div className="art-particles" id="particles"></div>
            <div className="interactive-element" id="cursor"></div>

            <Navbar
                currentLanguage={currentLanguage}
                changeLanguage={changeLanguage}
                translate={translate}
            />

            <Hero translate={translate} />

            <GallerySection
                id="galeria"
                titleKey="gallery_title"
                subtitleKey="gallery_subtitle"
                sectionName="gallery"
                translate={translate}
            />

            <GallerySection
                id="renacimiento"
                titleKey="renaissance_title"
                subtitleKey="renaissance_subtitle"
                sectionName="renaissance"
                translate={translate}
            />

            <GallerySection
                id="impresionismo"
                titleKey="impressionism_title"
                subtitleKey="impressionism_subtitle"
                sectionName="impressionism"
                translate={translate}
            />

            <GallerySection
                id="moderno"
                titleKey="modern_title"
                subtitleKey="modern_subtitle"
                sectionName="modern"
                translate={translate}
            />

            <GallerySection
                id="escultura"
                titleKey="sculpture_title"
                subtitleKey="sculpture_subtitle"
                sectionName="sculpture"
                translate={translate}
            />

            {/* Fluid Art Section (Using GallerySection component with a specific sectionName) */}
            <GallerySection sectionName="fluid-art" translate={translate} />

            <FeaturedArtists translate={translate} />

            <Footer translate={translate} />
        </>
    );
};

export default App;