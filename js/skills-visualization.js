// Skills Radar Chart
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if the element exists
    if (document.getElementById('skillsRadarChart')) {
        const ctx = document.getElementById('skillsRadarChart').getContext('2d');
        
        // Skill categories and scores
        const skillData = {
            labels: [
                'Automation',
                'Programming',
                'AI & ML',
                'DevOps & CI/CD',
                'Testing',
                'Leadership'
            ],
            datasets: [{
                label: 'Skill Proficiency',
                data: [95, 90, 85, 88, 92, 85],
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                borderColor: 'rgba(79, 70, 229, 1)',
                pointBackgroundColor: 'rgba(79, 70, 229, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(79, 70, 229, 1)'
            }]
        };
        
        // Detailed information for each skill category
        const skillDetails = {
            'Automation': {
                title: 'Automation Expertise',
                description: 'Expert in creating robust automation frameworks for web, API, and Windows applications. Proficient with Selenium, Playwright, Cypress, and custom automation solutions.',
                keySkills: ['Robot Framework', 'PyTest', 'Selenium', 'API Automation', 'Windows Automation']
            },
            'Programming': {
                title: 'Programming Languages',
                description: 'Strong programming skills across multiple languages with focus on creating efficient, maintainable code for testing and automation purposes.',
                keySkills: ['Python', 'C#', 'Java', 'JavaScript', 'SQL']
            },
            'AI & ML': {
                title: 'AI & ML Integration',
                description: 'Experience in leveraging AI/ML technologies to enhance testing processes and create innovative solutions for complex problems.',
                keySkills: ['GenAI', 'Streamlit', 'LLM Integration', 'AI-Powered Testing']
            },
            'DevOps & CI/CD': {
                title: 'DevOps & CI/CD',
                description: 'Proficient in implementing continuous integration and delivery pipelines, ensuring seamless deployment and testing processes.',
                keySkills: ['Jenkins', 'Azure DevOps', 'Git', 'Docker', 'Kubernetes']
            },
            'Testing': {
                title: 'Testing Methodologies',
                description: 'Comprehensive knowledge of testing methodologies and best practices across different application types and domains.',
                keySkills: ['UI Testing', 'API Testing', 'Performance Testing', 'Security Testing', 'Mobile Testing']
            },
            'Leadership': {
                title: 'Leadership & Team Management',
                description: 'Experienced in leading testing teams, mentoring junior members, and coordinating with cross-functional teams to deliver high-quality products.',
                keySkills: ['Team Leadership', 'Mentoring', 'Process Improvement', 'Strategic Planning']
            }
        };
        
        // Create radar chart
        const skillsChart = new Chart(ctx, {
            type: 'radar',
            data: skillData,
            options: {
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            beginAtZero: true,
                            max: 100,
                            stepSize: 20,
                            showLabelBackdrop: false
                        },
                        pointLabels: {
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            }
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
        
        // Update skill details on hover
        const skillDetailsDiv = document.getElementById('skillDetails');
        
        skillsChart.canvas.addEventListener('mousemove', function(e) {
            const activePoints = skillsChart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
            
            if (activePoints.length > 0) {
                const firstPoint = activePoints[0];
                const label = skillsChart.data.labels[firstPoint.index];
                const details = skillDetails[label];
                
                if (details) {
                    let keySkillsHTML = '';
                    details.keySkills.forEach(skill => {
                        keySkillsHTML += `<span class="inline-block px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs mr-1 mb-1">${skill}</span>`;
                    });
                    
                    skillDetailsDiv.innerHTML = `
                        <h4 class="font-semibold text-blue-700 mb-2">${details.title}</h4>
                        <p class="text-gray-600 mb-3">${details.description}</p>
                        <div class="flex flex-wrap">
                            ${keySkillsHTML}
                        </div>
                    `;
                }
            }
        });
        
        // Reset details when mouse leaves chart
        skillsChart.canvas.addEventListener('mouseout', function() {
            skillDetailsDiv.innerHTML = `
                <h4 class="font-semibold text-blue-700 mb-2">Hover over the chart to see details</h4>
                <p class="text-gray-600">The chart represents my skills across different domains including automation, programming languages, AI/ML, and testing methodologies.</p>
            `;
        });
    }
});
