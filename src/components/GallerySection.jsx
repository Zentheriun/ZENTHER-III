import React from 'react';
import ArtworkCard from './ArtworkCard';
import { artworks } from '../data/artworks';

const GallerySection = ({ id, titleKey, subtitleKey, sectionName, translate }) => {
    // Filter artworks based on the section name
    const sectionArtworks = artworks.filter(artwork => artwork.section === sectionName);

    // Filter artists for the artist section if applicable (handled separately below)
    const isArtistSection = sectionName === 'artists';

    // The 'Fluid Art Section' and 'Featured Artists Section' have different structures.
    if (sectionName === 'fluid-art') {
        return (
            <section className="fluid-art-section">
                <div className="fluid-canvas"></div>
                <div className="fluid-text" data-lang-key="fluid_text">
                    {translate('fluid_text', 'EL ARTE FLUYE<br>COMO LA VIDA MISMA')}
                </div>
            </section>
        );
    }

    // Render a standard gallery section
    return (
        <section className={`gallery-section ${sectionName}-gallery`} id={id}>
            <div className="gallery-container">
                <h2 className="gallery-title" data-lang-key={titleKey}>
                    {translate(titleKey, 'Title not found')}
                </h2>
                <p className="section-subtitle" data-lang-key={subtitleKey}>
                    {translate(subtitleKey, 'Subtitle not found')}
                </p>

                <div className="artwork-grid">
                    {sectionArtworks.map(artwork => (
                        <ArtworkCard key={artwork.id} artwork={artwork} translate={translate} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;