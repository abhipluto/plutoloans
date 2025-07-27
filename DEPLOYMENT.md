# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub repository
2. Connect GitHub repo to Vercel
3. Deploy automatically with zero configuration

### Option 2: Netlify
1. Run `npm run build`
2. Upload `dist` folder to Netlify
3. Site will be live instantly

### Option 3: Any Node.js Hosting
1. Upload all files to your server
2. Run `npm install`
3. Run `npm run build`  
4. Serve the application with `npm start`

## Environment Setup

### Development
```bash
npm install
npm run dev
```

### Production
```bash
npm install
npm run build
npm run preview  # to test production build locally
```

## Important Notes

- No database setup required - uses EmailJS
- All form submissions go directly to your email
- EmailJS credentials are already configured
- Mobile-responsive and production-ready
- Includes professional fintech design

## Troubleshooting

**If forms aren't working:**
1. Check EmailJS service is active
2. Verify template IDs in components
3. Ensure user key is valid

**If styles look wrong:**
1. Run `npm run build` to regenerate CSS
2. Check Tailwind configuration
3. Clear browser cache

**If site won't start:**
1. Ensure Node.js 18+ is installed
2. Delete `node_modules` and run `npm install`
3. Check for port conflicts (default: 5000)