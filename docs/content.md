# Content Management

This guide covers how to organize and create content for your site using the Nord Hugo Theme, including front matter options, shortcodes, and content organization best practices.

## Content Organization

The Nord Hugo Theme works best with the following content organization structure:

```
content/
├── _index.md                  # Home page
├── about/
│   └── index.md               # About page
├── posts/                     # Blog posts
│   ├── _index.md              # Posts list page
│   ├── first-post.md          # Individual post
│   └── second-post.md         # Individual post
├── projects/                  # Optional projects section
│   ├── _index.md              # Projects list page
│   └── project-one.md         # Individual project
└── pages/                     # Additional standalone pages
    ├── contact.md             # Contact page
    ├── privacy-policy.md      # Privacy policy
    └── terms-of-service.md    # Terms of service
```

### Section Structure

- **Home (`_index.md`)**: Main landing page
- **Posts**: Blog posts and articles
- **About**: About page or author information
- **Projects**: Portfolio items (optional)
- **Pages**: Additional standalone pages

## Front Matter

Front matter is YAML, TOML, or JSON metadata at the top of your content files. Here are the front matter options supported by the Nord Hugo Theme:

### Standard Front Matter

```yaml
---
# Required
title: "My First Post"
date: 2023-04-01T12:00:00-05:00

# Optional
description: "A brief description for SEO and social sharing"
draft: false  # Set to true to exclude from production build
---
```

### Extended Front Matter for Posts

```yaml
---
# Basic metadata
title: "My Comprehensive Guide to Hugo"
date: 2023-04-01T12:00:00-05:00
description: "Learn everything you need to know about Hugo static site generator"
draft: false

# Taxonomies
tags: ["hugo", "static-site", "nord"]
categories: ["web development"]
series: "Learning Hugo"  # Optional, for multi-part content

# Display options
toc: true  # Show table of contents
math: false  # Enable math typesetting (KaTeX)
mermaid: false  # Enable Mermaid diagrams
showReadingTime: true  # Override site default
showShareButtons: true  # Override site default

# Featured content
featured: true  # Mark as featured post
weight: 1  # Order in featured list

# Media
image: "/images/featured/hugo-guide.jpg"  # Featured/social image
video: "https://youtube.com/watch?v=example"  # Optional video embed
audio: "https://example.com/podcast.mp3"  # Optional audio embed

# Author (override site default)
author: "Jane Doe"
authorImage: "/images/authors/jane-doe.jpg"
authorTwitter: "@janedoe"
authorGitHub: "janedoe"

# Custom CSS/JS for this post only
customCSS: ["/css/post-specific.css"]
customJS: ["/js/post-specific.js"]

# Advanced options
aliases: ["/old-path/old-post-name/"]  # URL redirects
---
```

### Front Matter for List Pages (`_index.md`)

```yaml
---
title: "Blog Posts"
description: "All articles and tutorials on my site"
date: 2023-01-01T00:00:00-00:00
listType: "grid"  # "grid" or "list" (for collection pages)
showHero: true  # Show hero section
heroTitle: "My Writing"  # Override title for hero
heroImage: "/images/blog-hero.jpg"  # Background image
---

This optional content appears at the top of the list page.
```

## Content Formats

The Nord Hugo Theme supports these content formats:

### Markdown

The primary content format. Example:

```markdown
## Heading

This is a paragraph with **bold** and *italic* text.

- List item 1
- List item 2

[Link text](https://example.com)

![Image alt text](/images/example.jpg)
```

### HTML

You can also use HTML directly in your content files:

```html
<div class="custom-container">
  <p>This is a custom HTML section.</p>
</div>
```

## Shortcodes

Shortcodes are special templates that you can use in your content files. The Nord Hugo Theme provides several custom shortcodes:

### YouTube

Embed a responsive YouTube video:

```
{{</* youtube dQw4w9WgXcQ */>}}
```

With optional parameters:

```
{{</* youtube id="dQw4w9WgXcQ" title="Never Gonna Give You Up" */>}}
```

### X/Twitter

Embed a tweet (supports both X and legacy Twitter syntax):

```
{{</* x username tweet_id */>}}
```

Or:

```
{{</* twitter username tweet_id */>}}
```

### BlueSky

Embed a BlueSky post:

```
{{</* bluesky username post_id */>}}
```

### Nord Palette

Display the Nord color palette:

```
{{</* nord-palette variant="dark" */>}}
```

Options for `variant`: `"light"`, `"dark"`, or omit for automatic theme matching.

### Figure

Enhanced image with caption:

```
{{</* figure src="/images/example.jpg" title="Figure Title" caption="This is the caption" alt="Alt text" */>}}
```

### Alert

Create an alert box:

```
{{</* alert type="info" */>}}
This is an information alert.
{{</* /alert */>}}
```

Types: `"info"`, `"warning"`, `"danger"`, `"success"`, `"tip"`

### Code

Enhanced code block with title and line numbers:

```
{{</* code language="python" title="example.py" lineNumbers=true */>}}
def hello_world():
    print("Hello, world!")
{{</* /code */>}}
```

## Working with Images

The Nord Hugo Theme supports various ways to include images in your content:

### Basic Markdown Images

```markdown
![Alt text](/images/example.jpg)
```

### Responsive Images

Using the `figure` shortcode:

```
{{</* figure src="/images/example.jpg" alt="Alt text" caption="Image caption" */>}}
```

### Image Galleries

Create a simple image gallery:

```
{{</* gallery */>}}
  {{</* figure src="/images/gallery/img1.jpg" caption="Image 1" */>}}
  {{</* figure src="/images/gallery/img2.jpg" caption="Image 2" */>}}
  {{</* figure src="/images/gallery/img3.jpg" caption="Image 3" */>}}
{{</* /gallery */>}}
```

## Working with Tables

Standard Markdown tables are supported and styled by the theme:

```markdown
| Name  | Description | Price |
|-------|-------------|-------|
| Item 1 | First item  | $10   |
| Item 2 | Second item | $20   |
| Item 3 | Third item  | $30   |
```

## Content Management Tips

1. **Use draft mode**: Set `draft: true` while working on content
2. **Organize by sections**: Group related content in appropriate sections
3. **Use aliases**: If you change URLs, use `aliases` to avoid broken links
4. **Optimize images**: Compress images before adding them to your site
5. **Be consistent with front matter**: Use similar patterns across similar content types
6. **Use tags effectively**: Don't overuse tags; be strategic and consistent

## URL Management

The Nord Hugo Theme uses Hugo's default URL structure, but you can customize it in your site config:

```toml
[permalinks]
  posts = "/blog/:year/:month/:slug/"
  pages = "/:filename/"
```

## Next Steps

- See the [Customization](./customization.md) guide to learn how to modify the theme
- Check out the [Advanced Usage](./advanced.md) guide for more complex configurations
