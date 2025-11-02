# Deployment Guide

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Automatic Deployment

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository: `rikinptl/pesindia`
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy"
6. Your site will be live in minutes!

### Manual Deployment via GitHub Actions

If you want to use GitHub Actions for Vercel deployment:

1. Get your Vercel credentials:
   - Go to Vercel Dashboard → Settings → Tokens
   - Create a new token and copy it
   - Get your Organization ID and Project ID from your project settings

2. Add GitHub Secrets:
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `VERCEL_TOKEN` - Your Vercel API token
     - `VERCEL_ORG_ID` - Your Vercel organization ID
     - `VERCEL_PROJECT_ID` - Your Vercel project ID

3. The workflow in `.github/workflows/deploy.yml` will automatically deploy on every push

## Option 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

## Option 3: Deploy to Any Hosting Provider

### Build the project:
```bash
npm run build
```

### Start the production server:
```bash
npm start
```

The built files are in the `.next` directory.

## Environment Variables

Currently, no environment variables are required. If you need to add any later, create a `.env.local` file (and add it to `.gitignore`).

## Continuous Deployment

The repository is set up with GitHub Actions that will:
- ✅ Test the build on every push
- ✅ Run linter checks
- ✅ Build the project to catch any errors

For automatic deployment, use Option 1 (Vercel) which integrates directly with GitHub.

