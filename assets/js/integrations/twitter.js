/**
 * Twitter embed theme handling
 */
export const TwitterIntegration = {
  // Update Twitter embeds based on theme
  updateEmbeds(theme) {
    const twitterEmbeds = document.querySelectorAll('.twitter-embed');
    
    twitterEmbeds.forEach(embed => {
      // Toggle class for CSS styling
      embed.classList.toggle('dark-theme', theme === 'dark');
      
      // Update the data-theme attribute on tweet blockquotes
      const blockquote = embed.querySelector('.twitter-tweet');
      if (blockquote) {
        blockquote.setAttribute('data-theme', theme);
      }
    });
    
    // Reload Twitter widgets to apply the theme change
    if (typeof twttr !== 'undefined' && twttr.widgets) {
      twttr.widgets.load();
    }
  },
  
  // Initialize Twitter integration
  init() {
    // Listen for theme changes
    document.addEventListener('nord-theme-change', (e) => {
      this.updateEmbeds(e.detail.theme);
    });
    
    // Load Twitter widgets script if needed
    if (document.querySelector('.twitter-embed') && typeof twttr === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }
};
