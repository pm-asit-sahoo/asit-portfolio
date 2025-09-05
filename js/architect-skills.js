// Architect Skills Visualization
document.addEventListener('DOMContentLoaded', function() {
    // Create the architect skills section
    const architectSection = document.createElement('section');
    architectSection.id = 'architect-skills';
    architectSection.className = 'py-20 bg-white';
    
    // Create the GenAI skills section for the skills section
    const genaiSkillsSection = document.createElement('div');
    genaiSkillsSection.className = 'mt-12';
    
    // Create the section content
    architectSection.innerHTML = `
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-12">Automation Architect Skills</h2>
            
            <div class="bg-white rounded-lg shadow-lg p-8 mb-10">
                <div class="text-center mb-8">
                    <h3 class="text-2xl font-semibold mb-4">Match Analysis</h3>
                    <div class="relative inline-block w-48 h-48">
                        <svg class="w-full h-full" viewBox="0 0 36 36">
                            <path class="stroke-current text-gray-200" stroke-width="3.8" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                            <path class="stroke-current text-indigo-600" stroke-width="3.8" fill="none" stroke-linecap="round" stroke-dasharray="92, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-3xl font-bold text-indigo-600">92%</span>
                        </div>
                    </div>
                </div>
                
                <div class="space-y-6">
                    <h3 class="text-xl font-semibold mb-4">Skill Breakdown:</h3>
                    
                    <!-- Framework Architecture -->
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="font-medium">Framework Architecture</span>
                            <div class="text-right">
                                <span>Required: 95%</span>
                                <span class="ml-2 font-semibold">95%</span>
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                            <div class="bg-green-500 h-2.5 rounded-full" style="width: 95%"></div>
                        </div>
                    </div>
                    
                    <!-- Multi-platform Testing -->
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="font-medium">Multi-platform Testing</span>
                            <div class="text-right">
                                <span>Required: 90%</span>
                                <span class="ml-2 font-semibold">85%</span>
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                            <div class="bg-green-500 h-2.5 rounded-full" style="width: 85%"></div>
                        </div>
                    </div>
                    
                    <!-- Performance Optimization -->
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="font-medium">Performance Optimization</span>
                            <div class="text-right">
                                <span>Required: 85%</span>
                                <span class="ml-2 font-semibold">80%</span>
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                            <div class="bg-green-500 h-2.5 rounded-full" style="width: 80%"></div>
                        </div>
                    </div>
                    
                    <!-- DevOps Integration -->
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="font-medium">DevOps Integration</span>
                            <div class="text-right">
                                <span>Required: 80%</span>
                                <span class="ml-2 font-semibold">88%</span>
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                            <div class="bg-green-500 h-2.5 rounded-full" style="width: 88%"></div>
                        </div>
                    </div>
                    
                    <!-- Advanced Programming -->
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="font-medium">Advanced Programming</span>
                            <div class="text-right">
                                <span>Required: 85%</span>
                                <span class="ml-2 font-semibold">90%</span>
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                            <div class="bg-green-500 h-2.5 rounded-full" style="width: 90%"></div>
                        </div>
                    </div>
                    
                    <!-- GenAI & LLM Integration -->
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="font-medium">GenAI & LLM Integration</span>
                            <div class="text-right">
                                <span>Required: 90%</span>
                                <span class="ml-2 font-semibold">92%</span>
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                            <div class="bg-green-500 h-2.5 rounded-full" style="width: 92%"></div>
                        </div>
                    </div>
                    
                    <!-- Agentic Framework Development -->
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="font-medium">Agentic Framework Development</span>
                            <div class="text-right">
                                <span>Required: 85%</span>
                                <span class="ml-2 font-semibold">88%</span>
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                            <div class="bg-green-500 h-2.5 rounded-full" style="width: 88%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-10">
                    <a href="#contact" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                        Contact Asit for Automation Architect Role
                    </a>
                </div>
            </div>
            
            <!-- GenAI Skills Section -->
            <div class="mt-12">
                <h3 class="text-2xl font-semibold text-center mb-8">GenAI & LLM Expertise</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Prompt Engineering -->
                    <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                        <div class="flex items-center mb-4">
                            <div class="bg-blue-100 p-3 rounded-full mr-3">
                                <i class="fas fa-keyboard text-blue-600"></i>
                            </div>
                            <h3 class="text-xl font-bold">Prompt Engineering</h3>
                        </div>
                        <div class="space-y-3">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">System Prompts</span>
                                    <span>95%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 95%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Chain-of-Thought</span>
                                    <span>90%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Few-Shot Learning</span>
                                    <span>85%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- RAG & Vector Databases -->
                    <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                        <div class="flex items-center mb-4">
                            <div class="bg-blue-100 p-3 rounded-full mr-3">
                                <i class="fas fa-database text-blue-600"></i>
                            </div>
                            <h3 class="text-xl font-bold">RAG & Vector DBs</h3>
                        </div>
                        <div class="space-y-3">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Retrieval Augmented Generation</span>
                                    <span>90%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Vector Embeddings</span>
                                    <span>85%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Semantic Search</span>
                                    <span>90%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- LLM Frameworks -->
                    <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                        <div class="flex items-center mb-4">
                            <div class="bg-blue-100 p-3 rounded-full mr-3">
                                <i class="fas fa-project-diagram text-blue-600"></i>
                            </div>
                            <h3 class="text-xl font-bold">LLM Frameworks</h3>
                        </div>
                        <div class="space-y-3">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">LangChain</span>
                                    <span>90%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">LangGraph</span>
                                    <span>85%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Langfuse</span>
                                    <span>80%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 80%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- AI Models & Integration -->
                    <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                        <div class="flex items-center mb-4">
                            <div class="bg-blue-100 p-3 rounded-full mr-3">
                                <i class="fas fa-brain text-blue-600"></i>
                            </div>
                            <h3 class="text-xl font-bold">AI Models & Integration</h3>
                        </div>
                        <div class="space-y-3">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Hugging Face Models</span>
                                    <span>85%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Transformers</span>
                                    <span>80%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 80%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">MCP Server</span>
                                    <span>85%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Agentic Frameworks -->
                    <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                        <div class="flex items-center mb-4">
                            <div class="bg-blue-100 p-3 rounded-full mr-3">
                                <i class="fas fa-robot text-blue-600"></i>
                            </div>
                            <h3 class="text-xl font-bold">Agentic Frameworks</h3>
                        </div>
                        <div class="space-y-3">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Agentic Design</span>
                                    <span>90%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Multi-Agent Systems</span>
                                    <span>85%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Tool Integration</span>
                                    <span>90%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- LLM-based Automation -->
                    <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                        <div class="flex items-center mb-4">
                            <div class="bg-blue-100 p-3 rounded-full mr-3">
                                <i class="fas fa-cogs text-blue-600"></i>
                            </div>
                            <h3 class="text-xl font-bold">LLM-based Automation</h3>
                        </div>
                        <div class="space-y-3">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Workflow Automation</span>
                                    <span>95%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 95%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Vibe Coding</span>
                                    <span>85%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Code Generation</span>
                                    <span>90%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- GenAI Skills Tags -->
            <div class="mt-12">
                <h3 class="text-xl font-semibold mb-6 text-center">Additional GenAI Expertise</h3>
                <div class="flex flex-wrap justify-center gap-3">
                    <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Prompt Engineering</span>
                    <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">RAG</span>
                    <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Agentic Framework</span>
                    <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">LangChain</span>
                    <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">LangGraph</span>
                    <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Langfuse</span>
                    <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Hugging Face Models</span>
                    <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">LLM-based Automation</span>
                    <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Transformers</span>
                    <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">MCP Server</span>
                    <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Vibe Coding</span>
                </div>
            </div>
        </div>
    `;
    
    // Find the skills section to insert after
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.parentNode.insertBefore(architectSection, skillsSection.nextSibling);
    } else {
        // Fallback: append to body
        document.body.appendChild(architectSection);
    }
});
