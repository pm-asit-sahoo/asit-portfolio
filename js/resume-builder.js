// Interactive Resume Builder
document.addEventListener('DOMContentLoaded', function() {
    // Add resume builder button to hero section
    addResumeBuilderButton();
});

function addResumeBuilderButton() {
    // Find the download CV button
    const downloadCVButton = document.getElementById('downloadCV');
    
    if (downloadCVButton) {
        // Create the resume builder button
        const builderButton = document.createElement('a');
        builderButton.href = '#';
        builderButton.id = 'resumeBuilderBtn';
        builderButton.className = 'px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 ml-2';
        builderButton.innerHTML = '<i class="fas fa-tools mr-2"></i>Resume Builder';
        
        // Insert after the download CV button
        downloadCVButton.insertAdjacentElement('afterend', builderButton);
        
        // Add click event to open resume builder modal
        builderButton.addEventListener('click', function(e) {
            e.preventDefault();
            openResumeBuilder();
        });
        
        // Create the modal (hidden initially)
        createResumeBuilderModal();
    }
}

function createResumeBuilderModal() {
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.id = 'resumeBuilderModal';
    modalContainer.className = 'fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center hidden';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto';
    
    // Modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center sticky top-0 z-10';
    modalHeader.innerHTML = `
        <h3 class="text-xl font-bold">Tailored Resume Builder</h3>
        <button id="closeResumeBuilder" class="text-white hover:text-gray-200 focus:outline-none">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'p-6';
    modalBody.innerHTML = `
        <p class="text-gray-600 mb-6">Customize Asit's resume for the specific role you're considering. Select which sections and skills to highlight based on your requirements.</p>
        
        <div class="mb-6">
            <h4 class="text-lg font-semibold mb-3">Target Role</h4>
            <select id="targetRole" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="sdet-lead">SDET Lead / Manager</option>
                <option value="automation-architect">Automation Architect</option>
                <option value="ai-engineer">AI/ML Engineer</option>
                <option value="qa-engineer">QA Engineer</option>
                <option value="devops-engineer">DevOps Engineer</option>
                <option value="custom">Custom Role</option>
            </select>
            
            <div id="customRoleField" class="mt-3 hidden">
                <input type="text" placeholder="Enter custom role title" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
        </div>
        
        <div class="mb-6">
            <h4 class="text-lg font-semibold mb-3">Highlight Skills</h4>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="skill-checkbox" value="automation" checked>
                    <span>Automation</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="skill-checkbox" value="python" checked>
                    <span>Python</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="skill-checkbox" value="javascript" checked>
                    <span>JavaScript</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="skill-checkbox" value="ai-ml" checked>
                    <span>AI/ML</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="skill-checkbox" value="testing" checked>
                    <span>Testing</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="skill-checkbox" value="ci-cd" checked>
                    <span>CI/CD</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="skill-checkbox" value="leadership" checked>
                    <span>Leadership</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="skill-checkbox" value="solid" checked>
                    <span>SOLID Principles</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="skill-checkbox" value="design-patterns" checked>
                    <span>Design Patterns</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="skill-checkbox" value="api-testing">
                    <span>API Testing</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="skill-checkbox" value="performance">
                    <span>Performance Testing</span>
                </label>
            </div>
        </div>
        
        <div class="mb-6">
            <h4 class="text-lg font-semibold mb-3">Include Projects</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="project-checkbox" value="portfolio-website" checked>
                    <span>Interactive Portfolio Website</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="project-checkbox" value="prebid" checked>
                    <span>Prebid.js Contributions</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="project-checkbox" value="test-case-generator" checked>
                    <span>Universal Test Case Generator</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="project-checkbox" value="ai-chatbot" checked>
                    <span>AI-Powered Prebid Chatbot</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="project-checkbox" value="climate-dashboard">
                    <span>Climate & Weather Dashboard</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="project-checkbox" value="2048-game">
                    <span>2048 Game</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" class="project-checkbox" value="test-automation">
                    <span>Intelligent Test Automation Framework</span>
                </label>
            </div>
        </div>
        
        <div class="mb-6">
            <h4 class="text-lg font-semibold mb-3">Resume Format</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label class="flex flex-col items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition format-option active-format" data-format="standard">
                    <div class="bg-blue-100 text-blue-600 rounded-full p-3 mb-3">
                        <i class="fas fa-file-alt text-xl"></i>
                    </div>
                    <span class="font-medium">Standard</span>
                    <span class="text-sm text-gray-500 text-center mt-1">Traditional chronological format</span>
                </label>
                <label class="flex flex-col items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition format-option" data-format="skills-focused">
                    <div class="bg-purple-100 text-purple-600 rounded-full p-3 mb-3">
                        <i class="fas fa-chart-bar text-xl"></i>
                    </div>
                    <span class="font-medium">Skills-Focused</span>
                    <span class="text-sm text-gray-500 text-center mt-1">Emphasizes technical skills</span>
                </label>
                <label class="flex flex-col items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition format-option" data-format="project-focused">
                    <div class="bg-green-100 text-green-600 rounded-full p-3 mb-3">
                        <i class="fas fa-project-diagram text-xl"></i>
                    </div>
                    <span class="font-medium">Project-Focused</span>
                    <span class="text-sm text-gray-500 text-center mt-1">Highlights project achievements</span>
                </label>
            </div>
        </div>
        
        <div class="mb-6">
            <h4 class="text-lg font-semibold mb-3">Additional Options</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label class="flex items-center space-x-2">
                    <input type="checkbox" id="includePhoto" checked>
                    <span>Include Photo</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" id="includeReferences">
                    <span>Include References</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" id="includeAwards" checked>
                    <span>Include Awards</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" id="includeObjective" checked>
                    <span>Include Career Objective</span>
                </label>
            </div>
        </div>
        
        <div id="resumePreview" class="mb-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
            <h4 class="text-lg font-semibold mb-3">Resume Preview</h4>
            <div class="flex items-center justify-center p-8 bg-white border border-gray-200 rounded">
                <div class="text-center">
                    <i class="fas fa-file-pdf text-red-500 text-5xl mb-3"></i>
                    <p>Your customized resume will be generated as a PDF file.</p>
                    <p class="text-sm text-gray-500 mt-2">Click "Generate Resume" below to create and download.</p>
                </div>
            </div>
        </div>
    `;
    
    // Modal footer
    const modalFooter = document.createElement('div');
    modalFooter.className = 'bg-gray-100 p-4 rounded-b-lg flex justify-end sticky bottom-0';
    modalFooter.innerHTML = `
        <button id="cancelResumeBuilder" class="px-4 py-2 border border-gray-300 text-gray-700 rounded mr-2 hover:bg-gray-200 transition">
            Cancel
        </button>
        <button id="generateResume" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            <i class="fas fa-file-download mr-2"></i>Generate Resume
        </button>
    `;
    
    // Assemble modal
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalContainer.appendChild(modalContent);
    
    // Add to body
    document.body.appendChild(modalContainer);
    
    // Add event listeners
    document.getElementById('closeResumeBuilder').addEventListener('click', closeResumeBuilder);
    document.getElementById('cancelResumeBuilder').addEventListener('click', closeResumeBuilder);
    document.getElementById('generateResume').addEventListener('click', generateResume);
    
    // Target role change event
    document.getElementById('targetRole').addEventListener('change', function() {
        const customRoleField = document.getElementById('customRoleField');
        if (this.value === 'custom') {
            customRoleField.classList.remove('hidden');
        } else {
            customRoleField.classList.add('hidden');
            updateSkillsForRole(this.value);
        }
    });
    
    // Format option selection
    document.querySelectorAll('.format-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.format-option').forEach(opt => {
                opt.classList.remove('active-format');
                opt.classList.remove('border-blue-500');
                opt.classList.add('border-gray-300');
            });
            
            this.classList.add('active-format');
            this.classList.remove('border-gray-300');
            this.classList.add('border-blue-500');
        });
    });
    
    // Add necessary styles
    const style = document.createElement('style');
    style.textContent = `
        .active-format {
            border-color: #3b82f6 !important;
            background-color: #eff6ff;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        #resumeBuilderModal {
            animation: fadeIn 0.3s ease-out;
        }
    `;
    document.head.appendChild(style);
}

function openResumeBuilder() {
    const modal = document.getElementById('resumeBuilderModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeResumeBuilder() {
    const modal = document.getElementById('resumeBuilderModal');
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

function updateSkillsForRole(role) {
    // Reset all checkboxes
    document.querySelectorAll('.skill-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    document.querySelectorAll('.project-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Set relevant skills and projects based on role
    switch(role) {
        case 'sdet-lead':
            setChecked(['automation', 'python', 'javascript', 'testing', 'leadership', 'ci-cd']);
            setProjectsChecked(['portfolio-website', 'prebid', 'test-case-generator', 'test-automation']);
            break;
        case 'automation-architect':
            setChecked(['automation', 'python', 'javascript', 'testing', 'ci-cd', 'api-testing', 'performance']);
            setProjectsChecked(['portfolio-website', 'prebid', 'test-automation', 'test-case-generator']);
            break;
        case 'ai-engineer':
            setChecked(['python', 'ai-ml', 'javascript', 'api-testing']);
            setProjectsChecked(['portfolio-website', 'test-case-generator', 'ai-chatbot', 'climate-dashboard']);
            break;
        case 'qa-engineer':
            setChecked(['automation', 'testing', 'api-testing', 'performance']);
            setProjectsChecked(['portfolio-website', 'test-automation', 'test-case-generator', 'prebid']);
            break;
        case 'devops-engineer':
            setChecked(['ci-cd', 'automation', 'python', 'javascript']);
            setProjectsChecked(['portfolio-website', 'prebid', 'test-automation', 'climate-dashboard']);
            break;
    }
}

function setChecked(skills) {
    skills.forEach(skill => {
        const checkbox = document.querySelector(`.skill-checkbox[value="${skill}"]`);
        if (checkbox) checkbox.checked = true;
    });
}

function setProjectsChecked(projects) {
    projects.forEach(project => {
        const checkbox = document.querySelector(`.project-checkbox[value="${project}"]`);
        if (checkbox) checkbox.checked = true;
    });
}

function generateResume() {
    // Get selected options
    const targetRole = document.getElementById('targetRole').value;
    const customRoleTitle = document.querySelector('#customRoleField input')?.value;
    const roleTitle = targetRole === 'custom' ? customRoleTitle : {
        'sdet-lead': 'SDET Lead / Manager',
        'automation-architect': 'Automation Architect',
        'ai-engineer': 'AI/ML Engineer',
        'qa-engineer': 'QA Engineer',
        'devops-engineer': 'DevOps Engineer'
    }[targetRole] || 'SDET Lead';
    
    const format = document.querySelector('.format-option.active-format').getAttribute('data-format');
    
    // Get selected skills
    const selectedSkills = [];
    document.querySelectorAll('.skill-checkbox:checked').forEach(checkbox => {
        selectedSkills.push(checkbox.value);
    });
    
    // Get selected projects
    const selectedProjects = [];
    document.querySelectorAll('.project-checkbox:checked').forEach(checkbox => {
        selectedProjects.push(checkbox.value);
    });
    
    // Additional options
    const includePhoto = document.getElementById('includePhoto').checked;
    const includeReferences = document.getElementById('includeReferences').checked;
    const includeAwards = document.getElementById('includeAwards').checked;
    const includeObjective = document.getElementById('includeObjective').checked;
    
    // Show generating indicator
    const generateButton = document.getElementById('generateResume');
    const originalButtonText = generateButton.innerHTML;
    generateButton.disabled = true;
    generateButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generating...';
    
    // Create a tailored resume based on selected options
    createTailoredResume({
        roleTitle,
        format,
        selectedSkills,
        selectedProjects,
        includePhoto,
        includeReferences,
        includeAwards,
        includeObjective
    }).then(resumeBlob => {
        // Reset button
        generateButton.disabled = false;
        generateButton.innerHTML = originalButtonText;
        
        // Close modal
        closeResumeBuilder();
        
        // Show success message
        showResumeSuccessMessage(targetRole);
        
        // Download the generated resume
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(resumeBlob);
        downloadLink.download = `Asit_Sahoo_Resume_${roleTitle.replace(/\s+/g, '_')}.txt`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }).catch(error => {
        console.error('Error generating resume:', error);
        generateButton.disabled = false;
        generateButton.innerHTML = originalButtonText;
        alert('There was an error generating your resume. Please try again.');
    });
}

// Function to create a tailored resume based on selected options
async function createTailoredResume(options) {
    try {
        // Use the ResumeCustomizer to generate a tailored resume
        if (window.ResumeCustomizer) {
            // Add a slight delay to show the processing animation
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Use the ResumeCustomizer to customize the resume
            return await window.ResumeCustomizer.customize(options);
        } else {
            // Fallback if ResumeCustomizer is not available
            console.warn('ResumeCustomizer not found, falling back to default resume');
            
            // Load the base resume template using fetch
            const response = await fetch('Asit Resume_Lead_SDET.docx');
            if (!response.ok) {
                throw new Error('Failed to load resume template');
            }
            
            const templateArrayBuffer = await response.arrayBuffer();
            
            // Return the template as a blob
            return new Blob([templateArrayBuffer], {
                type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            });
        }
    } catch (error) {
        console.error('Error creating tailored resume:', error);
        throw error;
    }
}

function showResumeSuccessMessage(role) {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center';
    toast.innerHTML = `
        <i class="fas fa-check-circle mr-2 text-xl"></i>
        <div>
            <p class="font-medium">Resume Generated!</p>
            <p class="text-sm">Your tailored resume for ${role === 'custom' ? 'your custom role' : role.replace('-', ' ')} is downloading.</p>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(toast);
    
    // Remove after 5 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 500);
    }, 5000);
}
