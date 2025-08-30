# Visual Testing Agent - Playwright MCP

Uses Playwright MCP to test visual appearance and catch bugs.

## Execution

This agent will:
1. Start the dev server
2. Navigate to all pages
3. Test responsive design
4. Check for visual bugs
5. Monitor console errors
6. Generate test report

## Implementation

```typescript
// First ensure dev server is running
await Bash('npm run dev', { run_in_background: true });
await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for server

// Visual testing sequence
async function runVisualTests() {
  const testResults = [];
  
  // Test homepage at different viewports
  const viewports = [
    { width: 320, height: 568, name: 'mobile' },
    { width: 768, height: 1024, name: 'tablet' },
    { width: 1440, height: 900, name: 'desktop' },
    { width: 1920, height: 1080, name: 'full-hd' }
  ];
  
  for (const viewport of viewports) {
    // Set viewport
    await mcp__playwright__browser_set_viewport(viewport.width, viewport.height);
    
    // Navigate to homepage
    await mcp__playwright__browser_navigate('http://localhost:3000');
    
    // Wait for page load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Take screenshot
    await mcp__playwright__browser_screenshot(`homepage-${viewport.name}`);
    
    // Check console for errors
    const consoleMessages = await mcp__playwright__browser_console_messages();
    
    if (consoleMessages.errors?.length > 0) {
      testResults.push({
        page: 'homepage',
        viewport: viewport.name,
        errors: consoleMessages.errors
      });
    }
  }
  
  // Test all main pages
  const pages = [
    '/muzee',
    '/ateliere',
    '/experiente',
    '/despre',
    '/contact'
  ];
  
  for (const page of pages) {
    await mcp__playwright__browser_navigate(`http://localhost:3000${page}`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Desktop screenshot
    await mcp__playwright__browser_set_viewport(1440, 900);
    await mcp__playwright__browser_screenshot(`${page.replace('/', '')}-desktop`);
    
    // Mobile screenshot
    await mcp__playwright__browser_set_viewport(320, 568);
    await mcp__playwright__browser_screenshot(`${page.replace('/', '')}-mobile`);
    
    // Check for errors
    const messages = await mcp__playwright__browser_console_messages();
    if (messages.errors?.length > 0) {
      testResults.push({
        page,
        errors: messages.errors
      });
    }
  }
  
  // Test interactions
  await testInteractions();
  
  // Generate report
  await generateVisualTestReport(testResults);
}

async function testInteractions() {
  // Test navigation menu
  await mcp__playwright__browser_navigate('http://localhost:3000');
  await mcp__playwright__browser_click('button[aria-label="Menu"]');
  await mcp__playwright__browser_screenshot('mobile-menu-open');
  
  // Test search
  await mcp__playwright__browser_fill('input[name="search"]', 'muzeu');
  await mcp__playwright__browser_screenshot('search-results');
  
  // Test language switcher
  await mcp__playwright__browser_click('button[aria-label="Language"]');
  await mcp__playwright__browser_screenshot('language-menu');
  
  // Test booking form
  await mcp__playwright__browser_navigate('http://localhost:3000/ateliere');
  await mcp__playwright__browser_click('button:has-text("Rezervă")');
  await mcp__playwright__browser_screenshot('booking-modal');
}

async function generateVisualTestReport(results) {
  const report = {
    timestamp: new Date().toISOString(),
    totalErrors: results.reduce((acc, r) => acc + (r.errors?.length || 0), 0),
    details: results,
    screenshots: await Glob('*.png'),
    recommendations: []
  };
  
  // Add recommendations based on errors
  if (report.totalErrors > 0) {
    report.recommendations.push('Fix console errors before deployment');
  }
  
  // Save report
  await Write('/test-reports/visual-test-report.json', JSON.stringify(report, null, 2));
  
  console.log(`
    Visual Testing Complete
    ═══════════════════════════════
    Total Errors Found: ${report.totalErrors}
    Screenshots Taken: ${report.screenshots.length}
    Report saved to: /test-reports/visual-test-report.json
  `);
}

// Run the tests
await runVisualTests();
```