// Skills Search Feature
document.addEventListener('DOMContentLoaded', function() {
    // Create and add the skills search UI
    createSkillsSearchUI();
    
    // Initialize the skills search functionality
    initSkillsSearch();
});

function createSkillsSearchUI() {
    // Create the search container
    const searchContainer = document.createElement('div');
    searchContainer.id = 'skills-search-container';
    searchContainer.className = 'max-w-3xl mx-auto mt-8 mb-4 px-4';
    
    // Create the search UI
    searchContainer.innerHTML = `
        <div class="bg-white rounded-lg shadow-lg p-4 relative">
            <h3 class="text-lg font-semibold mb-3 text-center">Find My Skills & Expertise</h3>
            <div class="relative">
                <input type="text" id="skills-search-input" 
                       placeholder="Search skills (e.g., Python, Automation, AI...)" 
                       class="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <button id="clear-search" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 hidden">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div id="skills-search-results" class="mt-3 hidden">
                <div class="border-t border-gray-200 pt-3">
                    <h4 class="font-medium mb-2">Results:</h4>
                    <div id="skills-results-content" class="max-h-60 overflow-y-auto"></div>
                </div>
            </div>
            <div id="trending-skills" class="mt-3">
                <div class="border-t border-gray-200 pt-3">
                    <h4 class="font-medium mb-2">Popular Skills:</h4>
                    <div class="flex flex-wrap gap-2">
                        <button class="trending-skill px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition">Python</button>
                        <button class="trending-skill px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition">Automation</button>
                        <button class="trending-skill px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition">AI/ML</button>
                        <button class="trending-skill px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition">Testing</button>
                        <button class="trending-skill px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition">CI/CD</button>
                        <button class="trending-skill px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition">Prompt Engineering</button>
                        <button class="trending-skill px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition">Kubernetes</button>
                        <button class="trending-skill px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition">Leadership</button>
                        <button class="trending-skill px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition">SOLID Principles</button>
                        <button class="trending-skill px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition">Design Patterns</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Find the hero section to insert the search UI
    const heroSection = document.querySelector('#hero .container');
    
    // Insert after the social links
    const socialLinks = heroSection.querySelector('.flex.justify-center.gap-4.mb-8:last-of-type');
    if (socialLinks) {
        socialLinks.insertAdjacentElement('afterend', searchContainer);
    } else {
        // Fallback: insert at the end of hero section
        heroSection.appendChild(searchContainer);
    }
    
    // Add necessary styles
    const style = document.createElement('style');
    style.textContent = `
        .skill-result {
            transition: all 0.2s ease;
        }
        
        .skill-result:hover {
            background-color: #f3f4f6;
        }
        
        .skill-highlight {
            background-color: rgba(79, 70, 229, 0.1);
            padding: 0 2px;
            border-radius: 2px;
            font-weight: 500;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        #skills-search-results {
            animation: fadeIn 0.3s ease-out;
        }
    `;
    document.head.appendChild(style);
}

function initSkillsSearch() {
    // Get DOM elements
    const searchInput = document.getElementById('skills-search-input');
    const clearButton = document.getElementById('clear-search');
    const searchResults = document.getElementById('skills-search-results');
    const resultsContent = document.getElementById('skills-results-content');
    const trendingSkills = document.getElementById('trending-skills');
    const trendingButtons = document.querySelectorAll('.trending-skill');
    
    // Define skills data with details
    const skillsData = [
        {
            name: "Python",
            category: "Programming Languages",
            proficiency: 95,
            description: "Expert-level Python programming with focus on automation, testing, and AI/ML applications.",
            projects: ["Universal Test Case Generator", "AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "JavaScript",
            category: "Programming Languages",
            proficiency: 90,
            description: "Strong JavaScript skills for web automation, front-end development, and Prebid.js contributions.",
            projects: ["Prebid.js", "2048 Game", "Climate Dashboard"],
            location: "#skills"
        },
        {
            name: "C#",
            category: "Programming Languages",
            proficiency: 90,
            description: "Extensive experience with C# for Windows application testing and automation frameworks.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Java",
            category: "Programming Languages",
            proficiency: 85,
            description: "Java programming for enterprise testing solutions and API automation.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Robot Framework",
            category: "Automation Frameworks",
            proficiency: 95,
            description: "Expert in Robot Framework for creating comprehensive test automation solutions.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "PyTest Framework",
            category: "Automation Frameworks",
            proficiency: 95,
            description: "Advanced PyTest implementation for efficient and scalable test automation.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "TestNG",
            category: "Automation Frameworks",
            proficiency: 85,
            description: "TestNG implementation for Java-based test automation solutions.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Jenkins",
            category: "DevOps & CI/CD",
            proficiency: 90,
            description: "Jenkins pipeline creation and management for continuous integration and delivery.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Azure DevOps",
            category: "DevOps & CI/CD",
            proficiency: 85,
            description: "Azure DevOps implementation for CI/CD pipelines and project management.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Git",
            category: "DevOps & CI/CD",
            proficiency: 90,
            description: "Advanced Git version control for collaborative development and open source contributions.",
            projects: ["Prebid.js"],
            location: "#skills"
        },
        {
            name: "GenAI",
            category: "AI & ML",
            proficiency: 90,
            description: "Integration of Generative AI technologies into testing and automation workflows.",
            projects: ["Universal Test Case Generator", "AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "Streamlit",
            category: "AI & ML",
            proficiency: 85,
            description: "Streamlit application development for data visualization and AI tool interfaces.",
            projects: ["Universal Test Case Generator"],
            location: "#skills"
        },
        {
            name: "Prompt Engineering",
            category: "AI & ML",
            proficiency: 90,
            description: "Expert in crafting effective prompts for LLMs to generate optimal outputs for various use cases.",
            projects: ["Universal Test Case Generator", "AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "LLM Integration",
            category: "AI & ML",
            proficiency: 85,
            description: "Integration of Large Language Models into applications and workflows for enhanced functionality.",
            projects: ["Universal Test Case Generator", "AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "UI Automation",
            category: "Testing Types",
            proficiency: 95,
            description: "Comprehensive UI automation across web and desktop applications.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "API Automation",
            category: "Testing Types",
            proficiency: 95,
            description: "RESTful and SOAP API testing and automation.",
            projects: ["Test Automation Framework", "AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "Windows Automation",
            category: "Testing Types",
            proficiency: 90,
            description: "Windows application testing and automation using specialized frameworks.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Selenium",
            category: "Testing Tools",
            proficiency: 95,
            description: "Expert in Selenium WebDriver for web application testing.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Playwright",
            category: "Testing Tools",
            proficiency: 90,
            description: "Modern web testing with Playwright for cross-browser automation.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Appium",
            category: "Testing Tools",
            proficiency: 85,
            description: "Mobile application testing with Appium.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Leadership",
            category: "Soft Skills",
            proficiency: 90,
            description: "Team leadership and mentoring junior team members.",
            projects: [],
            location: "#experience"
        },
        {
            name: "Agile Methodologies",
            category: "Soft Skills",
            proficiency: 90,
            description: "Expertise in agile development practices and methodologies.",
            projects: [],
            location: "#experience"
        },
        {
            name: "SOLID Principles",
            category: "Software Engineering",
            proficiency: 95,
            description: "Strong understanding and application of SOLID principles (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) in test framework architecture.",
            projects: ["Test Automation Framework", "Universal Test Case Generator"],
            location: "#skills"
        },
        {
            name: "Design Patterns",
            category: "Software Engineering",
            proficiency: 90,
            description: "Proficient in implementing design patterns such as Factory, Singleton, Builder, Strategy, and Observer patterns for creating maintainable and scalable test frameworks.",
            projects: ["Test Automation Framework", "Universal Test Case Generator"],
            location: "#skills"
        },
        {
            name: "JUnit",
            category: "Testing Frameworks",
            proficiency: 90,
            description: "Experienced with JUnit for Java-based unit and integration testing.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Allure",
            category: "Testing Frameworks",
            proficiency: 95,
            description: "Expert in Allure reporting framework for creating detailed and interactive test reports.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "ExtentReports",
            category: "Testing Frameworks",
            proficiency: 90,
            description: "Proficient with ExtentReports for generating comprehensive HTML test reports.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Bash Scripting",
            category: "DevOps Tools",
            proficiency: 85,
            description: "Skilled in Bash scripting for automation, CI/CD, and system administration tasks.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Groovy",
            category: "DevOps Tools",
            proficiency: 80,
            description: "Experience with Groovy for Jenkins pipeline development and scripting.",
            projects: ["Test Automation Framework"],
            location: "#skills"
        },
        {
            name: "Kubernetes",
            category: "DevOps Tools",
            proficiency: 75,
            description: "Knowledge of Kubernetes for container orchestration and deployment.",
            projects: [],
            location: "#skills"
        },
        {
            name: "HTML",
            category: "Web Technologies",
            proficiency: 85,
            description: "Proficient in HTML for web development and test automation.",
            projects: ["2048 Game", "Climate Dashboard"],
            location: "#skills"
        },
        {
            name: "CSS",
            category: "Web Technologies",
            proficiency: 80,
            description: "Skilled in CSS for styling web applications and creating responsive designs.",
            projects: ["2048 Game", "Climate Dashboard"],
            location: "#skills"
        },
        {
            name: "Leadership",
            category: "Soft Skills",
            proficiency: 90,
            description: "Strong leadership abilities with experience leading testing teams and initiatives.",
            projects: [],
            location: "#skills"
        },
        {
            name: "Mentoring",
            category: "Soft Skills",
            proficiency: 95,
            description: "Passionate about mentoring junior team members and helping them develop their skills.",
            projects: [],
            location: "#skills"
        },
        {
            name: "RAG",
            category: "AI & ML",
            proficiency: 90,
            description: "Expertise in Retrieval Augmented Generation for enhancing LLM responses with contextual information.",
            projects: ["AI-Powered Prebid Chatbot", "Universal Test Case Generator"],
            location: "#skills"
        },
        {
            name: "LangChain",
            category: "AI & ML",
            proficiency: 90,
            description: "Proficient in using LangChain framework for building applications with language models.",
            projects: ["AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "LangGraph",
            category: "AI & ML",
            proficiency: 85,
            description: "Experience with LangGraph for orchestrating complex workflows between multiple AI agents.",
            projects: ["AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "Langfuse",
            category: "AI & ML",
            proficiency: 80,
            description: "Implementation of Langfuse for monitoring and observability of LLM applications.",
            projects: ["AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "Hugging Face Models",
            category: "AI & ML",
            proficiency: 85,
            description: "Working with various Hugging Face models for NLP and machine learning tasks.",
            projects: ["Universal Test Case Generator"],
            location: "#skills"
        },
        {
            name: "Transformers",
            category: "AI & ML",
            proficiency: 80,
            description: "Experience with transformer-based models for natural language processing tasks.",
            projects: ["Universal Test Case Generator"],
            location: "#skills"
        },
        {
            name: "MCP Server",
            category: "AI & ML",
            proficiency: 85,
            description: "Working with Model Context Protocol servers for connecting AI systems with external tools and data sources.",
            projects: ["AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "Vibe Coding",
            category: "AI & ML",
            proficiency: 85,
            description: "Implementation of Vibe Coding techniques for intuitive and efficient code generation with AI.",
            projects: ["Universal Test Case Generator"],
            location: "#skills"
        },
        {
            name: "Agentic Framework",
            category: "AI Architecture",
            proficiency: 90,
            description: "Design and implementation of agentic AI frameworks for autonomous task execution and problem-solving.",
            projects: ["AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "Multi-Agent Systems",
            category: "AI Architecture",
            proficiency: 85,
            description: "Building systems with multiple specialized AI agents that collaborate to solve complex problems.",
            projects: ["AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "Tool Integration",
            category: "AI Architecture",
            proficiency: 90,
            description: "Integrating external tools and APIs with AI systems for enhanced capabilities and real-world interaction.",
            projects: ["AI-Powered Prebid Chatbot", "Universal Test Case Generator"],
            location: "#skills"
        },
        {
            name: "Vector Embeddings",
            category: "AI & ML",
            proficiency: 85,
            description: "Working with vector embeddings for semantic search and similarity matching in AI applications.",
            projects: ["AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "Semantic Search",
            category: "AI & ML",
            proficiency: 90,
            description: "Implementation of semantic search capabilities for intelligent information retrieval.",
            projects: ["AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "Framework Architecture",
            category: "Architecture",
            proficiency: 95,
            description: "Expert in designing and implementing scalable, maintainable software architectures for testing and automation.",
            projects: ["Test Automation Framework", "Universal Test Case Generator"],
            location: "#skills"
        },
        {
            name: "Workflow Automation",
            category: "AI & ML",
            proficiency: 95,
            description: "Creating automated workflows powered by AI for increased efficiency and productivity.",
            projects: ["Universal Test Case Generator", "AI-Powered Prebid Chatbot"],
            location: "#skills"
        },
        {
            name: "Code Generation",
            category: "AI & ML",
            proficiency: 90,
            description: "Using AI for automated code generation and code completion tasks.",
            projects: ["Universal Test Case Generator"],
            location: "#skills"
        }
    ];
    
    // Search function
    function performSearch(query) {
        // Clear previous results
        resultsContent.innerHTML = '';
        
        if (!query) {
            searchResults.classList.add('hidden');
            trendingSkills.classList.remove('hidden');
            clearButton.classList.add('hidden');
            return;
        }
        
        // Show clear button
        clearButton.classList.remove('hidden');
        
        // Filter skills based on query
        const filteredSkills = skillsData.filter(skill => 
            skill.name.toLowerCase().includes(query.toLowerCase()) || 
            skill.category.toLowerCase().includes(query.toLowerCase()) ||
            skill.description.toLowerCase().includes(query.toLowerCase())
        );
        
        // Show/hide results container
        if (filteredSkills.length > 0) {
            searchResults.classList.remove('hidden');
            trendingSkills.classList.add('hidden');
            
            // Create results
            filteredSkills.forEach(skill => {
                const resultItem = document.createElement('div');
                resultItem.className = 'skill-result p-3 border-b border-gray-100 cursor-pointer';
                
                // Highlight the matching text
                let nameHtml = skill.name;
                if (skill.name.toLowerCase().includes(query.toLowerCase())) {
                    nameHtml = skill.name.replace(new RegExp(`(${query})`, 'gi'), '<span class="skill-highlight">$1</span>');
                }
                
                resultItem.innerHTML = `
                    <div class="flex justify-between items-center mb-1">
                        <div>
                            <span class="font-medium">${nameHtml}</span>
                            <span class="text-sm text-gray-500 ml-2">${skill.category}</span>
                        </div>
                        <span class="text-blue-600 font-medium">${skill.proficiency}%</span>
                    </div>
                    <p class="text-sm text-gray-600 mb-1">${skill.description}</p>
                    ${skill.projects.length > 0 ? 
                        `<div class="text-xs text-gray-500">
                            <span class="font-medium">Related Projects:</span> ${skill.projects.join(', ')}
                        </div>` : 
                        ''}
                    <div class="mt-2">
                        <a href="${skill.location}" class="text-xs text-blue-600 hover:underline">View details</a>
                    </div>
                `;
                
                // Add click event to navigate to skill section
                resultItem.addEventListener('click', function() {
                    document.querySelector(skill.location).scrollIntoView({ behavior: 'smooth' });
                    
                    // Highlight the skill in the skills section
                    highlightSkillInSection(skill.name);
                });
                
                resultsContent.appendChild(resultItem);
            });
        } else {
            searchResults.classList.remove('hidden');
            trendingSkills.classList.add('hidden');
            
            // Show no results message
            resultsContent.innerHTML = `
                <div class="p-3 text-center text-gray-500">
                    <p>No skills found matching "${query}"</p>
                </div>
            `;
        }
    }
    
    // Highlight skill in the skills section
    function highlightSkillInSection(skillName) {
        // Find skill elements in the skills section
        const skillElements = document.querySelectorAll('#skills .font-medium');
        
        skillElements.forEach(element => {
            if (element.textContent.trim() === skillName) {
                // Add highlight class
                const parentDiv = element.closest('div');
                if (parentDiv) {
                    // Save original background
                    const originalBg = parentDiv.style.backgroundColor;
                    
                    // Apply highlight
                    parentDiv.style.backgroundColor = 'rgba(79, 70, 229, 0.1)';
                    parentDiv.style.transition = 'background-color 0.5s ease';
                    
                    // Remove highlight after a few seconds
                    setTimeout(() => {
                        parentDiv.style.backgroundColor = originalBg;
                    }, 3000);
                }
            }
        });
    }
    
    // Add event listeners
    searchInput.addEventListener('input', function() {
        performSearch(this.value.trim());
    });
    
    // Clear search
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        performSearch('');
        searchInput.focus();
    });
    
    // Trending skills click
    trendingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const skill = this.textContent.trim();
            searchInput.value = skill;
            performSearch(skill);
        });
    });
    
    // Close results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && 
            !searchResults.contains(e.target) && 
            !trendingSkills.contains(e.target) &&
            !e.target.classList.contains('trending-skill')) {
            searchResults.classList.add('hidden');
            if (!searchInput.value) {
                trendingSkills.classList.remove('hidden');
            }
        }
    });
    
    // Focus search input when pressing / key
    document.addEventListener('keydown', function(e) {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Close search results on escape
        if (e.key === 'Escape') {
            searchResults.classList.add('hidden');
            if (!searchInput.value) {
                trendingSkills.classList.remove('hidden');
            }
        }
    });
}
