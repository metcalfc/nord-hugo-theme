---
title: "Card Grid Examples for Common Use Cases"
date: 2025-03-07
description: "Real-world examples of using the Card Grid component for different scenarios"
categories:
  - Examples
tags:
  - components
  - design
  - nord
  - showcase
---

# Card Grid Examples for Common Use Cases

The Card Grid component is extremely versatile and can be used in many different scenarios. This post showcases some common real-world use cases with ready-to-use examples that you can copy and adapt for your own projects.

## 1. Project Portfolio

A grid of projects with images, descriptions, and links:

{{< card-grid columns="3" >}}
  {{< card 
      title="Portfolio Website" 
      subtitle="Web Design" 
      image="https://placehold.co/800x600/88c0d0/eceff4?text=Portfolio"
      link="https://example.com/portfolio"
  >}}
    A minimalist portfolio website for a graphic designer, built with Hugo and the Nord theme.
  {{< /card >}}
  
  {{< card 
      title="E-commerce Platform" 
      subtitle="Web Development" 
      image="https://placehold.co/800x600/81a1c1/eceff4?text=E-commerce"
      link="https://example.com/ecommerce"
  >}}
    A custom e-commerce platform with inventory management and payment processing.
  {{< /card >}}
  
  {{< card 
      title="Mobile App" 
      subtitle="UI/UX Design" 
      image="https://placehold.co/800x600/5e81ac/eceff4?text=Mobile+App"
      link="https://example.com/app"
  >}}
    A fitness tracking mobile application with clean, intuitive interface.
  {{< /card >}}
{{< /card-grid >}}

## 2. Product Pricing Plans

Display different pricing tiers with feature lists:

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

## 3. Service Offerings

Showcase your services with clean, icon-based cards:

{{< card-grid columns="2" >}}
  {{< feature-card 
      title="Web Development" 
      icon="code"
  >}}
    We build responsive, fast, and SEO-friendly websites using modern technologies like Hugo, React, and Vue.js. All our websites are optimized for performance and accessibility.
    
    - Custom website development
    - E-commerce solutions
    - Progressive Web Apps
    - Performance optimization
  {{< /feature-card >}}
  
  {{< feature-card 
      title="UI/UX Design" 
      icon="layout"
  >}}
    Our design process focuses on creating intuitive user experiences that align with your brand and business goals. We conduct user research and testing to ensure optimal results.
    
    - User research
    - Wireframing and prototyping
    - Visual design
    - Usability testing
  {{< /feature-card >}}
  
  {{< feature-card 
      title="Content Strategy" 
      icon="book"
  >}}
    We help you create and organize content that engages your audience and conveys your message effectively. Our content strategies are data-driven and tailored to your goals.
    
    - Content audit
    - SEO optimization
    - Editorial calendar
    - Content creation guidelines
  {{< /feature-card >}}
  
  {{< feature-card 
      title="Digital Marketing" 
      icon="zap"
  >}}
    Drive traffic and generate leads with our comprehensive digital marketing services. We use data-driven approaches to maximize your ROI and grow your online presence.
    
    - SEO and SEM
    - Social media marketing
    - Email campaigns
    - Analytics and reporting
  {{< /feature-card >}}
{{< /card-grid >}}

## 4. Testimonials

Display client testimonials in an attractive grid:

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
  
  {{< card center=true >}}
    ★★★★★
    
    "The website redesign has significantly improved our conversion rates. It's not just beautiful, it's effective."
    
    **Michael Brown**  
    E-commerce Manager, Retail Plus
  {{< /card >}}
  
  {{< card center=true >}}
    ★★★★★
    
    "I appreciated their attention to detail and willingness to go the extra mile to ensure everything was perfect."
    
    **Emily Chen**  
    Founder, Design Collective
  {{< /card >}}
{{< /card-grid >}}

## 5. Blog Post Grid

A responsive grid for showcasing your latest blog posts:

{{< card-grid columns="3" >}}
  {{< card 
      type="image"
      title="Getting Started with Hugo" 
      subtitle="March 7, 2025 • 5 min read"
      tag="Tutorial"
      image="https://placehold.co/800x500/88c0d0/eceff4?text=Hugo+Tutorial"
      link="/posts/getting-started/"
  >}}
    Learn how to build your first website with Hugo, the world's fastest framework for building websites.
  {{< /card >}}
  
  {{< card 
      type="image"
      title="Advanced CSS Techniques" 
      subtitle="March 5, 2025 • 8 min read"
      tag="CSS"
      image="https://placehold.co/800x500/81a1c1/eceff4?text=CSS+Techniques"
      link="/posts/advanced-css/"
  >}}
    Discover advanced CSS techniques to take your web design skills to the next level.
  {{< /card >}}
  
  {{< card 
      type="image"
      title="SEO Best Practices" 
      subtitle="March 3, 2025 • 10 min read"
      tag="SEO"
      image="https://placehold.co/800x500/5e81ac/eceff4?text=SEO+Practices"
      link="/posts/seo-best-practices/"
  >}}
    Learn the most effective SEO strategies to improve your website's visibility in search engines.
  {{< /card >}}
{{< /card-grid >}}

## 6. Team Members Grid

Display your team members in a visually appealing way:

