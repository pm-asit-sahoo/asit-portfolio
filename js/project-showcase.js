// Interactive Project Showcase
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if we're on a page with the projects section
    if (document.getElementById('projects')) {
        // Add 3D project cards
        initProjectCards();
        
        // Add project filter functionality
        initProjectFilters();
    }
});

// Initialize 3D effect for project cards
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add 3D tilt effect on mouse move
        card.addEventListener('mousemove', handleCardTilt);
        // Reset card position on mouse leave
        card.addEventListener('mouseleave', resetCardTilt);
    });
}

// Handle card tilt effect based on mouse position
function handleCardTilt(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const mouseX = e.clientX - cardRect.left;
    const mouseY = e.clientY - cardRect.top;
    
    // Calculate rotation based on mouse position
    const rotateY = ((mouseX / cardRect.width) - 0.5) * 10; // -5 to 5 degrees
    const rotateX = ((mouseY / cardRect.height) - 0.5) * -10; // 5 to -5 degrees
    
    // Apply the transformation
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = 'transform 0.1s ease';
    
    // Add highlight effect based on mouse position
    const glareX = (mouseX / cardRect.width) * 100;
    const glareY = (mouseY / cardRect.height) * 100;
    
    if (card.querySelector('.card-glare')) {
        card.querySelector('.card-glare').style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)`;
    }
}

// Reset card to original position
function resetCardTilt() {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    this.style.transition = 'transform 0.5s ease';
    
    if (this.querySelector('.card-glare')) {
        this.querySelector('.card-glare').style.background = 'none';
    }
}

// Initialize project filtering functionality
function initProjectFilters() {
    // Create filter UI
    createFilterUI();
    
    // Add filter functionality
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active-filter'));
            this.classList.add('active-filter');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.remove('hidden-card');
                        card.classList.add('visible-card');
                    }, 50);
                } else {
                    const cardTags = card.getAttribute('data-tags').split(',');
                    
                    if (cardTags.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.classList.remove('hidden-card');
                            card.classList.add('visible-card');
                        }, 50);
                    } else {
                        card.classList.remove('visible-card');
                        card.classList.add('hidden-card');
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// Create filter UI
function createFilterUI() {
    // Get the projects container
    const projectsContainer = document.querySelector('#projects .container');
    
    // Create filter container
    const filterContainer = document.createElement('div');
    filterContainer.className = 'flex flex-wrap justify-center mb-10 gap-2';
    
    // Define filters
    const filters = [
        { name: 'All Projects', value: 'all' },
        { name: 'JavaScript', value: 'javascript' },
        { name: 'Python', value: 'python' },
        { name: 'AI/ML', value: 'ai' },
        { name: 'Testing', value: 'testing' },
        { name: 'Open Source', value: 'opensource' }
    ];
    
    // Create filter buttons
    filters.forEach((filter, index) => {
        const button = document.createElement('button');
        button.className = `project-filter-btn px-4 py-2 rounded-full transition-all duration-300 ${index === 0 ? 'active-filter' : ''}`;
        button.setAttribute('data-filter', filter.value);
        button.textContent = filter.name;
        filterContainer.appendChild(button);
    });
    
    // Insert filter container after the heading
    const heading = projectsContainer.querySelector('h2');
    heading.insertAdjacentElement('afterend', filterContainer);
    
    // Add necessary styles
    const style = document.createElement('style');
    style.textContent = `
        .project-filter-btn {
            background-color: #f3f4f6;
            color: #4b5563;
            font-weight: 500;
        }
        
        .project-filter-btn:hover {
            background-color: #e5e7eb;
        }
        
        .project-filter-btn.active-filter {
            background-color: #4f46e5;
            color: white;
        }
        
        .project-card {
            transition: transform 0.5s ease, opacity 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .card-glare {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
        }
        
        .hidden-card {
            opacity: 0;
            transform: scale(0.9);
        }
        
        .visible-card {
            opacity: 1;
            transform: scale(1);
        }
    `;
    document.head.appendChild(style);
    
    // Add data-tags and card-glare to project cards
    const projectCards = document.querySelectorAll('#projects .bg-white.rounded-lg');
    projectCards.forEach(card => {
        // Add project-card class
        card.classList.add('project-card');
        card.classList.add('visible-card');
        
        // Add glare effect element
        const glareElement = document.createElement('div');
        glareElement.className = 'card-glare';
        card.appendChild(glareElement);
        
        // Determine tags based on content
        const cardContent = card.textContent.toLowerCase();
        const tags = [];
        
        if (cardContent.includes('javascript') || cardContent.includes('js')) tags.push('javascript');
        if (cardContent.includes('python')) tags.push('python');
        if (cardContent.includes('ai') || cardContent.includes('ml') || cardContent.includes('openai')) tags.push('ai');
        if (cardContent.includes('test') || cardContent.includes('automation framework')) tags.push('testing');
        if (cardContent.includes('prebid.js') || cardContent.includes('open source')) tags.push('opensource');
        
        // Set data-tags attribute
        card.setAttribute('data-tags', tags.join(','));
    });
}
