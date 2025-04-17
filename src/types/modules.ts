export type ModuleType = 'Major' | 'Minor';

export interface ModuleItem {
    type: ModuleType;
    title: string;
    description: string | React.ReactNode;
}

export interface ModuleCategory {
    title: string;
    items: ModuleItem[];
}

export interface ModulesData {
    categories: ModuleCategory[];
    requirements: {
        majorCount: number;
        minorCount: number;
    };
} 