import { exec } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs/promises';
import * as path from 'path';

const execAsync = promisify(exec);

interface OrchestratorConfig {
  mode: 'FULLY_AUTONOMOUS';
  stopOnError: boolean;
  parallelExecution: boolean;
  autoFix: boolean;
  silentMode: boolean;
  maxRetries: number;
  phases: {
    [key: string]: {
      timeout: number;
      parallel: boolean;
      autoRetry?: boolean;
      verify?: boolean;
    };
  };
}

interface Task {
  id: string;
  agent: string;
  task: string;
  deps?: string[];
  severity?: 'critical' | 'high' | 'medium' | 'low';
  autoRetry?: boolean;
  parallel?: boolean;
}

interface TaskResult {
  id: string;
  agent: string;
  task: string;
  status: 'success' | 'failed' | 'skipped';
  result?: any;
  error?: any;
  retries?: number;
  duration?: number;
}

export class AgentOrchestrator {
  private config: OrchestratorConfig;
  private results: Map<string, TaskResult[]> = new Map();
  private startTime: number = 0;

  constructor(config?: Partial<OrchestratorConfig>) {
    this.config = {
      mode: 'FULLY_AUTONOMOUS',
      stopOnError: false,
      parallelExecution: true,
      autoFix: true,
      silentMode: false,
      maxRetries: 5,
      phases: {
        research: { timeout: 300000, parallel: true },
        build: { timeout: 600000, parallel: true },
        test: { timeout: 300000, parallel: false },
        fix: { timeout: 300000, parallel: true, autoRetry: true },
        optimize: { timeout: 300000, parallel: true },
        deploy: { timeout: 300000, parallel: false, verify: true }
      },
      ...config
    };
  }

  async executeMasterPlan(): Promise<void> {
    this.startTime = Date.now();
    
    this.log('🎯 MASTER ORCHESTRATOR - NONSTOP MODE ACTIVATED');
    this.log('━'.repeat(60));

    try {
      // Phase 1: Research
      await this.executeResearchPhase();

      // Phase 2: Setup & Initialization
      await this.executeSetupPhase();

      // Phase 3: Build Components
      await this.executeBuildPhase();

      // Phase 4: Testing
      await this.executeTestPhase();

      // Phase 5: Auto-Fix
      await this.executeFixPhase();

      // Phase 6: Optimization
      await this.executeOptimizationPhase();

      // Phase 7: Verification
      await this.executeVerificationPhase();

      // Generate Final Report
      this.generateFinalReport();

    } catch (error) {
      this.logError('Critical orchestrator error:', error);
      if (this.config.stopOnError) {
        throw error;
      }
    }
  }

  private async executeResearchPhase(): Promise<void> {
    this.log('\n📊 PHASE 1: RESEARCH [PARALLEL]');
    
    const researchTasks: Task[] = [
      { id: 'area-research', agent: 'research', task: 'Research Heleșteni tourism data' },
      { id: 'tech-research', agent: 'research', task: 'Research latest 2025 tech stack' },
      { id: 'design-research', agent: 'research', task: 'Research heritage design patterns' },
      { id: 'competitor-analysis', agent: 'research', task: 'Analyze competitor heritage sites' }
    ];

    const results = await this.executeParallelTasks(researchTasks);
    this.results.set('research', results);
  }

  private async executeSetupPhase(): Promise<void> {
    this.log('\n🏗️ PHASE 2: SETUP [PARALLEL]');
    
    const setupTasks: Task[] = [
      { id: 'project-init', agent: 'setup', task: 'Initialize Next.js with TypeScript' },
      { id: 'deps-install', agent: 'setup', task: 'Install all dependencies', deps: ['project-init'] },
      { id: 'structure-create', agent: 'setup', task: 'Create folder structure', deps: ['project-init'] },
      { id: 'config-setup', agent: 'setup', task: 'Configure build tools', deps: ['deps-install'] }
    ];

    const results = await this.executeWithDependencies(setupTasks);
    this.results.set('setup', results);
  }

