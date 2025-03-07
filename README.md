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

## Configuration

Here's a sample configuration with all available options:

```toml
baseURL = "https://example.com"
languageCode = "en-us"
title = "My Nord Blog"
theme = "nord-hugo-theme"

# Enable syntax highlighting
pygmentsUseClasses = true
pygmentsCodeFences = true

# Pagination settings
[pagination]
  pagerSize = 5

[params]
  # Site description
  description = "A personal blog using the Nord color palette"
  
  # Default author
  author = "Your Name"
  
  # Social media links
  twitter = "yourusername"
  github = "yourusername"
  linkedin = "yourusername"
  
  # Show reading time
  showReadingTime = true
  
  # Show share buttons at the end of posts
  showShareButtons = true
  
  # Show related posts
  showRelatedPosts = true
  
  # Default image for social sharing
  og_image = "/images/og-image.png"
```

See the full sample in `exampleSite/config.toml` for more details.

## Content Organization

This theme works best with the following content organization:

```
content/
├── posts/
│   ├── my-first-post.md
│   └── my-second-post.md
├── about/
│   └── index.md
└── _index.md
```

## Front Matter Examples

### Blog Post

```yaml
---
title: "My First Post"
date: 2023-04-01T12:00:00-05:00
description: "A brief description of my first post"
tags: ["hugo", "theme", "nord"]
categories: ["web development"]
image: "/images/post-cover.jpg"
draft: false
---
```

## Shortcodes

### YouTube

```
{{</* youtube dQw4w9WgXcQ */>}}
```

### X/Twitter

You can use either shortcode:

```
{{</* x username tweet_id */>}}
```

or

```
{{</* twitter username tweet_id */>}}
```

### BlueSky

```
{{</* bluesky username post_id */>}}
```

## Customization

### Custom CSS/JS

You can add custom CSS or JavaScript by creating files in the `static/css/` or `static/js/` directories of your site and then referencing them in your `config.toml`:

```toml
[params]
  customCSS = "/css/custom.css"
  customJS = "/js/custom.js"
```

### Modifying Theme 

For more extensive customization, fork this theme and modify the source files directly.

## Credits

- [Nord Color Palette](https://www.nordtheme.com/) by Arctic Ice Studio
- Icons from [Feather Icons](https://feathericons.com/)
- Fonts: [Inter](https://fonts.google.com/specimen/Inter) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

## License

This theme is released under the MIT License. See [LICENSE](LICENSE) for details.
