import React from 'react';

const MandatorySection: React.FC = () => {
    return (
        <section id="mandatory">
            <h2 className="text-2xl font-semibold mb-4">I. Mandatory Part</h2>
            <p className="mb-4 text-gray-600">Minimum requirements for the project website.</p>
            <h3 className="text-xl font-semibold">A. Overview</h3>
            <ul className="list-disc pl-5 mb-4">
                <li>Create a website for the Pong contest.</li>
                <li>Must offer a nice user interface.</li>
                <li>Must include real-time multiplayer capabilities for Pong.</li>
            </ul>

            <h3 className="text-xl font-semibold">B. Minimal Technical Requirements</h3>
            <ul className="list-disc pl-5 mb-4">
                <li><strong>Backend:</strong>
                    <ul className="list-circle pl-5 mt-1">
                        <li>Optional.</li>
                        <li>If included, must be pure PHP without frameworks <span className="text-sm text-gray-500">(can be overridden by the Framework module)</span>.</li>
                        <li>If a database is used, must follow the Database module constraints (<code>SQLite</code>).</li>
                    </ul>
                </li>
                <li><strong>Frontend:</strong>
                    <ul className="list-circle pl-5 mt-1">
                        <li>Must use <code>Typescript</code> as the base code <span className="text-sm text-gray-500">(can be modified by the FrontEnd module - Tailwind CSS + Typescript)</span>.</li>
                    </ul>
                </li>
                <li><strong>Website Architecture:</strong>
                    <ul className="list-circle pl-5 mt-1">
                        <li>Must be a Single-Page Application (SPA).</li>
                        <li>Browser's Back and Forward buttons must function correctly.</li>
                    </ul>
                </li>
                <li><strong>Compatibility:</strong> Must be compatible with the latest stable version of Mozilla Firefox.</li>
                <li><strong>Error Handling:</strong> No unhandled errors or warnings when browsing the website.</li>
                <li><strong>Deployment:</strong>
                    <ul className="list-circle pl-5 mt-1">
                        <li>Must use Docker.</li>
                        <li>Everything must launch with a single command line (e.g., <code>docker run ...</code> or <code>docker-compose up</code>).</li>
                        <li>Be aware of potential rootless Docker constraints on campus computers (runtime location, bind-mounts).</li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-xl font-semibold">C. Game (Pong)</h3>
            <ul className="list-disc pl-5 mb-4">
                <li><strong>Core Gameplay:</strong> Live Pong game against another player on the same keyboard <span className="text-sm text-gray-500">(can be enhanced with the "Remote players" module)</span>.</li>
                <li><strong>Tournament System:</strong>
                    <ul className="list-circle pl-5 mt-1">
                        <li>Must support multiple players.</li>
                        <li>Must clearly display who is playing whom and the order of play.</li>
                        <li>Requires a matchmaking system to organize participants and announce matches.</li>
                    </ul>
                </li>
                <li><strong>Registration:</strong>
                    <ul className="list-circle pl-5 mt-1">
                        <li>Basic registration system required: players input an alias at the start of a tournament.</li>
                        <li>Aliases reset when a new tournament begins.</li>
                        <li><span className="text-sm text-gray-500">(Can be modified/replaced by the "Standard User Management" module)</span>.</li>
                    </ul>
                </li>
                <li><strong>Fairness:</strong> All players (including AI, if implemented) must have identical paddle speeds.</li>
                <li><strong>Implementation:</strong>
                    <ul className="list-circle pl-5 mt-1">
                        <li>Must adhere to default frontend constraints (<code>Typescript</code>) OR use the FrontEnd module (<code>Tailwind CSS</code> + <code>Typescript</code>) OR the Graphics module (<code>Babylon.js</code>).</li>
                        <li>Must capture the essence of the original Pong (1972), though visual aesthetics can vary.</li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-xl font-semibold">D. Security Concerns</h3>
            <ul className="list-disc pl-5 mb-4">
                <li><strong>Password Storage:</strong> Any stored passwords must be hashed.</li>
                <li><strong>Vulnerabilities:</strong> Must be protected against SQL injections and XSS attacks.</li>
                <li><strong>Encryption:</strong> HTTPS connection is mandatory for all aspects if a backend or other features requiring secure connections are used (e.g., use <code>wss</code> instead of <code>ws</code>).</li>
                <li><strong>Input Validation:</strong> Must implement validation for forms and any user input (client-side if no backend, server-side if backend exists).</li>
                <li><strong>General Security:</strong> Prioritize website security (e.g., protecting API routes) even if not implementing the JWT/2FA module.</li>
                <li><strong>Credentials:</strong> No credentials, API keys, etc., should be stored in the git repository (use <code>.env</code> files).</li>
            </ul>
        </section>
    );
};

export default MandatorySection; 