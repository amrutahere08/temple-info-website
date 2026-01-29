import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DonateModal from './DonateModal';
import './Header.css';

const Header = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDonateOpen, setIsDonateOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80;
            const targetPosition = element.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'history', label: 'History' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'timings', label: 'Timings' },
        { id: 'accommodation', label: 'Stay' },
        { id: 'location', label: 'Location' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="nav container">
                <div className="nav-logo">
                    <i className="fas fa-om"></i>
                    <span>Shri Kshetra Manjuguni</span>
                </div>

                <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.id} className="nav-item">
                                <a
                                    href={`#${item.id}`}
                                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item">
                            <button
                                className="nav-donate-btn"
                                onClick={() => {
                                    setIsDonateOpen(true);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                <i className="fas fa-hand-holding-heart"></i> Donate
                            </button>
                        </li>
                    </ul>
                </div>

                <div
                    className="nav-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </nav>
            <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
        </header>
    );
};

Header.propTypes = {
    activeSection: PropTypes.string.isRequired
};

export default Header;
