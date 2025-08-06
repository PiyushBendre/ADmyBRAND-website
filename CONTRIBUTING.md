# Contributing to ADmyBRAND AI Suite

Thank you for your interest in contributing! This guide will help you get started.

## 🚀 Getting Started

### Development Setup

1. **Fork and clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/admybrand-ai-suite.git
   cd admybrand-ai-suite
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Create a branch**
   \`\`\`bash
   git checkout -b feature/your-feature-name
   \`\`\`

4. **Set up environment**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

## 📝 Code Standards

### TypeScript
- Use TypeScript for all new code
- Prefer interfaces over types for object shapes
- Use proper typing, avoid `any`
- Export types alongside components

### React Components
- Use functional components with hooks
- Follow the single responsibility principle
- Use proper prop typing with TypeScript
- Implement proper error boundaries

### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing (8px grid system)
- Use design system colors and typography

### Naming Conventions
- **Files:** kebab-case (`hero-section.tsx`)
- **Components:** PascalCase (`HeroSection`)
- **Variables:** camelCase (`isLoading`)
- **Constants:** UPPER_SNAKE_CASE (`API_BASE_URL`)

## 🧪 Testing

- Write tests for new features
- Ensure existing tests pass
- Maintain good test coverage
- Test responsive design on multiple devices

\`\`\`bash
npm run lint
npm run type-check
npm run format:check
\`\`\`

## 📦 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or auxiliary tool changes

Example:
\`\`\`
feat: add testimonial filtering functionality
fix: resolve mobile navigation overlay issue
docs: update installation instructions
style: improve button hover animations
refactor: optimize image loading performance
\`\`\`

## 🔍 Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Ensure all checks pass**
4. **Update the README** if necessary
5. **Request review** from maintainers

### PR Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)
- [ ] Tests added/updated
- [ ] All CI checks pass

### PR Template
- Clear description of changes
- Screenshots for UI changes
- Testing instructions
- Breaking changes noted
- Related issues linked

## 🐛 Bug Reports

Use the bug report template and include:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (browser, OS, device)
- Console errors if any

## 💡 Feature Requests

Use the feature request template and include:
- Clear description of the feature
- Use case and benefits
- Possible implementation approach
- Alternative solutions considered
- Mockups or wireframes if applicable

## 🎨 Design Guidelines

### UI/UX Principles
- Mobile-first responsive design
- Accessibility (WCAG 2.1 AA)
- Performance optimization
- Consistent user experience

### Animation Guidelines
- Use Framer Motion for React animations
- Use GSAP for complex scroll animations
- Keep animations smooth (60fps)
- Respect user's motion preferences

### Color Usage
- Primary: Navy Blue (#4f46e5)
- Secondary: Emerald Green (#10b981)
- Background: Slate variations
- Always maintain proper contrast ratios

## 📱 Mobile Development

- Test on real devices when possible
- Use touch-friendly target sizes (44px minimum)
- Optimize for various screen sizes
- Consider network conditions

## 🔒 Security

- Never commit sensitive data
- Use environment variables for secrets
- Follow security best practices
- Report security issues privately

## 📞 Questions?

- Open a discussion on GitHub
- Join our Discord community
- Email us at dev@admybrand.ai
- Check existing issues and discussions

## 🎉 Recognition

Contributors will be:
- Added to the contributors list
- Mentioned in release notes
- Invited to our contributor Discord channel

Thank you for contributing! 🚀