  private async executeBuildPhase(): Promise<void> {
    this.log('\n🎨 PHASE 3: BUILD COMPONENTS [PARALLEL]');
    
    const buildTasks: Task[] = [
      // Core Components
      { id: 'layout', agent: 'builder', task: 'Build layout components', deps: [] },
      { id: 'header', agent: 'builder', task: 'Build header navigation', deps: [] },
      { id: 'footer', agent: 'builder', task: 'Build footer component', deps: [] },
      
      // Pages - Can be built in parallel
      { id: 'homepage', agent: 'builder', task: 'Build homepage', deps: ['layout'] },
      { id: 'about', agent: 'builder', task: 'Build about page', deps: ['layout'] },
      { id: 'museums', agent: 'builder', task: 'Build museums page', deps: ['layout'] },
      { id: 'workshops', agent: 'builder', task: 'Build workshops page', deps: ['layout'] },
      { id: 'contact', agent: 'builder', task: 'Build contact page', deps: ['layout'] },
      
      // Features - Can be built in parallel
      { id: 'booking', agent: 'builder', task: 'Build booking system', deps: [] },
      { id: 'gallery', agent: 'builder', task: 'Build image gallery', deps: [] },
      { id: 'map', agent: 'builder', task: 'Build interactive map', deps: [] },
      { id: '3d-tour', agent: 'builder', task: 'Build 3D virtual tour', deps: [] }
    ];

    const results = await this.executeWithDependencyGraph(buildTasks);
    this.results.set('build', results);
  }

  private async executeTestPhase(): Promise<void> {
    this.log('\n🧪 PHASE 4: AUTOMATED TESTING');
    
    const testTasks: Task[] = [
      { id: 'unit-tests', agent: 'tester', task: 'Run unit tests', parallel: true },
      { id: 'integration-tests', agent: 'tester', task: 'Run integration tests', parallel: true },
      { id: 'visual-tests', agent: 'tester', task: 'Run Playwright visual tests', parallel: false },
      { id: 'accessibility', agent: 'tester', task: 'Run accessibility tests', parallel: true },
      { id: 'performance', agent: 'tester', task: 'Run performance tests', parallel: true }
    ];

    const results = await this.executeTestSuite(testTasks);
    this.results.set('tests', results);
  }

  private async executeFixPhase(): Promise<void> {
    this.log('\n🔧 PHASE 5: AUTO-FIX [INTELLIGENT]');
    
    const testResults = this.results.get('tests') || [];
    const failedTests = testResults.filter(r => r.status === 'failed');
    
    if (failedTests.length > 0) {
      const fixTasks: Task[] = failedTests.map(test => ({
        id: `fix-${test.id}`,
        agent: 'fixer',
        task: `Fix: ${test.task}`,
        severity: 'high',
        autoRetry: true
      }));

      const results = await this.executeAutoFix(fixTasks);
      this.results.set('fixes', results);
    } else {
      this.log('  ✅ No issues to fix');
    }
  }

  private async executeOptimizationPhase(): Promise<void> {
    this.log('\n⚡ PHASE 6: OPTIMIZATION [PARALLEL]');
    
    const optimizeTasks: Task[] = [
      { id: 'bundle-optimize', agent: 'optimizer', task: 'Optimize bundle size' },
      { id: 'image-optimize', agent: 'optimizer', task: 'Optimize images' },
      { id: 'code-split', agent: 'optimizer', task: 'Implement code splitting' },
      { id: 'cache-strategy', agent: 'optimizer', task: 'Implement caching strategy' },
      { id: 'seo-optimize', agent: 'optimizer', task: 'Optimize SEO meta tags' }
    ];

    const results = await this.executeParallelTasks(optimizeTasks);
    this.results.set('optimization', results);
  }

