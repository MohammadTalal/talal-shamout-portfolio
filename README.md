# Talal Shamout — Portfolio Website

A modern, dark-themed developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Animated typing effect in hero section
- Scroll-based animations with Framer Motion
- Responsive design (mobile-first)
- Glassmorphism/gradient backgrounds
- Timeline-based experience section
- Card-based project showcase with hover effects
- Contact form
- SEO-optimized

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React + custom SVGs

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Deploy — Vercel auto-detects Next.js

## Customization

- **Photo:** Replace `public/photo.jpg` with your headshot
- **Resume:** Add your resume as `public/resume.pdf`
- **Content:** Edit component files in `src/components/` to update text, skills, experience, and projects
- **Colors:** Modify the `@theme` section in `src/app/globals.css`
- **Social Links:** Update URLs in Hero, Contact, and Footer components

## Project Structure

```
portfolio/
├── public/
│   └── photo.jpg          # Profile photo
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles & theme
│   │   ├── layout.tsx     # Root layout with metadata
│   │   └── page.tsx       # Main page
│   └── components/
│       ├── Navbar.tsx      # Sticky nav with mobile menu
│       ├── Hero.tsx        # Hero with typing effect
│       ├── About.tsx       # About section with highlights
│       ├── Skills.tsx      # Skills with progress bars
│       ├── Experience.tsx  # Timeline experience
│       ├── Projects.tsx    # Featured & other projects
│       ├── Contact.tsx     # Contact form & info
│       ├── Footer.tsx      # Footer with socials
│       └── icons.tsx       # Custom SVG icons
└── package.json
```
