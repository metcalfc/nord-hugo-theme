---
title: "Card Grid - Basic Examples"
date: 2025-03-07
description: "Learn how to use the Card Grid component with basic examples"
tags: ["components", "nord", "layout"]
---

# Card Grid Component - Basic Examples

The Card Grid component is a flexible system for displaying content in a responsive grid layout. This page demonstrates basic usage patterns and simple configurations.

## Basic 3-Column Grid

The default Card Grid creates a 3-column layout with medium spacing between cards:

```
{{</* card-grid */>}}
  {{</* card title="First Card" */>}}
    Content for the first card
  {{</* /card */>}}
  
  {{</* card title="Second Card" */>}}
    Content for the second card
  {{</* /card */>}}
  
  {{</* card title="Third Card" */>}}
    Content for the third card
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid >}}
  {{< card title="First Card" >}}
    Content for the first card
  {{< /card >}}
  
  {{< card title="Second Card" >}}
    Content for the second card
  {{< /card >}}
  
  {{< card title="Third Card" >}}
    Content for the third card
  {{< /card >}}
{{< /card-grid >}}

## Two-Column Grid with Large Gaps

You can specify the number of columns and spacing:

```
{{</* card-grid columns="2" gap="lg" */>}}
  {{</* card title="Column One" */>}}
    Content for column one
  {{</* /card */>}}
  
  {{</* card title="Column Two" */>}}
    Content for column two
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="2" gap="lg" >}}
  {{< card title="Column One" >}}
    Content for column one
  {{< /card >}}
  
  {{< card title="Column Two" >}}
    Content for column two
  {{< /card >}}
{{< /card-grid >}}

## Cards with Icons

Add visual interest to cards with icons:

```
{{</* card-grid columns="3" */>}}
  {{</* card title="Star Feature" icon="star" */>}}
    A feature with a star icon
  {{</* /card */>}}
  
  {{</* card title="Fast Performance" icon="zap" */>}}
    A feature about performance
  {{</* /card */>}}
  
  {{</* card title="Clean Code" icon="code" */>}}
    A feature about code quality
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="3" >}}
  {{< card title="Star Feature" icon="star" >}}
    A feature with a star icon
  {{< /card >}}
  
  {{< card title="Fast Performance" icon="zap" >}}
    A feature about performance
  {{< /card >}}
  
  {{< card title="Clean Code" icon="code" >}}
    A feature about code quality
  {{< /card >}}
{{< /card-grid >}}

## Feature Cards

For highlighting important features, use the feature-card shortcode:

```
{{</* feature-card title="Special Feature" icon="award" */>}}
  This is a special feature that deserves extra attention.
{{</* /feature-card */>}}
```

Which renders as:

{{< feature-card title="Special Feature" icon="award" >}}
  This is a special feature that deserves extra attention.
{{< /feature-card >}}

## Card Parameters Reference

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
| title | Card title | "" | any text |
| subtitle | Card subtitle | "" | any text |
| image | Image URL | "" | any URL |
| image-alt | Image alt text | title | any text |
| link | Link URL | "" | any URL |
| icon | Icon name | "" | name from icon library |
| tag | Tag label | "" | any text |
| shadow | Enable shadow | true | true, false |
| center | Center card content | false | true, false |
| hover | Enable hover effects | true | true, false |

For more advanced examples and real-world use cases, see the [Card Grid Advanced Examples](/posts/card-grid-advanced) page.
