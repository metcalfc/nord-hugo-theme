---
title: "Enhanced Image Components"
date: 2025-03-07
description: "Learn how to use Nord Hugo Theme's enhanced image components for better visual storytelling."
tags: ["components", "images", "documentation"]
categories: ["tutorials"]
---

# Enhanced Image Components

Nord Hugo Theme provides a set of powerful and flexible image components to enhance your content's visual appeal. These components include:

1. **Basic Images with Captions** - Display images with customizable captions and styling
2. **Image Comparison Slider** - Compare "before and after" images with an interactive slider
3. **Image Gallery** - Create responsive image galleries with optional lightbox functionality

{{< toc >}}

Let's explore each component in detail with examples.

## Basic Image Component

The basic image component enhances standard images with captions, styling options, and lightbox functionality.

### Basic Usage

Here's a simple example:

```
{{</* image src="picture-1.jpg" alt="A beautiful Nordic landscape" caption="A serene landscape in the Nordic wilderness" */>}}
```

This will display an image with a caption below it:

{{< image src="picture-1.jpg" alt="A beautiful Nordic landscape" caption="A serene landscape in the Nordic wilderness" >}}

### Styling Options

The image component supports various styling options:

```
{{</* image 
  src="picture-2.jpg" 
  alt="A beautiful Nordic landscape" 
  caption="A serene landscape with snow-capped mountains" 
  shadow="md" 
  border=true 
  rounded="md" 
  hover="zoom" 
*/>}}
```

This applies a medium shadow, border, medium rounded corners, and a zoom effect on hover:

{{< image src="picture-2.jpg" alt="A beautiful Nordic landscape" caption="A serene landscape with snow-capped mountains" shadow="md" border=true rounded="md" hover="zoom" >}}

### Caption Styles

You can customize caption styles:

```
{{</* image 
  src="picture-3.jpg" 
  alt="Nordic landscape" 
  caption="Standard caption style"
*/>}}

{{</* image 
  src="picture-3.jpg" 
  alt="Nordic landscape" 
  caption="Dark caption style" 
  caption-style="dark"
*/>}}

{{</* image 
  src="picture-3.jpg" 
  alt="Nordic landscape" 
  caption="Accent caption style" 
  caption-style="accent"
*/>}}

{{</* image 
  src="picture-3.jpg" 
  alt="Nordic landscape" 
  caption="Minimal caption style" 
  caption-style="minimal"
*/>}}
```

### Size Options

Control image size and display:

```
{{</* image 
  src="picture-4.jpg" 
  alt="Nordic landscape" 
  caption="Default size"
*/>}}

{{</* image 
  src="picture-4.jpg" 
  alt="Nordic landscape" 
  caption="Wide size" 
  size="wide"
*/>}}

{{</* image 
  src="picture-4.jpg" 
  alt="Nordic landscape" 
  caption="Full width" 
  size="full"
*/>}}
```

### Lightbox Support

Enable lightbox functionality for clickable, full-screen image viewing:

```
{{</* image 
  src="picture-5.jpg" 
  alt="Nordic landscape" 
  caption="Click to enlarge" 
  lightbox=true 
*/>}}
```

## Image Comparison Slider

The image comparison slider allows users to interactively compare two images by dragging a slider handle.

### Basic Usage

```
{{</* image-compare 
  before="picture-1.jpg" 
  after="picture-2.jpg" 
  before-alt="Before editing" 
  after-alt="After editing" 
*/>}}
```

This creates a slider where users can drag to compare the before and after images:

{{< image-compare before="picture-1.jpg" after="picture-2.jpg" before-alt="Before editing" after-alt="After editing" >}}

### Customizing Labels

You can customize the "Before" and "After" labels:

```
{{</* image-compare 
  before="picture-3.jpg" 
  after="picture-4.jpg" 
  before-label="Day" 
  after-label="Night" 
  before-alt="Daytime scene" 
  after-alt="Nighttime scene" 
*/>}}
```

### Additional Options

The comparison slider supports additional styling options:

```
{{</* image-compare 
  before="picture-5.jpg" 
  after="picture-6.jpg" 
  initial="30"
  shadow="md"
  border=true
  show-labels=true
*/>}}
```

This sets the initial slider position to 30%, adds a medium shadow, adds a border, and shows labels.

## Image Gallery

Create responsive image galleries with the gallery component.

### Basic Usage

```
{{</* image-gallery columns="3" */>}}
  {{</* gallery-item src="picture-1.jpg" caption="Nordic Mountain Range" */>}}
  {{</* gallery-item src="picture-2.jpg" caption="Northern Lights" */>}}
  {{</* gallery-item src="picture-3.jpg" caption="Fjord View" */>}}
  {{</* gallery-item src="picture-4.jpg" caption="Winter Forest" */>}}
  {{</* gallery-item src="picture-5.jpg" caption="Coastal Sunset" */>}}
  {{</* gallery-item src="picture-6.jpg" caption="Mountain Lake" */>}}
{{</* /image-gallery */>}}
```

This creates a responsive 3-column gallery:

