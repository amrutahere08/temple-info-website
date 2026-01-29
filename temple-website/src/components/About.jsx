import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('fade-in', 'visible');
                        }, index * 100);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: 'fa-gopuram',
            title: 'Sacred Deities',
            description: 'The temple houses the divine idols of Lord Venkataramana holding an arrow and bow, symbolizing protection, along with Goddess Padmavati representing prosperity and auspiciousness.',
            bgImage: 'images/sacred-deities.jpg'
        },
        {
            icon: 'fa-mountain',
            title: 'Scenic Location',
            description: 'Nestled in the Sahyadri Hills (Western Ghats), the temple is surrounded by lush rainforests and enveloped in thick fog ("manju") during winter, creating a divine atmosphere.',
            bgImage: 'images/scenic-location.png'
        },
        {
            icon: 'fa-landmark',
            title: 'Vijayanagara Architecture',
            description: 'Reflecting the glorious Vijayanagara style, the temple features intricate carvings, ornate pillars, and a magnificent Dwaja Sthambha that stands as a testament to ancient craftsmanship.',
            bgImage: 'images/slide-2.jpg'
        },
        {
            icon: 'fa-hands-praying',
            title: 'Spiritual Significance',
            description: 'Known as "Chikka Tirupathi," this powerful center for Vaishnavite pilgrimage is believed to fulfill wishes for health and prosperity, drawing devotees from across the region.',
            bgImage: 'images/spiritual-significance.jpg'
        },
        {
            icon: 'fa-calendar-alt',
            title: 'Annual Festivals',
            description: 'Experience grand celebrations during Brahmotsava and Rathotsava (Chariot Festival) with traditional music, Vedic hymns, and colorful processions showcasing rich cultural heritage.',
            bgImage: 'images/annual-festivals.jpg'
        },
        {
            icon: 'fa-gift',
            title: 'Divine Prasadam',
            description: 'Receive blessed offerings like the famous Boondi Laddu and Atirasa. Prepared with devotion in the temple kitchen, these sacred offerings are believed to carry divine grace.',
            bgImage: 'images/divine-prasadam-new.jpg'
        }
    ];

    const openModal = (index) => {
        setSelectedCard(features[index]);
    };

    const closeModal = () => {
        setSelectedCard(null);
    };

    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-intro">
                    <div className="about-intro-text">
                        <span className="section-badge">About the Temple</span>
                        <h2 className="section-title">Chikka Tirupathi</h2>
                        <p className="section-description">
                            A divine abode of Lord Venkataramana in the heart of Western Ghats.
                            Experience serenity and spiritual bliss in this sacred pilgrimage center,
                            surrounded by the lush greenery of Uttara Kannada.
                        </p>
                        <p className="section-description" style={{ marginTop: '1rem' }}>
                            Known as "Chikka Tirupathi," this ancient temple holds immense spiritual significance.
                            The main deity is believed to be <strong>Swayambhu</strong> (self-manifested), and the temple architecture
                            reflects the glorious Vijayanagara style. Devotees flock here to seek blessings for health, prosperity, and peace.
                        </p>
                        <ul className="about-highlights" style={{ marginTop: '1.5rem', listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <i className="fas fa-check-circle" style={{ color: '#E65100' }}></i> <strong>Ancient Heritage:</strong> Centuries-old history and tradition.
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <i className="fas fa-check-circle" style={{ color: '#E65100' }}></i> <strong>Nature's Lap:</strong> scenic location in the Sahyadri hills.
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <i className="fas fa-check-circle" style={{ color: '#E65100' }}></i> <strong>Divine Vibes:</strong> Powerful spiritual atmosphere for meditation.
                            </li>
                        </ul>
                    </div>
                    <div className="about-intro-image">
                        <img src="images/about-intro.jpg" alt="Shri Kshetra Manjuguni Temple" />
                    </div>
                </div>

                <div className="about-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="about-card fade-in"
                            ref={(el) => (cardsRef.current[index] = el)}
                        >
                            <div
                                className="card-bg-image"
                                style={{ backgroundImage: `url(${feature.bgImage})` }}
                            ></div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
