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
            color: '#1877F2'
        },
        {
            name: 'Instagram',
            icon: 'fab fa-instagram',
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
            <a
                href="https://www.facebook.com/share/1DDvV1AWN5/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button facebook"
                aria-label="Facebook"
            >
                <i className="fab fa-facebook-f"></i>
            </a>
            <a
                href="https://www.instagram.com/manjugunivenkata?igsh=MWZyODVheno4anh0cQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-button instagram"
                aria-label="Instagram"
            >
                <i className="fab fa-instagram"></i>
            </a>
        </div>
    );
};

export default SocialMediaButtons;
