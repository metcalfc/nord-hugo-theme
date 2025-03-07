---
title: "BlueSky Embedding with Nord Theme"
date: 2025-03-07T12:00:00-00:00
draft: false
categories: ["Web Design"]
tags: ["social media", "integrations", "nord", "theme"]
---

# BlueSky Embedding in the Nord Theme

This post demonstrates how to embed BlueSky posts in the Nord Hugo theme. 

## Basic Embedding

To embed a BlueSky post, use the `bluesky` shortcode with a link parameter pointing to the post URL:

```
{{</* bluesky link="https://bsky.app/profile/bsky.app/post/3latotljnec2h" */>}}
```

This will render as:

{{< bluesky link="https://bsky.app/profile/bsky.app/post/3latotljnec2h" >}}

## Theme Integration

The BlueSky embeds automatically adapt to your theme's color scheme. When you switch between light and dark themes, the embed will update accordingly!

## Usage Notes

1. The embed uses BlueSky's official oEmbed API for consistent rendering
2. You only need the post URL to embed
3. The shortcode handles error cases gracefully by displaying a link to the original post
4. Embeds respect your site's theme settings

## Advanced Usage

The embed supports all posts from BlueSky without any authentication required. For more complex integration needs, consider using the [BlueSky API](https://www.docs.bsky.app/).
