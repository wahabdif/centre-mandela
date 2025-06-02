import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef, useCallback } from 'react';

const languages = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ar', label: 'العربية', flag: '🇩🇿' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  // Fermer le menu si clic en dehors ou Échap
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
        toggleButtonRef.current?.focus();
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleButtonRef.current?.focus();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Changer la direction du document selon la langue
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // Focus sur la langue courante quand on ouvre
  useEffect(() => {
    if (open) {
      const currentIndex = languages.findIndex((l) => l.code === i18n.language);
      const buttonToFocus = buttonsRef.current[currentIndex] || buttonsRef.current[0];
      buttonToFocus?.focus();
    }
  }, [open, i18n.language]);

  // Navigation clavier dans le menu
  const onKeyDownMenu = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!open) return;

      const focusableCount = buttonsRef.current.length;
      const currentIndex = buttonsRef.current.findIndex((btn) => btn === document.activeElement);

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          buttonsRef.current[(currentIndex + 1) % focusableCount]?.focus();
          break;

        case 'ArrowUp':
          event.preventDefault();
          buttonsRef.current[(currentIndex - 1 + focusableCount) % focusableCount]?.focus();
          break;

        case 'Tab':
          if (event.shiftKey) {
            if (currentIndex === 0) {
              event.preventDefault();
              buttonsRef.current[focusableCount - 1]?.focus();
            }
          } else {
            if (currentIndex === focusableCount - 1) {
              event.preventDefault();
              buttonsRef.current[0]?.focus();
            }
          }
          break;

        default:
          break;
      }
    },
    [open]
  );

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        ref={toggleButtonRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="language-menu"
        className="inline-flex items-center justify-center gap-2 px-3 py-1.5 border border-gray-300 rounded-md bg-white text-sm font-medium hover:bg-gray-100 transition"
        id="language-switcher"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span>{currentLang.label}</span>
      </button>

      {open && (
        <div
          id="language-menu"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-switcher"
          className="absolute z-50 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-200"
          onKeyDown={onKeyDownMenu}
        >
          {languages.map(({ code, label, flag }, idx) => (
            <button
              key={code}
              role="menuitem"
              ref={(el) => (buttonsRef.current[idx] = el)}
              onClick={() => {
                i18n.changeLanguage(code);
                localStorage.setItem('i18nextLng', code);
                setOpen(false);
                toggleButtonRef.current?.focus();
              }}
              className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-gray-100 transition ${
                i18n.language === code ? 'font-semibold bg-gray-100' : ''
              }`}
            >
              <span className="text-lg">{flag}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
