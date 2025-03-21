---
title: "Card Grid Component - Complete Guide"
date: 2025-03-07
description: "A comprehensive guide with examples for the Card Grid component in the Nord Hugo theme"
categories:
  - Documentation
tags:
  - components
  - design
  - nord
  - layout
---

# Card Grid Component - Complete Guide

The Card Grid component is a flexible, responsive system for displaying content in grid layouts. Perfect for showcasing features, pricing plans, team members, testimonials, and more.

{{< toc >}}

## Component Overview

The Card Grid system consists of several key shortcodes:

1. `card-grid` - The container that organizes cards in a grid
2. `card` - Standard cards for general content
3. `feature-card` - Specialized cards for highlighting features
4. `pricing-card` - Purpose-built cards for pricing tables

## Basic Usage

### Simple 3-Column Grid

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

### Two-Column Grid with Large Gaps

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

## Card Variations

### Cards with Icons

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

### Cards with Images

```
{{</* card-grid columns="2" */>}}
  {{</* card 
      title="Mountain View" 
      image="https://placehold.co/600x200/88c0d0/eceff4?text=Mountain"
  */>}}
    Beautiful mountain landscapes with snow-capped peaks.
  {{</* /card */>}}
  
  {{</* card 
      title="Ocean Waves" 
      image="https://placehold.co/600x200/5e81ac/eceff4?text=Ocean"
  */>}}
    Peaceful ocean waves crashing against the shore.
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="2" >}}
  {{< card 
      title="Mountain View" 
      image="https://placehold.co/600x200/88c0d0/eceff4?text=Mountain"
  >}}
    Beautiful mountain landscapes with snow-capped peaks.
  {{< /card >}}
  
  {{< card 
      title="Ocean Waves" 
      image="https://placehold.co/600x200/5e81ac/eceff4?text=Ocean"
  >}}
    Peaceful ocean waves crashing against the shore.
  {{< /card >}}
{{< /card-grid >}}

### Horizontal Card Layout

```
{{</* card 
    type="horizontal" 
    title="Horizontal Layout" 
    image="https://placehold.co/600x200/81a1c1/eceff4?text=Horizontal"
*/>}}
  This card uses a horizontal layout with the image on the left and content on the right.
{{</* /card */>}}
```

Which renders as:

{{< card 
    type="horizontal" 
    title="Horizontal Layout" 
    image="https://placehold.co/600x200/81a1c1/eceff4?text=Horizontal"
>}}
  This card uses a horizontal layout with the image on the left and content on the right.
{{< /card >}}

### Cards with Links

```
{{</* card 
    title="Read More Example" 
    link="https://www.nordtheme.com"
*/>}}
  Click the link below to read more about this topic.
{{</* /card */>}}
```

Which renders as:

{{< card 
    title="Read More Example" 
    link="https://www.nordtheme.com"
>}}
  Click the link below to read more about this topic.
{{< /card >}}

### Cards with Tags

```
{{</* card-grid columns="2" */>}}
  {{</* card 
      title="New Feature" 
      tag="New"
  */>}}
    This amazing new feature was just released.
  {{</* /card */>}}
  
  {{</* card 
      title="Premium Feature" 
      tag="Premium"
  */>}}
    This feature is available for premium users.
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="2" >}}
  {{< card 
      title="New Feature" 
      tag="New"
  >}}
    This amazing new feature was just released.
  {{< /card >}}
  
  {{< card 
      title="Premium Feature" 
      tag="Premium"
  >}}
    This feature is available for premium users.
  {{< /card >}}
{{< /card-grid >}}

### Centered Content Cards

```
{{</* card 
    title="Centered Content" 
    center=true 
    icon="heart"
*/>}}
  This card has centered content for a balanced appearance.
{{</* /card */>}}
```

Which renders as:

{{< card 
    title="Centered Content" 
    center=true 
    icon="heart"
>}}
  This card has centered content for a balanced appearance.
{{< /card >}}

### Feature Cards

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

## Real-World Use Cases

### Feature Showcase

Use cards to showcase product or service features:

