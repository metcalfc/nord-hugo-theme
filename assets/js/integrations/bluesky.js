/**
 * BlueSky embed theme handling
 */
export const BlueSkyIntegration = {
  // Update BlueSky embeds based on theme
  updateEmbeds(theme) {
    const blueskyEmbeds = document.querySelectorAll('.bluesky-embed');
    
    blueskyEmbeds.forEach(embed => {
      // Store the current theme as a data attribute
      embed.setAttribute('data-theme', theme);
      
      // Toggle class for CSS styling (also applies to parent with twitter-embed class)
      embed.classList.toggle('dark-theme', theme === 'dark');
      
      // Get the iframe from the embedded content
      const iframe = embed.querySelector('iframe');
      if (iframe) {
        // Update the iframe URL if needed
        const currentSrc = new URL(iframe.src);
        if (currentSrc.searchParams.has('theme')) {
          currentSrc.searchParams.set('theme', theme);
          iframe.src = currentSrc.toString();
        }
      }
    });
  },
  
  // Initialize BlueSky integration
  init() {
    // Set initial theme
    const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';
    this.updateEmbeds(initialTheme);
    
    // Listen for theme changes
    document.addEventListener('nord-theme-change', (e) => {
      this.updateEmbeds(e.detail.theme);
    });
  }
};
