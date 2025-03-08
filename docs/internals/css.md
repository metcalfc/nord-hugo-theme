# CSS Architecture

The Nord Hugo Theme uses a simplified version of the 7-1 pattern for its CSS/SCSS organization. This document explains the structure, patterns, and best practices used throughout the theme's styling.

## Directory Structure

```
assets/
└── css/
    ├── abstracts/
    │   ├── _mixins.scss
    │   └── _variables.scss
    ├── base/
    │   ├── _reset.scss
    │   ├── _typography.scss
    │   ├── _utilities.scss
    │   └── _print.scss
    ├── components/
    │   ├── _syntax.scss
    │   ├── _cards.scss
    │   └── _embeds.scss
    ├── layout/
    │   ├── _header.scss
    │   ├── _content.scss
    │   └── _footer.scss
    ├── themes/
    │   ├── _light.scss
    │   └── _dark.scss
    └── main.scss
```

## Main Entry Point

`main.scss` serves as the entry point that imports all other SCSS files in the correct order. It first imports abstracts (variables and mixins), then base styles, themes, layouts, components, and finally print styles.

## Layer Descriptions

### Abstracts

Contains variables, functions, and mixins used throughout the theme:

#### Variables (`_variables.scss`)

Key variables include:
- Nord color palette constants (`$nord0` through `$nord15`)
- Typography settings (font families, sizes, line heights)
- Breakpoints for responsive design
- Container widths and spacing units
- Z-indices for proper layering

The variables file also defines CSS custom properties that are later overridden in theme files.

#### Mixins (`_mixins.scss`)

Common mixins include:
- Responsive breakpoints (`for-sm`, `for-md`, etc.)
- Accessibility helpers (like `visually-hidden`)
- Container styling
- Focus outlines
- Theme transitions

### Base

Contains fundamental styles that form the foundation of the theme:

- **Reset**: Normalizes browser inconsistencies
- **Typography**: Base styles for text elements
- **Utilities**: Helper classes for common patterns
- **Print**: Print-specific styles

### Themes

Contains theme-specific CSS custom properties for light and dark modes:

- **Light theme**: Variables optimized for light backgrounds
- **Dark theme**: Variables optimized for dark backgrounds

Each theme file defines CSS variables for:
- Base colors (background, text, headings)
- Component colors (cards, headers, footers)
- UI element colors (buttons, inputs)
- Syntax highlighting colors

### Layout

Contains styles for major layout sections:

- **Header**: Site header and navigation
- **Content**: Main content area and common layouts
- **Footer**: Site footer

### Components

Contains styles for reusable UI components:

- **Syntax**: Code syntax highlighting
- **Cards**: Card-based content containers
- **Embeds**: Social media and multimedia embeds

## Media Queries and Responsive Design

The theme uses a mobile-first approach with media queries to scale up. Mixins like `for-sm`, `for-md`, etc. make it easy to add responsive behavior consistently.

## CSS Architecture Best Practices

When working with the Nord Hugo Theme's CSS architecture, follow these best practices:

### 1. Use CSS Variables for Theming

Always use CSS variables for theming to ensure compatibility with both light and dark modes:

```scss
// Bad
.element {
  color: $nord0;
}

// Good
.element {
  color: var(--color-text);
}
```

### 2. Follow BEM Naming Convention

The theme uses a simplified BEM (Block, Element, Modifier) naming convention:

```scss
.card {             // Block
  &__title { }      // Element
  &--featured { }   // Modifier
}
```

### 3. Mobile-First Approach

Start with mobile styles and enhance for larger screens using the provided mixins.

### 4. Respect the Layer Organization

Add new styles to the appropriate layer based on their purpose and scope.

### 5. Theme Transition

Use the theme transition mixin for smooth theme changes.

## Compiling SCSS

The theme uses Hugo Pipes to process SCSS, with automatic minification and fingerprinting for production builds.

## Adding Custom Styles

To add custom styles to the theme, create a custom CSS file in your site's `static/css/` directory and reference it in your `config.toml`. For more complex customizations, see the [Customization Guide](../customization.md).
