import React from 'react';

interface ModuleItemProps {
    type: 'Major' | 'Minor';
    title: string;
    children: React.ReactNode;
    isSelected?: boolean;
    onToggle?: () => void;
}

const ModuleItem: React.FC<ModuleItemProps> = ({ type, title, children, isSelected = false, onToggle }) => {
    const badgeClass = type === 'Major' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800';
    const selectedClass = isSelected ? 'bg-blue-50 border-blue-200' : '';

    return (
        <details className={`border rounded-lg p-2 ${selectedClass}`}>
            <summary className="flex items-center gap-2 cursor-pointer">
                <input 
                    type="checkbox" 
                    checked={isSelected}
                    onChange={(e) => {
                        e.stopPropagation();
                        onToggle?.();
                    }}
                    className="checkbox checkbox-sm"
                />
                <span className={`text-xs px-1.5 py-0.5 rounded ${badgeClass}`}>{type}</span> 
                <span className="font-medium">{title}</span>
            </summary>
            <div className="mt-2 pl-6">
                {children}
            </div>
        </details>
    );
};

export default ModuleItem; 