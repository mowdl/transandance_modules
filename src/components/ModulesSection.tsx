import React from 'react';
import ModuleItem from './ModuleItem';
import { moduleCategories } from '../data/modules.tsx';

interface ModulesSectionProps {
  selectedModules: string[];
  onModuleToggle: (module: string) => void;
}

const ModulesSection: React.FC<ModulesSectionProps> = ({ selectedModules, onModuleToggle }) => {
    return (
        <section id="modules">
            <h2 className="text-2xl font-semibold mb-4">II. Modules</h2>
            <p className="mb-4 text-gray-600">
                A minimum of <strong>7 Major Modules</strong> is required for 100% completion. <br />
                <span className="text-sm">(Note: 2 Minor Modules count as 1 Major Module)</span>.
            </p>

            {moduleCategories.map((category) => (
                <div key={category.title}>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <div className="space-y-2">
                        {category.modules.map((module) => (
                            <ModuleItem
                                key={module.title}
                                type={module.type}
                                title={module.title}
                                isSelected={selectedModules.includes(module.title)}
                                onToggle={() => onModuleToggle(module.title)}
                            >
                                {module.description}
                            </ModuleItem>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ModulesSection; 