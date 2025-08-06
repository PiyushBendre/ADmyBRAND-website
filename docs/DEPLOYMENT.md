# Deployment Guide

This guide covers different deployment options for the ADmyBRAND AI Suite landing page.

## 🚀 Vercel (Recommended)

Vercel provides the best experience for Next.js applications with zero configuration.

### Automatic Deployment

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Settings**
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Environment Variables**
   \`\`\`bash
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   GROQ_API_KEY=your_groq_api_key
   # Add other environment variables as needed
   \`\`\`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes

### Manual Deployment

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
\`\`\`

## 🌐 Netlify

### Via Git Integration

1. **Connect Repository**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click "New site from Git"
   - Choose your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

3. **Configure Next.js**
   Add to `next.config.mjs`:
   \`\`\`javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   export default nextConfig
   \`\`\`

### Manual Deployment

\`\`\`bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=out
\`\`\`

## 🐳 Docker

### Dockerfile

\`\`\`dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
\`\`\`

### Docker Compose

\`\`\`yaml
version: '3.8'
services:
  admybrand-ai:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_APP_URL=http://localhost:3000
    restart: unless-stopped
\`\`\`

### Build and Run

\`\`\`bash
# Build the image
docker build -t admybrand-ai-suite .

# Run the container
docker run -p 3000:3000 admybrand-ai-suite

# Or use Docker Compose
docker-compose up -d
\`\`\`

## ☁️ AWS

### AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Choose "Host web app"
   - Connect your GitHub repository

2. **Build Settings**
   \`\`\`yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   \`\`\`

### AWS S3 + CloudFront

1. **Build for Static Export**
   \`\`\`javascript
   // next.config.mjs
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   \`\`\`

2. **Build and Upload**
   \`\`\`bash
   npm run build
   aws s3 sync out/ s3://your-bucket-name --delete
   aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
   \`\`\`

## 🔧 Environment Variables

### Required Variables
\`\`\`bash
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME="ADmyBRAND AI Suite"
\`\`\`

### Optional Variables
\`\`\`bash
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=1234567

# API Keys
GROQ_API_KEY=your_groq_api_key
OPENAI_API_KEY=your_openai_api_key

# Database
DATABASE_URL=your_database_url
\`\`\`

## 🔍 Health Checks

Add health check endpoints:

\`\`\`typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version
  })
}
\`\`\`

## 📊 Monitoring

### Vercel Analytics
\`\`\`bash
npm install @vercel/analytics
\`\`\`

\`\`\`typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
\`\`\`

### Custom Monitoring
- Set up error tracking (Sentry)
- Configure performance monitoring
- Add uptime monitoring
- Set up log aggregation

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+)
   - Verify environment variables
   - Clear cache: `rm -rf .next node_modules && npm install`

2. **Runtime Errors**
   - Check browser console
   - Verify API endpoints
   - Check environment variable access

3. **Performance Issues**
   - Enable compression
   - Optimize images
   - Use CDN for static assets
   - Enable caching headers

### Debug Mode

\`\`\`bash
# Enable debug mode
DEBUG=* npm run dev

# Check build output
npm run build -- --debug
\`\`\`

## 📈 Performance Optimization

1. **Enable Compression**
2. **Optimize Images**
3. **Use CDN**
4. **Enable Caching**
5. **Monitor Core Web Vitals**

For more detailed performance optimization, see our [Performance Guide](PERFORMANCE.md).
