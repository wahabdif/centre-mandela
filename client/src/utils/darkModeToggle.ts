export function setupDarkModeToggle(buttonSelector: string) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    // On est côté serveur, ne rien faire
    return;
  }

  const button = document.querySelector(buttonSelector);
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  if (!button) return;

  function updateButton() {
    if (html.classList.contains('dark')) {
      button.textContent = '🌙 Mode Sombre';
    } else {
      button.textContent = '☀️ Mode Clair';
    }
  }
  updateButton();

  button.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    updateButton();
  });
}