```
{{</* card-grid columns="3" */>}}
  {{</* feature-card title="Easy to Use" icon="zap" */>}}
    Simple and intuitive interface with no learning curve.
  {{</* /feature-card */>}}
  
  {{</* feature-card title="Customizable" icon="layout" */>}}
    Tailor the experience to your needs with extensive options.
  {{</* /feature-card */>}}
  
  {{</* feature-card title="Fast & Reliable" icon="award" */>}}
    Built for performance and dependability in all scenarios.
  {{</* /feature-card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="3" >}}
  {{< feature-card title="Easy to Use" icon="zap" >}}
    Simple and intuitive interface with no learning curve.
  {{< /feature-card >}}
  
  {{< feature-card title="Customizable" icon="layout" >}}
    Tailor the experience to your needs with extensive options.
  {{< /feature-card >}}
  
  {{< feature-card title="Fast & Reliable" icon="award" >}}
    Built for performance and dependability in all scenarios.
  {{< /feature-card >}}
{{< /card-grid >}}

### Blog Post Grid

Display blog post previews in a grid:

```
{{</* card-grid columns="2" */>}}
  {{</* card 
      type="horizontal"
      title="Getting Started with Hugo" 
      subtitle="March 7, 2025 • 5 min read"
      tag="Tutorial"
      image="https://placehold.co/600x200/88c0d0/eceff4?text=Hugo"
      link="#"
  */>}}
    Learn how to build your first website with Hugo, the world's fastest framework for building websites.
  {{</* /card */>}}
  
  {{</* card 
      type="horizontal"
      title="Customizing Nord Theme" 
      subtitle="March 5, 2025 • 8 min read"
      tag="Design"
      image="https://placehold.co/600x200/81a1c1/eceff4?text=Nord"
      link="#"
  */>}}
    Discover how to customize the Nord theme to perfectly match your brand and aesthetic preferences.
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="2" >}}
  {{< card 
      type="horizontal"
      title="Getting Started with Hugo" 
      subtitle="March 7, 2025 • 5 min read"
      tag="Tutorial"
      image="https://placehold.co/600x200/88c0d0/eceff4?text=Hugo"
      link="#"
  >}}
    Learn how to build your first website with Hugo, the world's fastest framework for building websites.
  {{< /card >}}
  
  {{< card 
      type="horizontal"
      title="Customizing Nord Theme" 
      subtitle="March 5, 2025 • 8 min read"
      tag="Design"
      image="https://placehold.co/600x200/81a1c1/eceff4?text=Nord"
      link="#"
  >}}
    Discover how to customize the Nord theme to perfectly match your brand and aesthetic preferences.
  {{< /card >}}
{{< /card-grid >}}

### Team Members

Display team members or contributors:

```
{{</* card-grid columns="4" */>}}
  {{</* card 
      title="Jane Doe" 
      subtitle="CEO & Founder"
      image="https://placehold.co/300x200/5e81ac/eceff4?text=Jane"
      center=true
  */>}}
    15+ years of industry experience
  {{</* /card */>}}
  
  {{</* card 
      title="John Smith" 
      subtitle="CTO"
      image="https://placehold.co/300x200/81a1c1/eceff4?text=John"
      center=true
  */>}}
    Full-stack developer & architect
  {{</* /card */>}}
  
  {{</* card 
      title="Emily Chen" 
      subtitle="Design Lead"
      image="https://placehold.co/300x200/88c0d0/eceff4?text=Emily"
      center=true
  */>}}
    Award-winning UI/UX designer
  {{</* /card */>}}
  
  {{</* card 
      title="Mike Johnson" 
      subtitle="Marketing"
      image="https://placehold.co/300x200/8fbcbb/eceff4?text=Mike"
      center=true
  */>}}
    Digital marketing specialist
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="4" >}}
  {{< card 
      title="Jane Doe" 
      subtitle="CEO & Founder"
      image="https://placehold.co/300x200/5e81ac/eceff4?text=Jane"
      center=true
  >}}
    15+ years of industry experience
  {{< /card >}}
  
  {{< card 
      title="John Smith" 
      subtitle="CTO"
      image="https://placehold.co/300x200/81a1c1/eceff4?text=John"
      center=true
  >}}
    Full-stack developer & architect
  {{< /card >}}
  
  {{< card 
      title="Emily Chen" 
      subtitle="Design Lead"
      image="https://placehold.co/300x200/88c0d0/eceff4?text=Emily"
      center=true
  >}}
    Award-winning UI/UX designer
  {{< /card >}}
  
  {{< card 
      title="Mike Johnson" 
      subtitle="Marketing"
      image="https://placehold.co/300x200/8fbcbb/eceff4?text=Mike"
      center=true
  >}}
    Digital marketing specialist
  {{< /card >}}
{{< /card-grid >}}

### Pricing Tables

Display pricing plans in a comparative layout:

```
{{</* card-grid columns="3" gap="lg" */>}}
  {{</* pricing-card 
      title="Basic Plan" 
      subtitle="$9/month"
      action-text="Sign Up"
      action-link="#"
  */>}}
