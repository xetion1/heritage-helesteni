# Heritage Heleșteni - Context Engineering & Ultra-Modern Tech Stack

## 🎯 Project Vision
Build a world-class heritage tourism platform showcasing Romanian cultural authenticity through immersive digital experiences, supporting local artisans, museums, and traditional workshops.

## 🚀 Ultra-Modern Tech Stack (2024-2025)

### Core Framework
```json
{
  "framework": "Next.js 15.1",
  "runtime": "Node.js 22 LTS",
  "language": "TypeScript 5.6",
  "styling": "Tailwind CSS 3.4 + CSS Modules",
  "database": "PostgreSQL 16 + Prisma 6",
  "deployment": "Vercel Edge Functions"
}
```

### Frontend Excellence
- **React 19** - Latest concurrent features
- **Framer Motion 11** - Smooth animations
- **Three.js + React Three Fiber** - 3D museum tours
- **Mapbox GL JS** - Interactive heritage maps
- **Radix UI + shadcn/ui** - Accessible components
- **TanStack Query v5** - Advanced data fetching
- **Zustand 5** - Lightweight state management

### Backend & API
- **tRPC v11** - End-to-end typesafe APIs
- **Prisma 6** - Next-gen ORM with edge support
- **Edge Runtime** - Global low-latency
- **NextAuth.js v5** - Authentication
- **Stripe/Lemonsqueezy** - Payment processing
- **Resend** - Transactional emails

### AI & Innovation
- **OpenAI GPT-4** - Multilingual chat guide
- **Whisper API** - Audio tour transcription
- **DALL-E 3** - Historical scene recreation
- **Vercel AI SDK** - Streaming AI responses
- **LangChain** - Heritage knowledge base

### Media & Content
- **Cloudinary** - Image/video optimization
- **Mux** - Video streaming for workshops
- **Sanity.io** - Headless CMS
- **Algolia** - Instant search
- **Contentful** - Structured content

### Real-time Features
- **Pusher/Ably** - Live workshop availability
- **WebRTC** - Virtual workshop streaming
- **Socket.io** - Real-time notifications
- **Server-Sent Events** - Live updates

### Analytics & Monitoring
- **Vercel Analytics** - Performance metrics
- **PostHog** - Product analytics
- **Sentry** - Error tracking
- **LogRocket** - Session replay
- **Hotjar** - Heatmaps & feedback

## 📁 Project Structure

```
heritage-helesteni/
├── app/                      # Next.js 15 app directory
│   ├── (marketing)/         # Public pages
│   │   ├── page.tsx         # Homepage
│   │   ├── muzee/           # Museums
│   │   ├── ateliere/        # Workshops
│   │   ├── experiente/      # Experiences
│   │   └── povesti/         # Stories
│   ├── (booking)/           # Booking flow
│   ├── (dashboard)/         # User dashboard
│   ├── api/                 # API routes
│   │   ├── trpc/           # tRPC endpoints
│   │   └── webhooks/       # Payment webhooks
│   └── [locale]/           # i18n routes
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── features/           # Feature components
│   ├── layouts/            # Layout components
│   └── three/              # 3D components
├── lib/
│   ├── db/                 # Database
│   ├── api/                # API clients
│   ├── utils/              # Utilities
│   └── hooks/              # Custom hooks
├── content/                # MDX content
├── public/
│   ├── models/            # 3D models
│   └── locales/           # Translations
└── prisma/
    └── schema.prisma      # Database schema
```

## 🎨 Design System

### Color Palette
```css
:root {
  /* Heritage Colors */
  --heritage-ochre: #CC9544;
  --heritage-burgundy: #8B1E3F;
  --heritage-forest: #3C6E47;
  --heritage-sky: #89B3D9;
  --heritage-earth: #8B6B47;
  
  /* Romanian Traditional */
  --romanian-red: #CE1126;
  --romanian-yellow: #FCD116;
  --romanian-blue: #002B7F;
  
  /* Neutral Palette */
  --cream: #FBF7F0;
  --charcoal: #2C2C2C;
  --warm-gray: #8B8680;
}
```

### Typography
```css
/* Fonts */
--font-display: 'Playfair Display', serif;  /* Elegant headers */
--font-body: 'Inter', sans-serif;           /* Clean reading */
--font-accent: 'Bebas Neue', sans-serif;    /* Impact text */
--font-script: 'Dancing Script', cursive;   /* Decorative */
```

## 🏗️ Core Features Implementation

### 1. Immersive Museum Experience
```typescript
// 3D Virtual Tours with React Three Fiber
interface VirtualTourProps {
  museum: Museum;
  artifacts: Artifact[];
  audioGuide: AudioTrack[];
  hotspots: InteractivePoint[];
}

// Features:
- 360° panoramic views
- Object inspection with annotations
- Multilingual audio guides
- AR mode for mobile devices
- Guided vs free exploration
```

