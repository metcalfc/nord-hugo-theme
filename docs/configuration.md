# Configuration Guide for Nord Hugo Theme

This guide details all the configuration options available for the Nord Hugo Theme. You'll configure these options in your site's `config.toml` file.

## Complete Example

Here's a complete configuration example with all available options:

```toml
baseURL = "https://example.com"
languageCode = "en-us"
title = "My Nord Site"
theme = "nord-hugo-theme"

# Enable syntax highlighting
pygmentsUseClasses = true
pygmentsCodeFences = true

# Default content language
defaultContentLanguage = "en"

# Enable robots.txt
enableRobotsTXT = true

# Enable emoji support
enableEmoji = true

# Pagination settings
paginate = 6

# Taxonomies
[taxonomies]
  tag = "tags"
  category = "categories"
  series = "series"

# Site parameters
[params]
  # Site information
  description = "A personal website using the Nord Hugo theme"
  author = "Your Name"
  copyright = "© 2025 Your Name"
  
  # Contact information
  email = "your.email@example.com"
  phone = "+1 (555) 123-4567"
  address = "123 Main St, City, State, Country"
  
  # Social media profiles
  twitter = "yourusername"
  github = "yourusername"
  linkedin = "yourusername"
  mastodon = "https://mastodon.social/@yourusername"
  facebook = "yourusername"
  instagram = "yourusername"
  youtube = "yourchannel"
  medium = "yourusername"
  bluesky = "yourusername.bsky.social"
  
  # Theme settings
  defaultTheme = "light"  # "light" or "dark"
  respectSystemPreference = true
  enableThemeToggle = true
  
  # Post settings
  showReadingTime = true
  showShareButtons = true
  showRelatedPosts = true
  relatedPostsLimit = 3
  showTableOfContents = true
  showPostNavigation = true
  
  # Date format
  dateFormat = "January 2, 2006"
  
  # Social media embeds
  enableTwitterEmbeds = true
  enableBlueSkyEmbeds = true
  
  # Images
  og_image = "/images/og-image.png"
  logoImage = "/images/logo.png"
  favicons = [
    { rel = "icon", sizes = "16x16", href = "/favicon-16x16.png" },
    { rel = "icon", sizes = "32x32", href = "/favicon-32x32.png" },
    { rel = "apple-touch-icon", sizes = "180x180", href = "/apple-touch-icon.png" }
  ]
  
  # Performance options
  deferThemeJS = false
  lazyLoadImages = true
  
  # Custom assets
  customCSS = "/css/custom.css"
  customJS = "/js/custom.js"
  
  # Google Analytics (v4)
  googleAnalytics = "G-MEASUREMENT_ID"

# Main menu
[menu]
  [[menu.main]]
    identifier = "home"
    name = "Home"
    url = "/"
    weight = 1
  
  [[menu.main]]
    identifier = "posts"
    name = "Posts"
    url = "/posts/"
    weight = 2
  
  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 3
  
  [[menu.main]]
    identifier = "tags"
    name = "Tags"
    url = "/tags/"
    weight = 4

  # Footer menu
  [[menu.footer]]
    identifier = "privacy"
    name = "Privacy Policy"
    url = "/privacy/"
    weight = 1
  
  [[menu.footer]]
    identifier = "terms"
    name = "Terms of Service"
    url = "/terms/"
    weight = 2
```

## Core Hugo Settings

These are standard Hugo configuration options that affect how your site works:

| Option | Type | Description |
|--------|------|-------------|
| `baseURL` | String | Base URL for your site (including trailing slash) |
| `languageCode` | String | Language code (e.g., `en-us`, `fr`) |
| `title` | String | Site title used in metadata and browser tab |
| `theme` | String | Must be `"nord-hugo-theme"` |
| `paginate` | Integer | Number of posts per page in list views |
| `enableRobotsTXT` | Boolean | Generate robots.txt file |
| `enableEmoji` | Boolean | Enable emoji shortcodes |
| `defaultContentLanguage` | String | Default language code |

## Site Parameters

The `[params]` section contains theme-specific configuration:

### Site Information

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `description` | String | `""` | Site description for metadata |
| `author` | String | `""` | Default author name |
| `copyright` | String | `""` | Copyright text for footer |

