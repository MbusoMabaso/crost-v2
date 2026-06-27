# Crost Media - Professional Website

A modern, responsive website for Crost Media built with Svelte and Vite. The site showcases integrated strategic creative services for brands across EMEA.

## Features

- ✨ **Modern Design**: Clean, professional layout with smooth animations
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎯 **Service Showcase**: Detailed presentation of PR and marketing services
- 💰 **Pricing Tiers**: Interactive pricing section with multiple retainer packages
- 📧 **Contact Form**: Built-in contact form for client inquiries
- 🚀 **Fast Performance**: Built with Vite for optimal build and development speed
- 🎨 **Modern UI/UX**: Professional color scheme and smooth interactions

## Sections

1. **Header**: Navigation bar with sticky positioning
2. **Hero**: Eye-catching introduction with animated graphics
3. **About**: Company values and service areas
4. **Services**: Detailed service offerings (6 service boxes)
5. **Pricing**: 
   - Celebrity & Public Figure PR (3 tiers)
   - Business & Brand PR (customizable packages)
6. **Contact**: Contact form and social media links
7. **Footer**: Navigation links and company information

## Tech Stack

- **Framework**: Svelte 4
- **Build Tool**: Vite 5
- **Styling**: CSS (scoped and global)
- **Package Manager**: npm

## Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd TupanaConsulting
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Development

Start the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

## Building for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── App.svelte              # Main app component
│   ├── main.js                 # Entry point
│   ├── global.css              # Global styles
│   └── components/
│       ├── Header.svelte       # Navigation header
│       ├── Hero.svelte         # Hero section
│       ├── About.svelte        # About section
│       ├── Services.svelte     # Services showcase
│       ├── Pricing.svelte      # Pricing tiers
│       ├── Contact.svelte      # Contact form
│       └── Footer.svelte       # Footer
├── public/                     # Static assets
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── .prettierrc                 # Code formatting rules
```

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### Deploy to Traditional Hosting

1. Build the project: `npm run build`
2. Upload the contents of the `dist/` folder to your web server
3. Configure your server to serve `index.html` for all routes

## Customization

### Colors & Branding

Update the color scheme in component files:
- Primary color: `#1a5f7a` (teal)
- Dark color: `#0d3b56` (navy)
- Light accent: `#85d4f8` (light blue)

### Services & Pricing

Edit the content directly in:
- `src/components/Services.svelte` - Service offerings
- `src/components/Pricing.svelte` - Pricing tiers and packages

### Contact Information

Update contact details in:
- `src/components/Contact.svelte` - Email and social links
- `src/components/Footer.svelte` - Footer links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size with Vite
- Responsive images and lazy loading ready
- Fast page load times
- Mobile-first responsive design

## Code Quality

- Prettier formatting configured
- ESLint ready (install if needed)
- Consistent code style across components

## Future Enhancements

- Blog section for case studies and insights
- Team members showcase
- Client testimonials carousel
- Advanced portfolio gallery
- Email integration for contact form
- Analytics integration

## Support & Contact

For website questions or customization needs, contact Crost Media:
- Email: hello@crostmedia.com
- Instagram: [@crostmedia](https://www.instagram.com/crostmedia)

## License

All rights reserved © 2026 CROST MEDIA