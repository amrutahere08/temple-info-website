import './Timings.css';

const Timings = () => {
    const timingCards = [
        {
            icon: 'fa-sun',
            title: 'Morning Darshan',
            hours: '6:00 AM - 12:00 PM',
            description: 'Morning prayers and rituals'
        },
        {
            icon: 'fa-moon',
            title: 'Evening Darshan',
            hours: '4:00 PM - 8:00 PM',
            description: 'Evening aarti and darshan'
        },
        {
            icon: 'fa-utensils',
            title: 'Free Prasadam',
            hours: '12:00 PM - 2:00 PM',
            description: 'Daily free meals for devotees'
        },
        {
            icon: 'fa-candy-cane',
            title: 'Special Offerings',
            hours: 'All Day',
            description: 'Boondi Laddu & Atirasa available'
        }
    ];

    const specialEvents = [
        'Manjuguni Rathothsava: Annual chariot festival with grand celebrations',
        'Brahmotsava: Multi-day festival with special rituals',
        'Vaikunta Ekadashi: Auspicious day with special darshan'
    ];

    return (
        <section className="section timings" id="timings">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Visit Information</span>
                    <h2 className="section-title">Temple Timings & Services</h2>
                    <p className="section-description">
                        Plan your divine visit with our daily schedule
                    </p>
                </div>

                <div className="timings-grid">
                    {timingCards.map((card, index) => (
                        <div key={index} className={`timing-card ${card.highlight ? 'highlight' : ''}`}>
                            <div className="timing-icon">
                                <i className={`fas ${card.icon}`}></i>
                            </div>
                            <h3>{card.title}</h3>
                            <p className="timing-hours">{card.hours}</p>
                            <p className="timing-desc">{card.description}</p>
                        </div>
                    ))}
                </div>

                <div className="special-events">
                    <h3>
                        <i className="fas fa-calendar-star"></i> Special Events
                    </h3>
                    <div className="events-list">
                        {specialEvents.map((event, index) => (
                            <div key={index} className="event-item">
                                <i className="fas fa-circle"></i>
                                <span>
                                    <strong>{event.split(':')[0]}:</strong> {event.split(':')[1]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timings;
