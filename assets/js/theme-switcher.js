// Theme switcher for nord-hugo-theme
document.addEventListener('DOMContentLoaded', function() {
  // Initial setup - check if theme exists in localStorage
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  let currentTheme;
  if (savedTheme) {
    currentTheme = savedTheme;
  } else {
    currentTheme = prefersDark ? 'dark' : 'light';
  }
  
  setTheme(currentTheme);
  
  // Listen for theme changes
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = localStorage.getItem('theme') || 
                           (document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      setTheme(newTheme);
    });
  }
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    }
  });
});

// Function to set theme across all needed elements
function setTheme(theme) {
  // Save theme to localStorage
  localStorage.setItem('theme', theme);
  
  // Apply theme to HTML element
  document.documentElement.setAttribute('data-theme', theme);
  
  // Add/remove dark-theme class
  if (theme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
  }
  
  // Update SVG palette images
  updatePaletteImages(theme);
}

// Function to update all Nord palette SVG images based on the provided theme
function updatePaletteImages(theme) {
  // Find all Nord palette SVG images
  const paletteImages = document.querySelectorAll('img[src*="nord-palettes"]');
  
  paletteImages.forEach(img => {
    // Replace the src with the appropriate themed version
    const currentSrc = img.getAttribute('src');
    if (currentSrc) {
      let newSrc;
      
      if (currentSrc.includes('nord-palettes-light.svg') || currentSrc.includes('nord-palettes-dark.svg')) {
        // Image already has theme suffix, replace it
        newSrc = currentSrc.replace(/(nord-palettes-)(light|dark)(\.svg)/, `$1${theme}$3`);
      } else if (currentSrc.includes('nord-palettes.svg')) {
        // Image has no theme suffix, add it
        newSrc = currentSrc.replace('nord-palettes.svg', `nord-palettes-${theme}.svg`);
      }
      
      if (newSrc && newSrc !== currentSrc) {
        // Create a new image object to avoid caching issues
        const newImg = new Image();
        newImg.onload = function() {
          img.setAttribute('src', newSrc);
        };
        newImg.src = newSrc;
      }
    }
  });
}
