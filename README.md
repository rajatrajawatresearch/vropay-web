# VroPay Redesign

A modern website redesign for VroPay using Next.js with a focus on 3D animations and interactive elements.

## Features

- 🚀 **Modern UI/UX**: Clean, sleek interface with smooth interactions and responsive design
- 🌟 **3D Animations**: Interactive 3D elements using Three.js and React Three Fiber
- ✨ **Smooth Transitions**: Animated page transitions and microinteractions
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🔍 **SEO Optimized**: Built with SEO best practices
- ⚡ **Performance Focused**: Fast loading and rendering

## Tech Stack

- **Frontend Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber and Drei
- **Animations**: Framer Motion, GSAP, Lottie
- **Type Safety**: TypeScript

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/vropay-redesign.git
cd vropay-redesign
npm install
```

## Starting the Development Server

To start the development server:

```bash
npm run dev
```

This will start the Next.js development server on port 3002.

If that doesn't work, try one of these alternative methods:

```bash
# Use the direct Next.js command
npx next dev -p 3002

# Try the direct development script
./direct-dev.sh

# Try a custom server
npm run dev:custom
```

## Building for Production

To build the application for production:

```bash
npm run build
```

## Starting Production Server

To start the production server:

```bash
npm run start
```

## Troubleshooting

If you encounter issues with port binding, try these steps:

1. Check if the port is already in use:
```bash
lsof -i :3002
```

2. Kill any processes using the port:
```bash
kill -9 $(lsof -ti:3002)
```

3. Try using a different port:
```bash
PORT=3003 npm run dev
```

4. Check for any firewall or networking issues that might be blocking the port.

## Project Structure

```
vropay-redesign/
├── public/              # Static assets
├── src/
│   ├── app/             # App router pages
│   ├── components/      # UI components
│   │   ├── 3d/          # 3D components using Three.js
│   │   ├── animations/  # Animation components and utilities
│   │   ├── layout/      # Layout components (Header, Footer, etc.)
│   │   └── ui/          # Reusable UI components
│   ├── constants/       # Constants and configuration
│   └── utils/           # Utility functions
├── tailwind.config.js   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## Key Components

- **HeroScene**: 3D animated scene for the homepage hero section
- **ScrollAnimations**: Utilities for scroll-triggered animations
- **MainLayout**: Core layout with header and footer
- **Section**: Reusable section component with various styling options
- **Button**: Customizable button component with animations

## Deployment

The application can be built for production using:

```bash
npm run build
# or
yarn build
```

## SEO

The website is optimized for search engines with appropriate meta tags, semantic HTML, and structured data.

## Browser Support

The website is compatible with all modern browsers.

## License

[MIT](LICENSE)

## Technologies Used

- Next.js 15
- React 18
- Three.js
- Framer Motion
- Tailwind CSS
