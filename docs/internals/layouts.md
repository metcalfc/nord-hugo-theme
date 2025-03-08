# Layout Structure

This document explains the layout structure of the Nord Hugo Theme, covering the organization of templates, partials, and shortcodes.

## Directory Organization

```
layouts/
├── _default/               # Default templates for content
│   ├── baseof.html         # Base template
│   ├── list.html           # List pages (sections, taxonomies)
│   └── single.html         # Single pages
├── partials/               # Reusable template components
│   ├── head.html           # <head> section
│   ├── header.html         # Site header
│   ├── footer.html         # Site footer
│   └── ...                 # Other partials
└── shortcodes/             # Custom shortcodes
    ├── youtube.html        # YouTube embed
    ├── twitter.html        # Twitter embed
    └── ...                 # Other shortcodes
```

## Template Hierarchy

Hugo uses a template lookup order to find the appropriate template for rendering content:

1. `/layouts/<TYPE>/<VIEW>.html`
2. `/layouts/_default/<VIEW>.html`
3. `/themes/<THEME>/layouts/<TYPE>/<VIEW>.html`
4. `/themes/<THEME>/layouts/_default/<VIEW>.html`

This hierarchy allows for granular control over template selection, with site-specific templates taking precedence over theme templates.

## Base Template

The base template (`layouts/_default/baseof.html`) defines the overall HTML structure and includes common elements:

- HTML document structure
- Head section (meta, title, styles)
- Header and footer
- Main content area with block definition
- JavaScript includes

Child templates extend this base template by defining the content of the `main` block.

## Content Templates

### Single Template

The single template (`layouts/_default/single.html`) renders individual content pages with:

- Page title and metadata (date, author, reading time)
- Optional table of contents
- Main content
- Tags and categories
- Optional sharing buttons
- Post navigation
- Related posts section

### List Template

The list template (`layouts/_default/list.html`) renders section and taxonomy pages with:

- Section title and description
- Optional content from section's _index.md
- List of posts (either as cards or list items)
- Pagination controls

## Key Partials

Partials are reusable template components. The main partials include:

### Head (`partials/head.html`)

Contains the `<head>` section with:
- Meta tags (charset, viewport, description)
- Title tag
- Open Graph and Twitter Card metadata
- CSS includes
- Early theme initialization

### Header (`partials/header.html`)

Implements the site header with:
- Site logo/title
- Main navigation menu
- Theme toggle button
- Optional mobile navigation

### Footer (`partials/footer.html`)

Implements the site footer with:
- Copyright information
- Footer navigation menu
- Social links

### Post Components

Several partials handle post display:
- `post-card.html`: Card view for post lists
- `post-item.html`: List view for post lists
- `post-navigation.html`: Previous/next navigation
- `related-posts.html`: Related posts section

## Shortcodes

Shortcodes provide special functionality that can be used within content:

### Media Embeds

- `youtube.html`: Responsive YouTube video embeds
- `twitter.html` / `x.html`: Twitter/X post embeds
- `bluesky.html`: BlueSky post embeds

### Content Enhancement

- `figure.html`: Enhanced image with caption
- `nord-palette.html`: Display the Nord color palette
- `alert.html`: Styled alert/notice boxes

## Layout Patterns

The theme uses several consistent layout patterns:

### Container Pattern

Content is wrapped in container elements for consistent spacing:

```html
<div class="container">
  <!-- Content -->
</div>
```

### Grid Layouts

Card-based content uses CSS Grid for responsive layouts:

```html
<div class="card-grid">
  <!-- Cards -->
</div>
```

### Responsive Navigation

The navigation adapts for different screen sizes:
- Desktop: Horizontal menu
- Mobile: Collapsible menu with toggle button

## Template Variables

Common template variables used throughout the layouts:

- `.Title`: Page title
- `.Content`: Page content
- `.Permalink`: Full URL to the page
- `.Date`: Publication date
- `.Params`: Front matter parameters
- `.Site.Params`: Site configuration parameters

## Customizing Layouts

To customize layouts, create matching files in your site's `layouts` directory:

1. **Override a partial**: Create `layouts/partials/header.html` to replace the theme's header
2. **Override a content template**: Create `layouts/_default/single.html` for a custom single page layout
3. **Add section-specific templates**: Create `layouts/posts/single.html` for post-specific layout

See the [Customization Guide](../customization.md) for more details.
