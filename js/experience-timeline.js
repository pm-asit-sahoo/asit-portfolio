// Interactive Experience Timeline
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if the experience section exists
    if (document.getElementById('experience')) {
        initExperienceTimeline();
    }
});

function initExperienceTimeline() {
    // Add animation to timeline items
    animateTimelineOnScroll();
    
    // Add interactive elements to experience cards
    enhanceExperienceCards();
}

// Animate timeline items as they scroll into view
function animateTimelineOnScroll() {
    // Get all experience cards
    const experienceCards = document.querySelectorAll('#experience .bg-white.rounded-lg');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add animation class when element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-experience');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });
    
    // Observe each experience card
    experienceCards.forEach(card => {
        // Add initial state class
        card.classList.add('experience-card');
        // Start observing
        observer.observe(card);
    });
    
    // Add necessary styles
    const style = document.createElement('style');
    style.textContent = `
        .experience-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-experience {
            opacity: 1;
            transform: translateY(0);
        }
        
        .experience-highlight {
            background-color: rgba(79, 70, 229, 0.05);
            border-left: 4px solid #4f46e5;
        }
    `;
    document.head.appendChild(style);
}

// Enhance experience cards with interactive elements
function enhanceExperienceCards() {
    const experienceCards = document.querySelectorAll('#experience .bg-white.rounded-lg');
    
    experienceCards.forEach(card => {
        // Extract company name and role
        const companyElement = card.querySelector('.text-lg.text-blue-600');
        const roleElement = card.querySelector('.text-2xl.font-bold');
        
        if (!companyElement || !roleElement) return;
        
        const company = companyElement.textContent;
        const role = roleElement.textContent;
        
        // Create achievements toggle button
        const achievementsToggle = document.createElement('button');
        achievementsToggle.className = 'mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg flex items-center justify-between w-full transition-all duration-300';
        achievementsToggle.innerHTML = `
            <span class="font-medium">Key Achievements</span>
            <i class="fas fa-chevron-down transition-transform duration-300"></i>
        `;
        
        // Create achievements content container (initially hidden)
        const achievementsContent = document.createElement('div');
        achievementsContent.className = 'mt-4 bg-gray-50 rounded-lg p-4 hidden achievement-content';
        
        // Generate achievements based on company
        let achievements = [];
        
        if (company.includes('PubMatic')) {
            achievements = [
                "Led the development of an AI-powered chatbot that improved team efficiency by 30%",
                "Designed and implemented a universal test case generator using AI, reducing test creation time by 60%",
                "Contributed multiple features to Prebid.js, enhancing header bidding functionality",
                "Mentored junior team members, improving team productivity by 25%",
                "Implemented CI/CD pipelines that reduced deployment time by 40%"
            ];
        } else if (company.includes('Pegasystems')) {
            achievements = [
                "Developed a hybrid automation framework that increased test coverage by 45%",
                "Implemented API testing strategies that identified critical bugs before production",
                "Created performance testing solutions that improved application response time by 30%",
                "Streamlined testing processes, reducing testing cycle time by 35%",
                "Introduced innovative testing methodologies that improved overall product quality"
            ];
        } else {
            achievements = [
                "Implemented automated testing solutions that improved efficiency",
                "Developed testing strategies that enhanced product quality",
                "Collaborated with cross-functional teams to deliver high-quality software",
                "Identified and resolved critical issues before production release",
                "Introduced best practices that improved the development lifecycle"
            ];
        }
        
        // Add achievements to content container
        const achievementsList = document.createElement('ul');
        achievementsList.className = 'list-disc pl-5 space-y-2';
        
        achievements.forEach(achievement => {
            const listItem = document.createElement('li');
            listItem.textContent = achievement;
            achievementsList.appendChild(listItem);
        });
        
        achievementsContent.appendChild(achievementsList);
        
        // Add skill badges relevant to the role
        const skillsContainer = document.createElement('div');
        skillsContainer.className = 'mt-4';
        skillsContainer.innerHTML = '<p class="font-medium mb-2">Relevant Skills:</p>';
        
        const skillsWrapper = document.createElement('div');
        skillsWrapper.className = 'flex flex-wrap gap-2';
        
        // Generate skills based on role and company
        let skills = [];
        
        if (role.includes('Lead')) {
            skills = ['Leadership', 'Mentoring', 'Strategy', 'Architecture'];
        }
        
        if (company.includes('PubMatic')) {
            skills = [...skills, 'AI Integration', 'Python', 'JavaScript', 'Prebid.js', 'CI/CD'];
        } else if (company.includes('Pegasystems')) {
            skills = [...skills, 'API Testing', 'UI Automation', 'Performance Testing', 'C#', 'Java'];
        }
        
        // Remove duplicates
        skills = [...new Set(skills)];
        
        // Add skill badges
        skills.forEach(skill => {
            const badge = document.createElement('span');
            badge.className = 'px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm';
            badge.textContent = skill;
            skillsWrapper.appendChild(badge);
        });
        
        skillsContainer.appendChild(skillsWrapper);
        achievementsContent.appendChild(skillsContainer);
        
        // Add toggle functionality
        achievementsToggle.addEventListener('click', function() {
            const isHidden = achievementsContent.classList.contains('hidden');
            const chevron = this.querySelector('.fas.fa-chevron-down');
            
            if (isHidden) {
                achievementsContent.classList.remove('hidden');
                chevron.style.transform = 'rotate(180deg)';
            } else {
                achievementsContent.classList.add('hidden');
                chevron.style.transform = 'rotate(0)';
            }
        });
        
        // Add hover effect to card
        card.addEventListener('mouseenter', function() {
            this.classList.add('experience-highlight');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('experience-highlight');
        });
        
        // Append new elements to card
        const cardContent = card.querySelector('.mb-6:last-of-type') || card.querySelector('p:last-of-type');
        if (cardContent) {
            cardContent.parentNode.insertBefore(achievementsToggle, cardContent.nextSibling);
            cardContent.parentNode.insertBefore(achievementsContent, achievementsToggle.nextSibling);
        }
    });
}
