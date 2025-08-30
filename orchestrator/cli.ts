#!/usr/bin/env node

import { AgentOrchestrator } from './agent-orchestrator';
import { parseArgs } from 'util';

interface CLIOptions {
  parallel: boolean;
  autoFix: boolean;
  maxRetries: number;
  silent: boolean;
  stopOnError: boolean;
}

function parseCommandLineArgs(): CLIOptions {
  const options: CLIOptions = {
    parallel: true,
    autoFix: true,
    maxRetries: 5,
    silent: false,
    stopOnError: false
  };

  const args = process.argv.slice(2);
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    switch (arg) {
      case '--parallel':
        options.parallel = true;
        break;
      case '--no-parallel':
        options.parallel = false;
        break;
      case '--auto-fix':
        options.autoFix = true;
        break;
      case '--no-auto-fix':
        options.autoFix = false;
        break;
      case '--max-retries':
        const retries = parseInt(args[++i]);
        if (!isNaN(retries) && retries >= 0) {
          options.maxRetries = retries;
        }
        break;
      case '--silent':
        options.silent = true;
        break;
      case '--verbose':
        options.silent = false;
        break;
      case '--stop-on-error':
        options.stopOnError = true;
        break;
      case '--no-stop-on-error':
        options.stopOnError = false;
        break;
      case '--help':
      case '-h':
        printHelp();
        process.exit(0);
        break;
      default:
        if (arg.startsWith('--max-retries=')) {
          const value = arg.split('=')[1];
          const retries = parseInt(value);
          if (!isNaN(retries) && retries >= 0) {
            options.maxRetries = retries;
          }
        }
    }
  }
  
  return options;
}

function printHelp(): void {
  console.log(`
🚀 AGENT ORCHESTRATOR MASTER - NONSTOP VERSION

Usage: agent-orchestrator-master-nonstop [options]

Options:
  --parallel              Enable parallel execution (default: true)
  --no-parallel           Disable parallel execution
  --auto-fix              Enable auto-fix mode (default: true)
  --no-auto-fix           Disable auto-fix mode
  --max-retries=<n>       Set maximum retry attempts (default: 5)
  --silent                Run in silent mode
  --verbose               Run in verbose mode (default)
  --stop-on-error         Stop execution on critical errors
  --no-stop-on-error      Continue despite errors (default)
  -h, --help              Show this help message

Examples:
  # Run with default settings
  agent-orchestrator-master-nonstop

  # Run with custom retry limit
  agent-orchestrator-master-nonstop --max-retries=10

  # Run without parallel execution
  agent-orchestrator-master-nonstop --no-parallel

  # Run in silent mode for CI/CD
  agent-orchestrator-master-nonstop --silent --stop-on-error
`);
}

async function main(): Promise<void> {
  const options = parseCommandLineArgs();
  
  console.log('🚀 Starting Agent Orchestrator Master - Nonstop Version');
  console.log('Configuration:', {
    parallel: options.parallel,
    autoFix: options.autoFix,
    maxRetries: options.maxRetries,
    silent: options.silent,
    stopOnError: options.stopOnError
  });
  console.log('');

  const orchestrator = new AgentOrchestrator({
    parallelExecution: options.parallel,
    autoFix: options.autoFix,
    maxRetries: options.maxRetries,
    silentMode: options.silent,
    stopOnError: options.stopOnError
  });

  try {
    await orchestrator.executeMasterPlan();
    process.exit(0);
  } catch (error) {
    console.error('❌ Orchestrator failed with critical error:', error);
    process.exit(1);
  }
}

// Run the orchestrator
if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { main };