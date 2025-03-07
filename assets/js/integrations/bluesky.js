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
      
      // Toggle class for CSS styling
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
</function_results>



Let's also update the CSS for better styling with the oEmbed approach:

<function_calls>
<invoke name="edit_file">
<parameter name="path">/projects/src/nord-hugo-theme/assets/css/components/_embeds.scss