/**
 * Core theme management for Nord Hugo Theme
 */

// Theme states
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

// LocalStorage key
const STORAGE_KEY = 'theme';

// Core theme management functionality
export const ThemeManager = {
  // Get current theme
  getCurrentTheme() {
    // Get config
    const config = window.nordThemeConfig || {};
    const defaultTheme = config.defaultTheme || THEMES.LIGHT;
    const respectSystemPreference = config.respectSystemPreference !== false;
    
    // Check localStorage first
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme) {
      return storedTheme;
    }
    
    // Then check system preference if enabled
    if (respectSystemPreference) {
      return this.getSystemPreference();
    }
    
    // Fall back to default theme
    return defaultTheme;
  },
  
  // Get system preference
  getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? THEMES.DARK 
      : THEMES.LIGHT;
  },
  
  // Set theme
  setTheme(theme) {
    // Validate theme
    if (theme !== THEMES.LIGHT && theme !== THEMES.DARK) {
      console.error(`Invalid theme: ${theme}`);
      return;
    }
    
    // Store in localStorage
    localStorage.setItem(STORAGE_KEY, theme);
    
    // Update document
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark-theme', theme === THEMES.DARK);
    
    // Dispatch theme change event
    const event = new CustomEvent('nord-theme-change', { detail: { theme } });
    document.dispatchEvent(event);
  },
  
  // Toggle theme
  toggleTheme() {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    this.setTheme(newTheme);
  },
  
  // Initialize theme management
  init() {
    // Set initial theme
    this.setTheme(this.getCurrentTheme());
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        this.setTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
      }
    });
  }
};

// Constants export
export { THEMES };
