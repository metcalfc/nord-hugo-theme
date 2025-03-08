# Frequently Asked Questions

This document addresses common questions and troubleshooting guidance for the Nord Hugo Theme.

## Table of Contents
- [General Questions](#general-questions)
- [Installation Issues](#installation-issues)
- [Configuration Problems](#configuration-problems)
- [Content Management](#content-management)
- [Customization](#customization)
- [Theme Features](#theme-features)
- [Performance](#performance)
- [Browser Compatibility](#browser-compatibility)
- [Common Errors](#common-errors)
- [Getting Help](#getting-help)

## General Questions

### What is the Nord Hugo Theme?
The Nord Hugo Theme is a clean, elegant theme for the Hugo static site generator that implements the [Nord color palette](https://www.nordtheme.com/). It features light and dark mode support, responsive design, and a focus on readability.

### What Hugo version is required?
The Nord Hugo Theme requires Hugo version 0.60.0 or newer, as it uses Hugo Pipes for asset processing and newer Hugo features.

### Is the theme suitable for non-blog websites?
Yes, while the theme works excellently for blogs, it's designed to be flexible for various types of websites including portfolios, documentation sites, and personal websites.

### Is the theme actively maintained?
Yes, the theme is actively maintained with regular updates for bug fixes, improvements, and new features.

## Installation Issues

### Why isn't the theme showing up after installation?
Check the following:
1. Ensure the theme name in `config.toml` matches the theme directory name exactly (`nord-hugo-theme`)
2. Verify that you've installed the theme in the correct location (`themes/nord-hugo-theme/`)
3. Restart the Hugo server with `hugo server -D`

### I'm getting errors when running `hugo server`
Common causes include:
- Hugo version incompatibility (update to at least v0.60.0)
- Missing theme files
- Syntax errors in your configuration files

Check the error message for specific details, and verify your Hugo version with `hugo version`.

### How do I update the theme?

**If installed as a Git submodule:**
```bash
cd themes/nord-hugo-theme
git pull origin main
```

**If installed as a Hugo module:**
```bash
hugo mod get -u github.com/yourusername/nord-hugo-theme
```

## Configuration Problems

### The theme toggle isn't working
Check the following:
1. Ensure `enableThemeToggle = true` is set in your `config.toml`
2. Check your browser console for JavaScript errors
3. Verify that your custom CSS isn't overriding theme toggle styles

### Social media links aren't appearing
1. Confirm you've added your social media handles in the `[params]` section
2. Check for typos in parameter names (e.g., `twitter`, not `Twitter`)
3. Verify that you haven't overridden the social links partial

### Menu items are in the wrong order
The `weight` parameter determines menu item order. Lower numbers appear first:

```toml
[[menu.main]]
  identifier = "home"
  name = "Home"
  url = "/"
  weight = 1  # Will appear first

[[menu.main]]
  identifier = "about"
  name = "About"
  url = "/about/"
  weight = 2  # Will appear second
```

## Content Management

### Why aren't my posts showing up on the homepage?
Check the following:
1. Ensure your posts are in the correct location (`content/posts/`)
2. Verify that posts don't have `draft: true` in the front matter (or run with `-D` flag)
3. Check that post dates aren't in the future

### How do I create a new section on my site?
1. Create a new directory in the `content/` folder (e.g., `content/projects/`)
2. Add an `_index.md` file in that directory with front matter
3. Add content files to the directory

### Images aren't displaying correctly
1. Ensure images are in the `static/` directory or referenced correctly
2. Check that image paths are correct (they should be relative to the `static/` directory)
3. Verify image formats are supported (WebP might not work in all browsers)

## Customization

### How do I change the Nord theme colors?
We recommend sticking with the Nord color palette for visual consistency, but you can override colors by:
1. Creating a custom CSS file and setting it in `config.toml`
2. Overriding CSS variables in your custom CSS:
```css
:root {
  --nord0: #2E3440;  /* Your custom color */
  /* Additional overrides */
}
```

### How do I use a different font?
1. Add your preferred font files to `static/fonts/` or use a CDN
2. Create a custom CSS file:
```css
body {
  font-family: 'Your Font', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Your Heading Font', serif;
}
```
3. Set this file as `customCSS` in your `config.toml`

### How do I modify the header/footer layout?
1. Create a partial override by copying the original from the theme:
   - `layouts/partials/header.html`
   - `layouts/partials/footer.html`
2. Modify these files as needed

## Theme Features

### How do I disable the dark mode toggle?
Set `enableThemeToggle = false` in your `config.toml`:
```toml
[params]
  enableThemeToggle = false
```

### Can I show posts from specific categories on the homepage?
Yes, by creating a custom homepage template (`layouts/index.html`):
```html
{{ define "main" }}
  <h1>Featured Posts</h1>
  {{ $featured := where .Site.RegularPages "Params.categories" "intersect" (slice "featured") }}
  {{ range first 3 $featured }}
    {{ partial "post-card.html" . }}
  {{ end }}
{{ end }}
```

### How do I create a contact form?
The theme doesn't include a contact form solution, but you can:
1. Use a service like Formspree, Netlify Forms, or Basin
2. Create a contact form partial in `layouts/partials/contact-form.html`
3. Include it in your contact page:
```html
---
title: Contact
layout: page
---

# Get in touch

{{< contact-form >}}
```

## Performance

### How can I improve my site's performance?
1. Optimize images (compress and use appropriate sizes)
2. Enable Hugo's minification in `config.toml`:
```toml
[minify]
  disableCSS = false
  disableHTML = false
  disableJS = false
  disableJSON = false
  disableSVG = false
  disableXML = false
  minifyOutput = true
```
3. Use `deferThemeJS = true` in your `[params]` section
4. Implement lazy loading for images
5. Use a good hosting provider or CDN

### Why is my site slow to load initially?
Check for large images, unoptimized assets, or excessive JavaScript. The developer tools in your browser can help identify slow resources.

## Browser Compatibility

### What browsers does the theme support?
The Nord Hugo Theme supports all modern browsers including:
- Chrome (and Chromium-based browsers)
- Firefox
- Safari
- Edge

Internet Explorer is not officially supported.

### The theme looks broken in a specific browser
1. Check which browser and version you're using
2. Verify if you've added custom CSS that might cause compatibility issues
3. Check the browser console for errors

## Common Errors

### Error: "Failed to find a value for the template function 'resources'"
This error occurs when using an older version of Hugo that doesn't support Hugo Pipes. Update to Hugo 0.60.0 or newer.

### Error: "Error building site: POSTCSS: failed to transform"
This can happen if there are PostCSS processing errors. Check your custom CSS for syntax errors.

### Error: "Error building site: render of 'page' failed: execute of template failed"
This usually indicates a problem with a template. Check the specific error message for details about which file has issues.

### Error: "No layout for..." or "Layout not found"
This happens when Hugo can't find an appropriate layout for your content. Ensure:
1. You're using the correct content organization
2. Your content front matter doesn't specify a non-existent layout
3. You haven't deleted any required layout files

## Getting Help

### Where can I report bugs or request features?
You can open an issue on the [GitHub repository](https://github.com/yourusername/nord-hugo-theme/issues).

### How can I contribute to the theme?
See the [Contributing Guidelines](./contributing.md) for information on how to contribute to the theme.

### Where can I find more examples of the theme in use?
Check out the [demo site](https://yourusername.github.io/nord-hugo-theme-demo/) and the [exampleSite](https://github.com/yourusername/nord-hugo-theme/tree/main/exampleSite) directory for examples.

### I'm stuck! Where can I get more help?
1. Check the [Nord Hugo Theme documentation](https://github.com/yourusername/nord-hugo-theme/tree/main/docs)
2. Ask on the [Hugo forum](https://discourse.gohugo.io/)
3. Open an issue on GitHub with a detailed description of your problem
4. Check the [Hugo documentation](https://gohugo.io/documentation/) for general Hugo questions
