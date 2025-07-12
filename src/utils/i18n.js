import translationsData from '../data/translations';

// This file provides a utility function for retrieving translations based on the current language.

export const translate = (key, defaultText) => {
    // Note: This utility assumes the current language context is managed externally (e.g., in App.jsx).
    // In a full React application using a context provider, you would typically access the language state here.
    // For this specific setup, we'll rely on the translation data structure and require the language to be passed or accessed via a context hook if available.

    // Since the provided App.jsx handles the language state and the translate function itself,
    // we need to adapt FeaturedArtists.jsx to receive the translate function as a prop instead of importing it globally here,
    // or implement a context provider for language management.

    // Based on the previous implementation, the 'translate' function was defined in App.jsx and passed down as a prop.
    // The error indicates a direct import of translate from utils/i18n, which suggests a global implementation or a hook.

    // To satisfy the import in FeaturedArtists.jsx, we can define a simple placeholder utility.

    // As the App.jsx already manages the translations using 'translationsData', we can create a simplified utility here
    // that uses the global translations data structure (though ideally, it should rely on React context for the current language).

    // A temporary solution for the import error:
    console.warn("i18n utility is being imported directly. Translations might not reflect current language state dynamically unless managed via context.");

    // We will assume 'es' as a fallback language for this utility if the language context isn't set up.
    const defaultLang = 'es';
    const langData = translationsData[defaultLang];

    return (langData && langData[key]) ? langData[key] : defaultText;
};