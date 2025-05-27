// src/components/LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';

const languages = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ar', label: 'العربية', flag: '🇩🇿' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Définir la direction RTL/LTR selon la langue
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center justify-center gap-2 px-3 py-1.5 border border-gray-300 rounded-md bg-white text-sm font-medium hover:bg-gray-100 transition"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span>{currentLang.label}</span>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-200">
          {languages.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => {
                i18n.changeLanguage(code);
                localStorage.setItem('i18nextLng', code);
                setOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-gray-100 transition ${
                i18n.language === code ? 'font-semibold text-primary' : ''
              }`}
            >
              <span className="text-lg">{flag}</span> <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