  private async executeVerificationPhase(): Promise<void> {
    this.log('\n✅ PHASE 7: FINAL VERIFICATION');
    
    const verifyTasks: Task[] = [
      { id: 'build-verify', agent: 'verifier', task: 'Verify production build' },
      { id: 'routes-verify', agent: 'verifier', task: 'Verify all routes' },
      { id: 'api-verify', agent: 'verifier', task: 'Verify API endpoints' },
      { id: 'deploy-ready', agent: 'verifier', task: 'Verify deployment readiness' }
    ];

    const results = await this.executeParallelTasks(verifyTasks);
    this.results.set('verification', results);
  }

  private async executeAgent(task: Task, retryCount = 0): Promise<TaskResult> {
    const startTime = Date.now();
    this.log(`  ⚙️  ${task.task}`);
    
    try {
      const result = await this.runAgentTask(task);
      const duration = Date.now() - startTime;
      
      this.log(`  ✅ ${task.id} completed (${duration}ms)`);
      return {
        ...task,
        status: 'success',
        result,
        duration,
        retries: retryCount
      };
    } catch (error) {
      const duration = Date.now() - startTime;
      this.log(`  ⚠️  ${task.id} failed: ${error}`);
      
      if (this.config.autoFix && retryCount < this.config.maxRetries) {
        this.log(`    🔄 Retrying ${task.id} (${retryCount + 1}/${this.config.maxRetries})...`);
        return this.executeAgent(task, retryCount + 1);
      }
      
      return {
        ...task,
        status: 'failed',
        error,
        duration,
        retries: retryCount
      };
    }
  }

  private async executeParallelTasks(tasks: Task[]): Promise<TaskResult[]> {
    if (!this.config.parallelExecution) {
      const results: TaskResult[] = [];
      for (const task of tasks) {
        results.push(await this.executeAgent(task));
      }
      return results;
    }

    return Promise.all(tasks.map(task => this.executeAgent(task)));
  }

  private async executeWithDependencies(tasks: Task[]): Promise<TaskResult[]> {
    const completed = new Map<string, TaskResult>();
    const results: TaskResult[] = [];

    while (completed.size < tasks.length) {
      const readyTasks = tasks.filter(task =>
        !completed.has(task.id) &&
        (!task.deps || task.deps.every(dep => completed.has(dep)))
      );

      if (readyTasks.length === 0) {
        throw new Error('Circular dependency detected in task graph');
      }

      const batchResults = await this.executeParallelTasks(readyTasks);
      
      for (const result of batchResults) {
        completed.set(result.id, result);
        results.push(result);
      }
    }

    return results;
  }

  private async executeWithDependencyGraph(tasks: Task[]): Promise<TaskResult[]> {
    const graph = this.buildDependencyGraph(tasks);
    const executionOrder = this.topologicalSort(graph);
    const results: TaskResult[] = [];

    for (const batch of executionOrder) {
      const batchTasks = batch.map(taskId => 
        tasks.find(t => t.id === taskId)!
      );
      const batchResults = await this.executeParallelTasks(batchTasks);
      results.push(...batchResults);
    }

    return results;
  }

  private async executeTestSuite(tasks: Task[]): Promise<TaskResult[]> {
    const results: TaskResult[] = [];
    
    const parallelTests = tasks.filter(t => t.parallel !== false);
    const sequentialTests = tasks.filter(t => t.parallel === false);

    // Execute parallel tests
    if (parallelTests.length > 0) {
      const parallelResults = await this.executeParallelTasks(parallelTests);
      results.push(...parallelResults);
    }

    // Execute sequential tests
    for (const test of sequentialTests) {
      results.push(await this.executeAgent(test));
    }

    return results;
  }

  private async executeAutoFix(fixTasks: Task[]): Promise<TaskResult[]> {
    const sortedTasks = fixTasks.sort((a, b) =>
      this.getSeverityWeight(b.severity) - this.getSeverityWeight(a.severity)
    );

    const results: TaskResult[] = [];
    
    for (const task of sortedTasks) {
      const result = await this.executeAgent(task);
      results.push(result);
    }

    return results;
  }

