import React from 'react';

const BonusSection: React.FC = () => {
    return (
        <section className="bg-yellow-50 border border-yellow-200 p-2">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-800">III. Bonus Part</h2>
            <ul className="list-disc pl-5 mb-4 text-yellow-700">
                <li>Bonus points awarded for additional modules beyond the required 7 Major ones.</li>
                <li>5 points per extra Minor Module.</li>
                <li>10 points per extra Major Module.</li>
                <li><strong>Crucially:</strong> The bonus part is only assessed if the <strong>Mandatory Part is PERFECT</strong>.</li>
            </ul>
        </section>
    );
};

export default BonusSection; 