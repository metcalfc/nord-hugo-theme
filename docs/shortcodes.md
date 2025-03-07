# Available Shortcodes

Nord Hugo Theme includes several useful shortcodes to enhance your content with external media and special elements.

## Social Media Embeds

### Bluesky Embed

The `bluesky` shortcode allows you to embed Bluesky posts in your content. It uses the oEmbed protocol to fetch and render the post, and automatically adapts to your site's theme (light or dark).

#### Usage:

```
{{</* bluesky link="https://bsky.app/profile/bsky.app/post/3latotljnec2h" */>}}
```

Where `link` is the complete URL to the Bluesky post you want to embed.

#### Features:

- Adapts to your site's light/dark theme
- Provides a fallback link if the embed fails to load
- Uses Bluesky's official oEmbed endpoint for consistent rendering
- No authentication required

### Twitter/X Embed

The `twitter` or `x` shortcode allows you to embed tweets from Twitter/X in your content.

#### Usage:

```
{{</* twitter user="username" id="tweetid" */>}}
```

Or using the alternative name:

```
{{</* x user="username" id="tweetid" */>}}
```

Where `user` is the Twitter/X username and `id` is the ID of the tweet.

## Media Embeds

### YouTube Embed

The `youtube` shortcode allows you to embed YouTube videos in your content.

#### Usage:

```
{{</* youtube id="videoid" */>}}
```

Where `id` is the ID of the YouTube video.

## Nord Theme Elements

### Nord Palette Showcase

The `nord-palette` shortcode displays the Nord color palette in a visually appealing format.

#### Usage:

```
{{</* nord-palette */>}}
```

This shortcode takes no parameters and automatically displays all Nord color palettes.
