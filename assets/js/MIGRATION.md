# Javascript Migration Guide

This document outlines the steps to migrate from the old JavaScript implementation to the new modular architecture.

## Migration Steps

1. **Test the new system alongside the old one**
   - The new system is designed to coexist with the old implementation during testing
   - Include both scripts in development to verify identical functionality

2. **Update theme loading in `head.html`**
   - Replace the old script tag with the new module loading:

   ```html
   <!-- Old implementation -->
   {{ $themeJs := resources.Get "js/nord-theme.js" | minify | fingerprint }}
   <script src="{{ $themeJs.RelPermalink }}"></script>

   <!-- New implementation -->
   {{ $mainJs := resources.Get "js/main.js" | js.Build (dict "target" "es2015" "minify" true) | fingerprint }}
   <script src="{{ $mainJs.RelPermalink }}"></script>
   ```

3. **Test on different pages**
   - Test the home page, blog posts, and any other templates
   - Verify theme switching works correctly on all pages
   - Check that all theme-dependent UI elements update properly

4. **Remove old JavaScript files**
   Once the new system is verified working, remove the old files:
   - `theme-switcher.js`
   - `theme-toggle.js`
   - `nord-theme.js` 
   - `twitter-theme.js`
   - `bluesky-theme.js`

## Feature Differences

The new implementation includes several improvements:

1. **Event-based architecture**
   - Components respond to theme changes via the `nord-theme-change` event
   - Easier to add new theme-dependent features

2. **Conditional initialization**
   - Social media integrations only load when embeds are present on the page
   - Improves performance on pages without these elements

3. **Better accessibility**
   - Improved ARIA attributes for the theme toggle button
   - Better keyboard accessibility

4. **Enhanced caching**
   - ES6 module bundling through Hugo Pipes
   - Proper fingerprinting for cache invalidation

## Shortcodes

Update the following shortcodes to work with the new system:

1. **Twitter Shortcode**: No changes needed, works with the new implementation

2. **BlueSky Shortcode**: Updated to use iframe embedding with theme support:

   ```html
   <div class="bluesky-embed">
       <iframe 
           class="bluesky-iframe"
           data-user="{{ .Get 0 }}"
           data-post="{{ .Get 1 }}"
           src="https://bsky.app/embed/profile/{{ .Get 0 }}/post/{{ .Get 1 }}?theme={{ with .Page.Site.Params.defaultTheme }}{{ . }}{{ else }}light{{ end }}"
           width="100%"
           height="450"
           frameborder="0"
           scrolling="no"
           allowtransparency="true">
       </iframe>
   </div>
   ```

## Testing

For easy verification of the new system, a testing script is available:

1. Include the testing script in development:

   ```html
   {{ if site.IsServer }}
   {{ $testJs := resources.Get "js/test-theme.js" | js.Build }}
   <script src="{{ $testJs.RelPermalink }}"></script>
   {{ end }}
   ```

2. Open the browser console
3. Test theme toggling and observe the log output
4. Verify all components update correctly

## Troubleshooting

If you encounter issues during migration:

1. **Theme toggle not working**
   - Check the HTML structure of the toggle button
   - Verify the button has the ID `theme-toggle`

2. **Social media embeds not updating**
   - Ensure the embeds have the correct class names
   - Verify the embed initialization in the console

3. **Hugo build errors**
   - Make sure Hugo version is compatible with js.Build
   - Try `hugo --verbose` for more detailed error messages

4. **Console errors**
   - Check for import path issues
   - Verify all module paths are correct
