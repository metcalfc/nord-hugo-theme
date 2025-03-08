---
title: "Card Grid - Advanced Examples"
date: 2025-03-07
description: "Explore advanced use cases for the Card Grid component"
tags: ["components", "nord", "layout", "advanced"]
---

# Card Grid Component - Advanced Examples

This page demonstrates advanced use cases and real-world examples for the Card Grid component. For basic usage, see the [Card Grid Basic Examples](/posts/card-grid-basic) page.

## Card Variations

### Cards with Images

```
{{</* card-grid columns="2" */>}}
  {{</* card 
      title="Mountain View" 
      image="https://placehold.co/600x400/88c0d0/eceff4?text=Mountain"
  */>}}
    Beautiful mountain landscapes with snow-capped peaks.
  {{</* /card */>}}
  
  {{</* card 
      title="Ocean Waves" 
      image="https://placehold.co/600x400/5e81ac/eceff4?text=Ocean"
  */>}}
    Peaceful ocean waves crashing against the shore.
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="2" >}}
  {{< card 
      title="Mountain View" 
      image="https://placehold.co/600x400/88c0d0/eceff4?text=Mountain"
  >}}
    Beautiful mountain landscapes with snow-capped peaks.
  {{< /card >}}
  
  {{< card 
      title="Ocean Waves" 
      image="https://placehold.co/600x400/5e81ac/eceff4?text=Ocean"
  >}}
    Peaceful ocean waves crashing against the shore.
  {{< /card >}}
{{< /card-grid >}}

### Horizontal Card Layout

```
{{</* card 
    type="horizontal" 
    title="Horizontal Layout" 
    image="https://placehold.co/600x400/81a1c1/eceff4?text=Horizontal"
*/>}}
  This card uses a horizontal layout with the image on the left and content on the right.
{{</* /card */>}}
```

Which renders as:

{{< card 
    type="horizontal" 
    title="Horizontal Layout" 
    image="https://placehold.co/600x400/81a1c1/eceff4?text=Horizontal"
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
      image="https://placehold.co/600x400/88c0d0/eceff4?text=Hugo"
      link="#"
  */>}}
    Learn how to build your first website with Hugo, the world's fastest framework for building websites.
  {{</* /card */>}}
  
  {{</* card 
      type="horizontal"
      title="Customizing Nord Theme" 
      subtitle="March 5, 2025 • 8 min read"
      tag="Design"
      image="https://placehold.co/600x400/81a1c1/eceff4?text=Nord"
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
      image="https://placehold.co/600x400/88c0d0/eceff4?text=Hugo"
      link="#"
  >}}
    Learn how to build your first website with Hugo, the world's fastest framework for building websites.
  {{< /card >}}
  
  {{< card 
      type="horizontal"
      title="Customizing Nord Theme" 
      subtitle="March 5, 2025 • 8 min read"
      tag="Design"
      image="https://placehold.co/600x400/81a1c1/eceff4?text=Nord"
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
      image="https://placehold.co/300x300/5e81ac/eceff4?text=Jane"
      center=true
  */>}}
    15+ years of industry experience
  {{</* /card */>}}
  
  {{</* card 
      title="John Smith" 
      subtitle="CTO"
      image="https://placehold.co/300x300/81a1c1/eceff4?text=John"
      center=true
  */>}}
    Full-stack developer & architect
  {{</* /card */>}}
  
  {{</* card 
      title="Emily Chen" 
      subtitle="Design Lead"
      image="https://placehold.co/300x300/88c0d0/eceff4?text=Emily"
      center=true
  */>}}
    Award-winning UI/UX designer
  {{</* /card */>}}
  
  {{</* card 
      title="Mike Johnson" 
      subtitle="Marketing"
      image="https://placehold.co/300x300/8fbcbb/eceff4?text=Mike"
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
      image="https://placehold.co/300x300/5e81ac/eceff4?text=Jane"
      center=true
  >}}
    15+ years of industry experience
  {{< /card >}}
  
  {{< card 
      title="John Smith" 
      subtitle="CTO"
      image="https://placehold.co/300x300/81a1c1/eceff4?text=John"
      center=true
  >}}
    Full-stack developer & architect
  {{< /card >}}
  
  {{< card 
      title="Emily Chen" 
      subtitle="Design Lead"
      image="https://placehold.co/300x300/88c0d0/eceff4?text=Emily"
      center=true
  >}}
    Award-winning UI/UX designer
  {{< /card >}}
  
  {{< card 
      title="Mike Johnson" 
      subtitle="Marketing"
      image="https://placehold.co/300x300/8fbcbb/eceff4?text=Mike"
      center=true
  >}}
    Digital marketing specialist
  {{< /card >}}
{{< /card-grid >}}

### Pricing Tables

Display pricing plans in a comparative layout:

```
{{</* card-grid columns="3" gap="lg" */>}}
  {{</* card 
      title="Basic Plan" 
      subtitle="$9/month"
      center=true
  */>}}
    ## Features
    
    - 5 projects
    - 10GB storage
    - Email support
    - Basic analytics
    
    {{</* card link="#" class="mt-4" center=true */>}}
      **Sign Up**
    {{</* /card */>}}
  {{</* /card */>}}
  
  {{</* card 
      title="Pro Plan" 
      subtitle="$19/month"
      center=true
      class="card-accent card-accent-accent"
  */>}}
    ## Features
    
    - 20 projects
    - 50GB storage
    - Priority support
    - Advanced analytics
    - Custom domain
    
    {{</* card link="#" class="mt-4" center=true */>}}
      **Sign Up**
    {{</* /card */>}}
  {{</* /card */>}}
  
  {{</* card 
      title="Enterprise Plan" 
      subtitle="$49/month"
      center=true
  */>}}
    ## Features
    
    - Unlimited projects
    - 250GB storage
    - 24/7 phone support
    - Custom analytics
    - Custom domain
    - User management
    
    {{</* card link="#" class="mt-4" center=true */>}}
      **Contact Sales**
    {{</* /card */>}}
  {{</* /card */>}}
{{</* /card-grid */>}}
```

Which renders as:

{{< card-grid columns="3" gap="lg" >}}
  {{< card 
      title="Basic Plan" 
      subtitle="$9/month"
      center=true
  >}}
    ## Features
    
    - 5 projects
    - 10GB storage
    - Email support
    - Basic analytics
    
    {{< card link="#" class="mt-4" center=true >}}
      **Sign Up**
    {{< /card >}}
  {{< /card >}}
  
  {{< card 
      title="Pro Plan" 
      subtitle="$19/month"
      center=true
      class="card-accent card-accent-accent"
  >}}
    ## Features
    
    - 20 projects
    - 50GB storage
    - Priority support
    - Advanced analytics
    - Custom domain
    
    {{< card link="#" class="mt-4" center=true >}}
      **Sign Up**
    {{< /card >}}
  {{< /card >}}
  
  {{< card 
      title="Enterprise Plan" 
      subtitle="$49/month"
      center=true
  >}}
    ## Features
    
    - Unlimited projects
    - 250GB storage
    - 24/7 phone support
    - Custom analytics
    - Custom domain
    - User management
    
    {{< card link="#" class="mt-4" center=true >}}
      **Contact Sales**
    {{< /card >}}
  {{< /card >}}
{{< /card-grid >}}

## Best Practices

1. **Maintain consistency**: Keep card heights similar within a grid for a balanced look
2. **Use appropriate spacing**: Choose a gap size that complements your content
3. **Optimize images**: Use appropriately sized and optimized images for performance
4. **Limit content**: Keep card content concise to avoid overly tall cards
5. **Consider responsive layout**: Remember that cards will stack on mobile devices
6. **Use feature cards for highlights**: Feature cards are perfect for drawing attention to important elements
