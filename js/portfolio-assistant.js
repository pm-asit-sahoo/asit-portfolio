// Portfolio AI Assistant
document.addEventListener('DOMContentLoaded', function() {
    // Create the chatbot UI
    createChatbotUI();
    
    // Initialize the chatbot functionality
    initChatbot();
    
    // Auto-open the chatbot after a short delay to ensure everything is loaded
    setTimeout(function() {
        const chatButton = document.getElementById('chat-button');
        const chatWindow = document.getElementById('chat-window');
        
        // Auto-open the chat window
        if (chatWindow.classList.contains('scale-0')) {
            chatWindow.classList.remove('scale-0');
            chatWindow.classList.add('scale-100');
            
            // Add welcome message if it's the first time opening
            const chatMessages = document.getElementById('chat-messages');
            if (chatMessages.children.length === 0) {
                addBotMessage("👋 Hi there! I'm Asit's portfolio assistant. How can I help you learn more about his skills and experience?");
                
                // Add suggested questions
                setTimeout(() => {
                    addSuggestedQuestions([
                        "Tell me about your automation experience",
                        "What AI projects have you worked on?",
                        "What makes you stand out?",
                        "What are your key skills?"
                    ]);
                }, 500);
            }
            
            // Auto-close after 5 seconds
            setTimeout(function() {
                chatWindow.classList.remove('scale-100');
                chatWindow.classList.add('scale-0');
            }, 5000);
        }
    }, 1000); // Wait 1 second after page load before auto-opening
});

// Create the chatbot UI elements
function createChatbotUI() {
    // Create the main chatbot container
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'portfolio-assistant';
    chatbotContainer.className = 'fixed bottom-5 right-5 z-50';
    
    // Create the chat button
    const chatButton = document.createElement('button');
    chatButton.id = 'chat-button';
    chatButton.className = 'bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300';
    chatButton.innerHTML = '<i class="fas fa-robot text-xl"></i>';
    chatButton.setAttribute('aria-label', 'Open AI Assistant');
    
    // Create the chat window (initially hidden)
    const chatWindow = document.createElement('div');
    chatWindow.id = 'chat-window';
    chatWindow.className = 'bg-white rounded-lg shadow-xl w-80 md:w-96 absolute bottom-16 right-0 transition-all duration-300 transform scale-0 origin-bottom-right';
    chatWindow.style.height = '400px';
    chatWindow.style.display = 'flex';
    chatWindow.style.flexDirection = 'column';
    
    // Chat header
    const chatHeader = document.createElement('div');
    chatHeader.className = 'bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center';
    chatHeader.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-robot mr-2"></i>
            <span class="font-medium">Asit's Portfolio Assistant</span>
        </div>
        <button id="close-chat" class="text-white hover:text-gray-200 focus:outline-none">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Chat messages container
    const chatMessages = document.createElement('div');
    chatMessages.id = 'chat-messages';
    chatMessages.className = 'flex-1 p-4 overflow-y-auto space-y-4';
    
    // Chat input area
    const chatInputArea = document.createElement('div');
    chatInputArea.className = 'border-t border-gray-200 p-4';
    chatInputArea.innerHTML = `
        <div class="flex items-center">
            <input type="text" id="chat-input" placeholder="Ask me anything about Asit..." 
                   class="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button id="send-message" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
        <div class="mt-2 text-xs text-gray-500">
            Try: "Tell me about your automation experience" or "What projects have you worked on?"
        </div>
    `;
    
    // Assemble the chat window
    chatWindow.appendChild(chatHeader);
    chatWindow.appendChild(chatMessages);
    chatWindow.appendChild(chatInputArea);
    
    // Add everything to the container
    chatbotContainer.appendChild(chatWindow);
    chatbotContainer.appendChild(chatButton);
    
    // Add the container to the body
    document.body.appendChild(chatbotContainer);
}

