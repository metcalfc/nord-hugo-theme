# Advanced Usage

This guide covers advanced usage scenarios for the Nord Hugo Theme, including multilingual sites, performance optimization, and integration with external services.

## Multilingual Sites

The Nord Hugo Theme fully supports Hugo's multilingual mode. Here's how to set up a multilingual site:

### Configuration

Add language definitions to your `config.toml`:

```toml
DefaultContentLanguage = "en"
defaultContentLanguageInSubdir = true

[languages]
  [languages.en]
    languageName = "English"
    weight = 1
    title = "My Site"
    description = "My personal website using the Nord Hugo theme"
    
  [languages.es]
    languageName = "Español"
    weight = 2
    title = "Mi Sitio"
    description = "Mi sitio web personal utilizando el tema Nord Hugo"
    
    # Language-specific parameters
    [languages.es.params]
      dateFormat = "2 de January de 2006"
    
    # Language-specific menus
    [languages.es.menu]
      [[languages.es.menu.main]]
        identifier = "inicio"
        name = "Inicio"
        url = "/es/"
        weight = 1
```

### Content Organization

Organize your content with language subdirectories:

```
content/
├── en/
│   ├── _index.md
│   ├── about/
│   │   └── index.md
│   └── posts/
│       ├── _index.md
│       └── first-post.md
└── es/
    ├── _index.md
    ├── about/
    │   └── index.md
    └── posts/
        ├── _index.md
        └── primer-articulo.md
```

### Language Switcher

The theme automatically adds a language switcher to the navigation menu when multiple languages are configured.

### Translation Strings

You can customize UI strings for each language by using Hugo's translation feature:

1. Create translation files in `i18n/` directory:

```
i18n/
├── en.toml
└── es.toml
```

2. Add translations to each file:

```toml
# i18n/en.toml
[readMore]
other = "Read more"

[recentPosts]
other = "Recent Posts"
```

```toml
# i18n/es.toml
[readMore]
other = "Leer más"

[recentPosts]
other = "Artículos Recientes"
```

## SEO Optimization

The Nord Hugo Theme includes built-in SEO features, but here are some advanced optimizations:

### Structured Data

Add structured data to improve search engine understanding of your content:

1. Create a partial in `layouts/partials/structured-data.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "{{ if eq .Type "posts" }}BlogPosting{{ else }}WebPage{{ end }}",
  "headline": "{{ .Title }}",
  "description": "{{ with .Description }}{{ . }}{{ else }}{{ .Summary }}{{ end }}",
  "url": "{{ .Permalink }}",
  {{ if eq .Type "posts" }}
  "datePublished": "{{ .Date.Format "2006-01-02T15:04:05Z07:00" }}",
  "dateModified": "{{ .Lastmod.Format "2006-01-02T15:04:05Z07:00" }}",
  "author": {
    "@type": "Person",
    "name": "{{ site.Params.author }}"
  },
  {{ end }}
  "publisher": {
    "@type": "Organization",
    "name": "{{ site.Title }}",
    "logo": {
      "@type": "ImageObject",
      "url": "{{ "logo.png" | absURL }}"
    }
  }
}
</script>
```

2. Include it in your custom `head.html` partial:

```html
{{ partial "structured-data.html" . }}
```

### Custom Meta Tags

Add custom meta tags for specific pages by using front matter:

```yaml
---
title: "My Special Page"
description: "Custom page description for SEO"
keywords: "keyword1, keyword2, keyword3"
ogImage: "/images/special-og-image.jpg"
canonicalURL: "https://example.com/canonical-path/"
---
```

### XML Sitemaps

The theme automatically generates a sitemap.xml file when `enableRobotsTXT = true` is set in your configuration.

For more control, you can customize the sitemap by creating `layouts/sitemap.xml` in your site directory.

## Performance Optimization

Optimize your site's performance with these advanced techniques:

### Image Optimization

1. Use the Hugo Pipes image processing feature for responsive images:

```html
{{ $image := resources.Get "images/hero.jpg" }}
{{ $small := $image.Resize "600x" }}
{{ $medium := $image.Resize "1200x" }}
{{ $large := $image.Resize "1800x" }}

<picture>
  <source srcset="{{ $large.RelPermalink }}" media="(min-width: 1200px)">
  <source srcset="{{ $medium.RelPermalink }}" media="(min-width: 600px)">
  <img src="{{ $small.RelPermalink }}" alt="Hero image">
</picture>
```

2. Configure Hugo to process and optimize images automatically:

```toml
[imaging]
  quality = 85
  anchor = "smart"
  resampleFilter = "Lanczos"
```

### Asset Bundling and Minification

The theme uses Hugo Pipes for asset processing, but you can enhance it:

1. Create a custom JavaScript build setup:

