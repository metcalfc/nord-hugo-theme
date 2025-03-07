/**
 * BlueSky embed theme handling
 */
export const BlueSkyIntegration = {
  // Update BlueSky embeds based on theme
  updateEmbeds(theme) {
    const blueskyEmbeds = document.querySelectorAll('.bluesky-embed');
    
    blueskyEmbeds.forEach(embed => {
      // Toggle class for CSS styling
      embed.classList.toggle('dark-theme', theme === 'dark');
      
      // Get the iframe
      const iframe = embed.querySelector('.bluesky-iframe');
      if (iframe) {
        // Get the user and post IDs from data attributes
        const userId = iframe.getAttribute('data-user');
        const postId = iframe.getAttribute('data-post');
        
        // Rebuild the iframe URL with theme parameter
        const themeParam = theme;
        iframe.src = `https://bsky.app/embed/profile/${userId}/post/${postId}?theme=${themeParam}`;
      }
    });
  },
  
  // Initialize BlueSky integration
  init() {
    // Listen for theme changes
    document.addEventListener('nord-theme-change', (e) => {
      this.updateEmbeds(e.detail.theme);
    });
  }
};
