---
title: "Exploring the Nord Theme"
date: 2025-03-01T12:00:00-05:00
description: "A showcase of Nord color scheme and its usage in this Hugo theme"
tags: ["nord", "theme", "design", "colors"]
categories: ["web design"]
draft: false
---

# Welcome to the Nord Hugo Theme

This post demonstrates various elements of the Nord Hugo theme and how it renders different content types with both light and dark modes.

## Nord Colors

The Nord color scheme consists of four palettes:

1. **Polar Night** - Dark shades for backgrounds and text in light mode
2. **Snow Storm** - Light shades for backgrounds and text in dark mode
3. **Frost** - Blue-tinted highlight colors
4. **Aurora** - Vibrant accent colors for special elements

## Typography

The theme uses **Inter** for body text and **JetBrains Mono** for code. This provides excellent readability while maintaining a clean, modern aesthetic.

### Heading Examples

#### H4 Heading
##### H5 Heading
###### H6 Heading

## Code Blocks

Here's a sample of syntax-highlighted code:

```python
def calculate_fibonacci(n):
    """Calculate the Fibonacci sequence up to n."""
    sequence = [0, 1]
    
    while len(sequence) < n:
        next_value = sequence[-1] + sequence[-2]
        sequence.append(next_value)
    
    return sequence

# Generate the first 10 Fibonacci numbers
fib_sequence = calculate_fibonacci(10)
print(f"Fibonacci sequence: {fib_sequence}")
```

And some JavaScript:

```javascript
// Theme toggle functionality
const toggleTheme = () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.classList.toggle('dark-theme', newTheme === 'dark');
  localStorage.setItem('theme', newTheme);
};

// Add event listener to theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
```

## Blockquotes

> The Nord color scheme provides a harmonious color palette with blue undertones that's easy on the eyes for long reading or coding sessions.
>
> — Arctic Ice Studio

## Lists

### Unordered List

- First item
- Second item
  - Nested item 1
  - Nested item 2
- Third item

### Ordered List

1. First step
2. Second step
3. Third step
   1. Sub-step 1
   2. Sub-step 2
4. Fourth step

## Tables

| Feature       | Light Mode   | Dark Mode    |
|---------------|--------------|--------------|
| Background    | Snow Storm   | Polar Night  |
| Text          | Polar Night  | Snow Storm   |
| Accent Colors | Frost/Aurora | Frost/Aurora |
| Code Blocks   | Nord5        | Nord1        |

## Embeds

### YouTube Embed

{{< youtube dQw4w9WgXcQ >}}

### X/Twitter Embed

You can use either shortcode format:

{{< x bdougieYO 1894813801293455418 >}}

Or using the legacy name:

{{< twitter bdougieYO 1894813801293455418 >}}

### BlueSky Embed

You can also embed BlueSky posts using this format:

{{< bluesky "did:plc:z72i7hdynmk6r22z27h6tvur" "bafyreiabtyc4qky3cqctbjve2o4o6ugcsmgdvvsukpzmkcewe4n55y4yci" >}}

## Nord Color Palette

{{< nord-palette >}}

## Final Thoughts

The Nord theme provides a beautiful, cohesive experience across both light and dark modes, making your content easy to read regardless of the reader's preference or environment.

Try toggling between modes using the button in the top navigation!