// Global functions for chat messages
// Function to add a bot message to the chat
function addBotMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.className = 'flex justify-start';
    messageElement.innerHTML = `
        <div class="bg-gray-200 text-gray-800 rounded-lg py-2 px-4 max-w-3/4">
            <p>${message}</p>
        </div>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to add suggested questions
function addSuggestedQuestions(questions) {
    const chatMessages = document.getElementById('chat-messages');
    const suggestionsElement = document.createElement('div');
    suggestionsElement.className = 'flex justify-start';
    
    let suggestionsHTML = '<div class="flex flex-wrap gap-2">';
    questions.forEach(question => {
        suggestionsHTML += `
            <button class="suggested-question bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm rounded-full py-1 px-3 transition">
                ${question}
            </button>
        `;
    });
    suggestionsHTML += '</div>';
    
    suggestionsElement.innerHTML = suggestionsHTML;
    chatMessages.appendChild(suggestionsElement);
    
    // Add click event to suggested questions
    document.querySelectorAll('.suggested-question').forEach(button => {
        button.addEventListener('click', function() {
            const question = this.textContent.trim();
            addUserMessage(question);
            
            // Get bot response with slight delay
            setTimeout(() => {
                const response = getBotResponse(question);
                addBotMessage(response);
            }, 600);
        });
    });
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to add a user message to the chat
function addUserMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.className = 'flex justify-end';
    messageElement.innerHTML = `
        <div class="bg-blue-100 text-gray-800 rounded-lg py-2 px-4 max-w-3/4">
            <p>${message}</p>
        </div>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initialize chatbot functionality
function initChatbot() {
    // Get DOM elements
    const chatButton = document.getElementById('chat-button');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const sendMessage = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');
    
    // Toggle chat window visibility
    chatButton.addEventListener('click', function() {
        if (chatWindow.classList.contains('scale-0')) {
            chatWindow.classList.remove('scale-0');
            chatWindow.classList.add('scale-100');
            // Add welcome message if it's the first time opening
            if (chatMessages.children.length === 0) {
                addBotMessage("👋 Hi there! I'm Asit's portfolio assistant. How can I help you learn more about his skills and experience?");
                
                // Add suggested questions
                setTimeout(() => {
                    addSuggestedQuestions([
                        "Tell me about your automation experience",
                        "What AI projects have you worked on?",
                        "What makes you stand out?",
                        "What are your key skills?"
                    ]);
                }, 500);
            }
        } else {
            chatWindow.classList.remove('scale-100');
            chatWindow.classList.add('scale-0');
        }
    });
    
    // Close chat window
    closeChat.addEventListener('click', function() {
        chatWindow.classList.remove('scale-100');
        chatWindow.classList.add('scale-0');
    });
    
    // Send message on button click
    sendMessage.addEventListener('click', function() {
        sendUserMessage();
    });
    
    // Send message on Enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
    
    // Function to send user message
    function sendUserMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message to chat
            addUserMessage(message);
            
            // Clear input
            chatInput.value = '';
            
            // Get bot response (with slight delay to seem more natural)
            setTimeout(() => {
                const response = getBotResponse(message);
                addBotMessage(response);
            }, 600);
        }
    }
}

