# JavaScript Configuration Options

The Nord Hugo Theme provides several configuration options that can be set in your Hugo site's `config.toml` to customize the JavaScript behavior.

## Available Options

Add these under the `[params]` section in your `config.toml`:

```toml
[params]
  # Theme settings
  defaultTheme = "light"  # "light" or "dark", default is "light"
  respectSystemPreference = true  # Whether to respect system theme preference
  enableThemeToggle = true  # Show/hide the theme toggle button
  
  # Social media embeds
  enableTwitterEmbeds = true  # Enable Twitter embed theming
  enableBlueSkyEmbeds = true  # Enable BlueSky embed theming
  
  # Performance options
  deferThemeJS = false  # Add defer attribute to theme script tag
  
  # Custom JavaScript
  customJS = "/js/custom.js"  # Path to custom JavaScript file
```

## Option Details

### Theme Settings

#### `defaultTheme`

Sets the default theme to use when a user visits the site for the first time.

- Type: String
- Allowed values: `"light"` or `"dark"`
- Default: `"light"`

Example:
```toml
[params]
  defaultTheme = "dark"  # Site will default to dark theme
```

#### `respectSystemPreference`

Determines whether the theme should respect the user's system preference when they visit for the first time.

- Type: Boolean
- Default: `true`

When set to `true`, the system will:
1. Check for a stored preference first
2. Fall back to system preference if no stored preference exists
3. Use the `defaultTheme` only if neither of the above is available

When set to `false`, the `defaultTheme` will be used for first-time visitors regardless of system preference.

#### `enableThemeToggle`

Controls whether the theme toggle button is shown in the site header.

- Type: Boolean
- Default: `true`

To use a custom theme toggle in a different location, set this to `false` and add your own toggle button with the ID `theme-toggle`.

### Social Media Embeds

#### `enableTwitterEmbeds`

Controls whether Twitter embeds should update their theme when the site theme changes.

- Type: Boolean
- Default: `true`

#### `enableBlueSkyEmbeds`

Controls whether BlueSky embeds should update their theme when the site theme changes.

- Type: Boolean
- Default: `true`

### Performance Options

#### `deferThemeJS`

Adds the `defer` attribute to the theme script tag to improve page loading performance.

- Type: Boolean
- Default: `false`

Note: When enabled, there might be a slight flash of unstyled content before the theme is applied.

### Custom JavaScript

#### `customJS`

Path to a custom JavaScript file that will be loaded after the theme JavaScript.

- Type: String
- Default: `""`

Example:
```toml
[params]
  customJS = "/js/site-specific.js"
```

## Using in Templates

In your Hugo templates, you can conditionally load scripts based on these parameters:

```html
{{ if .Site.Params.enableTwitterEmbeds }}
  <script async src="https://platform.twitter.com/widgets.js"></script>
{{ end }}
```

## Accessing Theme State in Custom JavaScript

Your custom JavaScript can interact with the theme system:

```javascript
// Get current theme
const currentTheme = document.documentElement.getAttribute('data-theme');

// Listen for theme changes
document.addEventListener('nord-theme-change', (e) => {
  const newTheme = e.detail.theme;
  // Update your custom elements
});

// Trigger theme toggle programmatically
document.querySelector('#theme-toggle').click();
```
