/**
 * Nord Hugo Theme - Testing Script
 * 
 * This script helps verify that the theme system is working correctly.
 * It logs all theme-related events and state changes to the console.
 * 
 * Usage: 
 * 1. Include this script after main.js
 * 2. Open the browser console to see logs
 * 3. Test theme toggling and system preference changes
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('🧪 Nord Theme Test: Initialized');
  
  // Log initial state
  console.log('🧪 Initial theme:', 
    document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light'
  );
  console.log('🧪 localStorage theme:', localStorage.getItem('theme'));
  console.log('🧪 System preference:',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  
  // Monitor theme change events
  document.addEventListener('nord-theme-change', (e) => {
    console.log('🧪 Theme changed to:', e.detail.theme);
    
    // Verify DOM updates
    console.log('🧪 HTML data-theme:', document.documentElement.getAttribute('data-theme'));
    console.log('🧪 dark-theme class:', document.documentElement.classList.contains('dark-theme'));
    
    // Verify toggle button
    const toggleButton = document.querySelector('#theme-toggle');
    if (toggleButton) {
      console.log('🧪 Toggle button text:', toggleButton.textContent);
      console.log('🧪 Toggle button aria-label:', toggleButton.getAttribute('aria-label'));
    }
    
    // Count affected elements
    const codeBlocks = document.querySelectorAll('.highlight, pre, code');
    console.log('🧪 Code blocks updated:', codeBlocks.length);
    
    const paletteImages = document.querySelectorAll('img[src*="nord-palettes"]');
    console.log('🧪 Palette images updated:', paletteImages.length);
    
    const twitterEmbeds = document.querySelectorAll('.twitter-embed');
    console.log('🧪 Twitter embeds updated:', twitterEmbeds.length);
    
    const blueskyEmbeds = document.querySelectorAll('.bluesky-embed');
    console.log('🧪 BlueSky embeds updated:', blueskyEmbeds.length);
  });
  
  // Monitor localStorage changes
  const originalSetItem = localStorage.setItem;
  localStorage.setItem = function(key, value) {
    console.log('🧪 localStorage.setItem:', key, value);
    originalSetItem.apply(this, arguments);
  };
  
  // Log when theme toggle is clicked
  const toggleButton = document.querySelector('#theme-toggle');
  if (toggleButton) {
    const originalAddEventListener = toggleButton.addEventListener;
    toggleButton.addEventListener = function(type, listener, options) {
      if (type === 'click') {
        const wrappedListener = function(e) {
          console.log('🧪 Theme toggle clicked');
          return listener.apply(this, arguments);
        };
        return originalAddEventListener.call(this, type, wrappedListener, options);
      }
      return originalAddEventListener.apply(this, arguments);
    };
  }
  
  console.log('🧪 Nord Theme Test: Ready');
});
