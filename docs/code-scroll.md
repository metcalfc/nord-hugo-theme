# Code Scroll Shortcodes

The Nord Hugo theme includes two different shortcodes for displaying scrollable code:

1. `scroll-code` - A standard code block with controls (language indicator, source path, pause/play, and copy buttons)
2. `feature-code` - An image-like code display without controls, designed to replace images in visual features

## Standard Code Scroll

The standard code scroll shortcode is designed for regular code samples within your content. It includes a header with helpful controls:

```
{{</* scroll-code "path/to/file.js" "javascript" "400px" "true" */>}}
```

Parameters:
1. Source path (can be a local file path or URL)
2. Language (for syntax highlighting)
3. Height (in CSS units)
4. Auto-scroll (true/false)

Example:

```
{{</* scroll-code "https://raw.githubusercontent.com/gohugoio/hugo/master/common/hugo/version.go" "go" "300px" "true" */>}}
```

## Feature Code Display

The feature code shortcode is designed to be used as a visual element, similar to an image. It has no controls or headers, presenting just the code itself:

```
{{</* feature-code "path/to/file.js" "javascript" "400px" "true" */>}}
```

Parameters:
1. Source path (can be a local file path or URL)
2. Language (for syntax highlighting)
3. Height (in CSS units)
4. Auto-scroll (true/false)

Example:

```
{{</* feature-code "https://raw.githubusercontent.com/gohugoio/hugo/master/common/hugo/version.go" "go" "300px" "true" */>}}
```

## Home Page Code Feature

The theme also includes a built-in home page code feature. To use it, add the following to your site configuration:

```toml
[params]
  featureCodeSource = "https://raw.githubusercontent.com/gohugoio/hugo/master/common/hugo/version.go"
  featureCodeLanguage = "go"
  featureCodeHeight = "300px"
```

Then, include the following in your home page layout:

```html
{{ partial "home-code-feature.html" . }}
```

## Differences Between the Two Shortcodes

| Feature | scroll-code | feature-code |
|---------|-------------|--------------|
| Header bar | Yes | No |
| Language indicator | Yes | No |
| Source path display | Yes | No |
| Pause/Play button | Yes | No |
| Copy button | Yes | No |
| Auto-scroll | Yes | Yes |
| Pause on hover | Yes | Yes |
| Syntax highlighting | Yes | Yes |
| Use case | Documentation | Visual features |

## Styling

Both shortcodes use the Nord color palette and adapt to light and dark themes automatically. You can customize the appearance by modifying the following SCSS files:

- `assets/css/components/_scroll-code.scss`
- `assets/css/components/_feature-code.scss`
