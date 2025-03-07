/**
 * Nord Hugo Theme - Theme Switcher
 * A consolidated script to handle all theme-related functionality
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get stored theme preference or default to user's system preference
  const getThemePreference = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Apply theme to HTML document and update all theme-dependent elements
  const applyTheme = (theme) => {
    // Store theme in localStorage
    localStorage.setItem('theme', theme);
    
    // Update data attribute for CSS variable selection
    document.documentElement.setAttribute('data-theme', theme);
    
    // Toggle dark-theme class for element selection in CSS
    document.documentElement.classList.toggle('dark-theme', theme === 'dark');
    
    // Update theme toggle button appearance if it exists
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
      themeToggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
      themeToggleButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
    
    // Update code blocks
    updateCodeBlocks(theme);
    
    // Update palette images
    updatePaletteImages(theme);
    
    // Update Twitter embeds
    updateTwitterEmbeds(theme);
  };

  // Toggle between light and dark theme
  const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 
                        (document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  // Setup theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Add listener for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
  
  // Function to update code blocks based on theme
  function updateCodeBlocks(theme) {
    const codeBlocks = document.querySelectorAll('.highlight, pre, code');
    codeBlocks.forEach(block => {
      block.setAttribute('data-theme', theme);
    });
  }
  
  // Function to update Nord palette SVG images based on theme
  function updatePaletteImages(theme) {
    const paletteImages = document.querySelectorAll('img[src*="nord-palettes"]');
    
    paletteImages.forEach(img => {
      const currentSrc = img.getAttribute('src');
      if (currentSrc) {
        let newSrc;
        
        if (currentSrc.includes('nord-palettes-light.svg') || currentSrc.includes('nord-palettes-dark.svg')) {
          newSrc = currentSrc.replace(/(nord-palettes-)(light|dark)(\.svg)/, `$1${theme}$3`);
        } else if (currentSrc.includes('nord-palettes.svg')) {
          newSrc = currentSrc.replace('nord-palettes.svg', `nord-palettes-${theme}.svg`);
        }
        
        if (newSrc && newSrc !== currentSrc) {
          img.setAttribute('src', newSrc);
        }
      }
    });
  }
  
  // Function to update Twitter embeds based on theme
  function updateTwitterEmbeds(theme) {
    const twitterEmbeds = document.querySelectorAll('.twitter-embed');
    
    twitterEmbeds.forEach(embed => {
      embed.classList.toggle('dark-theme', theme === 'dark');
      
      const blockquote = embed.querySelector('.twitter-tweet');
      if (blockquote) {
        blockquote.setAttribute('data-theme', theme);
      }
    });
    
    // Reload Twitter widgets if they exist
    if (typeof twttr !== 'undefined' && twttr.widgets) {
      twttr.widgets.load();
    }
  }
  
  // Apply initial theme
  applyTheme(getThemePreference());
});
