import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        'images/slide-1.png',
        'images/slide-2.jpg',
        'images/slide-3.jpg',
        'images/slide-4.jpg',
        'images/slide-5.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80;
            const targetPosition = element.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="hero" id="home">
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide})` }}
                    ></div>
                ))}
            </div>

            <div className="hero-overlay"></div>

            <button className="slider-arrow slider-arrow-left" onClick={prevSlide} aria-label="Previous slide">
                <i className="fas fa-chevron-left"></i>
            </button>
            <button className="slider-arrow slider-arrow-right" onClick={nextSlide} aria-label="Next slide">
                <i className="fas fa-chevron-right"></i>
            </button>

            <div className="hero-content">
                <div className="hero-title-wrapper">
                    <h1 className="hero-title-small">Shri Manjuguni</h1>
                    <h1 className="hero-title-large">Venkataramana Temple</h1>
                </div>
                <h2 className="hero-title-kannada-sub">ಶ್ರೀ ಮಂಜುಗುಣಿ ವೆಂಕಟರಮಣ ದೇವಸ್ಥಾನ</h2>
                <p className="hero-description">
                    Where devotion meets divine serenity in the heart of Sahyadri Hills.<br />
                    Experience the timeless grace where prayer echoes in nature's silence.
                </p>
                <p className="hero-description-kannada">
                    ಸಹ್ಯಾದ್ರಿ ಬೆಟ್ಟಗಳ ಹೃದಯದಲ್ಲಿ ಭಕ್ತಿ ಮತ್ತು ದಿವ್ಯ ಶಾಂತಿ ಸಂಗಮಿಸುವ ಸ್ಥಳ.
                </p>
                <div className="hero-buttons">
                    <button
                        className="btn btn-primary"
                        onClick={() => scrollToSection('about')}
                    >
                        Explore Temple
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => scrollToSection('timings')}
                    >
                        Visit Timings
                    </button>
                </div>
            </div>

            <div className="slider-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            <div
                className="scroll-indicator"
                onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <i className="fas fa-chevron-down"></i>
            </div>
        </section>
    );
};

export default Hero;
