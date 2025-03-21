# Nord Hugo Theme

A clean, elegant Hugo theme using the [Nord color palette](https://www.nordtheme.com/), with light and dark modes.

![Nord Hugo Theme Preview](screenshot.png)

## Features

- 🎨 Beautiful Nord color scheme
- 🌓 Automatic light/dark mode toggle (respects system preference)
- 📱 Fully responsive design
- 🔍 SEO-friendly
- 🖥️ Syntax highlighting for code blocks using Nord colors
- 📊 Social sharing support
- 📝 Clean typography focused on readability
- 🔗 Support for X/Twitter, YouTube, and BlueSky embeds
- 🏷️ Support for tags and categories
- 📄 Custom shortcodes for various content types
- 📑 Optional Table of Contents via shortcode or front matter

## Installation

### Method 1: Clone Repository (recommended for customization)

```bash
# From your Hugo site directory
cd themes
git clone https://github.com/yourusername/nord-hugo-theme.git nord-hugo-theme
```

Then, add `theme = "nord-hugo-theme"` to your `config.toml` file.

### Method 2: As a Hugo Module (recommended for production)

1. Initialize Hugo Module System (if you haven't already):
```bash
hugo mod init github.com/yourusername/my-site
```

2. Add the theme as a dependency in your `config.toml`:
```toml
[module]
  [[module.imports]]
    path = "github.com/yourusername/nord-hugo-theme"
```

3. Run Hugo with modules:
```bash
hugo mod get -u
```

## Documentation

Comprehensive documentation is available in the [docs directory](./docs/):

- [Getting Started](./docs/getting-started.md) - Installation and basic setup
- [Configuration](./docs/configuration.md) - Available theme options
- [Content Management](./docs/content.md) - Working with content and front matter
- [Code Scroll Shortcodes](./docs/code-scroll.md) - Using code scroll features
- [Customization](./docs/customization.md) - Modifying the theme
- [Advanced Usage](./docs/advanced.md) - Advanced configuration techniques
- [FAQ & Troubleshooting](./docs/faq.md) - Common questions and solutions
- [Theme Internals](./docs/internals/) - Technical details for developers

## Configuration

Here's a sample configuration with common options:

```toml
baseURL = "https://example.com"
languageCode = "en-us"
title = "My Nord Blog"
theme = "nord-hugo-theme"

# Enable syntax highlighting
pygmentsUseClasses = true
pygmentsCodeFences = true

[params]
  # Site description
  description = "A personal blog using the Nord color palette"
  
  # Default author
  author = "Your Name"
  
  # Theme settings
  defaultTheme = "light"  # or "dark"
  respectSystemPreference = true
  
  # Table of Contents title (optional)
  tocTitle = "On this page"
  
  # Social media links
  twitter = "yourusername"
  github = "yourusername"
  linkedin = "yourusername"
  
  # Show reading time
  showReadingTime = true
  
  # Show share buttons at the end of posts
  showShareButtons = true
```

See the full sample in `exampleSite/config.toml` for more details.

## Shortcodes

The theme includes several custom shortcodes:

```
{{</* youtube dQw4w9WgXcQ */>}}
{{</* twitter username tweet_id */>}}
{{</* bluesky username post_id */>}}
{{</* nord-palette variant="dark" */>}}
{{</* toc */>}}  (adds table of contents at shortcode location)
{{</* scroll-code "path/to/file.js" "javascript" "400px" "true" */>}}  (scrollable code block with controls)
{{</* feature-code "path/to/file.js" "javascript" "400px" "true" */>}}  (image-like code display without controls)
```

### Table of Contents

You can include a table of contents in your posts in two ways:

1. **Via front matter** (automatically placed between the header and content):
   ```yaml
   ---
   title: "My Post Title"
   date: 2023-09-01
   toc: true
   ---
   ```

2. **Via shortcode** (place it anywhere in your content):
   ```
   {{</* toc */>}}
   ```

For more details, see the [Content Management](./docs/content.md) documentation.

## Customization

You can customize the theme in several ways:

- Custom CSS/JS files
- Template overrides
- Configuration options

See the [Customization](./docs/customization.md) guide for details.

## Credits

- [Nord Color Palette](https://www.nordtheme.com/) by Arctic Ice Studio
- Icons from [Feather Icons](https://feathericons.com/)
- Fonts: [Inter](https://fonts.google.com/specimen/Inter) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

## License

This theme is released under the MIT License. See [LICENSE](LICENSE) for details.
