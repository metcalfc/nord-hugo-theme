/**
 * Terminal Window Controls Component
 * Handles the Mac-style window controls for terminal containers
 */
export const TerminalControls = {
  init() {
    // Wait for any other DOM ready listeners to complete
    setTimeout(this.setupAllControls.bind(this), 100);
    this.setupGlobalEscHandler();
  },
  
  setupAllControls() {
    // Check for mac-term containers (asciinema players)
    this.setupContainerControls('.mac-term-container', '.mac-control');
    
    // Check for termcode containers (static code)
    this.setupContainerControls('.termcode-container', '.termcode-control');
  },
  
  setupContainerControls(containerSelector, controlSelector) {
    const containers = document.querySelectorAll(containerSelector);
    
    containers.forEach(container => {
      // Find control buttons
      const redControl = container.querySelector(`${controlSelector}.red`);
      const yellowControl = container.querySelector(`${controlSelector}.yellow`);
      const greenControl = container.querySelector(`${controlSelector}.green`);
      
      // Setup red control (close/minimize)
      if (redControl) {
        redControl.addEventListener('click', e => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleMinimize(container);
        });
      }
      
      // Setup yellow control (minimize)
      if (yellowControl) {
        yellowControl.addEventListener('click', e => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleMinimize(container);
        });
      }
      
      // Setup green control (maximize)
      if (greenControl) {
        greenControl.addEventListener('click', e => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleMaximize(container);
        });
      }
      
      // Allow clicking on a minimized container to restore it
      container.addEventListener('click', e => {
        if (container.classList.contains('minimized') && 
            !e.target.classList.contains('red') &&
            !e.target.classList.contains('yellow') &&
            !e.target.classList.contains('green')) {
          this.toggleMinimize(container);
        }
      });
    });
  },
  
  setupGlobalEscHandler() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        // Find any maximized containers
        const maximizedContainers = document.querySelectorAll('.maximized');
        
        maximizedContainers.forEach(container => {
          // Add animation
          container.style.animation = 'collapseToCenter 0.3s ease-in-out forwards';
          
          // Remove maximized class after animation finishes
          setTimeout(() => {
            container.classList.remove('maximized');
            document.body.classList.remove('has-terminal-maximized');
            container.style.animation = '';
            
            // If this is a terminal with a player, resize it
            this.resizePlayer(container);
          }, 300);
        });
      }
    });
  },
  
  toggleMinimize(container) {
    container.classList.toggle('minimized');
    
    // If container was maximized, restore it
    if (container.classList.contains('minimized') && 
        container.classList.contains('maximized')) {
      container.classList.remove('maximized');
      document.body.classList.remove('has-terminal-maximized');
    }
  },
  
  toggleMaximize(container) {
    // If minimized, first restore it
    if (container.classList.contains('minimized')) {
      container.classList.remove('minimized');
      
      // Add a small delay before maximizing
      setTimeout(() => {
        container.classList.add('maximized');
        document.body.classList.add('has-terminal-maximized');
        
        // If this is a terminal with a player, resize it
        setTimeout(() => {
          this.resizePlayer(container);
        }, 300);
      }, 50);
    } 
    // If already maximized, restore it
    else if (container.classList.contains('maximized')) {
      // Add animation
      container.style.animation = 'collapseToCenter 0.3s ease-in-out forwards';
      
      // Remove maximized class after animation finishes
      setTimeout(() => {
        container.classList.remove('maximized');
        document.body.classList.remove('has-terminal-maximized');
        container.style.animation = '';
        
        // If this is a terminal with a player, resize it
        this.resizePlayer(container);
      }, 300);
    } 
    // If normal state, maximize it
    else {
      container.classList.add('maximized');
      document.body.classList.add('has-terminal-maximized');
      
      // If this is a terminal with a player, resize it
      setTimeout(() => {
        this.resizePlayer(container);
      }, 300);
    }
  },
  
  resizePlayer(container) {
    // Only proceed if the container might have a player
    if (!container.classList.contains('mac-term-container')) {
      return;
    }
    
    // Find the player element
    let playerElem = container.querySelector('.asciinema-player-container');
    if (!playerElem) {
      playerElem = container.querySelector('.asciinema-player');
    }
    if (!playerElem) {
      return;
    }
    
    // Try to access the player instance
    setTimeout(() => {
      // Try different access methods
      if (typeof AsciinemaPlayer !== 'undefined' && AsciinemaPlayer.instances) {
        // Method 1: Find in global instances
        const playerInstance = AsciinemaPlayer.instances.find(p => 
          p.el === playerElem || 
          (playerElem.contains && playerElem.contains(p.el)));
        
        if (playerInstance && typeof playerInstance.fit === 'function') {
          playerInstance.fit();
          return;
        }
      }
      
      // Method 2: Direct access to fit
      if (playerElem.fit && typeof playerElem.fit === 'function') {
        playerElem.fit();
        return;
      }
      
      // Method 3: Access via _asciinemaPlayer property
      if (playerElem._asciinemaPlayer && 
          typeof playerElem._asciinemaPlayer.fit === 'function') {
        playerElem._asciinemaPlayer.fit();
        return;
      }
      
      // Method 4: Access via terminal property
      if (playerElem.terminal && 
          typeof playerElem.terminal.fit === 'function') {
        playerElem.terminal.fit();
        return;
      }
      
      // Fallback: Try window resize event
      const resizeEvent = new Event('resize');
      window.dispatchEvent(resizeEvent);
    }, 100);
  }
};
