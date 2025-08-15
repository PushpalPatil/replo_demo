# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 TypeScript project demonstrating A/B testing dashboard UX transformation - from intentionally poor design to optimized e-commerce analytics. The project showcases two distinct phases:

1. **"Shitty Version"** - Cramped layout, poor color choices, tables over charts, mobile-unfriendly
2. **"Optimized Version"** - Clean design, visual charts, mobile-first, revenue-focused

**Target User:** E-commerce brand manager checking A/B test performance on mobile during campaign.

## Development Commands

```bash
# Development server
npm run dev

# Build for production  
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture & Structure

### Tech Stack
- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS v4
- **TypeScript:** Full type coverage
- **Data:** Mock data simulation (no external APIs)
- **Fonts:** Geist Sans & Geist Mono

### Key Files
- `src/data/mockData.ts` - Contains all A/B test data structures and sample data
- `src/app/page.tsx` - Main dashboard (currently Next.js default - needs replacement)
- Design specs in `requirements.md` and `design-system.md`

### Data Architecture
The mock data follows a structured approach for A/B testing metrics:

- **ABTestData** interface defines complete test structure
- **VariantData** handles control vs variant comparisons  
- **TimelineData** tracks daily performance metrics
- Pre-built sample data with realistic e-commerce metrics

### Design System Requirements

**Bad Version Aesthetics:**
- Generic grays (#666, #999)
- Dense tables, small text
- Bootstrap-like basic styling
- No visual hierarchy

**Good Version Aesthetics:**
- E-commerce colors: Green (#10B981), Blue (#3B82F6), Red (#EF4444)
- Card-based layout with generous whitespace
- Charts over tables (consider Recharts integration)
- Mobile-first responsive design

### Component Priority Order
1. Revenue impact ($$$ - most important)
2. Conversion rate comparison  
3. Statistical confidence
4. Traffic distribution
5. Timeline/duration

## Key Metrics to Display
- Conversion rate comparison
- Revenue impact ($)
- Statistical significance  
- Traffic split
- Test duration/timeline

## Transformation Trigger
Include a prominent "Make This Better" button that triggers the complete redesign transformation with smooth animation between states.