# Getting Started with Nord Hugo Theme

This guide will walk you through the process of installing and setting up the Nord Hugo Theme for your website.

## Prerequisites

Before you begin, ensure you have:

- [Hugo](https://gohugo.io/) (v0.60.0 or newer)
- Basic familiarity with Hugo and its concepts
- Git (if installing via Git)

## Installation

There are multiple ways to install the Nord Hugo Theme:

### Method 1: Clone the Repository

This method is recommended if you plan to customize the theme:

```bash
# From your Hugo site directory
cd themes
git clone https://github.com/yourusername/nord-hugo-theme.git
```

Then, update your site's configuration file (`config.toml`) to use the theme:

```toml
theme = "nord-hugo-theme"
```

### Method 2: Using Hugo Modules (Recommended for Production)

1. Initialize Hugo modules in your project (if not already done):

```bash
# From your Hugo site root
hugo mod init github.com/yourusername/my-site
```

2. Add the theme as a dependency in your `config.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/yourusername/nord-hugo-theme"
```

3. Get the theme:

```bash
hugo mod get -u
```

### Method 3: Download as ZIP

1. Download the [latest release](https://github.com/yourusername/nord-hugo-theme/releases) as a ZIP file
2. Extract it to your Hugo site's `themes` directory
3. Rename the folder to `nord-hugo-theme`
4. Add `theme = "nord-hugo-theme"` to your `config.toml`

## Basic Configuration

After installing the theme, here's a minimal configuration to get started. Add these settings to your `config.toml`:

```toml
baseURL = "https://example.com"
languageCode = "en-us"
title = "My Nord Site"
theme = "nord-hugo-theme"

# Enable syntax highlighting
pygmentsUseClasses = true
pygmentsCodeFences = true

[params]
  description = "My personal website using the Nord Hugo theme"
  author = "Your Name"
  
  # Theme settings
  defaultTheme = "light"  # or "dark"
  respectSystemPreference = true
  
  # Social media (remove or comment out unused ones)
  # twitter = "yourusername"
  # github = "yourusername"
  # linkedin = "yourusername"
  
[menu]
  [[menu.main]]
    identifier = "home"
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 2
```

For a complete configuration example with all available options, see the [Configuration Guide](./configuration.md).

## First Content

Create your first pages:

```bash
# Create a home page
hugo new _index.md

# Create an about page
hugo new about/index.md

# Create your first post
hugo new posts/my-first-post.md
```

Edit these files in the `content/` directory. Front matter for a typical post looks like this:

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

Your content goes here. You can use **Markdown** formatting.
```

## Preview Your Site

Run the Hugo development server to see your site:

```bash
hugo server -D
```

This will start a local server at `http://localhost:1313/` (the `-D` flag includes draft posts).

## Next Steps

Now that you have the theme installed and your first content created, you can:

1. Explore the [Configuration](./configuration.md) guide for all available options
2. See the [Content Management](./content.md) guide for more details on content structuring
3. Learn about [Customization](./customization.md) to tailor the theme to your needs

## Troubleshooting Installation

If you encounter issues during installation:

- Ensure Hugo version is 0.60.0 or newer (`hugo version`)
- Check for errors in the console when running `hugo server`
- Verify your `config.toml` syntax is correct
- Make sure the theme directory name is exactly `nord-hugo-theme`

For more help, see the [FAQ and Troubleshooting](./faq.md) guide.
