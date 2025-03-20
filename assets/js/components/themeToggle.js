/**
 * Theme toggle button component (With Nord-colored SVG Icons)
 */
import { ThemeManager, THEMES } from '../lib/theme.js';

export const ThemeToggle = {
  buttonSelector: '#theme-toggle',
  
  // Update button appearance with Nord-colored icons
  // Note: Icons are now handled via CSS display property
  updateButton(theme) {
    const button = document.querySelector(this.buttonSelector);
    if (!button) return;
    
    // Just update the aria label since icons are shown/hidden via CSS
    button.setAttribute(
      'aria-label', 
      theme === THEMES.DARK ? 'Switch to light theme' : 'Switch to dark theme'
    );
  },
  
  // Initialize toggle button
  init() {
    // Get config
    const config = window.nordThemeConfig || {};
    const enableThemeToggle = config.enableThemeToggle !== false;
    
    // Exit if theme toggle is disabled
    if (!enableThemeToggle) return;
    
    // Set up initial state
    this.updateButton(ThemeManager.getCurrentTheme());
    
    // Add click handler
    const button = document.querySelector(this.buttonSelector);
    if (button) {
      button.addEventListener('click', () => ThemeManager.toggleTheme());
    }
    
    // Listen for theme changes
    document.addEventListener('nord-theme-change', (e) => {
      this.updateButton(e.detail.theme);
    });
  }
};
