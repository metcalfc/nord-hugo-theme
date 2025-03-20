---
title: "How to Use the Alert Component"
date: 2025-03-07
description: "A comprehensive guide to using the Alert component in the Nord Hugo theme"
categories:
  - Documentation
  - Tutorials
tags:
  - components
  - design
  - nord
---

# Using the Alert Component in Nord Theme

The Alert component is a versatile way to emphasize important information within your content. Whether you need to highlight warnings, share tips, or showcase important information, the Alert component provides a visually distinct way to make your content stand out.

{{< toc >}}

## Basic Usage

The most basic way to use the Alert component is by wrapping your content with the `alert` shortcode:

```markdown
{{</* alert */>}}
This is a basic alert with default styling.
{{</* /alert */>}}
```

Which produces:

{{< alert >}}
This is a basic alert with default styling.
{{< /alert >}}

## Alert Types

The Alert component comes with six predefined types, each with its own color scheme and icon:

### 1. Info Alert (Default)

```markdown
{{</* alert type="info" */>}}
This provides general information to the reader.
{{</* /alert */>}}
```

{{< alert type="info" >}}
This provides general information to the reader.
{{< /alert >}}

### 2. Success Alert

```markdown
{{</* alert type="success" */>}}
This indicates a successful operation or positive outcome.
{{</* /alert */>}}
```

{{< alert type="success" >}}
This indicates a successful operation or positive outcome.
{{< /alert >}}

### 3. Warning Alert

```markdown
{{</* alert type="warning" */>}}
This warns the user about potential issues or important considerations.
{{</* /alert */>}}
```

{{< alert type="warning" >}}
This warns the user about potential issues or important considerations.
{{< /alert >}}

### 4. Error Alert

```markdown
{{</* alert type="error" */>}}
This highlights errors or critical issues that require attention.
{{</* /alert */>}}
```

{{< alert type="error" >}}
This highlights errors or critical issues that require attention.
{{< /alert >}}

### 5. Tip Alert

```markdown
{{</* alert type="tip" */>}}
This provides helpful advice or a useful recommendation.
{{</* /alert */>}}
```

{{< alert type="tip" >}}
This provides helpful advice or a useful recommendation.
{{< /alert >}}

### 6. Note Alert

```markdown
{{</* alert type="note" */>}}
This highlights noteworthy information or details to remember.
{{</* /alert */>}}
```

{{< alert type="note" >}}
This highlights noteworthy information or details to remember.
{{< /alert >}}

## Adding a Title

You can add a title to any alert to provide additional context:

```markdown
{{</* alert title="Important Notice" */>}}
This alert has a title that stands out above the content.
{{</* /alert */>}}
```

{{< alert title="Important Notice" >}}
This alert has a title that stands out above the content.
{{< /alert >}}

Combine a title with a specific alert type:

```markdown
{{</* alert type="warning" title="Caution" */>}}
Be careful when proceeding with this action.
{{</* /alert */>}}
```

{{< alert type="warning" title="Caution" >}}
Be careful when proceeding with this action.
{{< /alert >}}

## Dismissible Alerts

Make alerts dismissible by adding the `dismissible` parameter:

```markdown
{{</* alert dismissible=true */>}}
This alert can be closed by clicking the X button.
{{</* /alert */>}}
```

{{< alert dismissible=true >}}
This alert can be closed by clicking the X button.
{{< /alert >}}

This is particularly useful for notices or announcements that the user may want to hide after reading.

## Custom Icons

While each alert type comes with an appropriate default icon, you can override it with a custom icon:

```markdown
{{</* alert icon="lightbulb" */>}}
This info alert uses the lightbulb icon instead of the default info icon.
{{</* /alert */>}}
```

{{< alert icon="lightbulb" >}}
This info alert uses the lightbulb icon instead of the default info icon.
{{< /alert >}}

## Rich Content in Alerts

Alerts support Markdown content, allowing you to use formatting within your alerts:

```markdown
{{</* alert type="success" title="Feature Complete" */>}}
Your new feature includes:

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- [Links](https://www.example.com) to resources
- Code snippets like `const theme = "Nord";`
- And more!
{{</* /alert */>}}
```

{{< alert type="success" title="Feature Complete" >}}
Your new feature includes:

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- [Links](https://www.example.com) to resources
- Code snippets like `const theme = "Nord";`
- And more!
{{< /alert >}}

## Combining Parameters

You can combine multiple parameters to create highly customized alerts:

```markdown
{{</* alert type="tip" title="Pro Tip" icon="lightbulb" dismissible=true */>}}
Here's a professional tip you might find useful, but you can dismiss it if you already know this.
{{</* /alert */>}}
```

{{< alert type="tip" title="Pro Tip" icon="lightbulb" dismissible=true >}}
Here's a professional tip you might find useful, but you can dismiss it if you already know this.
{{< /alert >}}

## Best Practices for Using Alerts

For the best user experience, follow these guidelines when using alerts:

1. **Use sparingly**: Too many alerts can overwhelm readers and reduce their effectiveness
2. **Choose appropriate types**: Select the alert type that best matches the content's importance and tone
3. **Keep content concise**: Alerts are most effective with brief, focused messages
4. **Add titles for context**: When an alert contains complex information, use a title to provide context
5. **Consider accessibility**: Alerts have been designed to meet accessibility standards, but ensure your content is also accessible

## Technical Details

The Alert component uses the Nord color palette to maintain consistent styling with the rest of your theme:

- **Info alerts** use `nord9` (#81a1c1) - Frost medium blue
- **Success alerts** use `nord14` (#a3be8c) - Aurora green
- **Warning alerts** use `nord13` (#ebcb8b) - Aurora yellow
- **Error alerts** use `nord11` (#bf616a) - Aurora red
- **Tip alerts** use `nord15` (#b48ead) - Aurora purple
- **Note alerts** use `nord10` (#5e81ac) - Frost dark blue

The component is fully responsive and adapts to both light and dark themes automatically.

## Conclusion

The Alert component is a powerful way to enhance your content with visual cues and important information. By using the different types and parameters available, you can create alerts that effectively communicate with your readers.

{{< alert type="success" title="You're Ready!" >}}
You now know how to use the Alert component in all its forms. Try incorporating it into your content to highlight important information!
{{< /alert >}}
