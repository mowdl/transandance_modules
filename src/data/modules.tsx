import { ModulesData } from '../types/modules';
import React from 'react';

export interface Module {
    type: 'Major' | 'Minor';
    title: string;
    description: React.ReactNode;
}

export interface ModuleCategory {
    title: string;
    modules: Module[];
}

export const moduleCategories: ModuleCategory[] = [
    {
        title: "A. Web",
        modules: [
            {
                type: "Major",
                title: "Use Fastify with Node.js for the Backend",
                description: <>Use <strong>Fastify with Node.js</strong>. (Overrides default PHP requirement if backend is used).</>
            },
            {
                type: "Minor",
                title: "Use Tailwind CSS with Typescript for the Frontend",
                description: <>Use <strong>Tailwind CSS</strong> in addition to Typescript. (Overrides default frontend constraints).</>
            },
            {
                type: "Minor",
                title: "Use SQLite for the Database",
                description: <>Use <strong>SQLite</strong> for all DB instances. (May be prerequisite for other modules like Backend Framework).</>
            },
            {
                type: "Major",
                title: "Store Scores on Avalanche Blockchain using Solidity",
                description: <>Implement secure storage of tournament scores on a testing blockchain (<strong>Avalanche</strong>) using <strong>Solidity</strong> smart contracts. Requires integration with the website for recording, managing, and retrieving scores. May require backend adjustments.</>
            }
        ]
    },
    {
        title: "B. User Management",
        modules: [
            {
                type: "Major",
                title: "Implement Standard User Management (Auth, Profile, Friends, History)",
                description: <>Implement secure user subscription, login, unique display names, profile updates (info, avatar with default), friends list with status, profile stats (wins/losses), and match history (1v1, dates, details). Handle duplicate usernames/emails logically. (Replaces basic alias registration).</>
            },
            {
                type: "Major",
                title: "Implement Remote Authentication with Google Sign-in",
                description: <>Integrate <strong>Google Sign-in</strong>. Obtain necessary credentials, implement user-friendly and secure login/authorization flows, and ensure secure token/info exchange. Handle potential duplicate usernames/emails logically.</>
            }
        ]
    },
    {
        title: "C. Gameplay and User Experience",
        modules: [
            {
                type: "Major",
                title: "Enable Remote Multiplayer Pong",
                description: <>Allow two players on separate computers to play the same Pong game via the website. Handle network issues (disconnections, lag) gracefully for the best user experience. (Enhances mandatory same-keyboard play).</>
            },
            {
                type: "Major",
                title: "Enable Multiplayer Pong (>2 Players)",
                description: <>Support more than two players (e.g., 3, 4, 5, 6+) in a single game. Requires live control (Remote Players module recommended). Define game rules/board for the chosen number of players (e.g., 4 players on a square board).</>
            },
            {
                type: "Major",
                title: "Add Another Game with History & Matchmaking",
                description: <>Develop a new game distinct from Pong. Include user history tracking (gameplay stats) and a matchmaking system for the new game. Ensure secure storage and optimize performance.</>
            },
            {
                type: "Minor",
                title: "Add Game Customization Options (Power-ups, Maps)",
                description: <>Provide customization options (e.g., power-ups, attacks, maps) applicable to all available games. Allow users to choose a default/basic version. Implement user-friendly settings and maintain consistency across games.</>
            },
            {
                type: "Major",
                title: "Implement Live Chat (DMs, Blocks, Invites)",
                description: <>Create a chat feature allowing:
                    <ul>
                        <li>Sending direct messages to other users.</li>
                        <li>Blocking other users (hides their messages).</li>
                        <li>Inviting users to play Pong via chat.</li>
                        <li>Tournament system notifications for next games.</li>
                        <li>Accessing player profiles via chat.</li>
                    </ul>
                </>
            }
        ]
    },
    {
        title: "D. AI-Algo",
        modules: [
            {
                type: "Major",
                title: "Introduce a Challenging AI Opponent (No A*)",
                description: <>Develop a challenging AI opponent for Pong. AI must simulate human keyboard input (refreshing view only once per second, requiring anticipation). AI must use power-ups if the Customization module is implemented. **A\* algorithm is NOT permitted.** Explain AI logic during evaluation; AI must be capable of winning.</>
            },
            {
                type: "Minor",
                title: "Create User and Game Stats Dashboards",
                description: <>Create dashboards displaying individual user stats and game session details (outcomes, historical data). Use data visualization (charts, graphs). Allow users to explore their history/performance. Include any useful metrics.</>
            }
        ]
    },
    {
        title: "E. Cybersecurity",
        modules: [
            {
                type: "Major",
                title: "Implement WAF/ModSecurity & HashiCorp Vault",
                description: <>Configure and deploy a Web Application Firewall (WAF) and ModSecurity with a hardened configuration. Integrate HashiCorp Vault for secure management of secrets (API keys, credentials, env vars).</>
            },
            {
                type: "Minor",
                title: "Implement GDPR Compliance Options (Anonymization, Deletion)",
                description: <>Implement features allowing users to: request anonymization of personal data, manage local data (view/edit/delete), and request permanent account/data deletion. Provide clear communication and options. Familiarize with GDPR principles.</>
            },
            {
                type: "Major",
                title: "Implement 2FA and JWT Security",
                description: <>Implement 2FA (e.g., SMS, authenticator app, email codes) as a secondary verification layer. Utilize JSON Web Tokens (JWT) for secure authentication, authorization, and session management. Ensure secure token handling and user-friendly 2FA setup.</>
            }
        ]
    },
    {
        title: "F. Devops",
        modules: [
            {
                type: "Major",
                title: "Set up ELK Stack for Log Management",
                description: <>Set up the <strong>ELK Stack (Elasticsearch, Logstash, Kibana)</strong> for log management. Configure Elasticsearch for storage/indexing, Logstash for collection/processing, and Kibana for visualization/dashboards. Define retention policies and secure access.</>
            },
            {
                type: "Minor",
                title: "Set up Prometheus & Grafana Monitoring",
                description: <>Set up <strong>Prometheus</strong> for metrics collection/alerting and <strong>Grafana</strong> for visualization. Configure data exporters, create custom dashboards, set up alerting rules, manage data retention, and secure Grafana access.</>
            },
            {
                type: "Major",
                title: "Design Backend as Microservices",
                description: <>Architect the backend using microservices. Divide into loosely-coupled services with clear boundaries/interfaces. Implement inter-service communication (e.g., REST APIs, message queues). Each service should handle a specific function for maintainability and scalability.</>
            }
        ]
    },
    {
        title: "G. Graphics",
        modules: [
            {
                type: "Major",
                title: "Implement Advanced 3D Pong with Babylon.js",
                description: <>Enhance Pong's visuals using advanced 3D techniques with <strong>Babylon.js</strong> to create an immersive experience. (Overrides default/Frontend module implementation for Pong).</>
            }
        ]
    },
    {
        title: "H. Accessibility",
        modules: [
            {
                type: "Minor",
                title: "Ensure Responsive Support on All Devices",
                description: <>Ensure the website is responsive (adapts to different screen sizes/orientations) and works with various input methods (touch, keyboard, mouse) for a consistent experience across desktops, laptops, tablets, and smartphones.</>
            },
            {
                type: "Minor",
                title: "Expand Browser Compatibility",
                description: <>Add support for one additional web browser beyond the mandatory latest stable Firefox. Conduct testing and optimization to ensure correct function and display in the added browser.</>
            },
            {
                type: "Minor",
                title: "Implement Multiple Language Support (Min. 3)",
                description: <>Implement support for a minimum of three languages. Provide a language switcher. Translate essential content. Ensure seamless navigation regardless of language. Allow users to set a default language.</>
            },
            {
                type: "Minor",
                title: "Add Accessibility for Visually Impaired Users",
                description: <>Implement features like screen reader support, descriptive alt text for images, high-contrast color scheme, keyboard navigation/focus management, and text size adjustment options. Meet accessibility standards.</>
            },
            {
                type: "Minor",
                title: "Integrate Server-Side Rendering (SSR)",
                description: <>Integrate SSR to improve loading speed and SEO. Ensure content is pre-rendered on the server. Maintain a consistent user experience.</>
            }
        ]
    },
    {
        title: "I. Server-Side Pong",
        modules: [
            {
                type: "Major",
                title: "Implement Server-Side Pong & API",
                description: <>Develop server-side logic for Pong (gameplay, movement, scoring, interactions). Create an API with endpoints for game interaction (initialization, controls, state updates) accessible via CLI and web. Integrate with the web application.</>
            },
            {
                type: "Major",
                title: "Enable CLI vs. Web Pong Gameplay via API",
                description: <>Develop a CLI application for playing Pong. Use the API (from the previous module - strongly recommended) to connect the CLI to the web application, allowing CLI users to play against web users. Implement CLI authentication and real-time synchronization. Provide documentation.</>
            }
        ]
    }
];

export const modulesData: ModulesData = {
    requirements: {
        majorCount: 7,
        minorCount: 2
    },
    categories: moduleCategories
}; 