import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [activeFAQ, setActiveFAQ] = useState(null);

    const faqs = [
        {
            question: "What are the temple visiting hours?",
            answer: "The temple is open for devotees from 6:00 AM to 1:00 PM and 4:00 PM to 8:30 PM on all days. Special darshan timings may apply during festivals."
        },
        {
            question: "Is there a dress code for visiting?",
            answer: "Yes, we request all devotees to wear traditional or modest clothing. Shorts, sleeveless tops, and mini-skirts are not allowed inside the temple premises."
        },
        {
            question: "Is photography allowed inside the temple?",
            answer: "Photography is permitted in the outer calmness of the temple complex. However, photography and videography are strictly prohibited inside the main sanctum sanctorum."
        },
        {
            question: "Are there parking facilities available?",
            answer: "Yes, we have ample parking space available for both two-wheelers and four-wheelers near the temple entrance."
        },
        {
            question: "How can I book a special Puja or Seva?",
            answer: "You can book special Poojas and Sevas at the temple office counter. For advance booking or online queries, please contact us on the provided phone number."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const validateField = (name, value) => {
        let error = '';

        if (['name', 'email', 'subject', 'message'].includes(name) && !value.trim()) {
            error = 'This field is required';
        }

        if (name === 'email' && value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value.trim())) {
                error = 'Please enter a valid email address';
            }
        }

        if (name === 'phone' && value.trim()) {
            const phoneRegex = /^[0-9+\-\s()]{10,}$/;
            if (!phoneRegex.test(value.trim())) {
                error = 'Please enter a valid phone number';
            }
        }

        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            const error = validateField(name, value);
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);

            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                setIsSubmitting(false);
                setShowSuccess(true);

                setTimeout(() => {
                    setShowSuccess(false);
                }, 5000);
            }, 2000);
        }
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Get in Touch</span>
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-description">
                        We're here to help with your queries and visit planning
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-card">
                            <i className="fas fa-phone"></i>
                            <h4>Phone</h4>
                            <p>+91 8384 XXXXXX</p>
                            <p className="contact-note">Available during temple hours</p>
                        </div>

                        <div className="contact-card">
                            <i className="fas fa-envelope"></i>
                            <h4>Email</h4>
                            <p>info@manjugunitemple.org</p>
                            <p className="contact-note">Response within 24 hours</p>
                        </div>

                        <div className="contact-card">
                            <i className="fas fa-clock"></i>
                            <h4>Office Hours</h4>
                            <p>Monday - Sunday</p>
                            <p className="contact-note">9:00 AM - 6:00 PM</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-form-grid">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.name ? 'error' : ''}
                                />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.email ? 'error' : ''}
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.phone ? 'error' : ''}
                                />
                                {errors.phone && <span className="error-message">{errors.phone}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.subject ? 'error' : ''}
                                />
                                {errors.subject && <span className="error-message">{errors.subject}</span>}
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.message ? 'error' : ''}
                                ></textarea>
                                {errors.message && <span className="error-message">{errors.message}</span>}
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i> Sending...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-paper-plane"></i> Send Message
                                </>
                            )}
                        </button>

                        {showSuccess && (
                            <div className="form-success show">
                                <i className="fas fa-check-circle"></i>
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem' }}>
                <div className="section-header">
                    <span className="section-badge">Helpful Information</span>
                    <h2 className="section-title">Visitor Information</h2>
                </div>

                <div className="faq-grid">
                    <div className="faq-column">
                        <h3 className="column-title">Frequently Asked Questions</h3>
                        <div className="faq-container">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="faq-question">
                                        <h3>{faq.question}</h3>
                                        <i className={`fas fa-chevron-down ${activeFAQ === index ? 'rotate' : ''}`}></i>
                                    </div>
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="guidelines-column">
                        <div className="guidelines-card">
                            <h3 className="column-title">Temple Etiquette</h3>
                            <ul className="guidelines-list">
                                <li>
                                    <i className="fas fa-shoe-prints"></i>
                                    <span>Please remove footwear before entering the temple premises.</span>
                                </li>
                                <li>
                                    <i className="fas fa-tshirt"></i>
                                    <span>Devotees are requested to wear traditional or modest clothing.</span>
                                </li>
                                <li>
                                    <i className="fas fa-mobile-alt"></i>
                                    <span>Switch strictly to silent mode. Mobile use is restricted in inner sanctum.</span>
                                </li>
                                <li>
                                    <i className="fas fa-camera-retro"></i>
                                    <span>Photography is only allowed in the outer courtyard of the temple.</span>
                                </li>
                                <li>
                                    <i className="fas fa-praying-hands"></i>
                                    <span>Maintain silence and discipline within the temple premises.</span>
                                </li>
                            </ul>
                            <div className="guidelines-note">
                                <p><strong>Note:</strong> Special darshan queues are available for senior citizens.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
