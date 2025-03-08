---
title: "Using the Card Grid Component"
date: 2025-03-07
description: "A comprehensive guide to using the Card Grid component in the Nord Hugo theme"
categories:
  - Documentation
tags:
  - components
  - design
  - nord
  - layout
---

# Using the Card Grid Component

The Card Grid component allows you to present content in a responsive grid layout. It's perfect for showcasing features, blog posts, team members, and more.

## Component Structure

The Card Grid system consists of two main shortcodes:

1. `card-grid` - The container that organizes cards in a grid
2. `card` - Individual cards within the grid

There's also a specialized `feature-card` variant for highlighting features.

## Basic Usage

Here's a simple example of a Card Grid with three cards:

```markdown
{{</* card-grid */>}}
  {{</* card title="Card 1" */>}}
    Content for card 1
  {{</* /card */>}}
  
  {{</* card title="Card 2" */>}}
    Content for card 2
  {{</* /card */>}}
  
  {{</* card title="Card 3" */>}}
    Content for card 3
  {{</* /card */>}}
{{</* /card-grid */>}}
```

## Configuration Options

### Card Grid Parameters

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| columns | Number of columns | 3 | 1, 2, 3, 4 |
| gap | Space between cards | md | sm, md, lg |
| responsive | Enable responsive behavior | true | true, false |
| align | Vertical alignment of cards | start | start, center, stretch |
| class | Additional CSS classes | "" | any class name |

### Card Parameters

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| type | Card style | basic | basic, image, horizontal |
| title | Card title | "" | any text |
| subtitle | Card subtitle | "" | any text |
| image | Image URL | "" | any URL |
| image-alt | Image alt text | title | any text |
| link | Link URL | "" | any URL |
| icon | Icon name | "" | name from icon library |
| class | Additional CSS classes | "" | any class name |
| tag | Tag label | "" | any text |
| shadow | Enable shadow | true | true, false |
| center | Center card content | false | true, false |
| hover | Enable hover effects | true | true, false |

### Feature Card Parameters

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| title | Card title | "" | any text |
| icon | Icon name | star | name from icon library |
| class | Additional CSS classes | "" | any class name |
| accent | Show accent border | false | true, false |
| accent-color | Accent border color | accent | accent, primary, success, warning, error, info |
| hover | Enable hover effects | true | true, false |

## Available Icons

The Card Grid component supports the following icons:

- star
- zap
- code
- layout
- lightbulb
- book
- heart
- award
- image
- arrow-right
- info-circle
- check-circle
- alert-triangle
- x-circle
- x

## Example Pages

For detailed examples with code samples and rendered output:

- [Basic Card Grid Examples](/posts/card-grid-basic) - Simple use cases and core functionality
- [Advanced Card Grid Examples](/posts/card-grid-advanced) - Real-world use cases and complex layouts

## Responsive Behavior

By default, the Card Grid component is responsive and will adjust the number of columns based on screen size:

- 4-column grids become 2-column on tablets
- 3-column grids become 2-column on tablets
- All grids become 1-column on mobile devices

You can disable this behavior by setting `responsive=false` if you need fixed columns regardless of screen size.

## Markdown Support

All cards support Markdown content within them, allowing you to include:

- **Bold** and *italic* text
- Lists (ordered and unordered)
- Links
- Code blocks
- And other Markdown elements

## Best Practices

1. **Keep content concise**: Cards work best with focused, brief content
2. **Use consistent sizing**: Try to keep cards similar in height within a grid
3. **Choose appropriate gap sizes**: Match spacing to your content density
4. **Optimize images**: Use appropriately sized images for performance
5. **Use feature cards for highlights**: Draw attention to important elements
