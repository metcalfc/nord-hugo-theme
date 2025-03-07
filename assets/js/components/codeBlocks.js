/**
 * Code block theme handling
 */
export const CodeBlocks = {
  selectors: '.highlight, pre, code',
  
  // Update code blocks based on theme
  updateCodeBlocks(theme) {
    const codeBlocks = document.querySelectorAll(this.selectors);
    codeBlocks.forEach(block => {
      block.setAttribute('data-theme', theme);
    });
  },
  
  // Initialize code block handling
  init() {
    // Listen for theme changes
    document.addEventListener('nord-theme-change', (e) => {
      this.updateCodeBlocks(e.detail.theme);
    });
  }
};
