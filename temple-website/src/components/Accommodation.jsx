import './Accommodation.css';

const Accommodation = () => {
    return (
        <section className="accommodation section" id="accommodation">
            <div className="container">
                <span className="section-badge">Stay</span>
                <h2 className="section-title">Pilgrim Accommodation</h2>
                <div className="accommodation-content">
                    <div className="accommodation-card">
                        <div className="acc-icon">
                            <i className="fas fa-bed"></i>
                        </div>
                        <h3>Yatri Nivas</h3>
                        <p>Comfortable rooms are available for devotees within the temple premises.</p>
                        <ul className="acc-features">
                            <li><i className="fas fa-check"></i> Clean & Hygienic Rooms</li>
                            <li><i className="fas fa-check"></i> Basic Amenities</li>
                            <li><i className="fas fa-check"></i> Near to Temple</li>
                        </ul>
                    </div>
                    <div className="accommodation-card">
                        <div className="acc-icon">
                            <i className="fas fa-info-circle"></i>
                        </div>
                        <h3>Booking Information</h3>
                        <p>Accommodation can be booked upon arrival at the temple office.</p>
                        <div className="acc-contact">
                            <strong>Contact for inquiry:</strong>
                            <p>+91 8384 2XXXXX</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accommodation;