{{< card-grid columns="4" >}}
  {{< card 
      title="Jane Doe" 
      subtitle="CEO & Founder"
      image="https://placehold.co/400x400/88c0d0/eceff4?text=Jane"
      center=true
  >}}
    Jane has 15+ years of experience in the industry and founded the company in 2015.
  {{< /card >}}
  
  {{< card 
      title="John Smith" 
      subtitle="CTO"
      image="https://placehold.co/400x400/81a1c1/eceff4?text=John"
      center=true
  >}}
    John oversees all technical aspects and development processes.
  {{< /card >}}
  
  {{< card 
      title="Emily Chen" 
      subtitle="Design Director"
      image="https://placehold.co/400x400/5e81ac/eceff4?text=Emily"
      center=true
  >}}
    Emily leads our design team with her exceptional eye for aesthetics.
  {{< /card >}}
  
  {{< card 
      title="Michael Brown" 
      subtitle="Marketing Lead"
      image="https://placehold.co/400x400/8fbcbb/eceff4?text=Michael"
      center=true
  >}}
    Michael develops our marketing strategies and campaigns.
  {{< /card >}}
{{< /card-grid >}}

## 7. Feature Comparison

Compare features or products side-by-side:

{{< card-grid columns="3" >}}
  {{< card 
      title="Basic Plan" 
      center=true
  >}}
    | Feature | Availability |
    |---------|-------------|
    | Projects | 5 |
    | Storage | 10GB |
    | Custom Domain | ❌ |
    | API Access | ❌ |
    | Priority Support | ❌ |
    
    **$9/month**
  {{< /card >}}
  
  {{< card 
      title="Pro Plan" 
      center=true
      class="card-accent card-accent-accent"
  >}}
    | Feature | Availability |
    |---------|-------------|
    | Projects | 20 |
    | Storage | 50GB |
    | Custom Domain | ✅ |
    | API Access | ✅ |
    | Priority Support | ❌ |
    
    **$19/month**
  {{< /card >}}
  
  {{< card 
      title="Enterprise Plan" 
      center=true
  >}}
    | Feature | Availability |
    |---------|-------------|
    | Projects | Unlimited |
    | Storage | 250GB |
    | Custom Domain | ✅ |
    | API Access | ✅ |
    | Priority Support | ✅ |
    
    **$49/month**
  {{< /card >}}
{{< /card-grid >}}

## 8. Event Schedule

Display events or schedule items in a grid:

{{< card-grid columns="2" >}}
  {{< card 
      title="Introduction to Hugo" 
      subtitle="9:00 AM - 10:30 AM"
      tag="Workshop"
  >}}
    A beginner-friendly introduction to building websites with Hugo. Learn the basics and set up your first site.
    
    **Location:** Room 101
    **Speaker:** Jane Doe
  {{< /card >}}
  
  {{< card 
      title="Advanced Theme Development" 
      subtitle="11:00 AM - 12:30 PM"
      tag="Workshop"
  >}}
    Dive deep into Hugo theme development techniques. For intermediate users who already know the basics.
    
    **Location:** Room 102
    **Speaker:** John Smith
  {{< /card >}}
  
  {{< card 
      title="Lunch Break" 
      subtitle="12:30 PM - 1:30 PM"
      tag="Break"
  >}}
    Networking lunch in the main hall. Food and refreshments provided.
    
    **Location:** Main Hall
  {{< /card >}}
  
  {{< card 
      title="Optimizing for Performance" 
      subtitle="1:30 PM - 3:00 PM"
      tag="Talk"
  >}}
    Learn how to make your Hugo site blazing fast with optimization techniques.
    
    **Location:** Auditorium
    **Speaker:** Emily Chen
  {{< /card >}}
{{< /card-grid >}}

## Customizing These Examples

These examples provide a solid starting point, but feel free to customize them to match your specific needs:

1. **Color Scheme:** The cards automatically use your Nord theme colors, but you can add custom classes for specific variations.

2. **Content Structure:** Adjust the content inside cards to better match your information architecture.

3. **Responsive Behavior:** The grid automatically adapts to different screen sizes, but you can customize this behavior with the `responsive` parameter.

4. **Card Features:** Experiment with different combinations of images, icons, tags, and links to find what works best for your content.

## 9. Stats or Metrics Display

Use cards to highlight important statistics or metrics:

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

## 10. FAQ Section

Organize frequently asked questions in a card grid:

{{< card-grid columns="2" >}}
  {{< card title="How do I get started?" >}}
    Getting started is easy! Simply sign up for an account on our website and follow the onboarding process. Our setup wizard will guide you through the initial configuration.
  {{< /card >}}
  
  {{< card title="What payment methods do you accept?" >}}
    We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. All payments are securely processed through our payment provider.
  {{< /card >}}
  
  {{< card title="Can I cancel my subscription?" >}}
    Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll retain access until the end of your current billing period.
  {{< /card >}}
  
  {{< card title="Is there a free trial available?" >}}
    Yes! We offer a 14-day free trial for all our plans. No credit card is required to start your trial, and you can upgrade to a paid plan at any time.
  {{< /card >}}
{{< /card-grid >}}

## Summary

The Card Grid component is a powerful tool for organizing various types of content on your Hugo site. With its flexible configuration options and responsive design, you can create visually appealing layouts for almost any use case.

Remember that you can combine Card Grid with other Nord Hugo theme components to create even more sophisticated content presentations.

{{< alert type="tip" title="Component Combinations" >}}
Try combining Card Grid with the Alert component for highlighting important information or with tabs for organizing different sets of cards.
{{< /alert >}}

We hope these examples inspire you to create beautiful, functional layouts for your content using the Nord Hugo theme!
