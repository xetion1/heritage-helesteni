# Research All - Parallel Research Agent

Researches Heleșteni area, latest npm packages, and design patterns in parallel.

## Execution

This agent will:
1. Search for real Heleșteni tourism information
2. Find latest npm package versions (Aug 2025)
3. Research heritage website design patterns
4. Save all findings for build phase

## Implementation

```typescript
// Launch three research agents in parallel
const researchTasks = [
  // Area Research
  Task.launch({
    type: 'general-purpose',
    prompt: `
      Research Heleșteni, Iași, Romania for tourism website:
      
      1. Use WebSearch to find:
         - "Heleșteni Iași Romania tourism attractions 2025"
         - "Casa Bunicii museum Heleșteni Romania"
         - "Traditional workshops Heleșteni crafts"
         - "Romanian village heritage Heleșteni"
         - "Local artisans Heleșteni Iași county"
      
      2. For each search result:
         - Extract location names and descriptions
         - Find opening hours and contact info
         - Identify unique features
         - Note historical significance
      
      3. Structure the data and save to /data/area-research.json with:
         - Museums (name, description, hours, location)
         - Workshops (type, artisan, booking info)
         - Attractions (name, type, significance)
         - Events (seasonal, annual, special)
         - Local businesses (restaurants, accommodation)
      
      4. Also search for images and create /data/image-references.json
      
      Return a summary of findings.
    `
  }),
  
  // Package Research
  Task.launch({
    type: 'general-purpose',
    prompt: `
      Research latest npm packages for August 2025:
      
      1. Search for current versions:
         - "Next.js 15 latest features August 2025"
         - "React 19 hooks documentation 2025"
         - "shadcn/ui components latest version"
         - "Framer Motion v12 animations 2025"
         - "Three.js r160 documentation"
         - "Prisma 6 edge runtime 2025"
         - "TanStack Query v6 features"
         - "TypeScript 5.6 new features"
      
      2. For each package:
         - Find exact version number
         - Check compatibility
         - Note breaking changes
         - Find installation commands
      
      3. Generate complete package.json with:
         - Exact version numbers
         - All dependencies
         - Dev dependencies
         - Scripts for dev, build, test
      
      4. Save to /package-latest.json
      
      Return summary of packages and versions.
    `
  }),
  
  // Design Research
  Task.launch({
    type: 'general-purpose',
    prompt: `
      Research heritage tourism website design for 2025:
      
      1. Search for design patterns:
         - "heritage tourism website design trends 2025"
         - "museum website UX best practices"
         - "Romanian traditional design elements web"
         - "cultural tourism color palettes"
         - "booking system UX patterns 2025"
      
      2. Analyze findings for:
         - Color schemes (with hex codes)
         - Typography recommendations
         - Layout patterns
         - Navigation styles
         - Interactive elements
         - Mobile considerations
      
      3. Create design system with:
         - Color palette (primary, secondary, accent)
         - Font pairings
         - Spacing system
         - Component patterns
         - Animation guidelines
      
      4. Save to /design-system.json
      
      Return design recommendations summary.
    `
  })
];

// Execute all research in parallel
await Promise.all(researchTasks);
```