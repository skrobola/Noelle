# A Whisper From Noelle - Next.js Website

A modern Next.js website for the "A Whisper From Noelle" children's book series, built with the App Router and Tailwind CSS.

## Features

- ✨ Modern Next.js 15 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 📝 Contact/Email signup form
- 🚀 Ready for Vercel deployment
- ♿ Accessible and SEO-friendly

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/        # Contact form API endpoint
│   ├── blog/               # Blog page
│   ├── giving/             # Giving page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── BookCard.tsx        # Book card component
│   ├── BookShowcase.tsx    # Books section
│   ├── EmailSignup.tsx     # Contact form
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── Navigation.tsx      # Navigation bar
│   ├── OurStory.tsx        # Our Story section
│   └── Reviews.tsx         # Reviews section
└── types/
    └── book.ts             # TypeScript types
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository or upload the project folder
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

## Environment Variables

If you need to configure the contact form to use an email service (like SendGrid, Mailchimp, etc.), create a `.env.local` file:

```env
EMAIL_SERVICE_API_KEY=your_api_key_here
```

Then update `app/api/contact/route.ts` to use your email service.

## Customization

### Adding Images

Place images in the `public/` directory and reference them like:
```tsx
<Image src="/your-image.jpg" alt="Description" />
```

### Updating Book Information

Edit the `books` array in `components/BookShowcase.tsx` to update book details.

### Styling

All styles use Tailwind CSS. Customize colors and spacing in `tailwind.config.ts`.

## Build for Production

```bash
npm run build
npm start
```

## License

Copyright © 2024 A Whisper From Noelle - All Rights Reserved.
