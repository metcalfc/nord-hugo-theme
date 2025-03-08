# Contributing to Nord Hugo Theme

Thank you for your interest in contributing to the Nord Hugo Theme! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Release Process](#release-process)
- [Community](#community)

## Code of Conduct

This project adheres to a Code of Conduct that expects all participants to be respectful, inclusive, and considerate of others. By participating, you are expected to uphold this code.

## Ways to Contribute

There are many ways to contribute to the Nord Hugo Theme:

- **Bug reports**: Submit detailed bug reports when you encounter issues.
- **Feature requests**: Suggest new features or improvements.
- **Documentation**: Improve or expand the documentation.
- **Code contributions**: Submit pull requests with bug fixes or new features.
- **Testing**: Test the theme in different environments and provide feedback.
- **Translations**: Help translate the theme into different languages.

## Development Setup

### Prerequisites

- [Hugo](https://gohugo.io/) (v0.60.0 or newer)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (optional, for development tools)

### Getting the Source Code

1. Fork the repository on GitHub.
2. Clone your fork locally:

```bash
git clone https://github.com/yourusername/nord-hugo-theme.git
cd nord-hugo-theme
```

3. Add the original repository as a remote to keep your fork in sync:

```bash
git remote add upstream https://github.com/originalowner/nord-hugo-theme.git
```

### Setting Up the Development Environment

1. Install development dependencies (if applicable):

```bash
npm install
```

2. Run the example site to test your changes:

```bash
cd exampleSite
hugo server --themesDir=../..
```

This will start a local server at `http://localhost:1313/` with the example site using your local copy of the theme.

## Development Workflow

### Branching Strategy

- `main`: The stable, released version of the theme.
- `develop`: The development branch where new features are integrated.
- Feature branches: Create a new branch for each feature or bug fix.

### Creating a Feature Branch

When working on a new feature or fix:

```bash
# Ensure you're starting from the latest develop branch
git checkout develop
git pull upstream develop

# Create a new branch
git checkout -b feature/your-feature-name
```

Use a descriptive branch name that reflects the nature of your changes:
- `feature/new-shortcode`
- `fix/mobile-navigation`
- `docs/customization-guide`

### Making Changes

1. Make your changes in the appropriate files.
2. Test your changes thoroughly using the example site.
3. Commit your changes with clear, descriptive commit messages.

```bash
git add .
git commit -m "Add feature: your feature description"
```

## Coding Standards

### HTML

- Use semantic HTML elements.
- Follow accessibility best practices (WCAG 2.1 AA).
- Use proper indentation (2 spaces).

### CSS/SCSS

- Follow the existing SCSS architecture and organization.
- Use the Nord color variables for consistency.
- Maintain compatibility with both light and dark themes.
- Add comments for complex selectors or calculations.

Example:

```scss
// Component: Card
.card {
  border-radius: 0.25rem;
  background-color: var(--card-bg);
  
  // Card title
  &__title {
    font-size: var(--font-size-lg);
    margin-bottom: 1rem;
  }
}
```

### JavaScript

- Use ES6+ features but maintain broad browser compatibility.
- Follow functional programming principles where appropriate.
- Add comments for complex logic.
- Use consistent naming conventions.

Example:

```javascript
/**
 * Toggle theme between light and dark mode
 * @param {string} theme - The theme to set ('light' or 'dark')
 */
function setTheme(theme) {
  // Set theme attribute on root element
  document.documentElement.setAttribute('data-theme', theme);
  
  // Store preference
  localStorage.setItem('theme', theme);
  
  // Dispatch event for other components
  document.dispatchEvent(new CustomEvent('nord-theme-change', {
    detail: { theme }
  }));
}
```

### Hugo Templates

- Use Go template formatting standards.
- Keep templates modular and reusable.
- Add comments for complex template logic.
- Use consistent naming conventions for variables.

Example:

```html
{{/* Render a pagination component */}}
{{ define "partials/pagination.html" }}
  {{ if or .NextPage .PrevPage }}
    <nav class="pagination" aria-label="Pagination">
      {{ if .PrevPage }}
        <a href="{{ .PrevPage.RelPermalink }}" class="pagination__prev">
          {{ i18n "previous" | default "Previous" }}
        </a>
      {{ end }}
      
      {{ if .NextPage }}
        <a href="{{ .NextPage.RelPermalink }}" class="pagination__next">
          {{ i18n "next" | default "Next" }}
        </a>
      {{ end }}
    </nav>
  {{ end }}
{{ end }}
```

## Pull Request Process

### Before Submitting

1. Update documentation to reflect your changes.
2. Add or update tests as necessary.
3. Ensure your code adheres to the project's coding standards.
4. Test your changes thoroughly in multiple browsers.
5. Verify that the example site works correctly with your changes.

### Creating a Pull Request

1. Push your branch to your fork:

```bash
git push origin feature/your-feature-name
```

2. Go to the original repository on GitHub and create a new pull request.
3. Select `develop` as the base branch and your feature branch as the comparison branch.
4. Fill out the pull request template with details about your changes.

### After Submitting

1. Respond to any feedback or questions on your pull request.
2. Make additional changes if requested.
3. Be patient — the maintainers are likely volunteers with limited time.

## Release Process

The release process is handled by the project maintainers:

1. Changes are accumulated in the `develop` branch.
2. When ready for a release, a release branch is created.
3. Final testing is performed on the release branch.
4. The release branch is merged into `main` and tagged with a version number.
5. A GitHub release is created with release notes.

## Community

### Getting Help

If you have questions or need help with the contribution process:

- Open an issue on GitHub with your question.
- Ask in the Hugo community forums.

### Acknowledgment

Contributors will be acknowledged in the project's documentation and release notes.

### Recognition

Significant contributions may lead to additional privileges or roles within the project.

## Thank You!

Your contributions help make the Nord Hugo Theme better for everyone. We appreciate your time and effort!