### 2. Workshop Booking System
```typescript
interface WorkshopBooking {
  id: string;
  workshop: Workshop;
  artisan: Artisan;
  date: Date;
  participants: Participant[];
  payment: Payment;
  language: Language;
  specialRequests?: string;
}

// Features:
- Real-time availability
- Group bookings
- Video previews
- Artisan profiles
- Review system
```

### 3. Interactive Heritage Map
```typescript
interface HeritageMap {
  points: PointOfInterest[];
  trails: HeritageTrail[];
  events: CulturalEvent[];
  services: LocalService[];
  filters: MapFilter[];
}

// Features:
- Custom illustrated map style
- GPS-guided tours
- Offline mode
- AR waypoints
- Social sharing
```

### 4. Story Collection Platform
```typescript
interface StoryPlatform {
  stories: Story[];
  narrators: Elder[];
  themes: Theme[];
  media: MediaAsset[];
  translations: Translation[];
}

// Features:
- Audio/video stories
- Timeline visualization
- Community contributions
- AI transcription
- Multi-language subtitles
```

## 🔧 Development Workflow

### Initial Setup Commands
```bash
# Create Next.js 15 project with latest features
npx create-next-app@latest heritage-helesteni \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

# Install core dependencies
npm install @prisma/client prisma
npm install @tanstack/react-query
npm install framer-motion
npm install @react-three/fiber @react-three/drei
npm install @radix-ui/react-* 
npm install shadcn-ui
npm install zustand
npm install @trpc/server @trpc/client @trpc/react-query @trpc/next

# Development tools
npm install -D @types/node @types/react
npm install -D eslint prettier
npm install -D @testing-library/react vitest
npm install -D @playwright/test
```

### Environment Variables
```env
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="..."

# AI Services
OPENAI_API_KEY="..."
ANTHROPIC_API_KEY="..."

# Media Services
CLOUDINARY_URL="..."
MUX_TOKEN_ID="..."
MUX_TOKEN_SECRET="..."

# Payment
STRIPE_SECRET_KEY="..."
STRIPE_WEBHOOK_SECRET="..."

# Analytics
VERCEL_ANALYTICS_ID="..."
POSTHOG_KEY="..."
SENTRY_DSN="..."

# CMS
SANITY_PROJECT_ID="..."
SANITY_DATASET="..."
SANITY_TOKEN="..."

# Maps
MAPBOX_ACCESS_TOKEN="..."

# Email
RESEND_API_KEY="..."
```

## 🚀 Performance Optimization

### Core Web Vitals Targets
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **INP**: < 200ms (Interaction to Next Paint)

### Optimization Strategies
```typescript
// Image Optimization
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

// Route Prefetching
import { prefetch } from '@tanstack/react-query';

// Code Splitting
const Museum3DView = dynamic(() => import('@/components/Museum3DView'));

// Edge Caching
export const runtime = 'edge';
export const revalidate = 3600;
```

## 🌍 Internationalization

### Supported Languages
```typescript
const locales = ['ro', 'en', 'de', 'fr', 'hu', 'it'] as const;
const defaultLocale = 'ro';

// URL structure
// /ro/muzee/casa-bunicii
// /en/museums/grandmas-house
// /de/museen/grossmutters-haus
```

## 🔒 Security & Compliance

### Security Headers
```typescript
const securityHeaders = {
  'Content-Security-Policy': "...",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(*)'
};
```

### GDPR Compliance
- Cookie consent management
- Data export functionality
- Right to deletion
- Privacy-first analytics

## 📊 Success Metrics

### KPIs to Track
1. **Visitor Engagement**
   - Average session duration > 5 minutes
   - Pages per session > 4
   - Bounce rate < 40%

2. **Conversion Metrics**
   - Workshop booking rate > 5%
   - Newsletter signup > 10%
   - Return visitor rate > 30%

3. **Business Impact**
   - Monthly workshop bookings > 100
   - Artisan product sales > €10,000/month
   - Partner businesses > 50

## 🎯 MVP Features (Phase 1)

1. **Homepage** with immersive hero
2. **Museum showcase** (5 main museums)
3. **Workshop catalog** with booking
4. **Artisan directory** with profiles
5. **Interactive map** of attractions
6. **Story collection** (10 featured)
7. **Event calendar**
8. **Multi-language** (RO/EN)
9. **Mobile responsive**
10. **Basic booking system**

## 🚀 Launch Strategy

### Phase 1: MVP (Month 1-2)
- Core features implementation
- Content creation (50 pages)
- Photography & videography
- Beta testing with locals

### Phase 2: Enhancement (Month 3-4)
- 3D virtual tours
- AI chat guide
- Advanced booking features
- Payment integration
- Mobile app

### Phase 3: Scale (Month 5-6)
- Partner onboarding
- Marketing campaigns
- SEO optimization
- Feature expansion
- Community platform

---

**This context provides everything needed to build a cutting-edge heritage tourism platform with the latest technology stack!**