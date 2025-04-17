import React from 'react';
import { moduleCategories } from '../data/modules.tsx';

interface ScoreCalculatorProps {
    selectedModules: string[];
}

const ScoreCalculator: React.FC<ScoreCalculatorProps> = ({ selectedModules }) => {
    // Get all modules flattened
    const allModules = moduleCategories.flatMap(category =>
        category.modules.map(module => ({
            ...module,
            category: category.title
        }))
    );

    // Filter selected modules and count major/minor
    const selectedModuleDetails = selectedModules.map(title =>
        allModules.find(m => m.title === title)
    ).filter(Boolean);

    const majorCount = selectedModuleDetails.filter(m => m?.type === 'Major').length;
    const minorCount = selectedModuleDetails.filter(m => m?.type === 'Minor').length;

    // Calculate score
    const majorScore = majorCount;
    const minorScore = minorCount * 0.5; // Each minor is worth 0.5 points
    const totalScore = majorScore + minorScore;
    const requiredScore = 7; // Required major modules
    const isComplete = totalScore >= requiredScore;

    // Calculate percentage
    const bonusPercentage = (totalScore - 7) * 10;
    const percentage = totalScore < 7 ? 0 : 100 + bonusPercentage;

    return (
        <div className="mb-4 p-3 bg-white rounded-lg shadow sticky top-0 z-10 grid grid-cols-2 gap-4 items-center">
            <div className={`text-6xl font-bold text-center ${isComplete ? 'text-green-600' : 'text-red-600'}`}>
                {percentage}%
            </div>
            <div className="space-y-2 ">
                <div className="flex justify-between items-center">
                    <span className="text-sm">Major Modules:</span>
                    <span className="text-sm font-medium">{majorCount}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm">Minor Modules (0.5 points each):</span>
                    <span className="text-sm font-medium">{minorCount} = {minorScore}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Total Score:</span>
                        <span className={`text-sm font-bold ${isComplete ? 'text-green-600' : 'text-red-600'}`}>
                            {totalScore.toFixed(1)} / {requiredScore}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScoreCalculator; 