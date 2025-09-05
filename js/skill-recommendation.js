// Skill Recommendation System
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if the skills section exists
    if (document.getElementById('skills')) {
        // Add recommendation system after a short delay
        setTimeout(() => {
            initSkillRecommendation();
        }, 1000);
    }
});

function initSkillRecommendation() {
    // Create recommendation UI
    createRecommendationUI();
    
    // Initialize recommendation functionality
    setupRecommendationSystem();
}

function createRecommendationUI() {
    // Get the skills container
    const skillsContainer = document.querySelector('#skills .container');
    
    // Create recommendation section
    const recommendationSection = document.createElement('div');
    recommendationSection.className = 'mt-16 bg-white rounded-lg shadow-lg p-6';
    recommendationSection.innerHTML = `
        <h3 class="text-2xl font-semibold text-center mb-6">Career Path Recommendations</h3>
        <p class="text-gray-600 text-center mb-8">Based on Asit's unique skill combination, here are potential career paths that would be an excellent match:</p>
        
        <div id="career-paths" class="grid md:grid-cols-3 gap-6">
            <!-- Career paths will be inserted here -->
        </div>
        
        <div class="mt-8">
            <h4 class="text-xl font-semibold mb-4 text-center">Skill Matching Tool</h4>
            <p class="text-gray-600 text-center mb-6">Select a role to see how Asit's skills match the requirements:</p>
            
            <div class="flex justify-center mb-6">
                <select id="role-selector" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option value="">Select a role...</option>
                    <option value="sdet-lead">SDET Lead / Manager</option>
                    <option value="automation-architect">Automation Architect</option>
                    <option value="ai-engineer">AI/ML Engineer</option>
                    <option value="devops-engineer">DevOps Engineer</option>
                    <option value="full-stack">Full Stack Developer</option>
                </select>
            </div>
            
            <div id="skill-match-results" class="hidden">
                <h5 class="text-lg font-semibold mb-4 text-center">Match Analysis</h5>
                <div class="flex justify-center mb-4">
                    <div class="w-64 h-64 relative">
                        <canvas id="matchChart"></canvas>
                        <div id="match-percentage" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-blue-600"></div>
                    </div>
                </div>
                
                <div id="skill-breakdown" class="mt-6">
                    <h6 class="font-semibold mb-3">Skill Breakdown:</h6>
                    <div id="skill-breakdown-list" class="space-y-3">
                        <!-- Skill breakdown will be inserted here -->
                    </div>
                </div>
                
                <div class="mt-8 text-center">
                    <button id="contact-cta" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                        Contact Asit for This Role
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Append to skills container
    skillsContainer.appendChild(recommendationSection);
    
    // Add necessary styles
    const style = document.createElement('style');
    style.textContent = `
        .career-path-card {
            transition: all 0.3s ease;
        }
        
        .career-path-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .skill-match-item {
            transition: width 1s ease-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
    `;
    document.head.appendChild(style);
}

function setupRecommendationSystem() {
    // Define career paths
    const careerPaths = [
        {
            title: "Test Automation Architect",
            description: "Design and implement enterprise-level test automation frameworks and strategies.",
            matchPercentage: 95,
            icon: "fa-sitemap",
            color: "blue"
        },
        {
            title: "AI/ML Integration Specialist",
            description: "Leverage AI/ML technologies to enhance testing processes and create intelligent solutions.",
            matchPercentage: 90,
            icon: "fa-brain",
            color: "purple"
        },
        {
            title: "DevOps Testing Leader",
            description: "Lead testing initiatives within DevOps environments, ensuring quality throughout the CI/CD pipeline.",
            matchPercentage: 88,
            icon: "fa-cogs",
            color: "green"
        }
    ];
    
    // Populate career paths
    const careerPathsContainer = document.getElementById('career-paths');
    
    careerPaths.forEach(path => {
        const card = document.createElement('div');
        card.className = `career-path-card bg-${path.color}-50 border border-${path.color}-200 rounded-lg p-6 flex flex-col items-center text-center`;
        card.innerHTML = `
            <div class="bg-${path.color}-100 text-${path.color}-600 rounded-full p-4 mb-4">
                <i class="fas ${path.icon} text-2xl"></i>
            </div>
            <h4 class="text-lg font-semibold mb-2">${path.title}</h4>
            <p class="text-gray-600 mb-4">${path.description}</p>
            <div class="mt-auto">
                <div class="flex items-center justify-center">
                    <div class="text-2xl font-bold text-${path.color}-600">${path.matchPercentage}%</div>
                    <div class="ml-2 text-sm text-gray-500">Match</div>
                </div>
            </div>
        `;
        careerPathsContainer.appendChild(card);
    });
    
    // Define role requirements
    const roleRequirements = {
        "sdet-lead": {
            title: "SDET Lead / Manager",
            overallMatch: 94,
            skills: [
                { name: "Automation Framework Design", required: 90, actual: 95 },
                { name: "Team Leadership", required: 85, actual: 85 },
                { name: "CI/CD Integration", required: 80, actual: 88 },
                { name: "Testing Strategy", required: 85, actual: 90 },
                { name: "Programming (Python/Java)", required: 80, actual: 90 }
            ]
        },
        "automation-architect": {
            title: "Automation Architect",
            overallMatch: 92,
            skills: [
                { name: "Framework Architecture", required: 95, actual: 95 },
                { name: "Multi-platform Testing", required: 90, actual: 85 },
                { name: "Performance Optimization", required: 85, actual: 80 },
                { name: "DevOps Integration", required: 80, actual: 88 },
                { name: "Advanced Programming", required: 85, actual: 90 },
                { name: "GenAI & LLM Integration", required: 90, actual: 92 },
                { name: "Agentic Framework Development", required: 85, actual: 88 },
                { name: "Prompt Engineering", required: 85, actual: 90 },
                { name: "POC Development", required: 95, actual: 95 },
                { name: "RFP Analysis", required: 90, actual: 90 },
                { name: "Design Framework", required: 95, actual: 95 },
                { name: "QA Infrastructure Design", required: 90, actual: 90 },
                { name: "Solution Architecture", required: 95, actual: 95 },
                { name: "Technical Documentation", required: 90, actual: 90 }
            ]
        },
        "ai-engineer": {
            title: "AI/ML Engineer",
            overallMatch: 87,
            skills: [
                { name: "AI/ML Integration", required: 90, actual: 85 },
                { name: "Python Programming", required: 95, actual: 95 },
                { name: "Data Analysis", required: 85, actual: 80 },
                { name: "Model Development", required: 90, actual: 75 },
                { name: "API Integration", required: 80, actual: 95 }
            ]
        },
        "devops-engineer": {
            title: "DevOps Engineer",
            overallMatch: 85,
            skills: [
                { name: "CI/CD Pipeline", required: 95, actual: 88 },
                { name: "Infrastructure as Code", required: 90, actual: 75 },
                { name: "Containerization", required: 85, actual: 80 },
                { name: "Monitoring & Logging", required: 80, actual: 85 },
                { name: "Scripting", required: 85, actual: 95 }
            ]
        },
        "full-stack": {
            title: "Full Stack Developer",
            overallMatch: 82,
            skills: [
                { name: "Frontend Development", required: 90, actual: 75 },
                { name: "Backend Development", required: 90, actual: 85 },
                { name: "Database Design", required: 85, actual: 80 },
                { name: "API Development", required: 85, actual: 90 },
                { name: "JavaScript/Node.js", required: 90, actual: 80 }
            ]
        }
    };
    
    // Set up role selector
    const roleSelector = document.getElementById('role-selector');
    const skillMatchResults = document.getElementById('skill-match-results');
    const matchPercentage = document.getElementById('match-percentage');
    const skillBreakdownList = document.getElementById('skill-breakdown-list');
    const contactCta = document.getElementById('contact-cta');
    
    let matchChart = null;
    
    roleSelector.addEventListener('change', function() {
        const selectedRole = this.value;
        
        if (selectedRole) {
            const roleData = roleRequirements[selectedRole];
            
            // Show results section
            skillMatchResults.classList.remove('hidden');
            skillMatchResults.style.opacity = 0;
            
            // Add fade-in animation
            setTimeout(() => {
                skillMatchResults.style.opacity = 1;
                skillMatchResults.classList.add('fade-in');
            }, 50);
            
            // Update match percentage
            matchPercentage.textContent = `${roleData.overallMatch}%`;
            
            // Update contact CTA
            contactCta.textContent = `Contact Asit for ${roleData.title} Role`;
            
            // Scroll to results
            setTimeout(() => {
                skillMatchResults.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
            
            // Create/update chart
            if (matchChart) {
                matchChart.destroy();
            }
            
            const ctx = document.getElementById('matchChart').getContext('2d');
            matchChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [roleData.overallMatch, 100 - roleData.overallMatch],
                        backgroundColor: [
                            'rgba(79, 70, 229, 1)',
                            'rgba(229, 231, 235, 1)'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    cutout: '75%',
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        }
                    }
                }
            });
            
            // Update skill breakdown
            skillBreakdownList.innerHTML = '';
            
            roleData.skills.forEach(skill => {
                const matchPercentage = Math.round((skill.actual / skill.required) * 100);
                // Cap the display percentage at 100% to prevent bars from going out of bounds
                const displayPercentage = Math.min(matchPercentage, 100);
                const matchClass = matchPercentage >= 100 ? 'bg-green-500' : 
                                  matchPercentage >= 90 ? 'bg-blue-500' : 
                                  matchPercentage >= 80 ? 'bg-yellow-500' : 'bg-red-500';
                
                const skillItem = document.createElement('div');
                skillItem.innerHTML = `
                    <div class="flex justify-between items-center mb-1">
                        <span class="font-medium">${skill.name}</span>
                        <div class="flex items-center">
                            <span class="text-gray-500 mr-2">Required: ${skill.required}%</span>
                            <span class="font-medium">${skill.actual}%</span>
                        </div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="${matchClass} h-2 rounded-full skill-match-item" style="width: 0%"></div>
                    </div>
                `;
                skillBreakdownList.appendChild(skillItem);
                
                // Animate progress bars
                setTimeout(() => {
                    const progressBar = skillItem.querySelector('.skill-match-item');
                    progressBar.style.width = `${displayPercentage}%`;
                }, 100);
            });
        } else {
            skillMatchResults.classList.add('hidden');
        }
    });
    
    // Add click handler for contact CTA
    contactCta.addEventListener('click', function() {
        document.querySelector('a[href="#contact"]').click();
    });
}
