interface DetailedTask {
    id: string;
    category: string;
    name: string;
    command?: string;
    filePath?: string;
    content?: string;
    dependencies?: string[];
    retryable?: boolean;
}
export declare class RealTaskExecutor {
    private projectRoot;
    private completedTasks;
    constructor(projectRoot: string);
    executeRealTask(task: DetailedTask): Promise<any>;
    private executeResearchTask;
    private executeSetupTask;
    private executeComponentTask;
    private executePageTask;
    private executeFeatureTask;
    private executeTestTask;
    private executeOptimizationTask;
    private executeVerificationTask;
    private executeGenericTask;
    private generateComponentCode;
    private generateComponentStyles;
    private generateComponentTest;
    private generatePageCode;
    private generatePageMetadata;
    private toPascalCase;
}
export declare function generateAllTasks(): DetailedTask[];
export {};
//# sourceMappingURL=real-executor.d.ts.map