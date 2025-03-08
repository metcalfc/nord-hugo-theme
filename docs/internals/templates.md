# Hugo Templates

This document covers the Hugo templating features and techniques used in the Nord Hugo Theme.

## Template Fundamentals

The Nord Hugo Theme leverages Hugo's templating system to create a flexible and maintainable theme. Here are the key concepts:

### Template Files

The theme uses several types of template files:
- **Base templates**: Define the overall structure (`baseof.html`)
- **Content templates**: Render specific content types (`single.html`, `list.html`)
- **Partials**: Reusable components (`head.html`, `header.html`)
- **Shortcodes**: Special content functionality (`youtube.html`, `nord-palette.html`)

### Go Templates

Hugo uses Go's templating language with additional functions. Key aspects include:
- Dot (`.`) notation for current context
- Pipelines (`|`) for chaining functions
- Control structures (`if`, `with`, `range`)
- Variable assignment (`$varName :=`)

## Content Handling

### Front Matter Access

Front matter variables are accessed via `.Params`:

```go
{{ if .Params.showToc }}
  <!-- Table of contents -->
{{ end }}
```

### Content Display

Content is rendered with `.Content`, which processes Markdown into HTML:

```go
<div class="content">
  {{ .Content }}
</div>
```

### Content Lists

Content lists are processed with `range`:

```go
{{ range .Pages }}
  <h2>{{ .Title }}</h2>
  <p>{{ .Summary }}</p>
{{ end }}
```

## Navigation

### Menu Generation

Navigation menus are generated from site configuration:

```go
<nav>
  <ul>
    {{ range .Site.Menus.main }}
      <li><a href="{{ .URL }}">{{ .Name }}</a></li>
    {{ end }}
  </ul>
</nav>
```

### Pagination

List pages use Hugo's pagination:

```go
{{ $paginator := .Paginate (where .RegularPages "Type" "in" .Site.Params.mainSections) }}
{{ range $paginator.Pages }}
  <!-- Page content -->
{{ end }}

{{ template "_internal/pagination.html" . }}
```

## Taxonomy Handling

### Tags and Categories

Taxonomies are displayed with:

```go
{{ range .Params.tags }}
  <a href="{{ "/tags/" | relLangURL }}{{ . | urlize }}">{{ . }}</a>
{{ end }}
```

### Taxonomy Pages

Taxonomy pages use the same list template but with the taxonomy entries accessible through `.Pages`.

## Conditional Logic

The theme uses conditionals for many features:

```go
{{ if .Site.Params.showReadingTime }}
  <span>{{ .ReadingTime }} min read</span>
{{ end }}

{{ with .Params.author }}
  <span>By {{ . }}</span>
{{ end }}
```

## Date Formatting

Dates are formatted using Hugo's time functions:

```go
{{ .Date.Format (default "January 2, 2006" .Site.Params.dateFormat) }}
```

## Custom Functions

The theme uses several custom template functions:

### Related Content

Related posts are found using Hugo's `.Site.RegularPages.Related`:

```go
{{ $related := .Site.RegularPages.Related . | first 3 }}
```

### Resource Processing

Asset processing uses Hugo Pipes:

```go
{{ $styles := resources.Get "css/main.scss" | resources.ToCSS | resources.Minify }}
```

### Theme Configuration

Template behaviors are controlled through site parameters:

```go 
{{ if .Site.Params.enableThemeToggle }}
  <!-- Theme toggle button -->
{{ end }}
```

## Multilingual Support

The theme supports Hugo's multilingual features:

```go
<html lang="{{ .Site.Language.Lang }}">

<!-- Language switcher -->
{{ range .Site.Languages }}
  <a href="{{ .Lang | relURL }}">{{ .LanguageName }}</a>
{{ end }}
```

## SEO Optimization

SEO elements are included in templates:

```go
<!-- Meta description -->
{{ with .Description }}
  <meta name="description" content="{{ . }}">
{{ else }}
  <meta name="description" content="{{ .Site.Params.description }}">
{{ end }}

<!-- Canonical URL -->
<link rel="canonical" href="{{ .Permalink }}">
```

## Performance Techniques

The theme uses several techniques to optimize performance:

### Resource Fingerprinting

Assets are fingerprinted for cache control:

```go
{{ $styles := resources.Get "css/main.scss" | resources.ToCSS | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}" integrity="{{ $styles.Data.Integrity }}">
```

### Conditional JavaScript

JavaScript is only loaded when needed:

```go
{{ if .Site.Params.enableTwitterEmbeds }}
  <script src="https://platform.twitter.com/widgets.js" async></script>
{{ end }}
```

### Partial Caching

Frequently used partials are cached:

```go
{{ partialCached "footer.html" . }}
```

## Best Practices

When working with the theme's templates:

1. **Use existing structures**: Follow the theme's templating patterns
2. **Keep overrides minimal**: Only override what you need to change
3. **Leverage partials**: Break complex sections into reusable partials
4. **Respect context**: Understand the context (`.`) in each template
5. **Document conditionals**: Comment complex conditionals for clarity
6. **Use with blocks**: Use `with` to simplify repeated access to same variables

## Customizing Templates

To customize templates, create matching files in your site's `layouts` directory. See the [Customization Guide](../customization.md) for more details.
