/**
 * Theme toggle functionality for Nord Hugo Theme
 */

// Get stored theme preference or default to user's system preference
const getThemePreference = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Set theme to HTML and update button text
const setTheme = (theme) => {
  document.documentElement.classList.toggle('dark-theme', theme === 'dark');
  document.getElementById('theme-toggle').textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
};

// Toggle between light and dark theme
const toggleTheme = () => {
  const currentTheme = localStorage.getItem('theme') || getThemePreference();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
};

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Setup toggle button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Set initial theme
  const initialTheme = getThemePreference();
  setTheme(initialTheme);
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
});
