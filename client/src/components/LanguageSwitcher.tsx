// src/components/LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const languages = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Définir automatiquement la direction du texte selon la langue
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex space-x-2 rtl:space-x-reverse">
        {languages.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => handleChange(code)}
            className={`px-3 py-1 rounded-md text-sm font-medium border transition
              ${
                i18n.language === code
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