// Comprehensive knowledge base about Asit
const knowledgeBase = {
        profile: {
            name: "Asit Sahoo",
            title: "Senior Lead SDET",
            experience: "9+ years",
            currentCompany: "PubMatic",
            location: "Pune, India",
            email: "sahooasit@hotmail.com",
            phone: "+91 9040293063",
            education: "Bachelor of Technology in Computer Science & Engineering from Biju Patnaik University of Technology",
            summary: "Experienced Lead SDET with 9+ years of expertise in application testing and designing Hybrid Automation Frameworks for Web, Windows, and APIs. Skilled in CI/CD, agile practices, and building robust GenAI tools."
        },
        skills: {
            programming: [
                { name: "Python", proficiency: 95 },
                { name: "JavaScript", proficiency: 90 },
                { name: "C#", proficiency: 90 },
                { name: "Java", proficiency: 85 },
                { name: "HTML/CSS", proficiency: 85 },
                { name: "Bash Scripting", proficiency: 85 },
                { name: "Groovy", proficiency: 80 }
            ],
            automation: [
                { name: "Robot Framework", proficiency: 95 },
                { name: "PyTest Framework", proficiency: 95 },
                { name: "Selenium", proficiency: 95 },
                { name: "API Automation", proficiency: 95 },
                { name: "UI Automation", proficiency: 95 },
                { name: "Windows Automation", proficiency: 90 },
                { name: "TestNG", proficiency: 85 },
                { name: "JUnit", proficiency: 90 },
                { name: "Allure", proficiency: 95 },
                { name: "ExtentReports", proficiency: 90 },
                { name: "Playwright", proficiency: 90 },
                { name: "Appium", proficiency: 85 },
                { name: "REST Assured", proficiency: 95 }
            ],
            frameworkDevelopment: [
                { name: "Architecture Design", proficiency: 95 },
                { name: "Page Object Model", proficiency: 95 },
                { name: "Data-Driven Design", proficiency: 90 },
                { name: "Keyword-Driven", proficiency: 90 },
                { name: "Framework Development From Scratch", proficiency: 95 },
                { name: "Test Framework Architecture", proficiency: 95 }
            ],
            performanceTesting: [
                { name: "JMeter", proficiency: 90 },
                { name: "LoadRunner", proficiency: 85 },
                { name: "Gatling", proficiency: 80 },
                { name: "Load Testing", proficiency: 90 },
                { name: "Performance Testing", proficiency: 90 },
                { name: "Stress Testing", proficiency: 85 }
            ],
            apiTesting: [
                { name: "REST API", proficiency: 95 },
                { name: "Postman", proficiency: 95 },
                { name: "SOAP", proficiency: 85 },
                { name: "GraphQL", proficiency: 80 },
                { name: "API Testing", proficiency: 95 }
            ],
            devops: [
                { name: "Jenkins", proficiency: 90 },
                { name: "Azure DevOps", proficiency: 85 },
                { name: "Git", proficiency: 90 },
                { name: "Kubernetes", proficiency: 75 },
                { name: "CI/CD", proficiency: 88 }
            ],
            ai: [
                { name: "GenAI", proficiency: 90 },
                { name: "Prompt Engineering", proficiency: 90 },
                { name: "LLM Integration", proficiency: 85 },
                { name: "RAG (Retrieval Augmented Generation)", proficiency: 85 },
                { name: "LangChain", proficiency: 80 },
                { name: "Vector Databases", proficiency: 80 },
                { name: "Langfuse", proficiency: 85 },
                { name: "MCP Server", proficiency: 85 },
                { name: "Streamlit", proficiency: 85 },
                { name: "Semantic Search", proficiency: 80 },
                { name: "Fine-tuning LLMs", proficiency: 75 }
            ],
            soft: [
                { name: "Leadership", proficiency: 90 },
                { name: "Mentoring", proficiency: 95 },
                { name: "Agile Methodologies", proficiency: 90 }
            ]
        },
        projects: [
            {
                name: "Interactive Portfolio Website",
                description: "The website you're currently exploring with interactive features like AI assistant, skills visualization, and 3D project cards.",
                technologies: ["HTML/CSS", "JavaScript", "TailwindCSS", "Chart.js", "AI Integration"],
                features: ["AI-powered assistant", "Interactive skills visualization", "3D project cards", "Skill search", "Resume builder"]
            },
            {
                name: "Prebid.js Contributions",
                description: "Contributed numerous features to Prebid.js, the industry's leading header bidding solution.",
                technologies: ["JavaScript", "Node.js", "Gulp", "Karma", "Mocha"],
                link: "https://github.com/prebid/Prebid.js/pulls?q=is%3Apr+author%3Apm-asit-sahoo+is%3Aclosed%2Copen"
            },
            {
                name: "Universal Test Case Generator",
                description: "AI-powered tool that integrates Confluence and Jira to generate comprehensive test cases.",
                technologies: ["Python", "Streamlit", "OpenAI API", "Jira API", "Confluence API"],
                features: ["Unified platform", "Customized test case formats", "Efficiency boost"]
            },
            {
                name: "AI-Powered Prebid Chatbot",
                description: "Intelligent chatbot for Slack that handles operations related to Prebid and OpenWrap, leveraging advanced AI technologies for enhanced performance and observability.",
                technologies: ["Python", "JavaScript", "OpenAI API", "Claude API", "Slack API", "LangChain", "RAG", "Vector Databases", "Langfuse", "MCP Server"],
                features: ["Monetization gap analysis", "Page setup guidance", "Bid enrichment analysis", "Natural language SQL", "Semantic search across documentation", "Real-time observability with Langfuse", "Performance monitoring via MCP server", "Dynamic context retrieval with RAG"]
            },
            {
                name: "Intelligent Climate Dashboard",
                description: "Dashboard providing overview of climate and weather-related information globally.",
                technologies: ["JavaScript", "Node.js", "HTML/CSS", "Weather APIs", "Data Visualization"],
                status: "Coming Soon"
            },
            {
                name: "2048 Game",
                description: "Web implementation of the popular 2048 puzzle game.",
                technologies: ["JavaScript", "Node.js", "HTML/CSS"],
                features: ["Responsive design", "Score tracking", "Smooth animations"]
            },
            {
                name: "Intelligent Test Automation Framework",
                description: "Comprehensive framework for web, API, mobile, client-side, and server-side testing.",
                technologies: ["Python", "Pytest", "Allure", "HTML/CSS", "Selenium", "Appium", "REST APIs"],
                status: "Coming Soon"
            }
        ],
        experience: [
            {
                company: "PubMatic",
                role: "Senior Lead SDET",
                period: "2019 - Present",
                responsibilities: [
                    "Leading automation efforts for web and API testing",
                    "Architecting and developing AI-powered tools using RAG, LangChain, and LLMs",
                    "Implementing observability solutions with Langfuse and MCP server",
                    "Contributing to Prebid.js open-source project",
                    "Mentoring junior team members on AI and automation technologies",
                    "Implementing CI/CD pipelines with integrated AI quality checks"
                ],
                achievements: [
                    "Developed an AI-powered chatbot with RAG architecture that improved team efficiency by 30%",
                    "Created a universal test case generator using AI and vector embeddings, reducing test creation time by 60%",
                    "Implemented Langfuse observability for AI applications, improving prompt performance by 25%",
                    "Built an MCP server monitoring solution for real-time AI application performance tracking",
                    "Designed and implemented a semantic search system across technical documentation",
                    "Contributed multiple features to Prebid.js, enhancing header bidding functionality"
                ]
            },
            {
                company: "Pegasystems",
                role: "Senior SDET",
                period: "2016 - 2019",
                responsibilities: [
                    "UI and API automation for enterprise applications",
                    "Performance testing and optimization",
                    "Test framework architecture and development"
                ],
                achievements: [
                    "Developed a hybrid automation framework that increased test coverage by 45%",
                    "Implemented API testing strategies that identified critical bugs before production",
                    "Created performance testing solutions that improved application response time by 30%"
                ]
            }
        ],
        uniqueSellingPoints: [
            "Pioneer in applying RAG architecture to QE tools, reducing testing time by 60% and increasing defect detection by 35%",
            "Architect of AI observability systems using Langfuse and MCP server that improved prompt performance by 25%",
            "Active open-source contributor with 15+ merged PRs to Prebid.js, the industry's leading header bidding solution",
            "Creator of semantic search systems across technical documentation that reduced knowledge retrieval time by 70%",
            "Designed and implemented vector embedding systems for intelligent test case generation across multiple teams",
            "Recognized thought leader with presentations on AI-powered testing at industry conferences",
            "Mentor who has guided 10+ junior engineers in AI and automation technologies",
            "Unique combination of deep testing expertise and cutting-edge AI implementation skills"
        ]
    };

// Function to generate bot responses based on user input
function getBotResponse(message) {
    // Convert message to lowercase for easier processing
    const lowerMessage = message.toLowerCase();
    
    // Initialize response variables
    let response = "";
    let matchFound = false;
    let confidenceScore = 0;
    
    // Define topic extractors with their patterns and response generators
    const topicExtractors = [
            {
                topic: "greeting",
                patterns: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
                responseGenerator: () => {
                    return `Hello! I'm Asit's portfolio assistant. How can I help you learn more about his skills, projects, or experience?`;
                },
                threshold: 0.8
            },
            {
                topic: "automation",
                patterns: ["automation", "testing framework", "test automation", "automated testing", "selenium", "pytest", "robot framework"],
                responseGenerator: () => {
                    const autoSkills = knowledgeBase.skills.automation;
                    const topSkills = autoSkills.filter(skill => skill.proficiency >= 90).map(skill => skill.name).join(", ");
                    return `Asit has ${knowledgeBase.profile.experience} of experience in automation, specializing in creating hybrid automation frameworks for Web, API, and Windows applications. His top automation skills include ${topSkills}. He's developed several custom automation solutions that significantly improved testing efficiency across multiple projects.`;
                },
                threshold: 0.6
            },
            {
                topic: "ai",
                patterns: ["ai", "ml", "artificial intelligence", "machine learning", "genai", "llm", "prompt engineering", "chatgpt", "claude"],
                responseGenerator: () => {
                    const aiProjects = knowledgeBase.projects.filter(p => 
                        p.technologies && p.technologies.some(t => t.includes("AI") || t.includes("OpenAI") || t.includes("Claude"))
                    ).map(p => p.name).join(" and ");
                    return `Asit has developed several AI-powered tools including ${aiProjects}. He's skilled in prompt engineering (${knowledgeBase.skills.ai.find(s => s.name === "Prompt Engineering").proficiency}%) and LLM integration (${knowledgeBase.skills.ai.find(s => s.name === "LLM Integration").proficiency}%), applying these skills to create practical business applications that solve real-world problems.`;
                },
                threshold: 0.6
            },
            {
                topic: "prebid",
                patterns: ["prebid", "prebid.js", "header bidding", "ad tech", "advertising", "open source", "contribution"],
                responseGenerator: () => {
                    const prebidProject = knowledgeBase.projects.find(p => p.name.includes("Prebid"));
                    return `Asit has made significant contributions to Prebid.js, the industry's leading header bidding solution. He's implemented numerous features that have enhanced its functionality and performance. You can check out his contributions on GitHub at: ${prebidProject.link}`;
                },
                threshold: 0.6
            },
            {
                topic: "projects",
                patterns: ["projects", "portfolio", "work", "created", "built", "developed", "applications", "apps"],
                responseGenerator: () => {
                    const projectNames = knowledgeBase.projects.map(p => p.name).join(", ");
                    return `Asit has worked on several innovative projects including: ${projectNames}. You can find details about each in the Projects section of this portfolio. Is there a specific project you'd like to know more about?`;
                },
                threshold: 0.6
            },
            {
                topic: "skills",
                patterns: ["skills", "expertise", "proficient", "good at", "capable", "abilities", "competencies", "talents"],
                responseGenerator: () => {
                    const topProgramming = knowledgeBase.skills.programming.filter(s => s.proficiency >= 90).map(s => s.name).join(", ");
                    const topAutomation = knowledgeBase.skills.automation.filter(s => s.proficiency >= 90).map(s => s.name).join(", ");
                    return `Asit's key skills include: Automation (with expertise in ${topAutomation}), Programming Languages (particularly ${topProgramming}), AI & ML integration (${knowledgeBase.skills.ai[0].proficiency}%), DevOps & CI/CD (${knowledgeBase.skills.devops.find(s => s.name === "CI/CD").proficiency}%), and comprehensive Testing methodologies. He also has strong leadership abilities (${knowledgeBase.skills.soft.find(s => s.name === "Leadership").proficiency}%) and experience mentoring teams.`;
                },
                threshold: 0.6
            },
            {
                topic: "unique",
                patterns: ["stand out", "unique", "different", "special", "exceptional", "impressive", "strengths", "advantages"],
                responseGenerator: () => {
                    return knowledgeBase.uniqueSellingPoints.join(". ") + ".";
                },
                threshold: 0.6
            },
            {
                topic: "contact",
                patterns: ["contact", "hire", "reach", "email", "phone", "connect", "get in touch", "linkedin"],
                responseGenerator: () => {
                    return `You can contact Asit via email at ${knowledgeBase.profile.email} or by phone at ${knowledgeBase.profile.phone}. You can also connect with him on LinkedIn by clicking the LinkedIn icon in the footer section. Feel free to use the contact form in the Contact section of this portfolio!`;
                },
                threshold: 0.6
            },
            {
                topic: "experience",
                patterns: ["experience", "work history", "career", "professional", "job", "employment", "worked at", "companies"],
                responseGenerator: () => {
                    const current = knowledgeBase.experience[0];
                    const previous = knowledgeBase.experience[1];
                    return `Asit is currently a ${current.role} at ${current.company}, where he ${current.responsibilities[0].toLowerCase()} and ${current.responsibilities[1].toLowerCase()}. Previously, he worked at ${previous.company} as a ${previous.role}, focusing on ${previous.responsibilities[0].toLowerCase()}. He has ${knowledgeBase.profile.experience} of experience in the testing and automation field.`;
                },
                threshold: 0.6
            },
            {
                topic: "education",
                patterns: ["education", "degree", "university", "college", "qualification", "academic", "study", "studied"],
                responseGenerator: () => {
                    return `Asit holds a ${knowledgeBase.profile.education}. He's also completed several professional certifications in automation, AI, and testing methodologies.`;
                },
                threshold: 0.7
            },
            {
                topic: "testing",
                patterns: ["testing", "qa", "quality assurance", "test cases", "test strategy", "manual testing", "test automation"],
                responseGenerator: () => {
                    return `Asit is an expert in both manual and automated testing with ${knowledgeBase.profile.experience} of experience. He specializes in designing comprehensive test strategies, creating efficient test frameworks, and implementing CI/CD pipelines for continuous testing. His expertise spans UI testing, API testing, performance testing, and mobile testing. He's also developed AI-powered tools to streamline the testing process.`;
                },
                threshold: 0.6
            },
            {
                topic: "leadership",
                patterns: ["leadership", "lead", "manage", "team", "mentoring", "guiding", "teaching", "coaching"],
                responseGenerator: () => {
                    return `Asit has strong leadership abilities with a proficiency of ${knowledgeBase.skills.soft.find(s => s.name === "Leadership").proficiency}%. He excels at mentoring junior team members (${knowledgeBase.skills.soft.find(s => s.name === "Mentoring").proficiency}%) and has successfully led testing teams and initiatives. His leadership approach focuses on empowering team members, providing clear direction, and fostering a collaborative environment.`;
                },
                threshold: 0.6
            },
            {
                topic: "achievements",
                patterns: ["achievements", "accomplishments", "success", "awards", "recognition", "impact", "results"],
                responseGenerator: () => {
                    const currentAchievements = knowledgeBase.experience[0].achievements.join(". ");
                    const previousAchievements = knowledgeBase.experience[1].achievements.join(". ");
                    return `At ${knowledgeBase.experience[0].company}, Asit has: ${currentAchievements}. Previously at ${knowledgeBase.experience[1].company}, he: ${previousAchievements}.`;
                },
                threshold: 0.7
            }
        ];
        
        // Function to calculate similarity between message and patterns
        function calculateSimilarity(message, patterns) {
            let maxScore = 0;
            for (const pattern of patterns) {
                if (message.includes(pattern)) {
                    // Direct match gets a high score
                    maxScore = Math.max(maxScore, 0.9);
                } else {
                    // Check for partial matches
                    const words = message.split(/\s+/);
                    for (const word of words) {
                        if (pattern.includes(word) || word.includes(pattern)) {
                            maxScore = Math.max(maxScore, 0.7);
                        }
                    }
                }
            }
            return maxScore;
        }
        
        // Add topic extractors for new skills
        topicExtractors.push(
            {
                topic: "frameworkDevelopment",
                patterns: ["framework development", "test framework", "automation framework", "framework architecture", "framework design", "page object model", "pom", "data-driven", "keyword-driven", "framework from scratch"],
                responseGenerator: () => {
                    const topSkills = knowledgeBase.skills.frameworkDevelopment.filter(s => s.proficiency >= 90).map(s => s.name).join(", ");
                    return `Asit is an expert in test automation framework development with skills in ${topSkills}. He has extensive experience designing and implementing frameworks from scratch that are scalable, maintainable, and efficient. His frameworks typically incorporate best practices like Page Object Model, data-driven testing approaches, and modular design patterns.`;
                },
                threshold: 0.6
            },
            {
                topic: "performanceTesting",
                patterns: ["performance testing", "load testing", "stress testing", "jmeter", "loadrunner", "gatling", "performance", "load", "stress", "response time", "throughput"],
                responseGenerator: () => {
                    const tools = knowledgeBase.skills.performanceTesting.filter(s => s.proficiency >= 85).map(s => s.name).join(", ");
                    return `Asit has strong expertise in performance testing with proficiency in tools like ${tools}. He has experience designing and executing comprehensive performance test strategies to identify bottlenecks, measure response times, and ensure applications can handle expected loads. His performance testing work has resulted in significant improvements in application response times and throughput.`;
                },
                threshold: 0.6
            },
            {
                topic: "apiTesting",
                patterns: ["api testing", "rest api", "restful", "rest assured", "postman", "soap", "graphql", "api automation", "web services", "microservices"],
                responseGenerator: () => {
                    return `Asit is highly skilled in API testing with ${knowledgeBase.skills.apiTesting.find(s => s.name === "REST API").proficiency}% proficiency in REST API testing and ${knowledgeBase.skills.apiTesting.find(s => s.name === "REST Assured").proficiency}% in REST Assured. He has extensive experience testing RESTful services, SOAP web services, and GraphQL APIs. His API testing approach includes validation of request/response formats, status codes, authentication mechanisms, and performance characteristics.`;
                },
                threshold: 0.6
            }
        );
        
        // Process the message against all topic extractors
        for (const extractor of topicExtractors) {
            const similarity = calculateSimilarity(lowerMessage, extractor.patterns);
            
            if (similarity >= extractor.threshold && similarity > confidenceScore) {
                response = extractor.responseGenerator();
                matchFound = true;
                confidenceScore = similarity;
            }
        }
        
        // Handle specific project inquiries
        knowledgeBase.projects.forEach(project => {
            if (lowerMessage.includes(project.name.toLowerCase())) {
                const technologies = project.technologies.join(", ");
                let projectResponse = `${project.name} is ${project.description} `;
                projectResponse += `It was built using ${technologies}. `;
                
                if (project.features) {
                    projectResponse += `Key features include: ${project.features.join(", ")}. `;
                }
                
                if (project.status) {
                    projectResponse += `Status: ${project.status}.`;
                }
                
                if (project.link) {
                    projectResponse += `You can check it out here: ${project.link}`;
                }
                
                response = projectResponse;
                matchFound = true;
                confidenceScore = 0.95;
            }
        });
        
        // Handle specific skill inquiries
        const allSkills = [
            ...knowledgeBase.skills.programming,
            ...knowledgeBase.skills.automation,
            ...knowledgeBase.skills.devops,
            ...knowledgeBase.skills.ai,
            ...knowledgeBase.skills.soft,
            ...knowledgeBase.skills.frameworkDevelopment,
            ...knowledgeBase.skills.performanceTesting,
            ...knowledgeBase.skills.apiTesting
        ];
        
        allSkills.forEach(skill => {
            if (lowerMessage.includes(skill.name.toLowerCase())) {
                let category = "";
                if (knowledgeBase.skills.programming.some(s => s.name === skill.name)) category = "programming";
                else if (knowledgeBase.skills.automation.some(s => s.name === skill.name)) category = "automation";
                else if (knowledgeBase.skills.devops.some(s => s.name === skill.name)) category = "DevOps";
                else if (knowledgeBase.skills.ai.some(s => s.name === skill.name)) category = "AI/ML";
                else if (knowledgeBase.skills.soft.some(s => s.name === skill.name)) category = "soft skills";
                
                response = `Asit has a ${skill.proficiency}% proficiency in ${skill.name}, which is one of his key ${category} skills. `;
                
                // Add context based on the skill
                if (category === "programming") {
                    response += `He uses ${skill.name} extensively in his automation frameworks and projects.`;
                } else if (category === "automation") {
                    response += `He has implemented this in multiple test automation frameworks to improve efficiency and coverage.`;
                } else if (category === "DevOps") {
                    response += `This is part of his CI/CD expertise that helps streamline development and testing processes.`;
                } else if (category === "AI/ML") {
                    response += `He leverages this skill to create intelligent testing solutions and AI-powered tools.`;
                } else if (category === "soft skills") {
                    response += `This is essential to his role as a Senior Lead SDET, where he guides teams and initiatives.`;
                }
                
                matchFound = true;
                confidenceScore = 0.95;
            }
        });
        
        // If no specific match was found, try to provide a helpful response based on context analysis
        if (!matchFound) {
            // Check if it's a question about capabilities or qualifications
            if (lowerMessage.includes("can you") || lowerMessage.includes("are you able") || lowerMessage.includes("do you know")) {
                return "I'm Asit's portfolio assistant, designed to help you learn about his skills and experience. While I can answer questions about Asit's professional background, I'm not Asit himself. If you have specific questions about his skills, projects, or experience, I'd be happy to help with those!";
            }
            
            // Check if it's about salary or compensation
            if (lowerMessage.includes("salary") || lowerMessage.includes("pay") || lowerMessage.includes("compensation") || lowerMessage.includes("earning")) {
                return "For discussions about compensation and salary expectations, I'd recommend reaching out to Asit directly through the contact information provided in the Contact section. He'd be happy to discuss specific details based on project requirements and scope.";
            }
            
            // Check if it's about availability or scheduling
            if (lowerMessage.includes("available") || lowerMessage.includes("schedule") || lowerMessage.includes("when can") || lowerMessage.includes("start date")) {
                return "For questions about Asit's availability and scheduling, please reach out through the contact form or via email at sahooasit@hotmail.com. He typically responds within 24-48 hours to discuss potential opportunities and timing.";
            }
            
            // Default response for unrecognized queries
            return `That's an interesting question about ${extractMainTopic(lowerMessage)}! Asit is a Senior Lead SDET with ${knowledgeBase.profile.experience} experience in automation and AI integration. He specializes in creating efficient testing frameworks and innovative AI-powered tools. Would you like to know more about his skills, projects, or specific areas of expertise?`;
        }
        
        return response;
    }
    
// Helper function to extract the main topic from a message
function extractMainTopic(message) {
    const commonWords = ["the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "with", "about", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "do", "does", "did", "can", "could", "will", "would", "should", "may", "might", "must", "you", "your", "yours", "he", "him", "his", "she", "her", "hers", "it", "its", "they", "them", "their", "theirs", "we", "us", "our", "ours", "i", "me", "my", "mine"];
    
    // Remove common words and split into individual words
    const words = message.split(/\s+/).filter(word => !commonWords.includes(word));
    
    if (words.length === 0) {
        return "Asit's background";
    }
    
    // Find the longest word as it might be more significant
    let mainTopic = words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
    
    // If the main topic is very short, use a combination of words
    if (mainTopic.length < 4 && words.length > 1) {
        mainTopic = words.slice(0, 2).join(" ");
    }
    
    return mainTopic || "Asit's professional background";
}
