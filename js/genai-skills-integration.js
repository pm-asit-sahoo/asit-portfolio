// GenAI Skills Integration
document.addEventListener('DOMContentLoaded', function() {
    // Create the GenAI skills section
    const genaiSection = document.createElement('div');
    genaiSection.className = 'mt-12';
    
    // Create the section content
    genaiSection.innerHTML = `
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
        
        <!-- GenAI Skills Tags -->
        <div class="mt-12">
            <h3 class="text-xl font-semibold mb-6 text-center">Additional GenAI Expertise</h3>
            <div class="flex flex-wrap justify-center gap-3">
                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">GPT-4</span>
                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Claude 3</span>
                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Llama 3</span>
                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Mistral</span>
                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Gemini</span>
                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">BERT</span>
                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">T5</span>
                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Anthropic Models</span>
                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Falcon</span>
                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Embeddings</span>
                <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Fine-tuning</span>
            </div>
        </div>
    `;
    
    // Find the skills section to append the GenAI skills
    const skillsContainer = document.querySelector('#skills .container');
    if (skillsContainer) {
        // Find the "Additional Expertise" section
        const additionalExpertise = skillsContainer.querySelector('.mt-12');
        if (additionalExpertise) {
            // Insert before the additional expertise section
            skillsContainer.insertBefore(genaiSection, additionalExpertise);
        } else {
            // Fallback: append to the end of the skills container
            skillsContainer.appendChild(genaiSection);
        }
    }
});
