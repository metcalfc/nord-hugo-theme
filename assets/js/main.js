/**
 * Nord Hugo Theme - Main JavaScript Entry Point
 */
import { ThemeManager } from './lib/theme.js';
import { ThemeToggle } from './components/themeToggle.js';
import { CodeBlocks } from './components/codeBlocks.js';
import { PaletteImages } from './components/images.js';
import { TwitterIntegration } from './integrations/twitter.js';
import { BlueSkyIntegration } from './integrations/bluesky.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize core functionality first
  ThemeManager.init();
  
  // Initialize UI components
  ThemeToggle.init();
  CodeBlocks.init();
  PaletteImages.init();
  
  // Get config
  const config = window.nordThemeConfig || {};
  
  // Initialize integrations if needed and enabled
  if (document.querySelector('.twitter-embed') && config.enableTwitterEmbeds !== false) {
    TwitterIntegration.init();
  }
  
  if (document.querySelector('.bluesky-embed') && config.enableBlueSkyEmbeds !== false) {
    BlueSkyIntegration.init();
  }
});
