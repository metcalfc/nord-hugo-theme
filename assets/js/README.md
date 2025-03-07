# Nord Hugo Theme JavaScript

This directory contains the JavaScript code for the Nord Hugo Theme, organized in a modular architecture for maintainability and performance.

## Architecture

The JavaScript is organized into the following structure:

- `main.js` - Entry point that initializes everything
- `lib/` - Core functionality 
  - `theme.js` - Core theme management
- `components/` - UI component functionality
  - `themeToggle.js` - Theme toggle button
  - `codeBlocks.js` - Code block theme handling
  - `images.js` - Nord palette image switching
- `integrations/` - Third-party integrations
  - `twitter.js` - Twitter embed theming
  - `bluesky.js` - BlueSky embed theming

## Usage

The JavaScript system is initialized automatically when the page loads. The system:

1. Detects and applies the correct theme (light/dark) based on:
   - User's previous preference stored in localStorage
   - System preference if no stored preference exists
2. Sets up theme toggle functionality
3. Handles theme-specific UI updates
4. Manages social media embed theming

## Events

The system uses custom events for communication between modules:

- `nord-theme-change` - Fired when the theme changes, includes `detail.theme` with the new theme value

## Adding New Features

To add new theme-dependent functionality:

1. Create a new module in the appropriate directory
2. Implement the functionality with an initialization function
3. Listen for the `nord-theme-change` event
4. Import and initialize the module in `main.js`

## Best Practices

When working with the JavaScript codebase, follow these best practices:

1. **Single Responsibility Principle** - Each module should have a single responsibility
2. **Event-Driven Architecture** - Use events for communication between modules rather than direct imports where possible
3. **Lazy Initialization** - Only initialize components when they are present on the page
4. **Accessibility** - Ensure all interactive elements are keyboard accessible and properly labeled
5. **Performance** - Minimize DOM manipulations and batch operations when possible

## Build Process

The Nord Hugo theme uses Hugo Pipes to process JavaScript:

```
{{ $mainJs := resources.Get "js/main.js" | js.Build (dict "target" "es2015" "minify" true) | fingerprint }}
<script src="{{ $mainJs.RelPermalink }}"></script>
```

This provides:

- ES6 module bundling
- Minification
- Cache busting via fingerprinting

## Browser Compatibility

The theme's JavaScript is designed to work with modern browsers that support:

- ES6 Modules
- Custom Events
- `classList` API
- `localStorage` API
- CSS Variables
- Media Queries

## Testing Changes

When making changes to the JavaScript:

1. Test in both light and dark themes
2. Test theme toggling functionality
3. Test the system preference detection
4. Verify that social media embeds update correctly
5. Test with different Hugo environments (development, production)
6. Check browser console for any errors

## Migration Notes

This modular architecture replaces the previous approach that had multiple overlapping theme implementations:

- `theme-switcher.js`
- `theme-toggle.js` 
- `nord-theme.js`

The new system consolidates all theme management into a single, consistent architecture using ES6 modules and custom events.
