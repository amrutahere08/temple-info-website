import './Gallery.css';

const Gallery = () => {
    const images = [
        { src: 'images/gallery-1.jpg', caption: 'Temple Festival Celebration' },
        { src: 'images/gallery-2.jpg', caption: 'Temple Entrance' },
        { src: 'images/gallery-3.jpg', caption: 'Sacred Deity' },
        { src: 'images/gallery-7.jpg', caption: 'Ancient Temple Sculptures' },
        { src: 'images/gallery-4.jpg', caption: 'Temple Courtyard at Night' },
        { src: 'images/gallery-6.jpg', caption: 'Ancient Temple Architecture' },
        { src: 'images/gallery-10.jpg', caption: 'Temple Rituals' },
        { src: 'images/gallery-8.jpg', caption: 'Temple Decorations' },
        { src: 'images/gallery-9.jpg', caption: 'Temple Grounds' },
    ];

    return (
        <section className="gallery section" id="gallery">
            <div className="container">
                <span className="section-badge">Gallery</span>
                <h2 className="section-title">Temple Gallery</h2>
                <p className="section-description">
                    Explore the divine beauty and architectural splendor of our temple
                </p>

                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image.src} alt={image.caption} loading="lazy" />
                            <div className="gallery-caption-text">{image.caption}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
