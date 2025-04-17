import React from 'react';


export type ModuleType = 'Major' | 'Minor';

export interface ModuleItem {
    type: ModuleType;
    title: string;
    description: string | React.ReactNode;
}

export interface ModulesData {
    categories: ModuleCategory[];
    requirements: {
        majorCount: number;
        minorCount: number;
    };
} 

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
                description: <>
                    In this major module, you are required to use a specific web framework for backend development: <strong>Fastify with Node.js</strong>.<br/>
                    You can create the backend without using the constraints of this module by using the default backend language (as specified above in the mandatory part). However, this module will only be valid if you follow its requirements.
                </>
            },
            {
                type: "Minor",
                title: "Use Tailwind CSS with Typescript for the Frontend",
                description: <>
                    Your frontend development must use the <strong>Tailwind CSS</strong> in addition of the Typescript, and nothing else.<br/>
                    You can create a front-end without using the constraints of this module by using the default front-end directives (as specified above in the mandatory part). However, this module will only be valid if you follow its requirements.
                </>
            },
            {
                type: "Minor",
                title: "Use SQLite for the Database",
                description: <>
                    The designated database for all DB instances in your project is <strong>SQLite</strong>. This choice ensures data consistency and compatibility across all project components and may be a prerequisite for other modules, such as the backend Framework module.
                </>
            },
            {
                type: "Major",
                title: "Store Scores on Avalanche Blockchain using Solidity",
                description: <>
                    This Major module focuses on implementing a feature within the Pong website to securely store tournament scores on a blockchain. It is essential to clarify that for development and testing purposes, we will use a testing blockchain environment. The chosen blockchain for this implementation is <strong>Avalanche</strong>, and <strong>Solidity</strong> will be the programming language used for smart contract development.<br/>
                    <ul>
                        <li><strong>Blockchain Integration:</strong> The primary goal of this module is to seamlessly integrate blockchain technology, specifically Avalanche, into the Pong website. This integration ensures the secure and immutable storage of tournament scores, providing players with a transparent and tamper-proof record of their gaming achievements.</li>
                        <li><strong>Solidity Smart Contracts:</strong> To interact with the blockchain, we will develop Solidity smart contracts. These contracts will be responsible for recording, managing, and retrieving tournament scores.</li>
                        <li><strong>Testing Blockchain:</strong> As mentioned earlier, a testing blockchain will be used for development and testing purposes. This ensures that all blockchain-related functionalities are thoroughly validated without any risks associated with a live blockchain.</li>
                        <li><strong>Interoperability:</strong> This module may have dependencies on other modules, particularly the Backend Framework module. Integrating blockchain functionality might require adjustments in the backend to accommodate interactions with the blockchain.</li>
                    </ul>
                    By implementing this module, we aim to enhance the Pong website by introducing a blockchain-based score storage system. Users will benefit from the added layer of security and transparency, ensuring the integrity of their gaming scores. The module emphasizes the use of a testing blockchain environment to minimize risks associated with blockchain development.
                </>
            }
        ]
    },
    {
        title: "B. User Management",
        modules: [
            {
                type: "Major",
                title: "Implement Standard User Management (Auth, Profile, Friends, History)",
                description: <>
                    This module delves into the realm of User Management, addressing key aspects of user interactions and access control within the Pong platform. It encompasses two major components, each focused on essential elements of user management and authentication: user participation across multiple tournaments and the implementation of remote authentication.<br/>
                    <ul>
                        <li>Users can securely subscribe to the website.</li>
                        <li>Registered users can securely log in.</li>
                        <li>Users can select a unique display name to participate in tournaments.</li>
                        <li>Users can update their information.</li>
                        <li>Users can upload an avatar, with a default option if none is provided.</li>
                        <li>Users can add others as friends and view their online status.</li>
                        <li>User profiles display stats, such as wins and losses.</li>
                        <li>Each user has a Match History including 1v1 games, dates, and relevant details, accessible to logged-in users.</li>
                    </ul>
                    The management of duplicate usernames/emails is at your discretion; please ensure a logical solution is provided.
                </>
            },
            {
                type: "Major",
                title: "Implement Remote Authentication with Google Sign-in",
                description: <>
                    In this major module, the goal is to implement the following authentication system: <strong>Google Sign-in</strong>.<br/>
                    <ul>
                        <li>Integrate the authentication system, allowing users to securely sign in.</li>
                        <li>Obtain the necessary credentials and permissions from the authority to enable secure login.</li>
                        <li>Implement user-friendly login and authorization flows that adhere to best practices and security standards.</li>
                        <li>Ensure the secure exchange of authentication tokens and user information between the web application and the authentication provider.</li>
                    </ul>
                    Be careful, the management of duplicate usernames/emails is at your discretion. You must provide a solution that makes sense.<br/>
                    This major module aims to provide a remote user authentication, offering users a secure and convenient way to access the web application.
                </>
            }
        ]
    },
    {
        title: "C. Gameplay and User Experience",
        modules: [
            {
                type: "Major",
                title: "Enable Remote Multiplayer Pong",
                description: <>
                    It should be possible for two players to play remotely. Each player is located on a separated computer, accessing the same website and playing the same Pong game.<br/>
                    Consider network issues, such as unexpected disconnections or lag. You must offer the best user experience possible.
                </>
            },
            {
                type: "Major",
                title: "Enable Multiplayer Pong (>2 Players)",
                description: <>
                    It should be possible to have more than two players. Each player needs live control (so the "remote players" module is strongly recommended). It's up to you to decide how the game could be played with 3, 4, 5, 6 or more players. Along with the regular 2 players game, you can define a specific number of players, greater than 2, for this multiplayer module. Ex: 4 players could play on a square board, with each player controlling one unique side of the square.
                </>
            },
            {
                type: "Major",
                title: "Add Another Game with History & Matchmaking",
                description: <>
                    The goal of this major module is to introduce a new game, distinct from Pong, and incorporate features such as user history tracking and matchmaking.<br/>
                    <ul>
                        <li>Develop a new, engaging game to diversify the platform's offerings and entertain users.</li>
                        <li>Implement user history tracking to record and display individual users' gameplay statistics.</li>
                        <li>Create a matchmaking system to allow users to find opponents and participate in fair and balanced matches.</li>
                        <li>Ensure that user game history and matchmaking data are stored securely and remain up-to-date.</li>
                        <li>Optimize the performance and responsiveness of the new game to provide an enjoyable user experience. Regularly update and maintain the game to fix bugs, add new features, and enhance gameplay.</li>
                    </ul>
                    This major module aims to expand your platform by introducing a new game, enhancing user engagement with gameplay history, and facilitating matchmaking for an enjoyable gaming experience.
                </>
            },
            {
                type: "Minor",
                title: "Add Game Customization Options (Power-ups, Maps)",
                description: <>
                    In this minor module, the goal is to provide customization options for all available games on the platform.<br/>
                    <ul>
                        <li>Offer customization features, such as power-ups, attacks, or different maps, that enhance the gameplay experience.</li>
                        <li>Allow users to choose a default version of the game with basic features if they prefer a simpler experience.</li>
                        <li>Ensure that customization options are available and applicable to all games offered on the platform.</li>
                        <li>Implement user-friendly settings menus or interfaces for adjusting game parameters.</li>
                        <li>Maintain consistency in customization features across all games to provide a unified user experience.</li>
                    </ul>
                    This module aims to give users the flexibility to tailor their gaming experience across all available games by providing a variety of customization options while also offering a default version for those who prefer a straightforward gameplay experience.
                </>
            },
            {
                type: "Major",
                title: "Implement Live Chat (DMs, Blocks, Invites)",
                description: <>
                    In this module, you need to create a chat feature for users:<br/>
                    <ul>
                        <li>The user should be able to send direct messages to other users.</li>
                        <li>The user should be able to block other users, preventing them from seeing any further messages from the blocked account.</li>
                        <li>The user should be able to invite other users to play a Pong game through the chat interface.</li>
                        <li>The tournament system should be able to notify users about the next game.</li>
                        <li>The user should be able to access other players' profiles through the chat interface.</li>
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
                description: <>
                    In this major module, the objective is to incorporate an AI player into the game. Notably, the use of the A* algorithm is not permitted for this task.<br/>
                    <ul>
                        <li>Develop an AI opponent that provides a challenging and engaging gameplay experience for users.</li>
                        <li>The AI must replicate human behavior, which means that in your AI implementation, you must simulate keyboard input. The constraint here is that the AI can only refresh its view of the game once per second, requiring it to anticipate bounces and other actions.</li>
                        <li>The AI must utilize power-ups if you have chosen to implement the Game customization options module.</li>
                        <li>Implement AI logic and decision-making processes that enable the AI player to make intelligent and strategic moves.</li>
                        <li>Explore alternative algorithms and techniques to create an effective AI player without relying on A*.</li>
                        <li>Ensure that the AI adapts to different gameplay scenarios and user interactions.</li>
                    </ul>
                    You will need to explain in detail how your AI works during your evaluation. Creating an AI that does nothing is strictly prohibited; it must have the capability to win occasionally.<br/>
                    This major module aims to enhance the game by introducing an AI opponent that adds excitement and competitiveness without relying on the A* algorithm.
                </>
            },
            {
                type: "Minor",
                title: "Create User and Game Stats Dashboards",
                description: <>
                    In this minor module, the goal is to introduce dashboards that display statistics for individual users and game sessions.<br/>
                    <ul>
                        <li>Create user-friendly dashboards that provide users with insights into their gaming statistics.</li>
                        <li>Develop a separate dashboard for game sessions, showing detailed statistics, outcomes, and historical data for each match.</li>
                        <li>Ensure that the dashboards offer an intuitive and informative user interface for tracking and analyzing data.</li>
                        <li>Implement data visualization techniques, such as charts and graphs, to present statistics in a clear and visually appealing manner.</li>
                        <li>Allow users to access and explore their own gaming history and performance metrics conveniently.</li>
                        <li>Feel free to add any metrics you deem useful.</li>
                    </ul>
                    This minor module aims to empower users with the ability to monitor their gaming statistics and game session details through user-friendly dashboards, providing a comprehensive view of their gaming experience.
                </>
            }
        ]
    },
    {
        title: "E. Cybersecurity",
        modules: [
            {
                type: "Major",
                title: "Implement WAF/ModSecurity & HashiCorp Vault",
                description: <>
                    The objective of this major module is to enhance the security infrastructure of the project by implementing several key components.<br/>
                    <ul>
                        <li>Configure and deploy a Web Application Firewall (WAF) and ModSecurity with a strict and secure configuration to protect against web-based attacks.</li>
                        <li>Integrate HashiCorp Vault to securely manage and store sensitive information, such as API keys, credentials, and environment variables, ensuring that these secrets are properly encrypted and isolated.</li>
                    </ul>
                    This major module aims to bolster the project's security infrastructure by implementing robust security measures, including WAF/ModSecurity for web application protection and HashiCorp Vault for secrets management to ensure a safe and secure environment.
                </>
            },
            {
                type: "Minor",
                title: "Implement GDPR Compliance Options (Anonymization, Deletion)",
                description: <>
                    The goal of this minor module is to introduce GDPR compliance options that allow users to exercise their data privacy rights.<br/>
                    <ul>
                        <li>Implement GDPR-compliant features that enable users to request anonymization of their personal data, ensuring that their identity and sensitive information are protected.</li>
                        <li>Provide tools for users to manage their local data, including the ability to view, edit, or delete their personal information stored within the system.</li>
                        <li>Offer a streamlined process for users to request the permanent deletion of their accounts, including all associated data, ensuring compliance with data protection regulations.</li>
                        <li>Maintain clear and transparent communication with users regarding their data privacy rights, with easily accessible options to exercise these rights.</li>
                    </ul>
                    This minor module aims to enhance user privacy and data protection by offering GDPR compliance options that empower users to control their personal information and exercise their data privacy rights within the system.<br/>
                    If you are not familiar with the General Data Protection Regulation (GDPR), it is essential to understand its principles and implications, especially regarding user data management and privacy. The GDPR is a regulation that aims to protect the personal data and privacy of individuals within the European Union (EU) and the European Economic Area (EEA). It sets out strict rules and guidelines for organizations on how they should handle and process personal data.<br/>
                    To gain a better understanding of the GDPR and its requirements, it is strongly recommended to visit the official website of the European Commission on data protection. This website provides comprehensive information about the GDPR, including its principles, objectives, and user rights. It also offers additional resources to delve deeper into the topic and ensure compliance with the regulation.<br/>
                    If you are unfamiliar with the GDPR, please take the time to visit the provided link and familiarize yourself with the regulations before proceeding with this project.
                </>
            },
            {
                type: "Major",
                title: "Implement 2FA and JWT Security",
                description: <>
                    The goal of this major module is to enhance security and user authentication by introducing Two-Factor Authentication (2FA) and utilizing JSON Web Tokens (JWT).<br/>
                    <ul>
                        <li>Implement Two-Factor Authentication (2FA) as an additional layer of security for user accounts, requiring users to provide a secondary verification method, such as a one-time code, in addition to their password.</li>
                        <li>Utilize JSON Web Tokens (JWT) as a secure method for authentication and authorization, ensuring that user sessions and access to resources are managed securely.</li>
                        <li>Provide a user-friendly setup process for enabling 2FA, with options for SMS codes, authenticator apps, or email-based verification.</li>
                        <li>Ensure that JWT tokens are issued and validated securely to prevent unauthorized access to user accounts and sensitive data.</li>
                    </ul>
                    This major module aims to strengthen user account security by offering Two-Factor Authentication (2FA) and enhancing authentication and authorization through the use of JSON Web Tokens (JWT).
                </>
            }
        ]
    },
    {
        title: "F. Devops",
        modules: [
            {
                type: "Major",
                title: "Set up ELK Stack for Log Management",
                description: <>
                    The objective of this major module is to establish a robust infrastructure for log management and analysis using the ELK stack (Elasticsearch, Logstash, Kibana).<br/>
                    <ul>
                        <li>Deploy Elasticsearch to efficiently store and index log data, ensuring it is easily searchable and accessible.</li>
                        <li>Configure Logstash to collect, process, and transform log data from various sources, sending it to Elasticsearch.</li>
                        <li>Set up Kibana for visualizing log data, creating dashboards, and generating insights from log events.</li>
                        <li>Define data retention and archiving policies to manage log data storage effectively.</li>
                        <li>Implement security measures to protect log data and access to the ELK stack components.</li>
                    </ul>
                    This major module aims to establish a powerful log management and analysis system using the ELK stack, enabling effective troubleshooting, monitoring, and insights into the system's operation and performance.
                </>
            },
            {
                type: "Minor",
                title: "Set up Prometheus & Grafana Monitoring",
                description: <>
                    The goal of this minor module is to set up a comprehensive monitoring system using Prometheus and Grafana.<br/>
                    <ul>
                        <li>Deploy Prometheus as the monitoring and alerting toolkit to collect metrics and monitor the health and performance of various system components.</li>
                        <li>Configure data exporters and integrations to capture metrics from different services, databases, and infrastructure components.</li>
                        <li>Create custom dashboards and visualizations using Grafana to provide real-time insights into system metrics and performance.</li>
                        <li>Set up alerting rules in Prometheus to proactively detect and respond to critical issues and anomalies.</li>
                        <li>Ensure proper data retention and storage strategies for historical metrics data.</li>
                        <li>Implement secure authentication and access control mechanisms for Grafana to protect sensitive monitoring data.</li>
                    </ul>
                    This minor module aims to establish a robust monitoring infrastructure using Prometheus and Grafana, enabling real-time visibility into system metrics and proactive issue detection for improved system performance and reliability.
                </>
            },
            {
                type: "Major",
                title: "Design Backend as Microservices",
                description: <>
                    The goal of this major module is to architect the backend of the system using a microservices approach.<br/>
                    <ul>
                        <li>Divide the backend into smaller, loosely-coupled microservices, each responsible for specific functions or features.</li>
                        <li>Define clear boundaries and interfaces between microservices to enable independent development, deployment, and scaling.</li>
                        <li>Implement communication mechanisms between microservices, such as RESTful APIs or message queues, to facilitate data exchange and coordination.</li>
                        <li>Ensure that each microservice is responsible for a single, well-defined task or business capability, promoting maintainability and scalability.</li>
                    </ul>
                    This major module aims to enhance the system's architecture by adopting a microservices design approach, enabling greater flexibility, scalability, and maintainability of the backend components.
                </>
            }
        ]
    },
    {
        title: "G. Graphics",
        modules: [
            {
                type: "Major",
                title: "Implement Advanced 3D Pong with Babylon.js",
                description: <>
                    This major module, "Graphics," focuses on enhancing the visual aspects of the Pong game. It introduces the use of advanced 3D techniques to create a more immersive gaming experience. Specifically, the Pong game will be developed using <strong>Babylon.js</strong> to achieve the desired visual effects.<br/>
                    <ul>
                        <li><strong>Advanced 3D Graphics:</strong> The primary goal of this module is to implement advanced 3D graphics techniques to elevate the visual quality of the Pong game. By utilizing Babylon.js, the goal is to create stunning visual effects that immerse players in the gaming environment.</li>
                        <li><strong>Immersive Gameplay:</strong> The incorporation of advanced 3D techniques enhances the overall gameplay experience by providing users with a visually engaging and captivating Pong game.</li>
                        <li><strong>Technology Integration:</strong> The chosen technology for this module is Babylon.js. These tools will be used to create the 3D graphics, ensuring compatibility and optimal performance.</li>
                    </ul>
                    This major module aims to revolutionize the Pong game's visual elements by introducing advanced 3D techniques. Through the use of Babylon.js, we aim to provide players with an immersive and visually stunning gaming experience.
                </>
            }
        ]
    },
    {
        title: "H. Accessibility",
        modules: [
            {
                type: "Minor",
                title: "Ensure Responsive Support on All Devices",
                description: <>
                    In this module, the main focus is to ensure that your website works seamlessly on all types of devices.<br/>
                    <ul>
                        <li>Ensure the website is responsive, adapting to different screen sizes and orientations, providing a consistent user experience on desktops, laptops, tablets, and smartphones.</li>
                        <li>Ensure that users can easily navigate and interact with the website using different input methods, such as touchscreens, keyboards, and mice, depending on the device they are using.</li>
                    </ul>
                    This module aims to provide a consistent and user-friendly experience on all devices, maximizing accessibility and user satisfaction.
                </>
            },
            {
                type: "Minor",
                title: "Expand Browser Compatibility",
                description: <>
                    In this minor module, the objective is to enhance the compatibility of the web application by adding support for an additional web browser.<br/>
                    <ul>
                        <li>Extend browser support to include an additional web browser, ensuring that users can access and use the application seamlessly.</li>
                        <li>Conduct thorough testing and optimization to ensure that the web application functions correctly and displays correctly in the newly supported browser.</li>
                        <li>Address any compatibility issues or rendering discrepancies that may arise in the added web browser.</li>
                        <li>Ensure a consistent user experience across all supported browsers, maintaining usability and functionality.</li>
                    </ul>
                    This minor module aims to broaden the accessibility of the web application by supporting an additional web browser, providing users with more choices for their browsing experience.
                </>
            },
            {
                type: "Minor",
                title: "Implement Multiple Language Support (Min. 3)",
                description: <>
                    In this minor module, the objective is to ensure that your website supports multiple languages to cater to a diverse user base.<br/>
                    <ul>
                        <li>Implement support for a minimum of three languages on the website to accommodate a broad audience.</li>
                        <li>Provide a language switcher or selector that allows users to easily change the website's language based on their preferences.</li>
                        <li>Translate essential website content, such as navigation menus, headings, and key information, into the supported languages.</li>
                        <li>Ensure that users can navigate and interact with the website seamlessly, regardless of the selected language.</li>
                        <li>Consider using language packs or localization libraries to simplify the translation process and maintain consistency across different languages.</li>
                        <li>Allow users to set their preferred language as the default for subsequent visits.</li>
                    </ul>
                    This minor module aims to enhance the accessibility and inclusivity of your website by offering content in multiple languages, making it more user-friendly for a diverse international audience.
                </>
            },
            {
                type: "Minor",
                title: "Add Accessibility for Visually Impaired Users",
                description: <>
                    In this minor module, the goal is to make your website more accessible for visually impaired users.<br/>
                    <ul>
                        <li>Support for screen readers and assistive technologies.</li>
                        <li>Clear and descriptive alt text for images.</li>
                        <li>High-contrast color scheme for readability.</li>
                        <li>Keyboard navigation and focus management.</li>
                        <li>Options for adjusting text size.</li>
                        <li>Regular updates to meet accessibility standards.</li>
                    </ul>
                    This module aims to improve the website's usability for individuals with visual impairments and ensure compliance with accessibility standards.
                </>
            },
            {
                type: "Minor",
                title: "Integrate Server-Side Rendering (SSR)",
                description: <>
                    In this minor module, the focus is on integrating Server-Side Rendering (SSR) to enhance the performance and user experience of your website.<br/>
                    <ul>
                        <li>Implement SSR to improve the website's loading speed and overall performance.</li>
                        <li>Ensure that content is pre-rendered on the server and delivered to users' browsers for faster initial page loads.</li>
                        <li>Optimize SEO by providing search engines with pre-rendered HTML content.</li>
                        <li>Maintain a consistent user experience while benefiting from the advantages of SSR.</li>
                    </ul>
                    This module aims to boost website performance and SEO by integrating Server-Side Rendering for faster page loads and improved user experience.
                </>
            }
        ]
    },
    {
        title: "I. Server-Side Pong",
        modules: [
            {
                type: "Major",
                title: "Implement Server-Side Pong & API",
                description: <>
                    In this major module, the goal is to replace the basic Pong game with a server-side Pong game, accompanied by the implementation of an API.<br/>
                    <ul>
                        <li>Develop server-side logic for the Pong game to handle gameplay, ball movement, scoring, and player interactions.</li>
                        <li>Create an API that exposes the necessary resources and endpoints to interact with the Pong game, allowing partial usage of the game via the Command-Line Interface (CLI) and web interface.</li>
                        <li>Design and implement the API endpoints to support game initialization, player controls, and game state updates.</li>
                        <li>Ensure that the server-side Pong game is responsive, providing an engaging and enjoyable gaming experience.</li>
                        <li>Integrate the server-side Pong game with the web application, allowing users to play the game directly on the website.</li>
                    </ul>
                    This major module aims to elevate the Pong game by migrating it to the server side, enabling interaction through both a web interface and CLI while offering an API for easy access to game resources and features.
                </>
            },
            {
                type: "Major",
                title: "Enable CLI vs. Web Pong Gameplay via API",
                description: <>
                    In this major module, the goal is to develop a Command-Line Interface (CLI) that allows users to play Pong against players using the web version of the game. The CLI should connect to the web application seamlessly, enabling CLI users to join and interact with web players.<br/>
                    <ul>
                        <li>Create a robust CLI application that replicates the Pong gameplay experience available on the website, providing CLI users with the ability to initiate and participate in Pong matches.</li>
                        <li>Utilize the API to establish communication between the CLI and the web application, enabling CLI users to connect to the site and interact with web players.</li>
                        <li>Develop a user authentication mechanism within the CLI, allowing CLI users to log in to the web application securely.</li>
                        <li>Implement real-time synchronization between the CLI and web users, ensuring that gameplay interactions are seamless and consistent.</li>
                        <li>Enable CLI users to join and create Pong matches with web players, facilitating cross-platform gameplay.</li>
                    </ul>
                    Provide comprehensive documentation and guidance on how to use the CLI effectively for Pong matches against web users.<br/>
                    This major module aims to enhance the Pong gaming experience by creating a CLI that seamlessly connects CLI users to web players through API integration, offering a unified and interactive gameplay environment.<br/>
                    If you wish to complete this module, we strongly recommend that you do the previous one.
                </>
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