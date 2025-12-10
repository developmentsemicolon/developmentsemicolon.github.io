# Semicolon Website

Modern, multilingual company website built with React, TypeScript, and Tailwind CSS.

## Features

- 🌍 **Multilingual Support**: English, Portuguese, and Spanish
- 🎨 **Modern UI**: Built with Tailwind CSS and Framer Motion
- 🌙 **Dark Mode**: Full dark mode support
- 📱 **Responsive**: Fully responsive design for all devices
- ⚡ **Fast**: Optimized for performance with Vite
- 🚀 **GitHub Pages Ready**: Configured for easy deployment

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **i18next** - Internationalization
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is configured to deploy automatically to GitHub Pages via GitHub Actions when pushing to the `main` branch.

### Manual Deployment

```bash
npm run build
npm run deploy
```

Make sure to update the `base` path in `vite.config.ts` to match your repository name.

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, Navigation
│   └── sections/     # Hero, Services, Technologies, etc.
├── data/             # Static data (technologies, success cases)
├── lib/
│   └── i18n/         # Internationalization config and translations
└── styles/           # Global styles
```

## License

© 2024 Semicolon. All rights reserved.

