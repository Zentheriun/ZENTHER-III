import React, { useRef, useEffect } from 'react';

const ArtworkCard = ({ artwork, translate }) => {
    const imgRef = useRef(null);

    // Lazy loading functionality (simplified for this component)
    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        img.classList.add('loading');
        img.src = img.dataset.src;

        const handleLoad = () => {
            img.classList.remove('loading');
        };

        const handleError = () => {
            console.error('Failed to load image: ' + img.src);
            img.classList.remove('loading');
        };

        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleError);

        // Cleanup
        return () => {
            img.removeEventListener('load', handleLoad);
            img.removeEventListener('error', handleError);
        };
    }, [artwork.image]);

    // Use dataset.src for lazy loading and src for the actual image URL (once loaded)
    const imageUrl = `images/${artwork.image.split('/').pop()}`;

    return (
        <div className="artwork-card">
            <img
                ref={imgRef}
                className="artwork-image"
                src={imageUrl} // We set the src here directly since we are moving the lazy loading logic to the App component or a utility function if necessary, but keep the `loading` class for visual effect.
                alt={artwork.alt}
                data-src={imageUrl} // Placeholder for lazy loading implementation
            />
            <div className="artwork-content">
                <h3 className="artwork-title" data-lang-key={artwork.langKeys.title}>
                    {translate(artwork.langKeys.title, artwork.alt)}
                </h3>
                <p className="artwork-artist">{artwork.artist}</p>
                <p className="artwork-description" data-lang-key={artwork.langKeys.desc}>
                    {translate(artwork.langKeys.desc, 'Description not found')}
                </p>
            </div>
        </div>
    );
};

export default ArtworkCard;