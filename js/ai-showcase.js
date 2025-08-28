// AI Showcase Component for Portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Create the AI showcase section if the container exists
    const showcaseContainer = document.getElementById('ai-showcase-container');
    if (showcaseContainer) {
        createAIShowcase(showcaseContainer);
    }
});

// Create the AI showcase UI and functionality
function createAIShowcase(container) {
    // Main showcase wrapper
    const showcaseWrapper = document.createElement('div');
    showcaseWrapper.className = 'bg-white rounded-lg shadow-xl p-6 mb-10';
    
    // Title
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800 mb-4';
    title.textContent = 'AI Implementation Showcase';
    
    // Description
    const description = document.createElement('p');
    description.className = 'text-gray-600 mb-6';
    description.textContent = 'Explore interactive demonstrations of my AI implementations. Select a project to see architecture diagrams, performance metrics, and implementation details.';
    
    // Projects selector
    const projectSelector = document.createElement('div');
    projectSelector.className = 'flex flex-wrap gap-3 mb-8';
    
    // Project content area
    const projectContent = document.createElement('div');
    projectContent.id = 'project-content';
    projectContent.className = 'border rounded-lg p-6 bg-gray-50';
    
    // Add projects to selector
    const projects = [
        {
            id: 'rag-chatbot',
            name: 'RAG-Powered Chatbot',
            content: createRAGChatbotContent()
        },
        {
            id: 'test-generator',
            name: 'AI Test Generator',
            content: createTestGeneratorContent()
        },
        {
            id: 'observability',
            name: 'AI Observability',
            content: createObservabilityContent()
        },
        {
            id: 'semantic-search',
            name: 'Semantic Search',
            content: createSemanticSearchContent()
        }
    ];
    
    projects.forEach(project => {
        const button = document.createElement('button');
        button.className = 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition';
        button.textContent = project.name;
        button.addEventListener('click', () => {
            // Clear current content
            projectContent.innerHTML = '';
            // Add new content
            projectContent.appendChild(project.content);
            
            // Update active button state
            document.querySelectorAll('#ai-showcase-container button').forEach(btn => {
                btn.classList.remove('ring-2', 'ring-offset-2', 'ring-blue-500');
            });
            button.classList.add('ring-2', 'ring-offset-2', 'ring-blue-500');
        });
        projectSelector.appendChild(button);
    });
    
    // Assemble the showcase
    showcaseWrapper.appendChild(title);
    showcaseWrapper.appendChild(description);
    showcaseWrapper.appendChild(projectSelector);
    showcaseWrapper.appendChild(projectContent);
    
    // Add to container
    container.appendChild(showcaseWrapper);
    
    // Show first project by default
    if (projects.length > 0) {
        projectContent.appendChild(projects[0].content);
        projectSelector.querySelector('button').classList.add('ring-2', 'ring-offset-2', 'ring-blue-500');
    }
}

