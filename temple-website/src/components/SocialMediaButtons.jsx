import './SocialMediaButtons.css';

const SocialMediaButtons = () => {
    const socialLinks = [
        {
            name: 'WhatsApp',
            icon: 'fab fa-whatsapp',
            url: 'https://wa.me/918384XXXXXX',
            color: '#25D366'
        },
        {
            name: 'Facebook',
            icon: 'fab fa-facebook-f',
            url: 'https://facebook.com/manjugunitemple',
            color: '#1877F2'
        },
        {
            name: 'Instagram',
            icon: 'fab fa-instagram',
            url: 'https://instagram.com/manjugunitemple',
            color: '#E4405F'
        }
    ];

    return (
        <div className="social-media-buttons">
            <a
                href="https://wa.link/838zmn"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button whatsapp"
                aria-label="WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
            <div
                className="social-button facebook"
                aria-label="Facebook"
                role="button"
            >
                <i className="fab fa-facebook-f"></i>
            </div>
            <div
                className="social-button instagram"
                aria-label="Instagram"
                role="button"
            >
                <i className="fab fa-instagram"></i>
            </div>
        </div>
    );
};

export default SocialMediaButtons;
