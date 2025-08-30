# Claude Agents Research & Implementation Guide

## 📚 Research Phase: Understanding Claude Agents

### 1. Claude Agent Architecture
```typescript
// Claude agents use the Task tool for autonomous operation
// They can work independently and in parallel

const agent = await Task.launch({
  type: 'general-purpose',  // or 'output-style-setup', 'statusline-setup'
  prompt: `
    Your detailed instructions here.
    Be specific about:
    1. What to research
    2. What to build
    3. How to validate
    4. What to return
  `
});
```

### 2. Agent Capabilities
- **File Operations**: Read, Write, Edit, MultiEdit
- **Web Research**: WebSearch, WebFetch
- **Code Execution**: Bash, BashOutput
- **Pattern Matching**: Glob, Grep
- **Visual Testing**: MCP Playwright integration
- **Task Management**: TodoWrite

### 3. Playwright MCP Integration
```typescript
// Visual testing with Playwright MCP
const visualTestingCommands = {
  navigate: 'mcp__playwright__browser_navigate',
  screenshot: 'mcp__playwright__browser_screenshot',
  click: 'mcp__playwright__browser_click',
  fill: 'mcp__playwright__browser_fill',
  viewport: 'mcp__playwright__browser_set_viewport',
  console: 'mcp__playwright__browser_console_messages'
};
```

---

## 🤖 Agent Implementation Strategy

### PHASE 1: Research Agents

#### Agent 1: Area Research Specialist
```yaml
name: area-research-agent
type: general-purpose
capabilities:
  - WebSearch for Heleșteni information
  - Extract and structure data
  - Save findings to JSON
  - Cross-reference multiple sources
```

#### Agent 2: Package Discovery Agent
```yaml
name: package-research-agent
type: general-purpose
capabilities:
  - Search npm registry
  - Check package versions (Aug 2025)
  - Read documentation
  - Compare alternatives
  - Generate package.json
```

#### Agent 3: Design Pattern Analyst
```yaml
name: design-research-agent
type: general-purpose
capabilities:
  - Research heritage website designs
  - Analyze color schemes
  - Find UI/UX patterns
  - Create design system
```

### PHASE 2: Build Agents

#### Agent 4: Project Setup Agent
```yaml
name: setup-agent
type: general-purpose
capabilities:
  - Initialize Next.js project
  - Install dependencies
  - Configure TypeScript
  - Set up folder structure
  - Create base configuration
```

#### Agent 5: Component Builder Agent
```yaml
name: component-agent
type: general-purpose
capabilities:
  - Create React components
  - Implement shadcn/ui
  - Add Framer Motion animations
  - Build responsive layouts
  - Create reusable UI elements
```

#### Agent 6: Database Agent
```yaml
name: database-agent
type: general-purpose
capabilities:
  - Set up Prisma schema
  - Create migrations
  - Seed database
  - Build API endpoints
  - Implement tRPC
```

### PHASE 3: Testing & Validation Agents

#### Agent 7: Visual Testing Agent (Playwright MCP)
```yaml
name: visual-testing-agent
type: general-purpose
capabilities:
  - Launch dev server
  - Navigate to pages
  - Take screenshots
  - Check responsive design
  - Verify visual consistency
  - Test interactions
```

#### Agent 8: Bug Detection Agent
```yaml
name: bug-detection-agent
type: general-purpose
capabilities:
  - Monitor console errors
  - Check TypeScript errors
  - Validate accessibility
  - Test performance
  - Check SEO issues
```

#### Agent 9: Terminal Monitor Agent
```yaml
name: terminal-monitor-agent
type: general-purpose
capabilities:
  - Run npm run dev
  - Monitor build output
  - Catch compilation errors
  - Watch for warnings
  - Track performance metrics
```

---

## 🎯 Master Orchestrator Agent

```typescript
// This is the main agent that coordinates all sub-agents
async function MasterOrchestratorAgent() {
  // Phase 1: Research (Parallel)
  const researchResults = await Promise.all([
    Task.launch({
      type: 'general-purpose',
      prompt: `
        Research Heleșteni area for tourism information:
        1. Search for "Heleșteni Iași Romania tourism attractions"
        2. Find museums, especially "Casa Bunicii"
        3. Discover local workshops and artisans
        4. Find cultural events and traditions
        5. Save all findings to /data/area-research.json
      `
    }),
    
    Task.launch({
      type: 'general-purpose',
      prompt: `
        Research latest npm packages for August 2025:
        1. Search for "Next.js 15 latest version npm 2025"
        2. Find React 19 features and installation
        3. Check shadcn/ui latest components
        4. Research Three.js r160 for 3D tours
        5. Generate package.json with exact versions
      `
    }),
    
    Task.launch({
      type: 'general-purpose',
      prompt: `
        Research heritage tourism website design:
        1. Search "heritage tourism website design best practices 2025"
        2. Find Romanian cultural design elements
        3. Research color palettes for heritage sites
        4. Find accessibility standards
        5. Create design-system.json with findings
      `
    })
  ]);
  
  // Phase 2: Setup & Build (Parallel)
  const buildResults = await Promise.all([
    Task.launch({
      type: 'general-purpose',
      prompt: `
        Set up Next.js project with researched packages:
        1. Read package.json from research phase
        2. Run npx create-next-app@latest with TypeScript
        3. Install all dependencies with exact versions
        4. Configure next.config.js for i18n and images
        5. Set up folder structure according to plan
      `
    }),
    
    Task.launch({
      type: 'general-purpose',
      prompt: `
        Create database schema with Prisma:
        1. Install Prisma 6.0.0
        2. Create schema for museums, workshops, bookings
        3. Use researched area data for seed file
        4. Set up tRPC for type-safe API
        5. Create CRUD operations for all models
      `
    })
  ]);
  
  // Phase 3: Component Development (Sequential batches)
  await Task.launch({
    type: 'general-purpose',
    prompt: `
      Build UI components with shadcn/ui:
      1. Install shadcn/ui components
      2. Create MuseumCard with data from research
      3. Build WorkshopBooking component
      4. Create InteractiveMap for Heleșteni area
      5. Implement responsive navigation
      6. Add loading states and error boundaries
    `
  });
  
  // Phase 4: Visual Testing with Playwright MCP
  await Task.launch({
    type: 'general-purpose',
    prompt: `
      Test visual appearance and functionality:
      1. Start dev server with 'npm run dev'
      2. Use mcp__playwright__browser_navigate to visit localhost:3000
      3. Take screenshots with mcp__playwright__browser_screenshot
      4. Test responsive design at 320px, 768px, 1440px viewports
      5. Check for visual bugs and inconsistencies
      6. Use mcp__playwright__browser_console_messages to catch errors
      7. Click interactive elements to test functionality
      8. Generate visual test report
    `
  });
  
  // Phase 5: Bug Detection & Fixes
  await Task.launch({
    type: 'general-purpose',
    prompt: `
      Monitor and fix any issues:
      1. Check terminal output for build errors
      2. Run TypeScript compiler to find type errors
      3. Check browser console for runtime errors
      4. Validate accessibility with automated tools
      5. Fix any issues found
      6. Re-run tests to confirm fixes
    `
  });
}
```

