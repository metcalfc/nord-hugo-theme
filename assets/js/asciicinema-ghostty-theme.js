// Define a custom "ghostty" theme that matches the Nord color scheme
// With Mac terminal aesthetics

(function() {
  // Only add theme if asciinema player is loaded
  if (typeof window !== 'undefined') {
    // Setup asciinema player when loaded
    window.addEventListener('DOMContentLoaded', function() {
      if (typeof AsciinemaPlayer !== 'undefined') {
        // Custom Ghostty theme with Nord colors
        AsciinemaPlayer.defineTheme('ghostty', {
          // Default terminal colors (0-15)
          // Nord color scheme
          0: '#3b4252', // black (nord1)
          1: '#bf616a', // red (nord11)
          2: '#a3be8c', // green (nord14)
          3: '#ebcb8b', // yellow (nord13)
          4: '#81a1c1', // blue (nord9)
          5: '#b48ead', // magenta (nord15)
          6: '#88c0d0', // cyan (nord8)
          7: '#e5e9f0', // white (nord5)
          
          // Bright colors
          8: '#4c566a',  // bright black (nord3)
          9: '#bf616a',  // bright red (nord11)
          10: '#a3be8c', // bright green (nord14)
          11: '#ebcb8b', // bright yellow (nord13)
          12: '#81a1c1', // bright blue (nord9)
          13: '#b48ead', // bright magenta (nord15)
          14: '#8fbcbb', // bright cyan (nord7)
          15: '#eceff4', // bright white (nord6)
          
          // Additional colors
          foreground: '#d8dee9', // nord4
          background: '#2e3440', // nord0
          
          // UI colors
          cursor: '#d8dee9',
          cursorAccent: '#2e3440'
        });
        
        // Add window control functionality
        setupWindowControls();
      }
    });
    
    // Setup window controls for all asciicinema containers
    function setupWindowControls() {
      // Handle maximize/restore functionality
      document.addEventListener('click', function(e) {
        // Find maximize button clicks
        if (e.target.classList.contains('maximize-btn') || 
            e.target.closest('.window-control.green')) {
          
          const btn = e.target.classList.contains('maximize-btn') ? 
                     e.target : e.target.closest('.window-control.green');
          const containerId = btn.dataset.containerId;
          const playerId = btn.dataset.playerId;
          
          if (!containerId || !playerId) return;
          
          const container = document.getElementById(containerId);
          const player = document.getElementById(playerId);
          
          if (container && player) {
            container.classList.toggle('maximized');
            
            if (container.classList.contains('maximized')) {
              document.body.classList.add('has-asciicinema-maximized');
            } else {
              document.body.classList.remove('has-asciicinema-maximized');
            }
            
            // Resize player after transition
            setTimeout(function() {
              if (typeof player.fit === 'function') {
                player.fit();
              } else if (player._asciinemaplayer && typeof player._asciinemaplayer.fit === 'function') {
                player._asciinemaplayer.fit();
              }
            }, 300);
          }
        }
        
        // Handle clicking the exit button on maximized view
        if (e.target.matches('.asciicinema-container.maximized::after')) {
          const container = e.target.closest('.asciicinema-container');
          if (container) {
            container.classList.remove('maximized');
            document.body.classList.remove('has-asciicinema-maximized');
          }
        }
        
        // Handle ESC key to exit maximized view
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') {
            const maximized = document.querySelector('.asciicinema-container.maximized');
            if (maximized) {
              maximized.classList.remove('maximized');
              document.body.classList.remove('has-asciicinema-maximized');
            }
          }
        });
      });
    }
  }
})();
