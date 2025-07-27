# Pluto Loans - AI-Powered Microfinance Platform

A professional fintech lending platform for India's underserved communities, offering AI-powered loan solutions with a modern, responsive web interface.

## Features

- 🏠 **Professional Homepage** - Modern fintech design with hero section, statistics, and testimonials
- 📧 **Contact Form** - Enhanced design with EmailJS integration for direct email delivery
- 🚀 **Pre-Apply Form** - Beautiful waitlist form for loan applications sent via email
- 📱 **Responsive Design** - Mobile-first approach with professional UI/UX
- ⚡ **No Database Required** - Uses EmailJS for form submissions directly to your email
- 🎨 **Modern Stack** - React, TypeScript, Tailwind CSS, Shadcn/ui components

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or extract this project**
```bash
cd pluto-loans-complete
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5001
```

## EmailJS Configuration

The forms are pre-configured with EmailJS:

- **Service ID**: `service_fes810k`
- **Contact Template**: `template_q3vsbox`
- **Pre-Apply Template**: `template_h3igwjg`
- **User Key**: `R7eWMQcRk7QSfffhV`

All form submissions go directly to your email - no database setup required!

## Project Structure

```
pluto-loans-complete/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Main pages (home, contact, pre-apply)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and configurations
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                 # Backend Express server
├── shared/                 # Shared TypeScript schemas
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite build configuration
└── README.md              # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Deployment

This project is ready to deploy on any hosting platform:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **Replit**: Import this project and it will run automatically
- **Any Node.js hosting**: Upload files and run `npm install && npm run build`

## Customization

- **Colors**: Edit `client/src/index.css` for brand colors
- **Content**: Modify pages in `client/src/pages/`
- **EmailJS**: Update service IDs in form components if needed
- **Styling**: Tailwind classes throughout the components

## Support

For questions about the code structure or deployment, refer to the comprehensive documentation in `replit.md`.

---

Built with ❤️ for India's financial inclusion