import React from 'react';

const ArtistCard = ({ artist, translate }) => {
    return (
        <div className="artist-card">
            <h3 className="artist-name">{artist.name}</h3>
            <p className="artist-bio" data-lang-key={artist.langKey}>
                {translate(artist.langKey, 'Bio not found')}
            </p>
        </div>
    );
};

export default ArtistCard;