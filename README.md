[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fprosamik%2Fios-app-landing-page)

# [App Name] - Next.js + Tailwind Landing Page Template

A lightweight, easily configurable, and customizable **Next.js** and **Tailwind CSS** landing page template. Built to be adaptable, performant, and perfect for any iOS app launch, product showcase, or promotional site.

---

## Features

- **Next.js** app router with **TypeScript**
- **Tailwind CSS** v3 for flexible styling customization
- Smooth transitions powered by **Framer Motion**
- Built-in **font optimization** with [next/font](https://nextjs.org/docs/app/api-reference/components/font)
- Automatic **image optimization** via [next/image](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- Access to **31+ icon packs** via [React Icons](https://react-icons.github.io/react-icons/)
- Near-perfect **Lighthouse score**
- Modular, responsive, and **scalable components**
- Privacy Policy & Contact pages included
- Reusable contact information components

---

## Sections

- Hero
- Partners or Clients Logos
- Features
- Pricing
- Testimonials
- FAQ
- Statistics
- CTA
- Blog (with per-post CTA card)
- Contact Page
- Privacy Policy Page
- Terms of Service Page
- Footer

> **Note:** This repo carries two parallel variants for some sections (e.g. `Hero`/`mobile-kit/Hero`, `Footer`/`mobile-kit/Footer`). The active ones (imported in `layout.tsx`/`page.tsx`) are the `mobile-kit` variants — see the comments at the top of those files to switch back to the original variant.

---

## Getting Started

### Prerequisites

Before starting, make sure you have the following installed:

- **Node.js**: Version 18 or later
- **pnpm**: Version 8 or later (this repo uses `pnpm-lock.yaml`; npm/yarn also work but pnpm is recommended)
- **Code editor**: [VS Code](https://code.visualstudio.com/) is recommended.

### Steps

1. **Install dependencies**: Run `pnpm install`
2. **Run the development server**: `pnpm dev`
3. **View your project**: Open [localhost:3000](http://localhost:3000)

Other useful commands: `pnpm build` (production build + type-check), `pnpm start` (run production build), `pnpm lint` (ESLint).

---

## Converting This Landing Page for Your App

Follow this comprehensive guide to customize this template for your app. All customization can be done through simple edits to data files - no complex coding required!

### Step 1: Update Your App Name

**File to edit**: `/src/data/siteDetails.ts`

Replace `[App Name]` with your actual app name:

```typescript
const siteUrl = 'https://yourapp.com/'; // Change to your domain

export const siteDetails = {
    siteName: 'YourAppName',        // Change this
    siteUrl: siteUrl,
    metadata: {
        title: 'YourAppName - Your App Tagline',
        description: 'Your app description here',
    },
    language: 'en-us',
    locale: 'en-US',
    siteLogo: `${siteUrl}images/logo.png`, // Auto-generated from siteUrl
    googleAnalyticsId: '', // Add your GA4 ID here
}
```

**Note:** The `siteLogo` is automatically constructed from `siteUrl` + `images/logo.png`. Just update `siteUrl` once and the logo URL updates automatically!

### Step 2: Update Contact Information

**File to edit**: `/src/data/footer.ts`

Update your contact details:

```typescript
export const footerDetails = {
    subheading: "Your company tagline or description",
    email: 'contact@yourapp.com',      // Your email
    telephone: '+1 (555) 123-4567',    // Your phone
    socials: {
        twitter: 'https://twitter.com/yourapp',
        facebook: 'https://facebook.com/yourapp',
        linkedin: 'https://linkedin.com/company/yourapp',
        instagram: 'https://instagram.com/yourapp',
        // Uncomment and add others as needed:
        // github: 'https://github.com/yourapp',
        // youtube: 'https://youtube.com/@yourapp',
    }
}
```

These details will automatically appear in both the footer and contact page.

### Step 3: Customize Content

Edit these files in `/src/data/` to update your app's content:

| File | What to Edit | Description |
|------|--------------|-------------|
| `heroAlt.ts` | Hero section (active) | Headline, subtitle, rewards badge, screenshots, store links — used by the active `mobile-kit/Hero` |
| `hero.ts` | Hero section (alt variant) | Used only if you switch back to the original `Hero` component |
| `benefits.tsx` | Benefits/Features | Your app's key features with icons |
| `pricing.ts` | Pricing tiers | Your subscription plans |
| `testimonials.ts` | User reviews | Customer testimonials |
| `faq.ts` | FAQ questions | Common questions and answers |
| `stats.tsx` | Statistics | Key metrics (users, downloads, etc.) |
| `cta.ts` | Call-to-action | Download CTA text and store links (used in the homepage CTA, the `BlogCTACard`, and Header buttons) |
| `appBanner.ts` | App banner screenshots | Screenshot stack shown in the CTA section |
| `blogPosts.ts` | Blog content | Blog post list, sections, and table-of-contents data |

**Example - Editing the active Hero Section** (`/src/data/heroAlt.ts`):

```typescript
export const heroAltDetails = {
    rewards: ["#1 App of the year"],
    headline: "Your App Headline Here",
    headlineMark: [3, 6],   // word range to highlight in the headline
    subtitle: "Your compelling subtitle that explains what your app does",
    usersDescription: "Loved by 50,000+ users worldwide",
    screenshots: ["/screenshots/app1.webp", "/screenshots/app2.webp", "/screenshots/app3.webp"],
    googlePlayLink: "https://play.google.com",
    appStoreLink: "https://apps.apple.com",
}
```

### Step 4: Update Navigation & Pages

**Navigation**: `/src/data/menuItems.ts`

The template includes Features, Blog, and Contact links. Customize as needed:

```typescript
export const menuItems: IMenuItem[] = [
    { text: "Features", url: "/#features" },
    { text: "Pricing", url: "/#pricing" },      // Add back if needed
    { text: "Blog", url: "/blog" },
    { text: "Contact", url: "/contact" },
]
```

> **Important:** Links that point to a homepage section (an `id` such as `#features`, `#pricing`, `#testimonials`, `#cta`) must use the **`/#section-id`** form (leading slash), not a bare `#section-id`. This makes Next.js navigate to the homepage and scroll to the section even when the user is on another page (blog, contact, etc.). Bare `#section-id` only works while already on the homepage.

**Privacy Policy**: Edit `/src/app/privacy/page.tsx` to add your specific privacy details.

**Contact Page**: The contact page displays your contact information (email, phone, socials) from `footer.ts`. No form included.

### Step 5: Replace Images

All images are located in `/public/images/`. Replace these files with your own:

| Image File | Dimensions (Recommended) | Where It's Used | What to Replace |
|------------|--------------------------|-----------------|-----------------|
| `hero-mockup.webp` | 600x1200px | Hero section center | Your app screenshot or mockup |
| `hero-chart.webp` | 400x300px | Hero section (optional) | Supporting visual/feature |
| `hero-transactions.webp` | 400x300px | Hero section (optional) | Supporting visual/feature |
| `mockup-1.webp` | 600x1200px | Benefits section | Feature showcase mockup #1 |
| `mockup-2.webp` | 600x1200px | Benefits section | Feature showcase mockup #2 |
| `testimonial-1.webp` | 200x200px | Testimonials | User avatar #1 |
| `testimonial-2.webp` | 200x200px | Testimonials | User avatar #2 |
| `testimonial-3.webp` | 200x200px | Testimonials | User avatar #3 |
| `logo.png` | 512x512px | Metadata/OG tags | Your app logo |
| `og-image.jpg` | 1200x630px | Social media sharing | Open Graph preview image |
| `twitter-image.jpg` | 1200x600px | Twitter sharing | Twitter card image |

**Important Notes**:
- Keep the same filenames OR update the references in the data files
- Use **WebP format** for best performance (convert using [Squoosh](https://squoosh.app/))
- Optimize images before uploading to reduce bundle size

**Example**: To change the hero mockup:
1. Create your app mockup (600x1200px recommended)
2. Convert to WebP format
3. Replace `/public/images/hero-mockup.webp` with your image
4. OR rename your file and update `/src/data/hero.ts`:
   ```typescript
   centerImageSrc: '/images/your-custom-name.webp'
   ```

### Step 6: Customize Colors & Styling

**File to edit**: `/src/app/globals.css`

Update the CSS variables to match your brand:

```css
:root {
    --primary: #FED835;        /* Your primary brand color */
    --secondary: #304fff;      /* Your secondary color */
    --background: #FAFAFA;     /* Background color */
    --foreground: #1C1C1C;     /* Text color */
    --foreground-accent: #6B6B6B; /* Muted text color */

    /* Dark mode variants */
    --dark-background: #1C1C1C;
    --dark-foreground: #FAFAFA;
}
```

**Fonts**: The template uses Manrope (headings) and Source Sans 3 (body). To change fonts, edit `/src/app/layout.tsx`.

### Step 7: Update App Store Links

**File to edit**: `/src/data/cta.ts`

Add your actual App Store and Google Play URLs:

```typescript
export const ctaDetails = {
    heading: 'Join Over 1 Million Users To Transform Your Finances',
    subheading: 'Your journey starts here. Download [App Name] today!',
    appStoreUrl: 'https://apps.apple.com/app/your-app-id',     // Your App Store link
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.yourapp' // Your Play Store link
}
```

These links are used in the CTA section download buttons.

### Step 8: SEO & Metadata

Update metadata for better SEO in `/src/data/siteDetails.ts`:

```typescript
metadata: {
    title: 'YourApp - One Sentence Description',
    description: 'A compelling description of your app (150-160 characters for best SEO)',
}
```

Add Open Graph images:
1. Create `og-image.jpg` (1200x630px) and place in `/public/images/`
2. Create `twitter-image.jpg` (1200x600px) and place in `/public/images/`

### Step 9: Add Analytics (Optional)

The template ships with three optional analytics integrations wired up in `/src/app/layout.tsx`, each a no-op until configured:

**Google Analytics** — add your ID in `/src/data/siteDetails.ts`:

```typescript
googleAnalyticsId: 'G-XXXXXXXXXX', // Your GA4 Measurement ID
```

**Umami** — set environment variables (see `.env.example`):

```
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id
NEXT_PUBLIC_UMAMI_SCRIPT_URL=https://cloud.umami.is/script.js   # or your self-hosted script URL
```

**Vercel Analytics** — already mounted via `@vercel/analytics`; just enable Web Analytics for your project in the Vercel dashboard.

---

## File Structure Reference

```
mobile-app-landing-kit/
├── public/
│   ├── images/              # Mockups, avatars, OG/Twitter images, logo
│   └── screenshots/         # Hero/CTA screenshot stack
├── src/
│   ├── app/
│   │   ├── page.tsx         # Home page (assembles all sections)
│   │   ├── layout.tsx       # Root layout (fonts, metadata, analytics)
│   │   ├── globals.css      # Colors & global styles
│   │   ├── blog/
│   │   │   ├── page.tsx     # Blog index
│   │   │   └── [slug]/page.tsx  # Blog post template (+ BlogCTACard)
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx       # Navigation (uses /#section anchors)
│   │   ├── Footer.tsx       # Original footer variant (not active)
│   │   ├── Hero.tsx         # Original hero variant (not active)
│   │   ├── BlogCTACard.tsx  # CTA card appended to every blog post
│   │   ├── ContactInfo.tsx  # Reusable contact component
│   │   ├── Benefits/, Pricing/   # Multi-file section components
│   │   ├── mobile-kit/      # ACTIVE Hero/Footer variants + iPhone frame, app banner, TOC
│   │   └── ...
│   └── data/                # ALL CONTENT GOES HERE
│       ├── siteDetails.ts   # App name, URL, metadata, GA id
│       ├── menuItems.ts     # Navigation links (use /#section for anchors)
│       ├── footer.ts        # Footer & contact info
│       ├── hero.ts          # Hero data (original variant)
│       ├── heroAlt.ts       # Hero data (ACTIVE mobile-kit variant)
│       ├── benefits.tsx     # Features/benefits
│       ├── pricing.ts       # Pricing tiers
│       ├── testimonials.ts  # User reviews
│       ├── faq.ts           # FAQ items
│       ├── stats.tsx        # Statistics
│       ├── cta.ts           # Call-to-action (home CTA, BlogCTACard, header buttons)
│       ├── appBanner.ts     # CTA screenshot stack
│       └── blogPosts.ts     # Blog posts & sections
```

---

## Common Customization Tasks

### Adding a New Section

1. Create component in `/src/components/YourSection.tsx`
2. Import and add to `/src/app/page.tsx`
3. Create data file in `/src/data/yourSection.ts`

### Removing a Section

1. Open `/src/app/page.tsx`
2. Remove or comment out the component (e.g., `<Pricing />`)

### Changing Icon

Icons use [React Icons](https://react-icons.github.io/react-icons/). To change:

1. Browse available icons at [react-icons.github.io](https://react-icons.github.io/react-icons/)
2. Import in your data file:
   ```typescript
   import { FiCheckCircle } from 'react-icons/fi';
   ```
3. Use in your data:
   ```typescript
   icon: <FiCheckCircle size={26} />
   ```

---

## Deploying on Vercel

The fastest way to deploy is on [Vercel](https://vercel.com/):

1. Click the "Deploy with Vercel" button at the top
2. Connect your GitHub repository
3. Vercel will automatically detect Next.js and deploy
4. Your site is live in under 60 seconds!

For other deployment options, check the [Next.js deployment docs](https://vercel.com/docs/deployments/deployment-methods).

---

## Troubleshooting

### Images not loading?
- Ensure images are in `/public/images/`
- Check file paths in data files (should be `/images/filename.webp`)
- Clear cache and restart dev server

### Changes not appearing?
- Restart the dev server (`pnpm dev`)
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check for TypeScript errors in terminal

### Build errors?
- Run `pnpm build` to see detailed errors
- Check all imports are correct
- Ensure all data files export properly

---

## Contributing

This is an open-source project, and we welcome contributions! If you have ideas for new components, designs, layouts, or optimizations, please join us.

### How to Contribute

1. **Fork the Repository**: Clone it locally.
2. **Create a New Branch**: For example, `feature/new-section` or `fix/style-issue`.
3. **Develop and Test**: Make sure your changes work and don't break existing functionality.
4. **Submit a Pull Request**: Open a PR with a clear description of your changes.

### Ideas for Contributions

- New component sections (team, comparison table, case studies)
- Additional page variants (agency, eCommerce, portfolio)
- Additional themes (dark mode toggle)
- Documentation updates, tutorials, or guides

---

## Community and Support

Join our community discussions on GitHub to share ideas, ask questions, or suggest improvements. Let's build something amazing together!

---

## License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it for personal or commercial projects.

---

## Need a Starter Repo kit for ios App?
- Get the repo [here](https://github.com/proSamik/lighteweight-starter-kit-ios-app)


## Credits

- Template by [Nexi Launch](https://nexilaunch.com)
- UI Design by [Youthmind](https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
