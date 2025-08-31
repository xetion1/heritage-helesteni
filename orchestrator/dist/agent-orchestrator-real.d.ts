export declare class RealAgentOrchestrator {
    private executor;
    private config;
    private results;
    private startTime;
    private totalTasksCount;
    private completedTasksCount;
    constructor(config?: any);
    executeMasterPlan(useMegaTaskList?: boolean): Promise<void>;
    private groupTasksByCategory;
    private executePhase;
    private executeTaskWithRetry;
    private showProgress;
    private createProgressBar;
    private generateFinalReport;
}
//# sourceMappingURL=agent-orchestrator-real.d.ts.map