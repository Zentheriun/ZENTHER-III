import React from 'react';

const Footer = ({ translate }) => {
    return (
        <footer className="artistic-footer">
            <div className="footer-content">
                <h3 className="footer-title" data-lang-key="footer_title">
                    {translate('footer_title', 'Arte es Vida')}
                </h3>
                <p className="footer-text" data-lang-key="footer_text">
                    {translate('footer_text', 'En cada pincelada vive una emoción, en cada color late un corazón. Esta galería no es solo un espacio, es un portal donde el arte y el alma se encuentran para crear momentos de pura belleza trascendental.')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;