import './History.css';

const History = () => {
    const timelineEvents = [
        {
            title: '9th Century AD',
            description: 'Temple founded by Sri Tirumala Yogi, a devoted follower of Lord Vishnu. The origins trace back to ancient times when this sacred site was established.'
        },
        {
            title: 'Vijayanagara Period',
            description: 'The temple received significant patronage from Vijayanagara Kingdom rulers. The current architectural style reflects this glorious era with intricate stone carvings and sculptures.'
        },
        {
            title: '16th Century',
            description: 'Mentioned in "Tirtha Prabandha" by Shri Vadiraja Tirtha, a renowned saint of the Madhva tradition. Further developments occurred around 1600 AD.'
        },
        {
            title: 'Present Day',
            description: 'The temple continues to be a major pilgrimage destination, maintaining its spiritual significance and architectural beauty. Daily rituals and festivals keep the ancient traditions alive.'
        }
    ];

    return (
        <section className="section history" id="history">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Temple Heritage</span>
                    <h2 className="section-title">Rich Historical Legacy</h2>
                    <div className="history-divider"></div>
                    <p className="section-description">
                        A journey through centuries of devotion and architectural excellence
                    </p>
                </div>

                <div className="history-timeline">
                    {timelineEvents.map((event, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content">
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default History;
