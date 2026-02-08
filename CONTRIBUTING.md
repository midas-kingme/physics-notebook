# Contributing to Physics Notebook

First off, thank you for considering contributing to Physics Notebook! It's people like you that make this project such a great learning resource for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Creating New Physics Concepts](#creating-new-physics-concepts)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by respect and collaboration. Please:

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Include browser/OS information**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any similar features in other projects (if applicable)**

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:

- `good first issue` - Simple issues perfect for beginners
- `help wanted` - Issues that need assistance
- `documentation` - Improvements to docs

## Creating New Physics Concepts

This is the most common type of contribution! Follow our detailed [CONCEPT_PATTERN.md](CONCEPT_PATTERN.md) guide.

### Quick Checklist

Before submitting a new concept, ensure:

- [ ] Concept file follows the standard structure
- [ ] All three sections are complete with visualizations
- [ ] Mathematical equations are correct and properly formatted
- [ ] All 5 AI provider links work correctly
- [ ] Interactive controls update visualizations in real-time
- [ ] Concept works in both light and dark themes
- [ ] Canvas animations run smoothly (60fps)
- [ ] Mobile responsive design works properly
- [ ] References section includes academic sources
- [ ] Entry added to `index.html` DATA array
- [ ] Tested on Chrome, Firefox, and Safari

### Concept Quality Standards

#### Physics Accuracy
- Equations must be mathematically correct
- Explanations should be scientifically accurate
- Include proper units and notation
- Cite reputable academic sources

#### Visual Quality
- Smooth, engaging animations
- Clear visual hierarchy
- Proper use of color (accessible)
- HiDPI/Retina support
- Professional appearance

#### Educational Value
- Start simple, build complexity
- Include real-world examples
- Provide context and applications
- Link related concepts

#### Code Quality
- Follow existing code patterns
- Comment complex logic
- Use meaningful variable names
- Optimize for performance

## Development Setup

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari)
- Text editor (VS Code, Sublime, etc.)
- Basic understanding of HTML, CSS, JavaScript
- Optional: Local web server for testing

### Local Development

1. **Fork and clone the repository**
```bash
git clone https://github.com/CasberryIndia/Physics-Notebook.git
cd Physics-Notebook
```

2. **Create a branch for your work**
```bash
git checkout -b feature/your-concept-name
```

3. **Start a local server**
```bash
# Using Python
python -m http.server 8000

# Or using Node
npx http-server

# Or using PHP
php -S localhost:8000
```

4. **Make your changes**
   - Create your concept file
   - Test thoroughly
   - Update documentation

5. **Test your changes**
   - Open `http://localhost:8000`
   - Test in multiple browsers
   - Verify mobile responsiveness
   - Check both light and dark themes

## Style Guidelines

### HTML

- Use semantic HTML5 elements
- Maintain consistent indentation (4 spaces)
- Add comments for complex sections
- Follow existing structure patterns

### CSS

- Use CSS custom properties (variables)
- Follow existing naming conventions
- Group related properties
- Comment complex selectors
- Ensure responsive design

### JavaScript

- Use modern ES6+ syntax
- Follow existing class patterns
- Use meaningful variable names
- Add JSDoc comments for functions
- Avoid global variables
- Use `const` and `let`, never `var`

**Example:**
```javascript
/**
 * Visual class for pendulum motion
 * @extends BaseVisual
 */
class PendulumVisual extends BaseVisual {
    constructor(id) {
        super(id);
        this.time = 0;
        this.length = 1.5; // meters
    }

    /**
     * Draws the pendulum and updates animation
     */
    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update time
        this.time += 0.03;
        
        // Calculate position
        const angle = Math.sin(this.time) * 0.5;
        // ... rest of drawing logic
    }
}
```

### Mathematical Notation

- Use MathJax for all equations
- Follow LaTeX conventions
- Inline math: `$...$`
- Display math: `$$...$$`
- Use proper symbols (e.g., `\theta`, `\pi`, `\alpha`)

**Example:**
```html
<div class="math-block">
    $$\omega = \sqrt{\frac{g}{L}}$$
</div>
```

## Commit Guidelines

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature or concept
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting (no functional changes)
- `refactor`: Code restructuring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(concepts): add simple pendulum visualization

- Implemented three sections with interactive controls
- Added energy conservation demonstration
- Included damping effects visualization

Closes #42
```

```bash
fix(orbital-mechanics): correct gravitational constant calculation

The previous implementation used incorrect units for G.
Now uses SI units (m³/kg/s²).
```

## Pull Request Process

### Before Submitting

1. **Update Documentation**
   - Update README.md if needed
   - Add inline code comments
   - Update CONCEPT_PATTERN.md for new patterns

2. **Test Thoroughly**
   - Test all interactive features
   - Verify on multiple browsers
   - Check mobile responsiveness
   - Validate HTML/CSS/JS

3. **Clean Up**
   - Remove console.logs
   - Remove commented code
   - Fix linting issues
   - Optimize assets

### Submitting a Pull Request

1. **Create a Pull Request** from your fork to the main repository

2. **Fill out the PR template** with:
   - Clear description of changes
   - Related issue numbers
   - Screenshots/GIFs of visual changes
   - Testing notes

3. **Respond to feedback**
   - Address review comments promptly
   - Make requested changes
   - Keep discussions professional

4. **Wait for approval**
   - PRs require at least one approval
   - Maintainers may request changes
   - Be patient and respectful

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New concept
- [ ] Bug fix
- [ ] Enhancement
- [ ] Documentation

## Checklist
- [ ] Code follows style guidelines
- [ ] Tested on multiple browsers
- [ ] Mobile responsive
- [ ] Dark/light theme tested
- [ ] Documentation updated
- [ ] No console errors

## Screenshots
[Add screenshots here]

## Related Issues
Closes #XX
```

## Questions?

Don't hesitate to ask questions by:

- Opening a [Discussion](https://github.com/CasberryIndia/Physics-Notebook/discussions)
- Creating an [Issue](https://github.com/CasberryIndia/Physics-Notebook/issues)
- Reaching out to maintainers

## Recognition

All contributors will be:

- Listed in the repository's contributors page
- Mentioned in release notes
- Part of the Physics Notebook community!

Thank you for contributing! 🎉
