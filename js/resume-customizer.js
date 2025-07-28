// Resume Customizer - Handles the actual resume customization based on selected options
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the resume customizer
    window.ResumeCustomizer = {
        // Main function to customize the resume based on options
        async customize(options) {
            try {
                // Since we can't modify the DOCX directly without additional libraries,
                // we'll create a text-based resume with the selected content
                
                // Generate resume content based on options
                const resumeContent = this.generateResumeContent(options);
                
                // Create a blob with the resume content
                const resumeBlob = new Blob([resumeContent], {
                    type: 'text/plain'
                });
                
                // Log the options for debugging
                console.log('Resume customization options:', options);
                
                // Return the blob with the customized resume content
                return resumeBlob;
            } catch (error) {
                console.error('Error customizing resume:', error);
                throw error;
            }
        },
        
        // Generate resume content based on options
        generateResumeContent(options) {
            const { roleTitle, format, selectedSkills, selectedProjects, includePhoto, includeReferences, includeAwards, includeObjective } = options;
            
            // Get descriptions for selected skills and projects
            const projectDescriptions = this.getProjectDescriptions();
            const skillDescriptions = this.getSkillDescriptions();
            
            // Start building the resume content
            let content = [];
            
            // Header
            content.push('==============================================');
            content.push(`ASIT SAHOO - ${roleTitle.toUpperCase()}`);
            content.push('==============================================');
            content.push('Email: sahooasit@hotmail.com | Phone: +91 9040293063');
            content.push('Location: Pune, India');
            content.push('LinkedIn: https://www.linkedin.com/in/asitsahoo/');
            content.push('');
            
            // Career Objective (if selected)
            if (includeObjective) {
                content.push('CAREER OBJECTIVE');
                content.push('--------------');
                content.push(this.generateCareerObjective(roleTitle));
                content.push('');
            }
            
            // Skills Section - Format depends on the selected format
            content.push('SKILLS');
            content.push('------');
            
            if (format === 'skills-focused') {
                // For skills-focused format, show detailed skill descriptions
                selectedSkills.forEach(skill => {
                    if (skillDescriptions[skill]) {
                        content.push(`* ${skill.toUpperCase()}: ${skillDescriptions[skill]}`);
                    }
                });
            } else {
                // For other formats, show a more compact list
                const skillGroups = this.groupSkills(selectedSkills);
                Object.keys(skillGroups).forEach(group => {
                    content.push(`* ${group}: ${skillGroups[group].join(', ')}`);
                });
            }
            content.push('');
            
            // Experience Section
            content.push('PROFESSIONAL EXPERIENCE');
            content.push('----------------------');
            
            // PubMatic Experience
            content.push('Senior Lead SDET | PubMatic | 2019 - Present');
            content.push('- Leading automation efforts for web, API, and mobile testing across multiple teams');
            content.push('- Developing AI-powered tools including a Universal Test Case Generator that reduced test creation time by 60%');
            content.push('- Creating an intelligent Slack chatbot for Prebid operations that improved team efficiency by 30%');
            content.push('- Contributing multiple features to Prebid.js open-source project, enhancing header bidding functionality');
            content.push('- Mentoring junior team members and conducting knowledge sharing sessions on automation best practices');
            content.push('- Implementing CI/CD pipelines using Jenkins and Azure DevOps for continuous testing and deployment');
            content.push('- Designing and implementing hybrid automation frameworks with SOLID principles and design patterns');
            content.push('- Collaborating with cross-functional teams to improve product quality and testing processes');
            
            // Add role-specific bullet points based on selected skills
            if (selectedSkills.includes('ai-ml')) {
                content.push('- Integrating OpenAI and Claude APIs into testing workflows for intelligent test generation and analysis');
            }
            
            if (selectedSkills.includes('performance')) {
                content.push('- Conducting performance testing and optimization for critical web applications using JMeter');
            }
            
            if (selectedSkills.includes('solid') || selectedSkills.includes('design-patterns')) {
                content.push('- Applying software engineering principles to create maintainable and scalable test automation solutions');
            }
            
            content.push('');
            
            // Pegasystems Experience
            content.push('Senior SDET | Pegasystems | 2016 - 2019');
            content.push('- Designed and implemented UI and API automation frameworks for enterprise applications');
            content.push('- Developed a hybrid automation framework that increased test coverage by 45%');
            content.push('- Implemented API testing strategies that identified critical bugs before production');
            content.push('- Created performance testing solutions that improved application response time by 30%');
            content.push('- Led test planning and execution for major releases, ensuring high-quality deliverables');
            content.push('- Collaborated with development teams to implement test-driven development practices');
            content.push('- Mentored junior QA engineers and conducted training sessions on automation tools');
            content.push('- Established automated regression test suites that reduced manual testing effort by 70%');
            
            // Add role-specific bullet points based on selected skills
            if (selectedSkills.includes('leadership')) {
                content.push('- Served as the technical lead for a team of 5 QA engineers, providing guidance and direction');
            }
            
            content.push('');
            
            // Previous Experience (condensed)
            content.push('Previous Experience | 2013 - 2016');
            content.push('- Automation Engineer at Infosys, focusing on test automation for banking applications');
            content.push('- QA Engineer at Mindtree, working on manual and automated testing for e-commerce platforms');
            content.push('');
            
            // Projects Section - Format depends on the selected format
            content.push('PROJECTS');
            content.push('--------');
            
            if (format === 'project-focused') {
                // For project-focused format, show detailed project descriptions
                selectedProjects.forEach(project => {
                    if (projectDescriptions[project]) {
                        const projectName = this.getProjectName(project);
                        content.push(`* ${projectName}:`);
                        content.push(`  ${projectDescriptions[project]}`);
                        content.push('');
                    }
                });
            } else {
                // For other formats, show a more compact list
                selectedProjects.forEach(project => {
                    const projectName = this.getProjectName(project);
                    content.push(`* ${projectName}`);
                });
                content.push('');
            }
            
            // Education Section
            content.push('EDUCATION');
            content.push('---------');
            content.push('Bachelor of Technology in Computer Science & Engineering');
            content.push('Biju Patnaik University of Technology');
            content.push('');
            
            // Awards Section (if selected)
            if (includeAwards) {
                content.push('AWARDS & RECOGNITIONS');
                content.push('--------------------');
                content.push('* Star Performer Award - PubMatic (2022)');
                content.push('* Innovation Excellence - PubMatic (2021)');
                content.push('* Outstanding Contribution - Pegasystems (2018)');
                content.push('');
            }
            
            // References Section (if selected)
            if (includeReferences) {
                content.push('REFERENCES');
                content.push('----------');
                content.push('Available upon request');
                content.push('');
            }
            
            // Footer
            content.push('==============================================');
            content.push(`Resume generated for ${roleTitle} role on ${new Date().toLocaleDateString()}`);
            content.push('==============================================');
            
            // Join all lines with line breaks
            return content.join('\n');
        },
        
        // Helper function to group skills by category
        groupSkills(selectedSkills) {
            const groups = {
                'Programming': [],
                'Automation': [],
                'DevOps': [],
                'AI/ML': [],
                'Testing': [],
                'Software Engineering': [],
                'Leadership': []
            };
            
            // Map skills to their categories
            const skillCategories = {
                'python': 'Programming',
                'javascript': 'Programming',
                'automation': 'Automation',
                'testing': 'Testing',
                'api-testing': 'Testing',
                'performance': 'Testing',
                'ci-cd': 'DevOps',
                'ai-ml': 'AI/ML',
                'leadership': 'Leadership',
                'solid': 'Software Engineering',
                'design-patterns': 'Software Engineering'
            };
            
            // Additional skills for each category
            const additionalSkills = {
                'Programming': ['Python', 'JavaScript', 'C#', 'Java'],
                'Automation': ['Selenium', 'PyTest', 'Robot Framework', 'REST Assured'],
                'DevOps': ['Jenkins', 'Azure DevOps', 'Git'],
                'AI/ML': ['GenAI', 'Prompt Engineering', 'LLM Integration'],
                'Testing': ['UI Testing', 'API Testing', 'Performance Testing'],
                'Software Engineering': ['SOLID Principles', 'Design Patterns', 'Test-Driven Development'],
                'Leadership': ['Team Management', 'Mentoring']
            };
            
            // Add selected skills to their groups
            selectedSkills.forEach(skill => {
                const category = skillCategories[skill] || 'Testing';
                if (category === 'Programming') {
                    groups[category].push(skill.charAt(0).toUpperCase() + skill.slice(1));
                } else if (skill === 'api-testing') {
                    groups['Testing'].push('API Testing');
                } else if (skill === 'ci-cd') {
                    groups['DevOps'].push('CI/CD');
                } else if (skill === 'ai-ml') {
                    groups['AI/ML'].push('AI/ML Integration');
                } else {
                    groups[category].push(skill.charAt(0).toUpperCase() + skill.slice(1));
                }
            });
            
            // Add some additional relevant skills based on selections
            Object.keys(groups).forEach(category => {
                if (groups[category].length > 0 && additionalSkills[category]) {
                    // Add some additional skills that weren't explicitly selected
                    additionalSkills[category].forEach(skill => {
                        if (!groups[category].includes(skill)) {
                            groups[category].push(skill);
                        }
                    });
                }
            });
            
            // Remove empty categories
            Object.keys(groups).forEach(category => {
                if (groups[category].length === 0) {
                    delete groups[category];
                }
            });
            
            return groups;
        },
        
        // Helper function to get project name from key
        getProjectName(projectKey) {
            const projectNames = {
                'portfolio-website': 'Interactive Portfolio Website',
                'prebid': 'Prebid.js Contributions',
                'test-case-generator': 'Universal Test Case Generator',
                'ai-chatbot': 'AI-Powered Prebid Chatbot',
                'climate-dashboard': 'Intelligent Climate & Weather Dashboard',
                '2048-game': '2048 Game',
                'test-automation': 'Intelligent Test Automation Framework'
            };
            
            return projectNames[projectKey] || projectKey;
        },
        
        // Helper function to get project descriptions
        getProjectDescriptions() {
            return {
                'portfolio-website': 'Designed and developed an interactive portfolio website with features like AI-powered assistant, skills visualization, and dynamic project showcase. Technologies: JavaScript, HTML/CSS, TailwindCSS, Chart.js.',
                'prebid': 'Contributed multiple features to Prebid.js, the industry\'s leading header bidding solution, enhancing functionality and performance for publishers worldwide. Technologies: JavaScript, Node.js.',
                'test-case-generator': 'Created an AI-powered tool that integrates with Confluence and Jira to automatically generate comprehensive test cases, reducing test creation time by 60%. Technologies: Python, Streamlit, OpenAI API.',
                'ai-chatbot': 'Developed an intelligent Slack chatbot for Prebid operations that helps with monetization analysis, page setup guidance, and code suggestions. Technologies: Python, JavaScript, OpenAI/Claude APIs.',
                'climate-dashboard': 'Building a comprehensive dashboard for climate and weather-related information with anomaly detection and visualization. Technologies: JavaScript, Node.js, Data Visualization.',
                '2048-game': 'Web implementation of the popular 2048 puzzle game with responsive design and local storage for game state persistence. Technologies: JavaScript, HTML/CSS.',
                'test-automation': 'Designing an intelligent test automation framework for web, API, mobile, and server-side testing with AI-powered test generation. Technologies: Python, Pytest, Allure.'
            };
        },
        
        // Helper function to get skill descriptions
        getSkillDescriptions() {
            return {
                'automation': 'Expert in test automation with 9+ years of experience creating robust frameworks for Web, API, and Windows applications.',
                'python': 'Advanced Python programming for automation frameworks, AI tools, and data processing applications.',
                'javascript': 'Strong JavaScript skills for web automation, front-end development, and Prebid.js contributions.',
                'testing': 'Comprehensive testing expertise across UI, API, performance, and mobile platforms.',
                'leadership': 'Proven leadership abilities with experience mentoring teams and leading testing initiatives.',
                'ci-cd': 'Proficient in implementing CI/CD pipelines using Jenkins, Azure DevOps, and other tools.',
                'ai-ml': 'Experience integrating AI/ML technologies into testing processes and creating intelligent solutions.',
                'api-testing': 'Expert in API testing with REST Assured, Postman, and custom frameworks.',
                'performance': 'Skilled in performance testing using JMeter, LoadRunner, and other tools.',
                'solid': 'Strong understanding and application of SOLID principles (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) in test framework architecture.',
                'design-patterns': 'Proficient in implementing design patterns such as Factory, Singleton, Builder, Strategy, and Observer patterns for creating maintainable and scalable test frameworks.'
            };
        },
        
        // Helper function to generate career objectives based on role
        generateCareerObjective(roleTitle) {
            const objectives = {
                'SDET Lead / Manager': 'Seeking a Senior Lead SDET position where I can leverage my 9+ years of experience in test automation and team leadership to drive quality initiatives and deliver exceptional software products.',
                'Automation Architect': 'Looking to utilize my expertise in designing and implementing robust automation frameworks to architect scalable testing solutions that improve efficiency and product quality.',
                'AI/ML Engineer': 'Aiming to apply my skills in AI/ML integration and test automation to develop innovative solutions that enhance testing processes and drive technological advancement.',
                'QA Engineer': 'Seeking to leverage my comprehensive testing expertise to ensure the delivery of high-quality software products through effective quality assurance practices.',
                'DevOps Engineer': 'Looking to apply my CI/CD and automation expertise to streamline development and deployment processes, ensuring efficient and reliable software delivery.'
            };
            
            return objectives[roleTitle] || 'Experienced Lead SDET with 9+ years of expertise seeking to leverage my skills in automation, AI integration, and leadership to drive quality and innovation in software testing.';
        }
    };
});
