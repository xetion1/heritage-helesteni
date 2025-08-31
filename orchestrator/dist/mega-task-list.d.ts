export interface MegaTask {
    id: string;
    category: string;
    subcategory?: string;
    name: string;
    command?: string;
    filePath?: string;
    dependencies?: string[];
    priority?: number;
    estimatedTime?: number;
}
export declare function generateMegaTaskList(): MegaTask[];
//# sourceMappingURL=mega-task-list.d.ts.map