# Pluto Loans - AI-Powered Microfinance Platform

## Overview

Pluto Loans is an AI-powered microfinance platform designed to serve India's underserved communities including gig workers, students, and small vendors. The platform provides instant loans ranging from ₹500 to ₹50,000 without requiring traditional credit history (CIBIL) or extensive paperwork, using AI to analyze digital footprints and UPI transaction histories for loan approvals.

## Recent Changes (January 27, 2025)

✓ Created professional industry-standard homepage with comprehensive sections
✓ Implemented responsive hero section with compelling value proposition
✓ Added animated statistics section with counter animations  
✓ Built service cards targeting gig workers, students, and small vendors
✓ Integrated how-it-works 3-step process explanation
✓ Created testimonials section with real user stories
✓ Added trust indicators and security compliance badges
✓ Maintained existing contact and pre-apply functionality
✓ Fixed CSS configuration issues and Inter font integration
✓ Restored original contact and pre-apply forms with EmailJS integration exactly as requested
✓ Enhanced contact page with professional design, icons, and improved UX
✓ Redesigned pre-apply page with modern gradient backgrounds and engaging visuals

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **Development**: In-memory storage fallback for development

### Design System
- **Component Library**: Radix UI primitives with custom Shadcn/ui styling
- **Theme**: Custom purple-accent brand color scheme with dark mode support
- **Icons**: Lucide React icon library
- **Typography**: Inter font family
- **Responsive**: Mobile-first responsive design

## Key Components

### Frontend Pages
- **Home**: Landing page with hero section, statistics, services overview, and testimonials
- **Pre-Apply**: Multi-step loan application form with progress tracking
- **Contact**: Contact form with company information
- **404**: Not found page with helpful messaging

### UI Components
- **Navigation**: Sticky navbar with mobile hamburger menu
- **Hero Section**: Gradient background with call-to-action buttons
- **Statistics Section**: Animated counters showing impact metrics
- **Service Cards**: Visual cards for different user segments (gig workers, students, vendors)
- **Testimonials**: Customer success stories with ratings
- **Trust Indicators**: Security and compliance badges

### Backend Structure
- **Routes**: RESTful API endpoints with `/api` prefix
- **Storage Interface**: Abstracted storage layer supporting both in-memory and PostgreSQL
- **Middleware**: Request logging, JSON parsing, and error handling
- **Development Tools**: Hot module replacement with Vite integration

## Data Flow

### User Journey
1. **Landing**: Users arrive at the homepage showcasing services and benefits
2. **Pre-Application**: Multi-step form collecting personal, employment, and loan information
3. **AI Assessment**: Backend processes digital footprint and UPI transaction data
4. **Approval**: Instant decision based on AI analysis
5. **Disbursement**: Direct bank transfer upon approval

### Data Processing
1. **Form Submission**: Client-side validation and progressive form completion
2. **API Communication**: RESTful endpoints for data exchange
3. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
4. **Session Management**: Secure session storage for user state

## External Dependencies

### Core Dependencies
- **Database**: Neon serverless PostgreSQL for production data storage
- **ORM**: Drizzle for type-safe database operations and migrations
- **UI**: Radix UI for accessible component primitives
- **Validation**: Zod for runtime type validation and schema generation
- **Date Handling**: date-fns for date manipulation utilities

### Development Dependencies
- **Build Tools**: Vite for frontend builds, esbuild for backend bundling
- **Development**: tsx for TypeScript execution, PostCSS for CSS processing
- **Deployment**: Environment-specific configurations for database connections

### External Services (Future)
- **Payment Processing**: UPI integration for transaction analysis
- **Identity Verification**: KYC services for user verification
- **Credit Scoring**: AI/ML services for alternative credit assessment
- **Notifications**: SMS/Email services for user communications

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations manage schema changes

### Environment Configuration
- **Development**: Local development with in-memory storage fallback
- **Production**: Environment variables for database connections and API keys
- **Database**: Configured for PostgreSQL with automatic UUID generation

### Infrastructure Requirements
- **Database**: PostgreSQL-compatible database (Neon serverless recommended)
- **Runtime**: Node.js environment supporting ES modules
- **Static Assets**: CDN for optimized asset delivery
- **Environment Variables**: `DATABASE_URL` for database connection

### Deployment Considerations
- **Database Migrations**: Run `npm run db:push` to apply schema changes
- **Static Assets**: Serve built frontend assets from `dist/public`
- **Process Management**: Production process should serve both API and static content
- **Security**: Implement proper CORS, rate limiting, and input validation for production