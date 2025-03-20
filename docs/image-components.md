# Image Components

The Nord Hugo Theme includes a set of enhanced image components for better visual storytelling. These components make it easy to add captions, create image comparisons, and build image galleries.

## Available Image Components

The theme provides the following image components:

1. **Basic Image with Caption** - Display images with customizable captions and styling
2. **Image Comparison Slider** - Compare "before and after" images with an interactive slider
3. **Image Gallery** - Create responsive image galleries with optional lightbox functionality

## Basic Image Component

The basic image component enhances standard images with captions, styling options, and lightbox functionality.

### Basic Usage

```
{{</* image src="/images/your-image.jpg" alt="Your image alt text" caption="Your image caption" */>}}
```

### Options

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

### Examples

Basic image with caption:
```
{{</* image src="/images/nordic-landscape.jpg" alt="A beautiful Nordic landscape" caption="A serene landscape in the Nordic wilderness" */>}}
```

Image with styling options:
```
{{</* image 
  src="/images/nordic-landscape.jpg" 
  alt="A beautiful Nordic landscape" 
  caption="A serene landscape with snow-capped mountains" 
  shadow="md" 
  border=true 
  rounded="md" 
  hover="zoom" 
*/>}}
```

## Image Comparison Slider

The image comparison slider allows users to interactively compare two images by dragging a slider handle.

### Basic Usage

```
{{</* image-compare 
  before="/images/before.jpg" 
  after="/images/after.jpg" 
  before-alt="Before editing" 
  after-alt="After editing" 
*/>}}
```

### Options

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

### Examples

Basic comparison slider:
```
{{</* image-compare 
  before="/images/nordic-landscape-1.jpg" 
  after="/images/nordic-landscape-2.jpg" 
  before-alt="Before editing" 
  after-alt="After editing" 
*/>}}
```

Customized comparison slider:
```
{{</* image-compare 
  before="/images/nordic-landscape-3.jpg" 
  after="/images/nordic-landscape-4.jpg" 
  before-label="Day" 
  after-label="Night" 
  initial="30"
  shadow="md"
  border=true
  show-labels=true
*/>}}
```

## Image Gallery

Create responsive image galleries with the gallery component.

### Basic Usage

```
{{</* image-gallery columns="3" */>}}
  {{</* gallery-item src="/images/image1.jpg" caption="Image 1" */>}}
  {{</* gallery-item src="/images/image2.jpg" caption="Image 2" */>}}
  {{</* gallery-item src="/images/image3.jpg" caption="Image 3" */>}}
{{</* /image-gallery */>}}
```

### Gallery Component Options

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| `columns` | Number of columns | `"3"` | `"2"`, `"3"`, `"4"` |
| `class` | Additional CSS classes | `""` | Any CSS class |
| `lightbox` | Enable lightbox | `true` | `true` or `false` |
| `captions-visible` | Always show captions | `false` | `true` or `false` |

### Gallery Item Options

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| `src` | Image source URL | Required | Any valid image URL |
| `alt` | Alternative text | `""` | Any text |
| `caption` | Image caption | `""` | Any text |
| `class` | Additional CSS classes | `""` | Any CSS class |
| `lightbox` | Enable lightbox | `true` | `true` or `false` |

### Examples

Basic gallery:
```
{{</* image-gallery columns="3" */>}}
  {{</* gallery-item src="/images/nordic-landscape-1.jpg" caption="Nordic Mountain Range" */>}}
  {{</* gallery-item src="/images/nordic-landscape-2.jpg" caption="Northern Lights" */>}}
  {{</* gallery-item src="/images/nordic-landscape-3.jpg" caption="Fjord View" */>}}
  {{</* gallery-item src="/images/nordic-landscape-4.jpg" caption="Winter Forest" */>}}
  {{</* gallery-item src="/images/nordic-landscape-5.jpg" caption="Coastal Sunset" */>}}
  {{</* gallery-item src="/images/nordic-landscape-6.jpg" caption="Mountain Lake" */>}}
{{</* /image-gallery */>}}
```

Gallery with always visible captions:
```
{{</* image-gallery columns="2" captions-visible=true */>}}
  {{</* gallery-item src="/images/nordic-landscape-3.jpg" caption="Fjord View" */>}}
  {{</* gallery-item src="/images/nordic-landscape-4.jpg" caption="Winter Forest" */>}}
  {{</* gallery-item src="/images/nordic-landscape-5.jpg" caption="Coastal Sunset" */>}}
  {{</* gallery-item src="/images/nordic-landscape-6.jpg" caption="Mountain Lake" */>}}
{{</* /image-gallery */>}}
```

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