// Create content for RAG Chatbot showcase
function createRAGChatbotContent() {
    const content = document.createElement('div');
    
    // Architecture diagram
    const diagram = document.createElement('div');
    diagram.className = 'mb-6';
    diagram.innerHTML = `
        <h3 class="text-xl font-semibold mb-3">RAG Architecture</h3>
        <div class="bg-white p-4 rounded border">
            <div class="flex flex-col items-center">
                <div class="bg-blue-100 p-3 rounded-lg w-full max-w-md text-center mb-4">
                    <span class="font-medium">User Query</span>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="grid grid-cols-2 gap-4 w-full max-w-2xl mb-4">
                    <div class="bg-green-100 p-3 rounded-lg text-center">
                        <span class="font-medium">Query Embedding</span>
                    </div>
                    <div class="bg-yellow-100 p-3 rounded-lg text-center">
                        <span class="font-medium">Vector Database</span>
                    </div>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="bg-purple-100 p-3 rounded-lg w-full max-w-md text-center mb-4">
                    <span class="font-medium">Context Retrieval</span>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="bg-red-100 p-3 rounded-lg w-full max-w-md text-center mb-4">
                    <span class="font-medium">LLM with Enhanced Context</span>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="bg-blue-100 p-3 rounded-lg w-full max-w-md text-center">
                    <span class="font-medium">Response to User</span>
                </div>
            </div>
        </div>
    `;
    
    // Performance metrics
    const metrics = document.createElement('div');
    metrics.className = 'mb-6';
    metrics.innerHTML = `
        <h3 class="text-xl font-semibold mb-3">Performance Metrics</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded border text-center">
                <div class="text-3xl font-bold text-blue-600">60%</div>
                <div class="text-gray-600">Reduction in Response Time</div>
            </div>
            <div class="bg-white p-4 rounded border text-center">
                <div class="text-3xl font-bold text-blue-600">35%</div>
                <div class="text-gray-600">Increase in Accuracy</div>
            </div>
            <div class="bg-white p-4 rounded border text-center">
                <div class="text-3xl font-bold text-blue-600">70%</div>
                <div class="text-gray-600">Reduction in Hallucinations</div>
            </div>
        </div>
    `;
    
    // Implementation details
    const details = document.createElement('div');
    details.innerHTML = `
        <h3 class="text-xl font-semibold mb-3">Implementation Details</h3>
        <div class="bg-white p-4 rounded border">
            <ul class="list-disc pl-5 space-y-2">
                <li><span class="font-medium">Vector Database:</span> FAISS for efficient similarity search</li>
                <li><span class="font-medium">Embeddings:</span> OpenAI text-embedding-ada-002 model</li>
                <li><span class="font-medium">LLM Integration:</span> LangChain for orchestrating the RAG workflow</li>
                <li><span class="font-medium">Context Window:</span> Dynamic sizing based on query complexity</li>
                <li><span class="font-medium">Observability:</span> Langfuse for tracking and optimizing prompts</li>
                <li><span class="font-medium">Deployment:</span> Containerized with Docker, orchestrated with Kubernetes</li>
            </ul>
        </div>
    `;
    
    content.appendChild(diagram);
    content.appendChild(metrics);
    content.appendChild(details);
    
    return content;
}

// Create content for AI Test Generator showcase
function createTestGeneratorContent() {
    const content = document.createElement('div');
    
    // Architecture diagram
    const diagram = document.createElement('div');
    diagram.className = 'mb-6';
    diagram.innerHTML = `
        <h3 class="text-xl font-semibold mb-3">Test Generator Architecture</h3>
        <div class="bg-white p-4 rounded border">
            <div class="flex flex-col items-center">
                <div class="grid grid-cols-3 gap-4 w-full max-w-2xl mb-4">
                    <div class="bg-blue-100 p-3 rounded-lg text-center">
                        <span class="font-medium">Jira API</span>
                    </div>
                    <div class="bg-blue-100 p-3 rounded-lg text-center">
                        <span class="font-medium">Confluence API</span>
                    </div>
                    <div class="bg-blue-100 p-3 rounded-lg text-center">
                        <span class="font-medium">User Input</span>
                    </div>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="bg-green-100 p-3 rounded-lg w-full max-w-md text-center mb-4">
                    <span class="font-medium">Data Aggregation & Processing</span>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="bg-yellow-100 p-3 rounded-lg w-full max-w-md text-center mb-4">
                    <span class="font-medium">Team-Specific Templates</span>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="bg-red-100 p-3 rounded-lg w-full max-w-md text-center mb-4">
                    <span class="font-medium">LLM Test Case Generation</span>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="bg-purple-100 p-3 rounded-lg w-full max-w-md text-center">
                    <span class="font-medium">CSV Export & Integration</span>
                </div>
            </div>
        </div>
    `;
    
    // Performance metrics
    const metrics = document.createElement('div');
    metrics.className = 'mb-6';
    metrics.innerHTML = `
        <h3 class="text-xl font-semibold mb-3">Performance Metrics</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded border text-center">
                <div class="text-3xl font-bold text-blue-600">60%</div>
                <div class="text-gray-600">Reduction in Test Creation Time</div>
            </div>
            <div class="bg-white p-4 rounded border text-center">
                <div class="text-3xl font-bold text-blue-600">40%</div>
                <div class="text-gray-600">Increase in Test Coverage</div>
            </div>
            <div class="bg-white p-4 rounded border text-center">
                <div class="text-3xl font-bold text-blue-600">5x</div>
                <div class="text-gray-600">More Edge Cases Identified</div>
            </div>
        </div>
    `;
    
    // Implementation details
    const details = document.createElement('div');
    details.innerHTML = `
        <h3 class="text-xl font-semibold mb-3">Implementation Details</h3>
        <div class="bg-white p-4 rounded border">
            <ul class="list-disc pl-5 space-y-2">
                <li><span class="font-medium">UI Framework:</span> Streamlit for interactive interface</li>
                <li><span class="font-medium">API Integration:</span> Jira and Confluence APIs for requirements gathering</li>
                <li><span class="font-medium">Team Templates:</span> Customized prompts for different teams (JS, SDK, Server)</li>
                <li><span class="font-medium">LLM:</span> OpenAI GPT-4 with specialized test case generation prompts</li>
                <li><span class="font-medium">Export Formats:</span> CSV integration with test management systems</li>
                <li><span class="font-medium">Deployment:</span> Containerized web application with CI/CD pipeline</li>
            </ul>
        </div>
    `;
    
    content.appendChild(diagram);
    content.appendChild(metrics);
    content.appendChild(details);
    
    return content;
}

