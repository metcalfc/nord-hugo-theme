---
title: "Nord Theme Component Examples"
date: 2025-03-07
description: "Explore the components available in the Nord Hugo theme"
categories:
  - Documentation
tags:
  - components
  - nord
  - design
---

# Nord Theme Component Library

This page demonstrates the various components available in the Nord Hugo theme. These components are designed to follow the Nord design principles and color palette.

## Alert Component

The Alert component provides contextual feedback messages for typical user actions.

### Basic Alert

{{< alert >}}
This is a default (info) alert. It provides information to the user.
{{< /alert >}}

### Alert Types

{{< alert type="success" >}}
This is a success alert. It indicates a successful or positive action.
{{< /alert >}}

{{< alert type="warning" >}}
This is a warning alert. It indicates a warning that might need attention.
{{< /alert >}}

{{< alert type="error" >}}
This is an error alert. It indicates a dangerous or potentially negative action.
{{< /alert >}}

{{< alert type="tip" >}}
This is a tip alert. It provides helpful advice or a useful tip.
{{< /alert >}}

{{< alert type="note" >}}
This is a note alert. It highlights important information.
{{< /alert >}}

### Alert with Title

{{< alert title="Important Information" >}}
This alert has a title to provide additional context and emphasis.
{{< /alert >}}

### Dismissible Alert

{{< alert dismissible=true >}}
This alert can be dismissed by clicking the X button in the corner.
{{< /alert >}}

### Markdown Content in Alerts

Alerts support **Markdown** content, including:

{{< alert type="success" title="Rich Content Support" >}}
- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- [Links](https://www.nordtheme.com) to other resources
- Code snippets like `const theme = "Nord";`
- And more!
{{< /alert >}}

### Custom Icon

{{< alert icon="lightbulb" type="info" >}}
This alert uses a custom icon that overrides the default for its type.
{{< /alert >}}
