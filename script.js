console.log("JS is connected! 🚀");

(function () {
  const STORAGE_KEY = 'gitflow-theme';
  const DARK        = 'dark';

  const body   = document.body;
  const button = document.getElementById('theme-toggle');
  const icon   = button && button.querySelector('.icon');

  /** Apply a theme and keep the button icon in sync. */
  function applyTheme(isDark) {
    if (isDark) {
      body.setAttribute('data-theme', DARK);
    } else {
      body.removeAttribute('data-theme');
    }
    if (icon) icon.textContent = isDark ? '🌙' : '☀️';
  }

  /** Restore saved preference on first load. */
  const saved = localStorage.getItem(STORAGE_KEY);
  applyTheme(saved === DARK);

  /** Toggle on button click. */
  if (button) {
    button.addEventListener('click', function () {
      const goingDark = body.getAttribute('data-theme') !== DARK;
      applyTheme(goingDark);
      localStorage.setItem(STORAGE_KEY, goingDark ? DARK : 'light');
    });
  }
})();
