# macOS Setup Instructions

## Fixed Issue: Server Binding Error

The original package had a server configuration issue on macOS. This has been fixed by changing the server host from `0.0.0.0` to `localhost`.

## Installation Steps for macOS

1. **Extract the package**
```bash
tar -xzf pluto-loans-production-ready.tar.gz
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

4. **Access your application**
```
http://localhost:5000
```

## What Was Fixed

- Added platform-specific server binding in `server/index.ts`
- macOS now uses simple port binding without host specification
- Added alternative `npm run dev:mac` command that uses `server/index-mac.ts`
- This resolves the `ENOTSUP: operation not supported on socket` error on macOS

## Two Ways to Run on macOS

### Option 1: Auto-detection (Recommended)
```bash
npm run dev
```
The server will automatically detect macOS and use compatible binding.

### Option 2: Explicit macOS Command
```bash
npm run dev:mac
```
Uses a dedicated macOS-optimized server file.

## Alternative Port (if 5000 is busy)

If port 5000 is already in use, you can specify a different port:

```bash
PORT=3000 npm run dev
```

## Troubleshooting

**If you still get port errors:**
1. Check what's using port 5000: `lsof -i :5000`
2. Kill the process or use a different port
3. Try: `PORT=3001 npm run dev`

**If npm install fails:**
1. Make sure you have Node.js 18+ installed
2. Try clearing npm cache: `npm cache clean --force`
3. Delete node_modules and package-lock.json, then run `npm install` again

Your Pluto Loans platform is now ready to run on macOS! 🚀