/**
 * Nord Hugo Theme - Image Components
 * Handles interactive functionality for image components
 */

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

/**
 * Handle image comparison slider functionality
 */
export const ImageCompare = {
  init() {
    const comparers = document.querySelectorAll('.nord-image-compare');
    
    comparers.forEach(comparer => {
      // Get initial slider position
      const initialPosition = parseInt(comparer.dataset.initial || '50', 10);
      
      // Get slider elements
      const beforeEl = comparer.querySelector('.image-before');
      const handle = comparer.querySelector('.compare-handle');
      
      if (!beforeEl || !handle) return;
      
      // Set initial position - moved to updateHandlePosition function
      
      // Set height based on image dimensions
      const setAspectRatio = () => {
        const img = comparer.querySelector('img');
        if (img && img.complete) {
          const aspectRatio = img.naturalHeight / img.naturalWidth;
          comparer.style.paddingBottom = `${aspectRatio * 100}%`;
        }
      };
      
      // Function to update divider position
      const updatePosition = (percent) => {
        // Update the width of the before container
        beforeEl.style.width = `${percent}%`;
        
        // Scale the 'before' image inversely to prevent squishing
        // This makes the 'before' image maintain its original dimensions
        const beforeImage = beforeEl.querySelector('img');
        if (beforeImage) {
          // Formula: (100 * 100) / percent = correct width to prevent squishing
          // Example: when container is 50% wide, image should be 200% wide
          beforeImage.style.width = `${10000 / percent}%`;
          // Keep the left edge aligned
          beforeImage.style.left = '0';
        }
        
        // Update handle position
        handle.style.left = `${percent}%`;
      };
      
      // Initialize position
      updatePosition(initialPosition);
      
      // Set initial image width to ensure it's not squished
      const beforeImage = beforeEl.querySelector('img');
      if (beforeImage) {
        beforeImage.style.width = `${10000 / initialPosition}%`;
        beforeImage.style.left = '0';
      }
      
      // Load event for images
      comparer.querySelectorAll('img').forEach(img => {
        if (img.complete) {
          setAspectRatio();
        } else {
          img.addEventListener('load', setAspectRatio);
        }
      });
      
      // Slider functionality
      const moveSlider = (e) => {
        e.preventDefault();
        
        // Get mouse position relative to container
        const rect = comparer.getBoundingClientRect();
        const x = e.type === 'touchmove' 
          ? e.touches[0].clientX - rect.left 
          : e.clientX - rect.left;
        
        // Calculate percentage
        let percent = (x / rect.width) * 100;
        percent = Math.min(Math.max(percent, 0), 100);
        
        // Update slider position
        updatePosition(percent);
      };
      
      // Event handlers
      const startSliding = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', moveSlider);
        document.addEventListener('touchmove', moveSlider);
        document.addEventListener('mouseup', stopSliding);
        document.addEventListener('touchend', stopSliding);
      };
      
      const stopSliding = () => {
        document.removeEventListener('mousemove', moveSlider);
        document.removeEventListener('touchmove', moveSlider);
        document.removeEventListener('mouseup', stopSliding);
        document.removeEventListener('touchend', stopSliding);
      };
      
      // Bind events
      handle.addEventListener('mousedown', startSliding);
      handle.addEventListener('touchstart', startSliding);
    });
  }
};

/**
 * Handle lightbox functionality for images
 */
