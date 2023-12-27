import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import thTranslation from './locales/th/translation.json';
import enTranslation from './locales/en/translation.json';


const resources = {
    en: {
      translation: enTranslation,
    },
    th: {
      translation: thTranslation,
    }
  };


i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    locales: ['en', 'th'],
    fallbackLng: 'th',
    debug: true,
    resources
    
  });

export default i18n;