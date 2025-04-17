import React, { useEffect, useRef } from 'react';

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
    const detailsRef = useRef<HTMLDetailsElement>(null);
    const [isHighlighted, setIsHighlighted] = React.useState(false);
    const moduleId = `module-${title.replace(/\s+/g, '-').toLowerCase()}`;
    const highlightTimeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && window.location.hash === `#${moduleId}`) {
                    // Clear any existing timeout
                    if (highlightTimeoutRef.current !== null) {
                        window.clearTimeout(highlightTimeoutRef.current);
                    }
                    
                    setIsHighlighted(true);
                    highlightTimeoutRef.current = window.setTimeout(() => {
                        setIsHighlighted(false);
                        // Clear the hash after highlighting
                        if (window.location.hash === `#${moduleId}`) {
                            window.history.replaceState(null, '', window.location.pathname);
                        }
                    }, 1500);
                }
            },
            { threshold: 0.5 }
        );

        if (detailsRef.current) {
            observer.observe(detailsRef.current);
        }

        return () => {
            if (detailsRef.current) {
                observer.unobserve(detailsRef.current);
            }
            if (highlightTimeoutRef.current !== null) {
                window.clearTimeout(highlightTimeoutRef.current);
            }
        };
    }, [moduleId]);

    return (
        <details 
            ref={detailsRef}
            id={moduleId}
            className={`border rounded-lg p-2 ${selectedClass} ${isHighlighted ? 'highlight' : ''}`}
        >
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