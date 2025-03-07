// Twitter/X theme handling
document.addEventListener('DOMContentLoaded', function() {
  // Function to update Twitter embeds based on current theme
  function updateTwitterEmbeds() {
    const isDarkMode = document.documentElement.classList.contains('dark-theme');
    const twitterEmbeds = document.querySelectorAll('.twitter-embed');
    
    twitterEmbeds.forEach(embed => {
      // Toggle class for CSS styling
      embed.classList.toggle('dark-theme', isDarkMode);
      
      // Update the data-theme attribute on tweet blockquotes
      const blockquote = embed.querySelector('.twitter-tweet');
      if (blockquote) {
        blockquote.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
      }
    });
    
    // Reload Twitter widgets to apply the theme change
    if (typeof twttr !== 'undefined' && twttr.widgets) {
      twttr.widgets.load();
    }
  }
  
  // Run once on page load
  updateTwitterEmbeds();
  
  // Set up observer to watch for theme changes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'class' && 
          mutation.target.classList.contains('dark-theme') !== undefined) {
        updateTwitterEmbeds();
      }
    });
  });
  
  // Start observing the document element for class changes
  observer.observe(document.documentElement, { 
    attributes: true,
    attributeFilter: ['class']
  });
});
