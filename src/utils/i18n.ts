import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

/**
 * Resources to ensure that our translations remain in one place. We do not
 * use a local file as there's only a small amount of text which needs to be
 * translated into other languages.
 */
export const resources = {
  en: {
    translation: {
      main: {
        drink: 'You have drunk {{glasses}}/8 glasses today.',
      },
      settings: {
        theme: 'Theme: {{theme}}',
        language: 'Language: {{language}}',
        font: 'Font: {{font}}',
        github: 'GitHub of 水',
        reset: 'Reset App',
      },
    },
  },
  ja: {
    translation: {
      main: {
        drink: 'あなたは{{glasses}}/8回飲んです',
      },
      settings: {
        theme: 'テーマ： {{theme}}',
        language: '言語: {{language}}',
        font: 'フォント：{{font}}',
        github: '水のGitHub',
        reset: 'アプリをリセット',
      },
    },
  },
  id: {
    translation: {
      main: {
        drink: 'Anda telah minum sebanyak {{glasses}}/8 gelas.',
      },
      settings: {
        theme: 'Tema: {{theme}}',
        language: 'Bahasa: {{language}}',
        font: 'Fon: {{font}}',
        github: 'GitHub milik 水',
        reset: 'Setel aplikasi',
      },
    },
  },
} as const;

/**
 * Setup custom function to use language detectors. This is a bit different from the usual:
 * - `lookup` does not use `options` as we only want to parse from our local storage.
 * - `cacheUserLanguage` is not implemented as we have already used our `dispatch` in the corresponding
 * component.
 */
const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'mizu-internationalization',

  lookup(options) {
    const data = localStorage.getItem('mizu');
    if (!data) {
      return 'en';
    }

    // This should be typed, but because it comes from the `localStorage`, the type
    // is inferred as `any`. To prevent property access failures (catastrophic failures, for example
    // if `mizu` contains illegal values), we use the optional chaining to iteratively search for object keys,
    // and nullish coalescing operator to set the default value, if, for some reason, the search fails catastrophically.
    return JSON.parse(data).config?.language ?? 'en';
  },
});

/**
 * Internationalization initialization. Settings from: https://react.i18next.com/latest/using-with-hooks.
 */
i18n
  // Checks the language which the user prefers.
  .use(languageDetector)

  // Pass i18n instance.
  .use(initReactI18next)

  // Initialize all. Translations are fetched automatically from `resources` variable above.
  .init({
    debug: process.env.NODE_ENV === 'development',
    detection: { order: ['mizu-internationalization'] },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources,
  });

export default i18n;
