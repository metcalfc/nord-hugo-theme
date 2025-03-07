// BlueSky embed theme handling
document.addEventListener('DOMContentLoaded', function() {
  // Function to update BlueSky embeds based on current theme
  function updateBlueSkyEmbeds() {
    const isDarkMode = document.documentElement.classList.contains('dark-theme');
    const blueskyEmbeds = document.querySelectorAll('.bluesky-embed');
    
    blueskyEmbeds.forEach(embed => {
      // Toggle class for CSS styling
      embed.classList.toggle('dark-theme', isDarkMode);
      
      // Get the iframe
      const iframe = embed.querySelector('.bluesky-iframe');
      if (iframe) {
        // Get the user and post IDs from data attributes
        const userId = iframe.getAttribute('data-user');
        const postId = iframe.getAttribute('data-post');
        
        // Rebuild the iframe URL with theme parameter
        const themeParam = isDarkMode ? 'dark' : 'light';
        iframe.src = `https://bsky.app/embed/profile/${userId}/post/${postId}?theme=${themeParam}`;
      }
    });
  }
  
  // Run once on page load
  updateBlueSkyEmbeds();
  
  // Set up observer to watch for theme changes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'class' && 
          mutation.target.classList.contains('dark-theme') !== undefined) {
        updateBlueSkyEmbeds();
      }
    });
  });
  
  // Start observing the document element for class changes
  observer.observe(document.documentElement, { 
    attributes: true,
    attributeFilter: ['class']
  });
});
