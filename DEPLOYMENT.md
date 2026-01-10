# Deployment Guide for Vercel

## Quick Deploy

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to link your project

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 3: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Drag and drop your project folder or connect via Git
4. Vercel will auto-configure everything
5. Click "Deploy"

## Post-Deployment

### Setting Up the Contact Form

The contact form API endpoint (`/api/contact`) is currently set up to log submissions. To make it functional:

1. **Option A: Use a service like Resend**
   - Sign up at [resend.com](https://resend.com)
   - Add your API key to Vercel environment variables
   - Update `app/api/contact/route.ts` to use Resend

2. **Option B: Use Mailchimp**
   - Sign up at [mailchimp.com](https://mailchimp.com)
   - Add your API key to Vercel environment variables
   - Update `app/api/contact/route.ts` to use Mailchimp API

3. **Option C: Use SendGrid**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Add your API key to Vercel environment variables
   - Update `app/api/contact/route.ts` to use SendGrid

### Adding Images

1. Download images from your current website
2. Place them in the `public/` directory
3. Update image references in components to use `/image-name.jpg`

### Custom Domain

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., awhisperfromnoelle.com)
4. Follow DNS configuration instructions

## Environment Variables

If you add email service integration, add these in Vercel:
- Go to Project Settings → Environment Variables
- Add your API keys and secrets

## Build Settings

Vercel will automatically detect:
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

No additional configuration needed!
