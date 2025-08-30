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
export declare class AgentOrchestrator {
    private config;
    private results;
    private startTime;
    constructor(config?: Partial<OrchestratorConfig>);
    executeMasterPlan(): Promise<void>;
    private executeResearchPhase;
    private executeSetupPhase;
    private executeBuildPhase;
    private executeTestPhase;
    private executeFixPhase;
    private executeOptimizationPhase;
    private executeVerificationPhase;
    private executeAgent;
    private executeParallelTasks;
    private executeWithDependencies;
    private executeWithDependencyGraph;
    private executeTestSuite;
    private executeAutoFix;
    private runAgentTask;
    private buildDependencyGraph;
    private topologicalSort;
    private getSeverityWeight;
    private generateFinalReport;
    private log;
    private logError;
}
export default AgentOrchestrator;
//# sourceMappingURL=agent-orchestrator.d.ts.map