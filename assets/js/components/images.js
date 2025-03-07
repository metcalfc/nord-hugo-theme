/**
 * Handle Nord palette image swapping based on theme
 */
export const PaletteImages = {
  imageSelector: 'img[src*="nord-palettes"]',
  
  // Update image sources based on theme
  updateImages(theme) {
    const images = document.querySelectorAll(this.imageSelector);
    
    images.forEach(img => {
      const currentSrc = img.getAttribute('src');
      if (!currentSrc) return;
      
      let newSrc;
      
      if (currentSrc.includes('nord-palettes-light.svg') || currentSrc.includes('nord-palettes-dark.svg')) {
        // Replace existing theme suffix
        newSrc = currentSrc.replace(/(nord-palettes-)(light|dark)(\.svg)/, `$1${theme}$3`);
      } else if (currentSrc.includes('nord-palettes.svg')) {
        // Add theme suffix
        newSrc = currentSrc.replace('nord-palettes.svg', `nord-palettes-${theme}.svg`);
      }
      
      if (newSrc && newSrc !== currentSrc) {
        img.setAttribute('src', newSrc);
      }
    });
  },
  
  // Initialize image handling
  init() {
    // Listen for theme changes
    document.addEventListener('nord-theme-change', (e) => {
      this.updateImages(e.detail.theme);
    });
  }
};
