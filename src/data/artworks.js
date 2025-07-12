// This file contains structured data for all artworks and artists displayed in the gallery.

// Sample Artwork Data Structure (Simplified)
const artworks = [
    {
        id: 'ecstasy_baroque',
        image: 'images/Ecstasy_of_Saint_Teresa_September_2015-2a.jpg',
        alt: 'Éxtasis de Santa Teresa',
        artist: 'Gian Lorenzo Bernini',
        section: 'gallery',
        langKeys: {
            title: 'artwork_ecstasy_title',
            desc: 'artwork_ecstasy_desc'
        }
    },
    {
        id: 'marriage_mystic',
        image: 'images/The-Arnolfinit.jpg',
        alt: 'El Matrimonio Arnolfini',
        artist: 'Jan van Eyck',
        section: 'gallery',
        langKeys: {
            title: 'artwork_marriage_title',
            desc: 'artwork_marriage_desc'
        }
    },
    {
        id: 'mona_lisa',
        image: 'images/mona-lisa.jpg',
        alt: 'Mona Lisa',
        artist: 'Leonardo da Vinci',
        section: 'gallery',
        langKeys: {
            title: 'artwork_mona_title',
            desc: 'artwork_mona_desc'
        }
    },
    {
        id: 'cosmos_oniric',
        image: 'images/Vassily_Kandinsky,_1913_-_Composition_7.jpg',
        alt: 'Composición 7 - Kandinsky',
        artist: 'Wassily Kandinsky',
        section: 'gallery',
        langKeys: {
            title: 'artwork_cosmos_title',
            desc: 'artwork_cosmos_desc'
        }
    },
    {
        id: 'felines_celestial',
        image: 'images/Dali-Persistence-of-Memory-cat-min.jpg',
        alt: 'La persistencia de la memoria - gato',
        artist: 'Salvador Dalí',
        section: 'gallery',
        langKeys: {
            title: 'artwork_felines_title',
            desc: 'artwork_felines_desc'
        }
    },
    {
        id: 'astral_garden',
        image: 'images/The Starry Night.jpg',
        alt: 'La Noche Estrellada - Jardín Astral',
        artist: 'Vincent van Gogh',
        section: 'gallery',
        langKeys: {
            title: 'artwork_astral_title',
            desc: 'artwork_astral_desc'
        }
    },
    {
        id: 'renaissance_venus',
        image: 'images/The Birth of Venus (El Nacimiento de Venus).jpg',
        alt: 'El Nacimiento de Venus',
        artist: 'Sandro Botticelli',
        section: 'renaissance',
        langKeys: {
            title: 'renaissance_venus_title',
            desc: 'renaissance_venus_desc'
        }
    },
    {
        id: 'renaissance_adam',
        image: 'images/The Creation of Adam (La Creación de Adán).jpg',
        alt: 'La Creación de Adán',
        artist: 'Miguel Ángel',
        section: 'renaissance',
        langKeys: {
            title: 'renaissance_adam_title',
            desc: 'renaissance_adam_desc'
        }
    },
    {
        id: 'renaissance_athens',
        image: 'images/The School of Athens (La Escuela de Atenas).jpg',
        alt: 'La Escuela de Atenas',
        artist: 'Rafael',
        section: 'renaissance',
        langKeys: {
            title: 'renaissance_athens_title',
            desc: 'renaissance_athens_desc'
        }
    },
    {
        id: 'renaissance_david',
        image: 'images/David (David).webp',
        alt: 'David',
        artist: 'Miguel Ángel',
        section: 'renaissance',
        langKeys: {
            title: 'renaissance_david_title',
            desc: 'renaissance_david_desc'
        }
    },
    {
        id: 'renaissance_lastsupper',
        image: 'images/The Last Supper (La Última Cena).jpg',
        alt: 'La Última Cena',
        artist: 'Leonardo da Vinci',
        section: 'renaissance',
        langKeys: {
            title: 'renaissance_lastsupper_title',
            desc: 'renaissance_lastsupper_desc'
        }
    },
    {
        id: 'renaissance_titian',
        image: 'images/Portrait of a Man (Retrato de un Hombre).jpg',
        alt: 'Retrato de un Hombre',
        artist: 'Tiziano',
        section: 'renaissance',
        langKeys: {
            title: 'renaissance_titian_title',
            desc: 'renaissance_titian_desc'
        }
    },
    {
        id: 'impressionism_sunrise',
        image: 'images/Impression, Sunrise (Impresión, Sol Naciente).jpg',
        alt: 'Impression, Sunrise',
        artist: 'Claude Monet',
        section: 'impressionism',
        langKeys: {
            title: 'impressionism_sunrise_title',
            desc: 'impressionism_sunrise_desc'
        }
    },
    {
        id: 'impressionism_moulin',
        image: 'images/Bal du moulin de la Galette (Baile en el Moulin de la Galette).jpg',
        alt: 'Bal du moulin de la Galette',
        artist: 'Pierre-Auguste Renoir',
        section: 'impressionism',
        langKeys: {
            title: 'impressionism_moulin_title',
            desc: 'impressionism_moulin_desc'
        }
    },
    {
        id: 'impressionism_starry',
        image: 'images/The Starry Night (La Noche Estrellada).webp',
        alt: 'La Noche Estrellada',
        artist: 'Vincent van Gogh',
        section: 'impressionism',
        langKeys: {
            title: 'impressionism_starry_title',
            desc: 'impressionism_starry_desc'
        }
    },
    {
        id: 'impressionism_lilies',
        image: 'images/Water Lilies (Lirios de Agua).jpg',
        alt: 'Lirios de Agua',
        artist: 'Claude Monet',
        section: 'impressionism',
        langKeys: {
            title: 'impressionism_lilies_title',
            desc: 'impressionism_lilies_desc'
        }
    },
    {
        id: 'impressionism_scream',
        image: 'images/The Scream (El Grito).png',
        alt: 'El Grito',
        artist: 'Edvard Munch',
        section: 'impressionism',
        langKeys: {
            title: 'impressionism_scream_title',
            desc: 'impressionism_scream_desc'
        }
    },
    {
        id: 'impressionism_boating',
        image: 'images/Luncheon of the Boating Party (Almuerzo de los Remeros).jpg',
        alt: 'Almuerzo de los Remeros',
        artist: 'Pierre-Auguste Renoir',
        section: 'impressionism',
        langKeys: {
            title: 'impressionism_boating_title',
            desc: 'impressionism_boating_desc'
        }
    },
    {
        id: 'modern_demoiselles',
        image: 'images/Les Demoiselles d\'Avignon (Las Señoritas de Aviñón).jpg',
        alt: 'Las Señoritas de Aviñón',
        artist: 'Pablo Picasso',
        section: 'modern',
        langKeys: {
            title: 'modern_demoiselles_title',
            desc: 'modern_demoiselles_desc'
        }
    },
    {
        id: 'modern_mondrian',
        image: 'images/Composition with Red, Blue and Yellow (Composición en Rojo, Azul y Amarillo).png',
        alt: 'Composition with Red, Blue and Yellow',
        artist: 'Piet Mondrian',
        section: 'modern',
        langKeys: {
            title: 'modern_mondrian_title',
            desc: 'modern_mondrian_desc'
        }
    },
    {
        id: 'modern_fridas',
        image: 'images/The Two Fridas (Las Dos Fridas).webp',
        alt: 'Las Dos Fridas',
        artist: 'Frida Kahlo',
        section: 'modern',
        langKeys: {
            title: 'modern_fridas_title',
            desc: 'modern_fridas_desc'
        }
    },
    {
        id: 'modern_dali',
        image: 'images/The Persistence of Memory (La Persistencia de la Memoria).webp',
        alt: 'La Persistencia de la Memoria',
        artist: 'Salvador Dalí',
        section: 'modern',
        langKeys: {
            title: 'modern_dali_title',
            desc: 'modern_dali_desc'
        }
    },
    {
        id: 'modern_guernica',
        image: 'images/Guernica (Guernica).jpg',
        alt: 'Guernica',
        artist: 'Pablo Picasso',
        section: 'modern',
        langKeys: {
            title: 'modern_guernica_title',
            desc: 'modern_guernica_desc'
        }
    },
    {
        id: 'modern_pollock',
        image: 'images/No. 5, 1948 (No. 5, 1948).jpg',
        alt: 'No. 5, 1948',
        artist: 'Jackson Pollock',
        section: 'modern',
        langKeys: {
            title: 'modern_pollock_title',
            desc: 'modern_pollock_desc'
        }
    },
    {
        id: 'sculpture_thinker',
        image: 'images/The Thinker (El Pensador).jpg',
        alt: 'El Pensador',
        artist: 'Auguste Rodin',
        section: 'sculpture',
        langKeys: {
            title: 'sculpture_thinker_title',
            desc: 'sculpture_thinker_desc'
        }
    },
    {
        id: 'sculpture_venus',
        image: 'images/Venus de Milo (Venus de Milo).jpg',
        alt: 'Venus de Milo',
        artist: 'Anónimo',
        section: 'sculpture',
        langKeys: {
            title: 'sculpture_venus_title',
            desc: 'sculpture_venus_desc'
        }
    },
    {
        id: 'sculpture_kiss',
        image: 'images/The Kiss (El Beso).jpg',
        alt: 'El Beso',
        artist: 'Auguste Rodin',
        section: 'sculpture',
        langKeys: {
            title: 'sculpture_kiss_title',
            desc: 'sculpture_kiss_desc'
        }
    },
    {
        id: 'sculpture_parthenon',
        image: 'images/The Parthenon (El Partenón).avif',
        alt: 'El Partenón',
        artist: 'Ictino y Calícrates',
        section: 'sculpture',
        langKeys: {
            title: 'sculpture_parthenon_title',
            desc: 'sculpture_parthenon_desc'
        }
    }
];

// Sample Artist Data (for the Artist Section)
const artists = [
    {
        name: 'Leonardo da Vinci',
        langKey: 'artist_davinci_bio'
    },
    {
        name: 'Vincent van Gogh',
        langKey: 'artist_vangogh_bio'
    },
    {
        name: 'Frida Kahlo',
        langKey: 'artist_kahlo_bio'
    },
    {
        name: 'Pablo Picasso',
        langKey: 'artist_picasso_bio'
    },
    {
        name: 'Claude Monet',
        langKey: 'artist_monet_bio'
    },
    {
        name: 'Salvador Dalí',
        langKey: 'artist_dali_bio'
    }
];

export { artworks, artists };