5 projects
10GB storage
Email support
Basic analytics
  {{</* /pricing-card */>}}
  
  {{</* pricing-card 
      title="Pro Plan" 
      subtitle="$19/month"
      class="card-accent card-accent-accent"
      action-text="Sign Up"
      action-link="#"
  */>}}
20 projects
50GB storage
Priority support
Advanced analytics
Custom domain
  {{</* /pricing-card */>}}
  
  {{</* pricing-card 
      title="Enterprise Plan" 
      subtitle="$49/month"
      action-text="Contact Sales"
      action-link="#"
  */>}}
Unlimited projects
250GB storage
24/7 phone support
Custom analytics
Custom domain
User management
  {{</* /pricing-card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="3" gap="lg" >}}
  {{< pricing-card 
      title="Basic Plan" 
      subtitle="$9/month"
      action-text="Sign Up"
      action-link="#"
  >}}
5 projects
10GB storage
Email support
Basic analytics
  {{< /pricing-card >}}
  
  {{< pricing-card 
      title="Pro Plan" 
      subtitle="$19/month"
      class="card-accent card-accent-accent"
      action-text="Sign Up"
      action-link="#"
  >}}
20 projects
50GB storage
Priority support
Advanced analytics
Custom domain
  {{< /pricing-card >}}
  
  {{< pricing-card 
      title="Enterprise Plan" 
      subtitle="$49/month"
      action-text="Contact Sales"
      action-link="#"
  >}}
Unlimited projects
250GB storage
24/7 phone support
Custom analytics
Custom domain
User management
  {{< /pricing-card >}}
{{< /card-grid >}}

### Testimonials

Display client testimonials in an attractive grid:

```
{{</* card-grid columns="2" */>}}
  {{</* card center=true */>}}
    ★★★★★
    
    "The team delivered a website that exceeded our expectations. The design is clean, modern, and perfectly reflects our brand identity."
    
    **John Smith**  
    CEO, TechCorp
  {{</* /card */>}}
  
  {{</* card center=true */>}}
    ★★★★★
    
    "Working with this team was a breeze. They were responsive, professional, and truly understood our vision from the beginning."
    
    **Sarah Johnson**  
    Marketing Director, Creative Studios
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="2" >}}
  {{< card center=true >}}
    ★★★★★
    
    "The team delivered a website that exceeded our expectations. The design is clean, modern, and perfectly reflects our brand identity."
    
    **John Smith**  
    CEO, TechCorp
  {{< /card >}}
  
  {{< card center=true >}}
    ★★★★★
    
    "Working with this team was a breeze. They were responsive, professional, and truly understood our vision from the beginning."
    
    **Sarah Johnson**  
    Marketing Director, Creative Studios
  {{< /card >}}
{{< /card-grid >}}

### Stats or Metrics Display

Use cards to highlight important statistics or metrics:

```
{{</* card-grid columns="4" */>}}
  {{</* card center=true */>}}
    ## 500+
    **Projects Completed**
  {{</* /card */>}}
  
  {{</* card center=true */>}}
    ## 50+
    **Team Members**
  {{</* /card */>}}
  
  {{</* card center=true */>}}
    ## 30+
    **Countries Served**
  {{</* /card */>}}
  
  {{</* card center=true */>}}
    ## 98%
    **Client Satisfaction**
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="4" >}}
  {{< card center=true >}}
    ## 500+
    **Projects Completed**
  {{< /card >}}
  
  {{< card center=true >}}
    ## 50+
    **Team Members**
  {{< /card >}}
  
  {{< card center=true >}}
    ## 30+
    **Countries Served**
  {{< /card >}}
  
  {{< card center=true >}}
    ## 98%
    **Client Satisfaction**
  {{< /card >}}
{{< /card-grid >}}

### Feature Comparison

Compare features or products side-by-side:

```
{{</* card-grid columns="3" */>}}
  {{</* card 
      title="Basic Plan" 
      center=true
  */>}}
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Availability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Projects</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>10GB</td>
    </tr>
    <tr>
      <td>Custom Domain</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>API Access</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Priority Support</td>
      <td>❌</td>
    </tr>
  </tbody>
