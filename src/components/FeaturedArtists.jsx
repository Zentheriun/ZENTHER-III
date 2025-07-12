import React from 'react';
import ArtistCard from './ArtistCard';
import { artists } from '../data/artworks';

// Remove the import: import { translate } from '../utils/i18n';

const FeaturedArtists = ({ translate }) => {
    return (
        <section className="artist-section" id="artistas">
            <div className="gallery-container">
                <h2 className="gallery-title" data-lang-key="artists_title">
                    {translate('artists_title', 'Artistas Destacados')}
                </h2>
                <p className="section-subtitle" data-lang-key="artists_subtitle">
                    {translate('artists_subtitle', 'Las mentes brillantes detrás de las obras maestras.')}
                </p>

                <div className="artist-card-grid">
                    {artists.map(artist => (
                        <ArtistCard key={artist.name} artist={artist} translate={translate} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedArtists;