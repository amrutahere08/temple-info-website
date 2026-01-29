import './Footer.css';

const Footer = () => {
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

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>
                            <i className="fas fa-om"></i> Shri Kshetra Manjuguni
                        </h3>
                        <p>
                            A sacred abode of Lord Venkataramana in the heart of Western Ghats, serving devotees with divine blessings since the 9th century.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                                    About Temple
                                </a>
                            </li>
                            <li>
                                <a href="#history" onClick={(e) => { e.preventDefault(); scrollToSection('history'); }}>
                                    History
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>
                                    Photo Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#timings" onClick={(e) => { e.preventDefault(); scrollToSection('timings'); }}>
                                    Timings
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Information</h4>
                        <ul>
                            <li>
                                <a href="#location" onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}>
                                    How to Reach
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#timings" onClick={(e) => { e.preventDefault(); scrollToSection('timings'); }}>
                                    Prasadam Details
                                </a>
                            </li>
                            <li>
                                <a href="#timings" onClick={(e) => { e.preventDefault(); scrollToSection('timings'); }}>
                                    Festival Calendar
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Visit Us</h4>
                        <p>
                            <i className="fas fa-map-marker-alt"></i> Manjuguni, Sirsi<br />
                            Karnataka - 581402
                        </p>
                        <p>
                            <i className="fas fa-phone"></i> +91 8384 XXXXXX
                        </p>
                        <p>
                            <i className="fas fa-envelope"></i> info@manjugunitemple.org
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Shri Kshetra Manjuguni Temple. All rights reserved.</p>
                    <p>
                        Designed with <i className="fas fa-heart"></i> for devotees worldwide
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