</table>

**$9/month**
  {{</* /card */>}}
  
  {{</* card 
      title="Pro Plan" 
      center=true
      class="card-accent card-accent-accent"
  */>}}
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Availability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Projects</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>50GB</td>
    </tr>
    <tr>
      <td>Custom Domain</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>API Access</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Priority Support</td>
      <td>❌</td>
    </tr>
  </tbody>
</table>

**$19/month**
  {{</* /card */>}}
  
  {{</* card 
      title="Enterprise Plan" 
      center=true
  */>}}
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Availability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Projects</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>250GB</td>
    </tr>
    <tr>
      <td>Custom Domain</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>API Access</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Priority Support</td>
      <td>✅</td>
    </tr>
  </tbody>
</table>

**$49/month**
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="3" >}}
  {{< card 
      title="Basic Plan" 
      center=true
  >}}
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Availability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Projects</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>10GB</td>
    </tr>
    <tr>
      <td>Custom Domain</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>API Access</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Priority Support</td>
      <td>❌</td>
    </tr>
  </tbody>
</table>

**$9/month**
  {{< /card >}}
  
  {{< card 
      title="Pro Plan" 
      center=true
      class="card-accent card-accent-accent"
  >}}
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Availability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Projects</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>50GB</td>
    </tr>
    <tr>
      <td>Custom Domain</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>API Access</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Priority Support</td>
      <td>❌</td>
    </tr>
  </tbody>
</table>

**$19/month**
  {{< /card >}}
  
  {{< card 
      title="Enterprise Plan" 
      center=true
  >}}
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Availability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Projects</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>250GB</td>
    </tr>
    <tr>
      <td>Custom Domain</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>API Access</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Priority Support</td>
      <td>✅</td>
    </tr>
  </tbody>
</table>

**$49/month**
  {{< /card >}}
{{< /card-grid >}}

### FAQ Section

Organize frequently asked questions in a card grid:

```
{{</* card-grid columns="2" */>}}
  {{</* card title="How do I get started?" */>}}
    Getting started is easy! Simply sign up for an account on our website and follow the onboarding process. Our setup wizard will guide you through the initial configuration.
  {{</* /card */>}}
  
  {{</* card title="What payment methods do you accept?" */>}}
    We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. All payments are securely processed through our payment provider.
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="2" >}}
  {{< card title="How do I get started?" >}}
    Getting started is easy! Simply sign up for an account on our website and follow the onboarding process. Our setup wizard will guide you through the initial configuration.
  {{< /card >}}
  
  {{< card title="What payment methods do you accept?" >}}
    We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. All payments are securely processed through our payment provider.
  {{< /card >}}
{{< /card-grid >}}

## Configuration Reference

### Card Grid Parameters

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| columns | Number of columns | 3 | 1, 2, 3, 4 |
| gap | Space between cards | md | sm, md, lg, xl |
| responsive | Enable responsive behavior | true | true, false |
| align | Vertical alignment of cards | start | start, center, stretch |
| class | Additional CSS classes | "" | any class name |

### Card Parameters

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| type | Card style | basic | basic, horizontal |
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

### Pricing Card Parameters

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| title | Plan title | "" | any text |
| subtitle | Price/period | "" | any text |
| action-text | Button text | "" | any text |
| action-link | Button URL | "#" | any URL |
| class | Additional CSS classes | "" | any class name |

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

## Responsive Behavior

By default, the Card Grid component is responsive and will adjust the number of columns based on screen size:

- 4-column grids become 2-column on tablets
- 3-column grids become 2-column on tablets
- All grids become 1-column on mobile devices

## Best Practices

1. **Maintain consistency**: Keep card heights similar within a grid for a balanced look
2. **Use appropriate spacing**: Choose a gap size that complements your content
3. **Optimize images**: Use appropriately sized and optimized images for performance
4. **Limit content**: Keep card content concise to avoid overly tall cards
5. **Consider responsive layout**: Remember that cards will stack on mobile devices
6. **Use feature cards for highlights**: Feature cards are perfect for drawing attention to important elements