  private async runAgentTask(task: Task): Promise<any> {
    // Simulate agent execution - replace with actual implementation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate
        if (Math.random() > 0.1) {
          resolve({ success: true, data: `${task.task} completed` });
        } else {
          reject(new Error(`Failed to execute ${task.task}`));
        }
      }, Math.random() * 1000 + 500);
    });
  }

  private buildDependencyGraph(tasks: Task[]): Map<string, string[]> {
    const graph = new Map<string, string[]>();
    tasks.forEach(task => {
      graph.set(task.id, task.deps || []);
    });
    return graph;
  }

  private topologicalSort(graph: Map<string, string[]>): string[][] {
    const visited = new Set<string>();
    const batches: string[][] = [];

    while (visited.size < graph.size) {
      const batch = Array.from(graph.keys()).filter(node =>
        !visited.has(node) &&
        (graph.get(node) || []).every(dep => visited.has(dep))
      );

      if (batch.length === 0) {
        throw new Error('Circular dependency in task graph');
      }

      batch.forEach(node => visited.add(node));
      batches.push(batch);
    }

    return batches;
  }

  private getSeverityWeight(severity?: string): number {
    const weights: { [key: string]: number } = {
      critical: 3,
      high: 2,
      medium: 1,
      low: 0
    };
    return weights[severity || 'low'] || 0;
  }

  private generateFinalReport(): void {
    const duration = (Date.now() - this.startTime) / 1000;
    
    this.log('\n' + '='.repeat(60));
    this.log('📊 MASTER ORCHESTRATOR - FINAL REPORT');
    this.log('='.repeat(60));

    // Calculate success metrics
    let totalTasks = 0;
    let successfulTasks = 0;

    this.results.forEach((phaseResults) => {
      totalTasks += phaseResults.length;
      successfulTasks += phaseResults.filter(r => r.status === 'success').length;
    });

    const successRate = totalTasks > 0 ? (successfulTasks / totalTasks) * 100 : 0;

    this.log(`\n✅ Success Rate: ${successRate.toFixed(1)}%`);
    this.log(`⏱️  Total Duration: ${duration.toFixed(1)} seconds`);
    this.log(`📦 Total Tasks: ${totalTasks}`);
    this.log(`✅ Successful: ${successfulTasks}`);
    this.log(`❌ Failed: ${totalTasks - successfulTasks}`);

    // Phase summaries
    this.results.forEach((phaseResults, phase) => {
      this.log(`\n📌 ${phase.toUpperCase()}:`);
      const success = phaseResults.filter(r => r.status === 'success').length;
      const failed = phaseResults.filter(r => r.status === 'failed').length;
      
      this.log(`   ✅ Completed: ${success}/${phaseResults.length}`);
      if (failed > 0) {
        this.log(`   ❌ Failed: ${failed}`);
        phaseResults
          .filter(r => r.status === 'failed')
          .forEach(r => this.log(`      - ${r.task}`));
      }
      
      // Calculate average retry count
      const totalRetries = phaseResults.reduce((sum, r) => sum + (r.retries || 0), 0);
      if (totalRetries > 0) {
        this.log(`   🔄 Total retries: ${totalRetries}`);
      }
    });

    // Unresolved issues
    const fixes = this.results.get('fixes');
    if (fixes && fixes.some(f => f.status === 'failed')) {
      this.log('\n⚠️  UNRESOLVED ISSUES:');
      fixes
        .filter(f => f.status === 'failed')
        .forEach(f => this.log(`   - ${f.task}`));
    }

    // Deployment readiness
    const verification = this.results.get('verification');
    if (verification) {
      const allPassed = verification.every(r => r.status === 'success');
      this.log(`\n🚀 Deployment Ready: ${allPassed ? 'YES ✅' : 'NO ❌'}`);
    }

    this.log('\n' + '='.repeat(60));
    this.log('🎉 ORCHESTRATION COMPLETE!');
    this.log('='.repeat(60));
  }

  private log(message: string): void {
    if (!this.config.silentMode) {
      console.log(message);
    }
  }

  private logError(message: string, error: any): void {
    console.error(message, error);
  }
}

// Export for CLI usage
export default AgentOrchestrator;