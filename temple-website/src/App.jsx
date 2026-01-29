import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Gallery from './components/Gallery';
import Timings from './components/Timings';
import Accommodation from './components/Accommodation';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialMediaButtons from './components/SocialMediaButtons';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';
import './theme-colors.css';
import './dark-mode.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'history', 'gallery', 'timings', 'accommodation', 'location', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <DarkModeToggle />
      <Hero />
      <About />
      <History />
      <Gallery />
      <Timings />
      <Accommodation />
      <Location />
      <Contact />
      <Footer />
      <SocialMediaButtons />
    </div>
  );
}

export default App;