// Create content for AI Observability showcase
function createObservabilityContent() {
    const content = document.createElement('div');
    
    // Architecture diagram
    const diagram = document.createElement('div');
    diagram.className = 'mb-6';
    diagram.innerHTML = `
        <h3 class="text-xl font-semibold mb-3">AI Observability Architecture</h3>
        <div class="bg-white p-4 rounded border">
            <div class="flex flex-col items-center">
                <div class="grid grid-cols-2 gap-4 w-full max-w-2xl mb-4">
                    <div class="bg-blue-100 p-3 rounded-lg text-center">
                        <span class="font-medium">AI Applications</span>
                    </div>
                    <div class="bg-blue-100 p-3 rounded-lg text-center">
                        <span class="font-medium">User Interactions</span>
                    </div>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="grid grid-cols-2 gap-4 w-full max-w-2xl mb-4">
                    <div class="bg-green-100 p-3 rounded-lg text-center">
                        <span class="font-medium">Langfuse SDK</span>
                    </div>
                    <div class="bg-yellow-100 p-3 rounded-lg text-center">
                        <span class="font-medium">MCP Server</span>
                    </div>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="bg-purple-100 p-3 rounded-lg w-full max-w-md text-center mb-4">
                    <span class="font-medium">Metrics Collection & Analysis</span>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="grid grid-cols-3 gap-4 w-full max-w-2xl">
                    <div class="bg-red-100 p-3 rounded-lg text-center">
                        <span class="font-medium">Performance Dashboards</span>
                    </div>
                    <div class="bg-red-100 p-3 rounded-lg text-center">
                        <span class="font-medium">Prompt Optimization</span>
                    </div>
                    <div class="bg-red-100 p-3 rounded-lg text-center">
                        <span class="font-medium">Alerting System</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Performance metrics
    const metrics = document.createElement('div');
    metrics.className = 'mb-6';
    metrics.innerHTML = `
        <h3 class="text-xl font-semibold mb-3">Performance Metrics</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded border text-center">
                <div class="text-3xl font-bold text-blue-600">25%</div>
                <div class="text-gray-600">Improvement in Prompt Performance</div>
            </div>
            <div class="bg-white p-4 rounded border text-center">
                <div class="text-3xl font-bold text-blue-600">40%</div>
                <div class="text-gray-600">Reduction in Token Usage</div>
            </div>
            <div class="bg-white p-4 rounded border text-center">
                <div class="text-3xl font-bold text-blue-600">90%</div>
                <div class="text-gray-600">Real-time Issue Detection</div>
            </div>
        </div>
    `;
    
    // Implementation details
    const details = document.createElement('div');
    details.innerHTML = `
        <h3 class="text-xl font-semibold mb-3">Implementation Details</h3>
        <div class="bg-white p-4 rounded border">
            <ul class="list-disc pl-5 space-y-2">
                <li><span class="font-medium">Langfuse:</span> Tracking prompts, completions, and user feedback</li>
                <li><span class="font-medium">MCP Server:</span> Custom monitoring solution for AI application performance</li>
                <li><span class="font-medium">Metrics:</span> Response time, token usage, accuracy, user satisfaction</li>
                <li><span class="font-medium">Dashboards:</span> Real-time visualization of AI system performance</li>
                <li><span class="font-medium">Alerting:</span> Automated notifications for performance degradation</li>
                <li><span class="font-medium">Optimization Loop:</span> Continuous improvement based on observability data</li>
            </ul>
        </div>
    `;
    
    content.appendChild(diagram);
    content.appendChild(metrics);
    content.appendChild(details);
    
    return content;
}

// Create content for Semantic Search showcase
function createSemanticSearchContent() {
    const content = document.createElement('div');
    
    // Architecture diagram
    const diagram = document.createElement('div');
    diagram.className = 'mb-6';
    diagram.innerHTML = `
        <h3 class="text-xl font-semibold mb-3">Semantic Search Architecture</h3>
        <div class="bg-white p-4 rounded border">
            <div class="flex flex-col items-center">
                <div class="grid grid-cols-3 gap-4 w-full max-w-2xl mb-4">
                    <div class="bg-blue-100 p-3 rounded-lg text-center">
                        <span class="font-medium">Documentation</span>
                    </div>
                    <div class="bg-blue-100 p-3 rounded-lg text-center">
                        <span class="font-medium">Code Repositories</span>
                    </div>
                    <div class="bg-blue-100 p-3 rounded-lg text-center">
                        <span class="font-medium">Knowledge Base</span>
                    </div>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="bg-green-100 p-3 rounded-lg w-full max-w-md text-center mb-4">
                    <span class="font-medium">Document Processing Pipeline</span>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="bg-yellow-100 p-3 rounded-lg w-full max-w-md text-center mb-4">
                    <span class="font-medium">Vector Embeddings Generation</span>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="bg-red-100 p-3 rounded-lg w-full max-w-md text-center mb-4">
                    <span class="font-medium">FAISS Vector Database</span>
                </div>
                <div class="h-6 border-l-2 border-gray-400"></div>
                <div class="bg-purple-100 p-3 rounded-lg w-full max-w-md text-center">
                    <span class="font-medium">Search API & User Interface</span>
                </div>
            </div>
        </div>
    `;
    
    // Performance metrics
    const metrics = document.createElement('div');
    metrics.className = 'mb-6';
    metrics.innerHTML = `
        <h3 class="text-xl font-semibold mb-3">Performance Metrics</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded border text-center">
                <div class="text-3xl font-bold text-blue-600">70%</div>
                <div class="text-gray-600">Reduction in Knowledge Retrieval Time</div>
            </div>
            <div class="bg-white p-4 rounded border text-center">
                <div class="text-3xl font-bold text-blue-600">85%</div>
                <div class="text-gray-600">Relevant Document Retrieval Rate</div>
            </div>
            <div class="bg-white p-4 rounded border text-center">
                <div class="text-3xl font-bold text-blue-600">50ms</div>
                <div class="text-gray-600">Average Query Response Time</div>
            </div>
        </div>
    `;
    
    // Implementation details
    const details = document.createElement('div');
    details.innerHTML = `
        <h3 class="text-xl font-semibold mb-3">Implementation Details</h3>
        <div class="bg-white p-4 rounded border">
            <ul class="list-disc pl-5 space-y-2">
                <li><span class="font-medium">Document Processing:</span> Chunking, cleaning, and metadata extraction</li>
                <li><span class="font-medium">Embeddings:</span> OpenAI text-embedding-ada-002 model</li>
                <li><span class="font-medium">Vector Database:</span> FAISS for efficient similarity search</li>
                <li><span class="font-medium">Search Algorithm:</span> Hybrid search combining semantic and keyword matching</li>
                <li><span class="font-medium">Relevance Feedback:</span> Learning from user interactions to improve results</li>
                <li><span class="font-medium">Integration:</span> API endpoints for integration with multiple applications</li>
            </ul>
        </div>
    `;
    
    content.appendChild(diagram);
    content.appendChild(metrics);
    content.appendChild(details);
    
    return content;
}
