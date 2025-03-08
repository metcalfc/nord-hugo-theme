# Customizing the Nord Hugo Theme

This guide covers various ways to customize the Nord Hugo Theme to match your preferences and requirements, from simple configuration changes to more advanced theme overrides.

## Table of Contents

- [Basic Customization](#basic-customization)
  - [Custom CSS](#custom-css)
  - [Custom JavaScript](#custom-javascript)
  - [Custom Favicons](#custom-favicons)
  - [Custom Logo](#custom-logo)
- [Template Overrides](#template-overrides)
  - [Layout Overrides](#layout-overrides)
  - [Partial Overrides](#partial-overrides)
  - [Shortcode Overrides](#shortcode-overrides)
- [Advanced Customization](#advanced-customization)
  - [Forking the Theme](#forking-the-theme)
  - [Custom SCSS](#custom-scss)
  - [Custom Color Schemes](#custom-color-schemes)
  - [Custom Fonts](#custom-fonts)
- [Best Practices](#best-practices)

## Basic Customization

### Custom CSS

The simplest way to apply custom styles is by adding a custom CSS file:

1. Create a file at `static/css/custom.css` in your site directory
2. Add your custom CSS rules to this file
3. Reference the file in your site configuration:

```toml
[params]
  customCSS = "/css/custom.css"
```

Example custom CSS:

```css
/* Custom heading styles */
.content h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

/* Custom link color */
.custom-link-class {
  color: #5E81AC;
  text-decoration: underline;
}
```

### Custom JavaScript

For custom JavaScript functionality:

1. Create a file at `static/js/custom.js` in your site directory
2. Add your JavaScript code to this file
3. Reference the file in your site configuration:

```toml
[params]
  customJS = "/js/custom.js"
```

Example custom JavaScript:

```javascript
// Custom scroll-to-top button
document.addEventListener('DOMContentLoaded', function() {
  const scrollButton = document.createElement('button');
  scrollButton.innerHTML = '↑';
  scrollButton.className = 'scroll-to-top';
  document.body.appendChild(scrollButton);
  
  scrollButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Show button after scrolling down 300px
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });
});
```

### Custom Favicons

To customize favicons:

1. Create favicon files in various sizes using a tool like [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Place the favicon files in your `static/` directory
3. Configure them in your `config.toml`:

```toml
[params]
  favicons = [
    { rel = "icon", sizes = "16x16", href = "/favicon-16x16.png" },
    { rel = "icon", sizes = "32x32", href = "/favicon-32x32.png" },
    { rel = "apple-touch-icon", sizes = "180x180", href = "/apple-touch-icon.png" },
    { rel = "manifest", href = "/site.webmanifest" }
  ]
```

### Custom Logo

To add a custom logo:

1. Prepare your logo image (SVG format recommended for best quality)
2. Place it in your `static/images/` directory
3. Configure it in your `config.toml`:

```toml
[params]
  logoImage = "/images/your-logo.svg"
  logoAlt = "Your Site Name" # Alt text for accessibility
```

## Template Overrides

Hugo allows you to override theme templates by creating matching files in your site directory.

### Layout Overrides

To override a layout:

1. Identify the layout file in the theme's `layouts/` directory
2. Create a matching file in your site's `layouts/` directory
3. Customize as needed

For example, to override the single post layout:

```
# Theme layout:
themes/nord-hugo-theme/layouts/_default/single.html

# Your override:
layouts/_default/single.html
```

### Partial Overrides

For more granular changes, override specific partials:

```
# Theme partial:
themes/nord-hugo-theme/layouts/partials/header.html

# Your override:
layouts/partials/header.html
```

To get started, copy the original partial from the theme and modify it as needed.

### Shortcode Overrides

Similarly, you can override theme shortcodes:

```
# Theme shortcode:
themes/nord-hugo-theme/layouts/shortcodes/youtube.html

# Your override:
layouts/shortcodes/youtube.html
```

## Advanced Customization

### Forking the Theme

For extensive customization, fork the theme repository:

1. Fork the [Nord Hugo Theme repository](https://github.com/yourusername/nord-hugo-theme) on GitHub
2. Clone your fork to your local environment
3. Make changes directly to the theme files
4. Use your fork as the theme in your site

This approach is best when:
- You need to make extensive changes to the theme
- You want to contribute improvements back to the main theme
- You need to maintain a highly customized version of the theme

### Custom SCSS

To customize the SCSS directly:

1. Create a directory structure in your site folder:

```
assets/
└── scss/
    └── custom/
        ├── _variables.scss
        └── _overrides.scss
```

2. In `_variables.scss`, override theme variables:

```scss
// Override Nord color variables
$nord0: #2E3440;
$nord1: #3B4252;
$nord2: #434C5E;
$nord3: #4C566A;

// Override font variables
$font-family-base: "Your Custom Font", sans-serif;
$font-size-base: 18px;
```

3. In `_overrides.scss`, add custom styles:

```scss
// Add custom styles
.site-header {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.post-title {
  text-decoration: underline;
}
```

4. Create a custom import file in `assets/scss/custom.scss`:

```scss
// Import theme variables first (to allow overrides)
@import "path/to/theme/assets/css/abstracts/variables";

// Import your custom variables and overrides
@import "custom/variables";
@import "custom/overrides";
```

5. Update your site configuration to use this custom SCSS:

```toml
[params]
  customSCSS = "scss/custom.scss"
```

### Custom Color Schemes

To create a custom Nord-inspired color scheme:

1. Create a file `assets/css/themes/_custom.scss`
2. Define your color scheme variables:

```scss
// Custom Nord-inspired theme
[data-theme="custom"] {
  // Base colors
  --color-base-00: #2B303B;
  --color-base-01: #343D46;
  --color-base-02: #4F5B66;
  --color-base-03: #65737E;
  
  // Text colors
  --color-text-primary: #C0C5CE;
  --color-text-secondary: #A7ADBA;
  
  // Accent colors
  --color-accent-blue: #8FA1B3;
  --color-accent-green: #96B5B4;
  --color-accent-red: #BF616A;
  --color-accent-yellow: #EBCB8B;
  --color-accent-purple: #B48EAD;
  
  // Additional UI colors as needed
}
```

3. Create a custom JavaScript file to add theme switching support:

```javascript
// Add custom theme option
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  // Add custom theme option if it doesn't exist
  const customOption = document.createElement('option');
  customOption.value = 'custom';
  customOption.textContent = 'Custom Theme';
  themeToggle.appendChild(customOption);
  
  // Support for the new theme
  themeToggle.addEventListener('change', (e) => {
    document.documentElement.setAttribute('data-theme', e.target.value);
    localStorage.setItem('theme', e.target.value);
  });
});
```

### Custom Fonts

To use custom fonts:

1. Add font files to `static/fonts/` or use a web font service
2. Create a custom CSS file:

```css
/* Custom font definitions */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2'),
       url('/fonts/custom-font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

/* Apply custom fonts */
:root {
  --font-family-heading: 'CustomFont', sans-serif;
  --font-family-body: 'AnotherFont', serif;
}
```

3. Include this file in your configuration:

```toml
[params]
  customCSS = "/css/custom-fonts.css"
```

## Best Practices

When customizing the Nord Hugo Theme, follow these best practices:

1. **Start with configuration options** before overriding templates or CSS.

2. **Use the layered approach**:
   - First try theme parameters
   - Then try custom CSS/JS
   - Then try template overrides
   - Fork the theme only as a last resort

3. **Respect the theme's design principles**:
   - Maintain accessibility
   - Keep the clean, minimal aesthetic
   - Follow the Nord color palette guidelines

4. **Document your customizations** for future reference and maintenance.

5. **Consider contributing** useful customizations back to the theme.

6. **Test thoroughly** after making changes:
   - Test on multiple devices and browsers
   - Check dark and light modes
   - Verify responsive behavior

7. **Keep it maintainable** by organizing custom code logically.

## Next Steps

- Learn about [Theme Internals](./internals/README.md) for more in-depth customization
- See [Advanced Usage](./advanced.md) for complex site configurations
- Check the [FAQ](./faq.md) for common customization questions
