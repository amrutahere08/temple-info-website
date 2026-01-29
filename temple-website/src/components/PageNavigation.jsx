import { useState, useEffect } from 'react';
import './PageNavigation.css';

const PageNavigation = () => {
    const [showDownArrow, setShowDownArrow] = useState(false);
    const [showUpArrow, setShowUpArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            setShowDownArrow(scrollPosition > 300 && scrollPosition < documentHeight - windowHeight - 300);

            setShowUpArrow(scrollPosition > documentHeight - windowHeight - 500);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollDown = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showDownArrow && (
                <button
                    className="page-nav-arrow down-arrow"
                    onClick={scrollDown}
                    aria-label="Scroll down"
                >
                    <i className="fas fa-chevron-down"></i>
                </button>
            )}
            {showUpArrow && (
                <button
                    className="page-nav-arrow up-arrow"
                    onClick={scrollUp}
                    aria-label="Scroll to top"
                >
                    <i className="fas fa-chevron-up"></i>
                </button>
            )}
        </>
    );
};

export default PageNavigation;
