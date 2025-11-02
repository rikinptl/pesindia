# Pioneer Engineering Services - Website

Modern, responsive website for Pioneer Engineering Services built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ Fully responsive design
- ✅ Modern UI with Tailwind CSS
- ✅ All original content preserved from WordPress
- ✅ SEO optimized
- ✅ Image optimization with Next.js Image component
- ✅ Fast performance with Next.js 16

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Next.js Image** - Optimized images

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will automatically deploy on every push

### GitHub Actions Deployment

The repository includes a GitHub Actions workflow for automated deployment to Vercel.

Required secrets:
- `VERCEL_TOKEN` - Your Vercel API token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

## Project Structure

```
pes-website/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── profile/              # Profile page
│   ├── product-range/        # Product gallery
│   ├── product-specification/ # Product specs table
│   ├── facilities/           # Facilities page
│   ├── testimonials/         # Testimonials
│   ├── certification/        # Certifications
│   ├── contact-us/          # Contact form
│   └── events-media/        # Events & Media
├── public/
│   └── images/              # Images organized by category
├── .github/
│   └── workflows/           # GitHub Actions workflows
└── package.json
```

## Content

All content matches the original WordPress site exactly, with improved formatting and spelling corrections.

## License

© Pioneer Engineering Services. All rights reserved.