{{< image-gallery columns="3" >}}
  {{< gallery-item src="picture-1.jpg" caption="Nordic Mountain Range" >}}
  {{< gallery-item src="picture-2.jpg" caption="Northern Lights" >}}
  {{< gallery-item src="picture-3.jpg" caption="Fjord View" >}}
  {{< gallery-item src="picture-4.jpg" caption="Winter Forest" >}}
  {{< gallery-item src="picture-5.jpg" caption="Coastal Sunset" >}}
  {{< gallery-item src="picture-6.jpg" caption="Mountain Lake" >}}
{{< /image-gallery >}}

### Lightbox Integration

Galleries automatically support lightbox functionality for a fullscreen viewing experience. Disable it if needed:

```
{{</* image-gallery columns="3" lightbox=false */>}}
  {{</* gallery-item src="picture-1.jpg" caption="Nordic Mountain Range" */>}}
  {{</* gallery-item src="picture-2.jpg" caption="Northern Lights" */>}}
  {{</* gallery-item src="picture-3.jpg" caption="Fjord View" */>}}
{{</* /image-gallery */>}}
```

### Always Visible Captions

By default, captions are shown on hover. You can make them always visible:

```
{{</* image-gallery columns="2" captions-visible=true */>}}
  {{</* gallery-item src="picture-3.jpg" caption="Fjord View" */>}}
  {{</* gallery-item src="picture-4.jpg" caption="Winter Forest" */>}}
  {{</* gallery-item src="picture-5.jpg" caption="Coastal Sunset" */>}}
  {{</* gallery-item src="picture-6.jpg" caption="Mountain Lake" */>}}
{{</* /image-gallery */>}}
```

## Component Parameters

### Image Component

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| `src` | Image source URL | Required | Any valid image URL |
| `alt` | Alternative text | `""` | Any text |
| `caption` | Image caption | `""` | Any text (supports Markdown) |
| `caption-style` | Caption styling | `""` | `"dark"`, `"accent"`, `"minimal"` |
| `class` | Additional CSS classes | `""` | Any CSS class |
| `lightbox` | Enable lightbox | `false` | `true` or `false` |
| `width` | Image width | `"auto"` | CSS width value |
| `height` | Image height | `"auto"` | CSS height value |
| `hover` | Hover effect | `""` | `"zoom"`, `"brighten"` |
| `shadow` | Shadow size | `""` | `"sm"`, `"md"`, `"lg"` |
| `border` | Add border | `false` | `true` or `false` |
| `rounded` | Rounded corners | `""` | `"sm"`, `"md"`, `"lg"`, `"full"` |
| `lazy` | Lazy loading | `true` | `true` or `false` |
| `size` | Image sizing | `""` | `"wide"`, `"full"` |

### Image Comparison Component

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| `before` | "Before" image URL | Required | Any valid image URL |
| `after` | "After" image URL | Required | Any valid image URL |
| `before-alt` | Alt text for "before" image | `"Before image"` | Any text |
| `after-alt` | Alt text for "after" image | `"After image"` | Any text |
| `before-label` | Label for "before" image | `"Before"` | Any text |
| `after-label` | Label for "after" image | `"After"` | Any text |
| `class` | Additional CSS classes | `""` | Any CSS class |
| `initial` | Initial slider position | `"50"` | Value from `"0"` to `"100"` |
| `height` | Container height | `"auto"` | CSS height value |
| `shadow` | Shadow size | `""` | `"sm"`, `"md"`, `"lg"` |
| `border` | Add border | `false` | `true` or `false` |
| `show-labels` | Show before/after labels | `true` | `true` or `false` |

### Image Gallery Component

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| `columns` | Number of columns | `"3"` | `"2"`, `"3"`, `"4"` |
| `class` | Additional CSS classes | `""` | Any CSS class |
| `lightbox` | Enable lightbox | `true` | `true` or `false` |
| `captions-visible` | Always show captions | `false` | `true` or `false` |

### Gallery Item Component

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| `src` | Image source URL | Required | Any valid image URL |
| `alt` | Alternative text | `""` | Any text |
| `caption` | Image caption | `""` | Any text |
| `class` | Additional CSS classes | `""` | Any CSS class |
| `lightbox` | Enable lightbox | `true` | `true` or `false` |

## Responsive Behavior

All image components are fully responsive:

- The basic image component will adjust to container width
- Image comparison slider works on both desktop and mobile (touch-enabled)
- The gallery automatically adjusts columns for different screen sizes:
  - 4 columns → 3 columns on tablets
  - 3 columns → 2 columns on small tablets
  - All → 1 column on mobile

## Accessibility

The image components are built with accessibility in mind:

- All images require alt text
- The comparison slider is keyboard navigable
- Gallery lightbox can be navigated via keyboard arrows and closed with Escape key

## Best Practices

1. **Always provide alt text** for images for better accessibility
2. **Optimize your images** before uploading for faster page loads
3. **Use appropriate captions** to provide context for your images
4. **Consider lazy loading** for pages with many images
5. **Choose appropriate sizes** based on your content layout
