import './Location.css';

const Location = () => {
    return (
        <section className="section location" id="location">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Find Us</span>
                    <h2 className="section-title">Temple Location</h2>
                    <p className="section-description">
                        Visit us in the serene hills of Manjuguni
                    </p>
                </div>

                <div className="location-content">
                    <div className="location-info">
                        <div className="info-card">
                            <h4>
                                <i className="fas fa-map-marker-alt"></i>
                                Address
                            </h4>
                            <p>
                                Manjuguni Village<br />
                                Sirsi Taluk, Uttara Kannada District<br />
                                Karnataka - 581402
                            </p>
                        </div>

                        <div className="info-card">
                            <h4>
                                <i className="fas fa-route"></i>
                                How to Reach
                            </h4>
                            <p>
                                <strong>From Sirsi:</strong> 15 km (30 minutes drive)<br />
                                <strong>From Hubli:</strong> 100 km (2.5 hours)<br />
                                <strong>From Bangalore:</strong> 450 km (8 hours)
                            </p>
                        </div>

                        <div className="info-card">
                            <h4>
                                <i className="fas fa-car"></i>
                                Transportation
                            </h4>
                            <p>
                                Regular buses from Sirsi town. Private vehicles and taxis available. Ample parking space at temple premises.
                            </p>
                        </div>
                    </div>

                    <div className="location-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.488440165915!2d74.66512917488507!3d14.571221385911597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbea1216101915b%3A0x81e8862702e2346f!2sShri%20Manjuguni%20Venkataramana%20Temple!5e0!3m2!1sen!2sin!4v1769692791862!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Temple Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
