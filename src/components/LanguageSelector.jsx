import React from 'react';
import translations from '../data/translations';

// This component handles the language selection dropdown and updates the application language.

const LanguageSelector = ({ currentLanguage, changeLanguage }) => {
    // Note: The original HTML used an inline `onchange="changeLanguage(this.value)"`
    // We will pass the `changeLanguage` function as a prop from App.jsx

    const handleLanguageChange = (event) => {
        changeLanguage(event.target.value);
    };

    return (
        <select
            id="language-selector"
            className="language-selector"
            onChange={handleLanguageChange}
            value={currentLanguage}
        >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="it">Italiano</option>
            <option value="pt">Português</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
            <option value="ru">Русский</option>
            <option value="ar">العربية</option>
            <option value="hi">हिन्दी</option>
            <option value="ko">한국어</option>
            <option value="sv">Svenska</option>
            <option value="pl">Polski</option>
            <option value="nl">Nederlands</option>
            <option value="tr">Türkçe</option>
            <option value="el">Ελληνικά</option>
            <option value="cs">Čeština</option>
            <option value="hu">Magyar</option>
            <option value="fi">Suomi</option>
        </select>
    );
};

export default LanguageSelector;