### Contact Information

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `email` | String | `""` | Contact email address |
| `phone` | String | `""` | Contact phone number |
| `address` | String | `""` | Physical address |

### Social Media

All social media parameters are optional. Simply include the ones you want to display:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `twitter` | String | `""` | Twitter/X username |
| `github` | String | `""` | GitHub username |
| `linkedin` | String | `""` | LinkedIn username |
| `mastodon` | String | `""` | Full Mastodon URL |
| `facebook` | String | `""` | Facebook username |
| `instagram` | String | `""` | Instagram username |
| `youtube` | String | `""` | YouTube channel ID |
| `medium` | String | `""` | Medium username |
| `bluesky` | String | `""` | BlueSky handle |

### Theme Settings

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `defaultTheme` | String | `"light"` | Default theme (`"light"` or `"dark"`) |
| `respectSystemPreference` | Boolean | `true` | Use system preference for theme if available |
| `enableThemeToggle` | Boolean | `true` | Show theme toggle button |

### Post Settings

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `showReadingTime` | Boolean | `true` | Show estimated reading time |
| `showShareButtons` | Boolean | `true` | Show social sharing buttons |
| `showRelatedPosts` | Boolean | `true` | Show related posts |
| `relatedPostsLimit` | Integer | `3` | Maximum number of related posts |
| `showTableOfContents` | Boolean | `true` | Show table of contents in posts |
| `showPostNavigation` | Boolean | `true` | Show previous/next post navigation |
| `dateFormat` | String | `"January 2, 2006"` | Date format (Go date format) |

### Embeds & Media

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `enableTwitterEmbeds` | Boolean | `true` | Enable Twitter embed theming |
| `enableBlueSkyEmbeds` | Boolean | `true` | Enable BlueSky embed theming |
| `og_image` | String | `""` | Default Open Graph image path |
| `logoImage` | String | `""` | Site logo image path |
| `favicons` | Array | `[]` | Array of favicon objects |

### Performance

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `deferThemeJS` | Boolean | `false` | Add defer attribute to theme JS |
| `lazyLoadImages` | Boolean | `true` | Enable lazy loading for images |

### Custom Assets

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `customCSS` | String | `""` | Path to custom CSS file |
| `customJS` | String | `""` | Path to custom JavaScript file |

### Analytics

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `googleAnalytics` | String | `""` | Google Analytics Measurement ID |

## Navigation Menus

Nord Hugo Theme supports multiple menu locations:

### Main Menu (`menu.main`)

The main navigation menu, typically displayed in the header:

```toml
[[menu.main]]
  identifier = "about"
  name = "About"
  url = "/about/"
  weight = 3
```

### Footer Menu (`menu.footer`)

The secondary menu displayed in the footer:

```toml
[[menu.footer]]
  identifier = "privacy"
  name = "Privacy Policy"
  url = "/privacy/"
  weight = 1
```

Each menu item takes these parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `identifier` | String | Unique ID for the menu item |
| `name` | String | Display text |
| `url` | String | Target URL |
| `weight` | Integer | Sort order (lower numbers come first) |
| `pre` | String | Optional HTML to insert before the name |
| `post` | String | Optional HTML to insert after the name |
| `parent` | String | Optional parent item identifier for nested menus |

## Taxonomies

Hugo taxonomies for content organization:

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  series = "series"  # Optional
```

## Advanced Configuration

### Module Configuration (for Hugo Modules)

If installing via Hugo Modules:

```toml
[module]
  [[module.imports]]
    path = "github.com/yourusername/nord-hugo-theme"
```

### Multilingual Configuration

For multilingual sites:

```toml
[languages]
  [languages.en]
    languageName = "English"
    weight = 1
    
  [languages.fr]
    languageName = "Français"
    weight = 2
    title = "Mon site Nord"
    [languages.fr.params]
      description = "Mon site personnel utilisant le thème Nord Hugo"
```

See the [Advanced Usage](./advanced.md) guide for more details on multilingual configuration.

## Environment-Specific Configuration

You can override configuration based on environment using Hugo's config directory approach:

```
config/
├── _default/
│   └── config.toml  # Base configuration
├── development/
│   └── config.toml  # Development-specific overrides
└── production/
    └── config.toml  # Production-specific overrides
```

Run with: `hugo --environment production`
