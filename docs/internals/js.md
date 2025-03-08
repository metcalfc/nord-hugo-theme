# JavaScript Architecture

This document explains the JavaScript architecture of the Nord Hugo Theme, including module organization, theme switching implementation, and integration with external components.

## Directory Structure

```
assets/
└── js/
    ├── main.js                 # Entry point
    ├── components/             # UI component functionality
    │   ├── themeToggle.js      # Theme toggle button
    │   ├── codeBlocks.js       # Code block handling
    │   └── images.js           # Nord palette image switching
    ├── integrations/           # Third-party integrations
    │   ├── twitter.js          # Twitter embed theming
    │   └── bluesky.js          # BlueSky embed theming
    └── lib/                    # Core functionality
        └── theme.js            # Theme management
```

## Main Entry Point

`main.js` is the entry point that initializes all components. It:
- Imports core functionality and components
- Sets up event listeners for DOM ready
- Initializes the theme system and UI components
- Conditionally loads integrations based on site configuration

## Core Theme System

The theme system (`lib/theme.js`) provides the following functionality:

- **Theme detection**: Determines the appropriate theme based on:
  - User's saved preference (localStorage)
  - System preference (if enabled)
  - Default theme setting

- **Theme application**: Sets the theme by:
  - Updating the `data-theme` attribute on the root element
  - Storing the preference in localStorage
  - Dispatching a custom event

- **Theme toggling**: Switches between light and dark themes

- **System preference detection**: Listens for changes in system preference

## UI Components

### Theme Toggle

The theme toggle component provides a button for users to switch between light and dark themes. Features include:

- Initializing the toggle button based on current theme
- Updating button appearance when the theme changes
- Handling click events to toggle the theme

### Code Blocks

The code blocks component enhances code blocks with additional functionality:

- Adding copy buttons to code blocks
- Providing visual feedback when code is copied
- Ensuring accessibility for code interactions

### Nord Images

This component handles theme-specific image swapping for the Nord palette displays:

- Identifying images with `data-nord-image` attributes
- Switching between light and dark versions based on the theme
- Updating images when the theme changes

## Third-Party Integrations

### Twitter Embeds

Allows Twitter/X embeds to match the current theme:

- Detecting Twitter embeds in the page
- Setting the appropriate theme attribute
- Updating embeds when the theme changes

### BlueSky Embeds

Similarly handles BlueSky social media embeds:

- Applying theme-specific classes to BlueSky embeds
- Updating styling when the theme changes

## Event System

The theme uses a custom event system for cross-module communication. The main event is `nord-theme-change`, which includes the new theme in its detail property.

Components can listen for this event to respond to theme changes without tight coupling to the theme system.

## Configuration Injection

Site configuration is injected into the page by Hugo templates via a `nordConfig` object in the global scope. This allows JavaScript modules to access site parameters without additional data loading.

## Loading Strategy

The JavaScript loading strategy prioritizes performance and user experience:

1. Core theme initialization code runs in the `<head>` to prevent flash of unstyled content
2. Main functionality loads with the `defer` attribute (optional)
3. Components initialize when the DOM is ready

## Progressive Enhancement

The theme follows progressive enhancement principles:

1. Core styling works without JavaScript
2. Basic theme application happens early
3. Advanced features are added when JavaScript is available
4. Accessibility is maintained regardless of JavaScript availability

## Browser Compatibility

The theme targets modern browsers with ES6 features, but Hugo can transpile the code if needed. Key features used include:

- ES6 modules and syntax
- CSS Variables
- LocalStorage
- Custom Events

## Performance Considerations

Performance optimizations include:

1. Minimal DOM manipulation
2. Lazy initialization of components
3. Event delegation where appropriate
4. Debouncing for frequent events
5. Async loading of non-critical JavaScript

## Best Practices for JavaScript Modifications

When modifying the theme's JavaScript:

1. Follow the modular pattern
2. Use the event system for cross-module communication
3. Ensure progressive enhancement
4. Maintain accessibility
5. Document your code
6. Test across browsers
7. Respect user preferences

## Custom Extensions

To add custom JavaScript, create a file at `static/js/custom.js` and reference it in your configuration. For more complex customizations, see the [Customization Guide](../customization.md).