---

## 🚀 Execution Commands

### Step 1: Research Everything First
```bash
# This command launches all research agents in parallel
/agent-research-all
```

### Step 2: Initialize Project
```bash
# Set up Next.js with researched configuration
/agent-setup-project
```

### Step 3: Build Components
```bash
# Build all components in parallel batches
/agent-build-components
```

### Step 4: Visual Testing
```bash
# Run Playwright MCP visual tests
/agent-visual-test
```

### Step 5: Monitor & Fix
```bash
# Continuous monitoring and bug fixing
/agent-monitor-fix
```

### Or Run Everything at Once:
```bash
# Master command that orchestrates all agents
/agent-orchestrator-master
```

---

## 📊 Real-Time Progress Monitoring

```typescript
// The system will show progress like this:
Heritage Platform Build Progress
═══════════════════════════════════════════════════════════
RESEARCH PHASE [████████████████████] 100% Complete
- Area Data: ✅ Found 12 attractions in Heleșteni
- Packages: ✅ Latest versions identified (Aug 2025)
- Design: ✅ Heritage patterns analyzed

BUILD PHASE [████████████░░░░░░░] 65% In Progress
- Setup: ✅ Next.js 15 initialized
- Database: ✅ Prisma schema created
- Components: 🔄 Building (12/20 components)
- Pages: ⏸️ Queued

TESTING PHASE [░░░░░░░░░░░░░░░░░░░] 0% Queued
- Visual Tests: ⏸️ Waiting
- Bug Detection: ⏸️ Waiting
- Performance: ⏸️ Waiting

Terminal Output:
✓ Compiled in 245ms
✓ Ready on http://localhost:3000
⚠ Fast refresh enabled
═══════════════════════════════════════════════════════════
```

---

## 🐛 Bug Detection Strategy

### Terminal Monitoring
```typescript
// Agent monitors npm run dev output
const terminalMonitor = {
  errors: [
    'Module not found',
    'Type error',
    'Build error',
    'Compilation failed'
  ],
  warnings: [
    'Deprecation warning',
    'Performance warning',
    'Security vulnerability'
  ],
  autoFix: {
    'Module not found': 'npm install missing-module',
    'Type error': 'Fix TypeScript types',
    'Build error': 'Check syntax and imports'
  }
};
```

### Visual Bug Detection with Playwright
```typescript
// Agent uses Playwright MCP to find visual bugs
const visualBugDetection = {
  checks: [
    'Layout shifts',
    'Broken images',
    'Text overflow',
    'Color contrast',
    'Mobile responsiveness',
    'Interactive elements',
    'Loading states'
  ],
  actions: [
    'mcp__playwright__browser_navigate("http://localhost:3000")',
    'mcp__playwright__browser_set_viewport(320, 568)', // Mobile
    'mcp__playwright__browser_screenshot("mobile-view")',
    'mcp__playwright__browser_set_viewport(1440, 900)', // Desktop
    'mcp__playwright__browser_screenshot("desktop-view")',
    'mcp__playwright__browser_console_messages()' // Check errors
  ]
};
```

---

## 🎯 Expected Results

After running all agents, you'll have:

1. **Fully Researched Content**
   - Real Heleșteni area information
   - Actual museums and attractions
   - Local artisan data
   - Cultural traditions

2. **Latest Technology Stack**
   - Next.js 15 (Aug 2025)
   - React 19 with latest features
   - Modern npm packages
   - AI integration

3. **Professional Design**
   - Heritage-appropriate colors
   - Romanian cultural elements
   - Responsive layouts
   - Accessibility compliant

4. **Thoroughly Tested**
   - No TypeScript errors
   - No console errors
   - Visually consistent
   - Performance optimized
   - All interactions working

5. **Production Ready**
   - Bug-free code
   - SEO optimized
   - PWA capable
   - Deploy-ready

---

**The agents work together to research, build, test, and fix everything automatically!** 🚀