export const Lightbox = {
  container: null,
  image: null,
  caption: null,
  isOpen: false,
  
  createLightbox() {
    // Create lightbox container
    this.container = document.createElement('div');
    this.container.className = 'nord-lightbox';
    this.container.innerHTML = `
      <div class="lightbox-overlay"></div>
      <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
      <img class="lightbox-image" src="" alt="" />
      <div class="lightbox-caption"></div>
      <button class="lightbox-prev" aria-label="Previous image">&lsaquo;</button>
      <button class="lightbox-next" aria-label="Next image">&rsaquo;</button>
    `;
    
    // Get elements
    this.image = this.container.querySelector('.lightbox-image');
    this.caption = this.container.querySelector('.lightbox-caption');
    const closeBtn = this.container.querySelector('.lightbox-close');
    const overlay = this.container.querySelector('.lightbox-overlay');
    const prevBtn = this.container.querySelector('.lightbox-prev');
    const nextBtn = this.container.querySelector('.lightbox-next');
    
    // Close lightbox events
    closeBtn.addEventListener('click', () => this.close());
    overlay.addEventListener('click', () => this.close());
    
    // Navigation events
    prevBtn.addEventListener('click', () => this.navigate(-1));
    nextBtn.addEventListener('click', () => this.navigate(1));
    
    // Keyboard events
    document.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          this.close();
          break;
        case 'ArrowLeft':
          this.navigate(-1);
          break;
        case 'ArrowRight':
          this.navigate(1);
          break;
      }
    });
    
    // Add to document
    document.body.appendChild(this.container);
  },
  
  open(src, caption, galleryId) {
    if (!this.container) {
      this.createLightbox();
    }
    
    // Set image and caption
    this.image.src = src;
    if (caption) {
      this.caption.textContent = caption;
      this.caption.style.display = 'block';
    } else {
      this.caption.style.display = 'none';
    }
    
    // Save gallery info if part of a gallery
    if (galleryId) {
      this.container.dataset.galleryId = galleryId;
      this.container.classList.add('has-gallery');
    } else {
      delete this.container.dataset.galleryId;
      this.container.classList.remove('has-gallery');
    }
    
    // Show lightbox
    this.container.classList.add('is-open');
    this.isOpen = true;
    document.body.classList.add('lightbox-active');
  },
  
  close() {
    if (!this.isOpen) return;
    
    this.container.classList.remove('is-open');
    this.isOpen = false;
    document.body.classList.remove('lightbox-active');
  },
  
  navigate(direction) {
    const galleryId = this.container.dataset.galleryId;
    if (!galleryId) return;
    
    // Get all gallery items
    const items = document.querySelectorAll(`[data-gallery-id="${galleryId}"] .gallery-item[data-lightbox="true"]`);
    if (!items.length) return;
    
    // Find current image index
    let currentIndex = -1;
    for (let i = 0; i < items.length; i++) {
      const itemSrc = items[i].dataset.src;
      if (itemSrc === this.image.src) {
        currentIndex = i;
        break;
      }
    }
    
    if (currentIndex === -1) return;
    
    // Calculate new index
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = items.length - 1;
    if (newIndex >= items.length) newIndex = 0;
    
    // Get new item
    const newItem = items[newIndex];
    const newSrc = newItem.dataset.src;
    const newCaption = newItem.dataset.caption || '';
    
    // Update lightbox
    this.image.src = newSrc;
    if (newCaption) {
      this.caption.textContent = newCaption;
      this.caption.style.display = 'block';
    } else {
      this.caption.style.display = 'none';
    }
  },
  
  init() {
    // Bind click events for lightbox-enabled images
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.nord-image.lightbox-enabled, .gallery-item[data-lightbox="true"]');
      if (!target) return;
      
      e.preventDefault();
      
      let src, caption, galleryId;
      
      if (target.classList.contains('gallery-item')) {
        src = target.dataset.src;
        caption = target.dataset.caption;
        galleryId = target.closest('[data-gallery-id]')?.dataset.galleryId;
      } else {
        // Regular image
        const img = target.querySelector('img');
        if (!img) return;
        
        src = img.src;
        caption = target.querySelector('.image-caption')?.textContent;
      }
      
      if (src) {
        this.open(src, caption, galleryId);
      }
    });
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .nord-lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
      }
      
      .nord-lightbox.is-open {
        opacity: 1;
        visibility: visible;
      }
      
      .lightbox-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
      }
      
      .lightbox-image {
        max-width: 90%;
        max-height: 90vh;
        z-index: 2;
        border: 2px solid #fff;
      }
      
      .lightbox-caption {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        text-align: center;
        color: #fff;
        padding: 10px;
        font-size: 16px;
        z-index: 2;
      }
      
      .lightbox-close {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 30px;
        color: #fff;
        border: none;
        background: transparent;
        cursor: pointer;
        z-index: 3;
      }
      
      .lightbox-prev, .lightbox-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 40px;
        color: #fff;
        border: none;
        background: transparent;
        cursor: pointer;
        z-index: 3;
        display: none;
      }
      
      .nord-lightbox.has-gallery .lightbox-prev,
      .nord-lightbox.has-gallery .lightbox-next {
        display: block;
      }
      
      .lightbox-prev {
        left: 20px;
      }
      
      .lightbox-next {
        right: 20px;
      }
      
      body.lightbox-active {
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  }
};

/**
 * Initialize all image components
 */
export const initImageComponents = () => {
  PaletteImages.init();
  ImageCompare.init();
  Lightbox.init();
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initImageComponents);
