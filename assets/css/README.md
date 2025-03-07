# Nord Hugo Theme CSS Structure

This folder contains the CSS/SCSS for the Nord Hugo theme, organized using a simplified version of the 7-1 pattern.

## Organization

- `abstracts/`: Variables, mixins, and functions
  - `_variables.scss`: Nord color palette and theme variables
  - `_mixins.scss`: Reusable SCSS mixins
  
- `base/`: Base styles and typography
  - `_reset.scss`: CSS reset and normalization
  - `_typography.scss`: Base typography styles
  
- `components/`: Reusable components
  - `_syntax.scss`: Code syntax highlighting
  - `_embeds.scss`: Embedded content (Twitter, YouTube, etc.)
  - `_cards.scss`: Card components
  
- `layout/`: Major layout sections
  - `_header.scss`: Header and navigation
  - `_content.scss`: Main content area
  - `_footer.scss`: Footer
  
- `themes/`: Theme-specific styles
  - `_light.scss`: Light theme CSS variables
  - `_dark.scss`: Dark theme CSS variables

All files are imported into `main.scss` which is the entry point for the theme's styles.

## Usage

The theme uses CSS custom properties (variables) for theming, allowing easy switching between light and dark modes.

### Key Features:

1. **CSS Custom Properties**: For theme variables
2. **SCSS Nesting**: For cleaner, more maintainable code
3. **Responsive Design**: Mobile-first approach with media query mixins
4. **Accessibility**: Focus styles and skip-to-content links
5. **Performance**: Minimal dependencies, well-organized code

### Adding New Components:

When adding a new component, create a new partial in the appropriate directory and import it in `main.scss`.