```html
{{ $main := resources.Get "js/main.js" }}
{{ $libs := resources.Get "js/libs.js" }}
{{ $js := slice $libs $main | resources.Concat "js/bundle.js" | resources.Minify | resources.Fingerprint }}
<script src="{{ $js.RelPermalink }}" integrity="{{ $js.Data.Integrity }}"></script>
```

2. Use Hugo's built-in asset minification:

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

### Lazy Loading

Implement lazy loading for images and iframes to improve initial page load:

1. Add the `loading="lazy"` attribute to image tags in your templates:

```html
<img src="{{ $image.RelPermalink }}" alt="{{ .Title }}" loading="lazy">
```

2. Use JavaScript for more advanced lazy loading behavior:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const lazyImages = document.querySelectorAll('.lazy-image');
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy-image');
        observer.unobserve(img);
      }
    });
  }, options);
  
  lazyImages.forEach(img => {
    observer.observe(img);
  });
});
```

## Content Delivery Networks (CDN)

To serve your site through a CDN:

1. Configure your domain and CDN provider
2. Set the `baseURL` in your `config.toml` to point to your CDN URL
3. Make sure all URLs in your content are relative

## Custom Shortcodes

Create advanced custom shortcodes for complex content:

### Interactive Map Shortcode

Create a file `layouts/shortcodes/map.html`:

```html
{{ $lat := .Get "lat" }}
{{ $lng := .Get "lng" }}
{{ $zoom := default "10" (.Get "zoom") }}
{{ $height := default "400px" (.Get "height") }}

<div class="map-container" style="height: {{ $height }}">
  <div id="map-{{ $lat }}-{{ $lng }}" class="map"></div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const map = L.map('map-{{ $lat }}-{{ $lng }}').setView([{{ $lat }}, {{ $lng }}], {{ $zoom }});
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([{{ $lat }}, {{ $lng }}]).addTo(map);
});
</script>
```

Usage:

```
{{</* map lat="51.505" lng="-0.09" zoom="13" height="500px" */>}}
```

## RSS Feed Customization

To customize the RSS feed:

1. Create a custom RSS template at `layouts/_default/rss.xml`
2. Customize the output format in your `config.toml`:

```toml
[outputFormats]
  [outputFormats.RSS]
    mediatype = "application/rss+xml"
    baseName = "feed"
```

## Deployment Configurations

Advanced deployment options for different environments:

### Environment-Specific Configuration

Use separate configuration files for different environments:

```
config/
├── _default/
│   ├── config.toml       # Base configuration
│   ├── params.toml       # Shared parameters
│   └── menus.toml        # Menu structure
├── development/
│   └── config.toml       # Development overrides
└── production/
    └── config.toml       # Production overrides
```

Run Hugo with the appropriate environment:

```bash
hugo server --environment development
# or
hugo --environment production
```

### Build-Time Environment Variables

Access environment variables at build time:

```html
{{ with getenv "ANALYTICS_ID" }}
<script async src="https://www.googletagmanager.com/gtag/js?id={{ . }}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ . }}');
</script>
{{ end }}
```

## Third-Party Integrations

### Comments

Add a commenting system like Disqus or Utterances:

1. Create a partial `layouts/partials/comments.html`:

```html
{{ if .Site.Params.comments.enabled }}
  {{ if eq .Site.Params.comments.system "disqus" }}
    <div id="disqus_thread"></div>
    <script>
      var disqus_config = function () {
        this.page.url = '{{ .Permalink }}';
        this.page.identifier = '{{ .RelPermalink }}';
      };
      (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://{{ .Site.Params.comments.disqusShortname }}.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();
    </script>
  {{ else if eq .Site.Params.comments.system "utterances" }}
    <script src="https://utteranc.es/client.js"
      repo="{{ .Site.Params.comments.utterancesRepo }}"
      issue-term="pathname"
      theme="github-light"
      crossorigin="anonymous"
      async>
    </script>
  {{ end }}
{{ end }}
```

2. Add configuration to your `config.toml`:

```toml
[params.comments]
  enabled = true
  system = "utterances"  # "disqus" or "utterances"
  disqusShortname = "your-disqus-shortname"
  utterancesRepo = "yourusername/your-repo"
```

### Analytics

The theme supports Google Analytics by default, but you can add other analytics platforms:

1. Create a partial `layouts/partials/plausible-analytics.html`:

```html
{{ if .Site.Params.plausibleAnalytics.enabled }}
<script async defer data-domain="{{ .Site.Params.plausibleAnalytics.domain }}" src="https://plausible.io/js/plausible.js"></script>
{{ end }}
```

2. Add to your `head.html` partial and configure in `config.toml`:

```toml
[params.plausibleAnalytics]
  enabled = true
  domain = "yourdomain.com"
```

## Next Steps

- Explore the [Theme Internals](./internals/README.md) for a deeper understanding of the theme architecture
- Check out the [Contributing Guidelines](./contributing.md) if you'd like to contribute to the theme
- Visit the [FAQ](./faq.md) for answers to common questions
