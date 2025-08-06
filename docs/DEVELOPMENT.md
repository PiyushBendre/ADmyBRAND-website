# Development Guide

This guide will help you set up and contribute to the ADmyBRAND AI Suite landing page.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or later
- **npm** or **yarn**
- **Git**
- **VS Code** (recommended)

### Initial Setup

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/admybrand-ai-suite.git
   cd admybrand-ai-suite
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
└── lib/                  # Utility functions
    └── utils.ts          # Helper functions
\`\`\`

## 🛠️ Development Workflow

### 1. Create a Feature Branch

\`\`\`bash
git checkout -b feature/your-feature-name
\`\`\`

### 2. Make Changes

Follow our coding standards and conventions.

### 3. Test Your Changes

\`\`\`bash
# Run linting
npm run lint

# Check types
npm run type-check

# Format code
npm run format
\`\`\`

### 4. Commit Changes

\`\`\`bash
git add .
git commit -m "feat: add your feature description"
\`\`\`

### 5. Push and Create PR

\`\`\`bash
git push origin feature/your-feature-name
\`\`\`

## 🎨 Design System

### Colors

\`\`\`css
/* Primary Colors */
--navy-500: #4f46e5;
--emerald-500: #10b981;

/* Background Colors */
--slate-900: #0f172a;
--slate-800: #1e293b;
--slate-700: #334155;

/* Text Colors */
--white: #ffffff;
--slate-300: #cbd5e1;
--slate-400: #94a3b8;
\`\`\`

### Typography

\`\`\`css
/* Font Family */
font-family: 'Inter', sans-serif;

/* Font Sizes */
text-xs: 0.75rem;     /* 12px */
text-sm: 0.875rem;    /* 14px */
text-base: 1rem;      /* 16px */
text-lg: 1.125rem;    /* 18px */
text-xl: 1.25rem;     /* 20px */
text-2xl: 1.5rem;     /* 24px */
text-3xl: 1.875rem;   /* 30px */
text-4xl: 2.25rem;    /* 36px */
text-5xl: 3rem;       /* 48px */
\`\`\`

### Spacing (8px Grid System)

\`\`\`css
/* Spacing Scale */
1: 0.25rem;  /* 4px */
2: 0.5rem;   /* 8px */
3: 0.75rem;  /* 12px */
4: 1rem;     /* 16px */
6: 1.5rem;   /* 24px */
8: 2rem;     /* 32px */
12: 3rem;    /* 48px */
16: 4rem;    /* 64px */
\`\`\`

## 🧩 Component Guidelines

### Component Structure

\`\`\`typescript
'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ComponentProps {
  title: string
  description?: string
  className?: string
}

export default function Component({ 
  title, 
  description, 
  className 
}: ComponentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Component logic
  }, [])

  return (
    <div ref={ref} className={className}>
      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>
      {description && (
        <p className="text-slate-300 mt-2">
          {description}
        </p>
      )}
    </div>
  )
}
\`\`\`

### Naming Conventions

- **Components**: PascalCase (`HeroSection`)
- **Files**: kebab-case (`hero-section.tsx`)
- **Variables**: camelCase (`isLoading`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)

## 🎭 Animation Guidelines

### Framer Motion

\`\`\`typescript
import { motion } from 'framer-motion'

// Basic animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Hover animation
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Button
</motion.button>
\`\`\`

### GSAP

\`\`\`typescript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  gsap.fromTo(ref.current,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%"
      }
    }
  )
}, [])
\`\`\`

## 📱 Responsive Design

### Breakpoints

\`\`\`css
/* Mobile First Approach */
sm: 640px;   /* Small devices */
md: 768px;   /* Medium devices */
lg: 1024px;  /* Large devices */
xl: 1280px;  /* Extra large devices */
2xl: 1536px; /* 2X large devices */
\`\`\`

### Mobile-First CSS

\`\`\`typescript
<div className="
  px-4 py-6           // Mobile
  sm:px-6 sm:py-8     // Small screens
  md:px-8 md:py-12    // Medium screens
  lg:px-12 lg:py-16   // Large screens
">
  Content
</div>
\`\`\`

## 🔧 Utility Functions

### Common Utilities

\`\`\`typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
\`\`\`

## 🧪 Testing

### Component Testing

\`\`\`typescript
// __tests__/components/hero-section.test.tsx
import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/sections/hero-section'

describe('HeroSection', () => {
  it('renders the hero title', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Transform Your Brand/)).toBeInTheDocument()
  })
})
\`\`\`

### Running Tests

\`\`\`bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
\`\`\`

## 🔍 Debugging

### Development Tools

1. **React Developer Tools**
2. **Redux DevTools** (if using Redux)
3. **Next.js DevTools**
4. **Browser DevTools**

### Debug Commands

\`\`\`bash
# Enable debug mode
DEBUG=* npm run dev

# Analyze bundle
npm run analyze

# Check build output
npm run build -- --debug
\`\`\`

### Common Issues

1. **Hydration Errors**
   - Check for client/server rendering differences
   - Use `useEffect` for client-only code

2. **Animation Issues**
   - Ensure proper cleanup in `useEffect`
   - Check for conflicting CSS

3. **Performance Issues**
   - Use React DevTools Profiler
   - Check for unnecessary re-renders

## 📊 Performance

### Optimization Techniques

1. **Image Optimization**
   \`\`\`typescript
   import Image from 'next/image'
   
   <Image
     src="/image.jpg"
     alt="Description"
     width={800}
     height={600}
     priority // For above-the-fold images
   />
   \`\`\`

2. **Code Splitting**
   \`\`\`typescript
   import dynamic from 'next/dynamic'
   
   const DynamicComponent = dynamic(
     () => import('@/components/heavy-component'),
     { loading: () => <p>Loading...</p> }
   )
   \`\`\`

3. **Memoization**
   \`\`\`typescript
   import { memo, useMemo, useCallback } from 'react'
   
   const MemoizedComponent = memo(({ data }) => {
     const processedData = useMemo(() => {
       return expensiveOperation(data)
     }, [data])
     
     return <div>{processedData}</div>
   })
   \`\`\`

## 🔒 Security

### Best Practices

1. **Environment Variables**
   - Never commit secrets
   - Use `NEXT_PUBLIC_` prefix for client-side variables

2. **Input Validation**
   - Validate all user inputs
   - Use TypeScript for type safety

3. **Content Security Policy**
   \`\`\`typescript
   // next.config.mjs
   const nextConfig = {
     async headers() {
       return [
         {
           source: '/(.*)',
           headers: [
             {
               key: 'Content-Security-Policy',
               value: "default-src 'self'; script-src 'self' 'unsafe-eval';"
             }
           ]
         }
       ]
     }
   }
   \`\`\`

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Tools
- [VS Code Extensions](.vscode/extensions.json)
- [Prettier Configuration](.prettierrc)
- [ESLint Configuration](.eslintrc.json)

### Community
- [GitHub Discussions](https://github.com/yourusername/admybrand-ai-suite/discussions)
- [Discord Community](https://discord.gg/admybrand)

## 🤝 Getting Help

1. **Check existing issues** on GitHub
2. **Search documentation** and guides
3. **Ask in discussions** for general questions
4. **Create an issue** for bugs or feature requests
5. **Join our Discord** for real-time help

Happy coding! 🚀
