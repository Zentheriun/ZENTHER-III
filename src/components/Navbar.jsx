import React from 'react';
import LanguageSelector from './LanguageSelector';

const Navbar = ({ currentLanguage, changeLanguage, translate }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo" id="site-logo" data-lang-key="hero_title">
                {translate('hero_title', 'ARTE PURO')}
            </div>
            <div className="navbar-links">
                <a href="#inicio" data-lang-key="nav_home">
                    {translate('nav_home', 'Inicio')}
                </a>
                <a href="#galeria" data-lang-key="nav_gallery">
                    {translate('nav_gallery', 'Galería')}
                </a>
                <a href="#renacimiento" data-lang-key="nav_renaissance">
                    {translate('nav_renaissance', 'Renacimiento')}
                </a>
                <a href="#impresionismo" data-lang-key="nav_impressionism">
                    {translate('nav_impressionism', 'Impresionismo')}
                </a>
                <a href="#moderno" data-lang-key="nav_modern">
                    {translate('nav_modern', 'Arte Moderno')}
                </a>
                <a href="#escultura" data-lang-key="nav_sculpture">
                    {translate('nav_sculpture', 'Escultura')}
                </a>
                <a href="#artistas" data-lang-key="nav_artists">
                    {translate('nav_artists', 'Artistas')}
                </a>

                <LanguageSelector
                    currentLanguage={currentLanguage}
                    changeLanguage={changeLanguage}
                />
            </div>
        </nav>
    );
};

export default Navbar;