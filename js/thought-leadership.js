/**
 * Thought Leadership Content
 * This script creates a dynamic thought leadership section showcasing blog posts,
 * conference talks, and articles related to AI and automation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Check if the thought leadership section exists
    const thoughtLeadershipSection = document.getElementById('thought-leadership');
    if (thoughtLeadershipSection) {
        initializeThoughtLeadership();
    }
});

function initializeThoughtLeadership() {
    const container = document.getElementById('thought-leadership-container');
    
    // Create tabs for different content types
    createContentTabs(container);
    
    // Load blog posts by default
    loadContentByType('blog-posts');
    
    // Add event listeners to tabs
    document.querySelectorAll('.thought-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            document.querySelectorAll('.thought-tab').forEach(t => {
                t.classList.remove('bg-white', 'text-blue-800');
                t.classList.add('bg-blue-800', 'bg-opacity-50', 'text-white');
            });
            
            // Add active class to clicked tab
            this.classList.remove('bg-blue-800', 'bg-opacity-50', 'text-white');
            this.classList.add('bg-white', 'text-blue-800');
            
            // Load content based on tab
            const contentType = this.getAttribute('data-content-type');
            loadContentByType(contentType);
        });
    });
}

function createContentTabs(container) {
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'flex justify-center mb-8 space-x-4';
    
    const tabs = [
        { id: 'blog-posts', label: 'Blog Posts', icon: 'fa-blog' },
        { id: 'conference-talks', label: 'Conference Talks', icon: 'fa-microphone-alt' },
        { id: 'articles', label: 'Articles & Publications', icon: 'fa-newspaper' },
        { id: 'tutorials', label: 'Tutorials & Guides', icon: 'fa-chalkboard-teacher' }
    ];
    
    tabs.forEach((tab, index) => {
        const tabElement = document.createElement('button');
        tabElement.className = `thought-tab px-6 py-3 rounded-lg flex items-center transition duration-300 ${index === 0 ? 'bg-white text-blue-800' : 'bg-blue-800 bg-opacity-50 text-white'}`;
        tabElement.setAttribute('data-content-type', tab.id);
        
        const icon = document.createElement('i');
        icon.className = `fas ${tab.icon} mr-2`;
        tabElement.appendChild(icon);
        
        const label = document.createTextNode(tab.label);
        tabElement.appendChild(label);
        
        tabsContainer.appendChild(tabElement);
    });
    
    container.appendChild(tabsContainer);
    
    // Create content container
    const contentContainer = document.createElement('div');
    contentContainer.id = 'thought-content';
    contentContainer.className = 'thought-content';
    container.appendChild(contentContainer);
}

function loadContentByType(contentType) {
    const contentContainer = document.getElementById('thought-content');
    contentContainer.innerHTML = ''; // Clear existing content
    
    // Get content data based on type
    const contentData = getContentByType(contentType);
    
    // Create grid for content cards
    const contentGrid = document.createElement('div');
    contentGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
    
    // Create cards for each content item
    contentData.forEach(item => {
        const card = createContentCard(item, contentType);
        contentGrid.appendChild(card);
    });
    
    contentContainer.appendChild(contentGrid);
}

function createContentCard(item, contentType) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300';
    
    // Card header with image
    if (item.image) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'relative h-48 overflow-hidden';
        
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.title;
        image.className = 'w-full h-full object-cover';
        
        imageContainer.appendChild(image);
        card.appendChild(imageContainer);
    }
    
    // Card content
    const contentContainer = document.createElement('div');
    contentContainer.className = 'p-6';
    
    // Title
    const title = document.createElement('h3');
    title.className = 'text-xl font-bold text-gray-800 mb-2';
    title.textContent = item.title;
    contentContainer.appendChild(title);
    
    // Date and venue/platform
    const meta = document.createElement('p');
    meta.className = 'text-sm text-blue-600 mb-3';
    
    const dateSpan = document.createElement('span');
    dateSpan.className = 'mr-3';
    dateSpan.innerHTML = `<i class="far fa-calendar-alt mr-1"></i>${item.date}`;
    meta.appendChild(dateSpan);
    
    if (item.venue || item.platform) {
        const venueSpan = document.createElement('span');
        venueSpan.innerHTML = `<i class="fas ${contentType === 'conference-talks' ? 'fa-map-marker-alt' : 'fa-globe'} mr-1"></i>${item.venue || item.platform}`;
        meta.appendChild(venueSpan);
    }
    
    contentContainer.appendChild(meta);
    
    // Description
    const description = document.createElement('p');
    description.className = 'text-gray-600 mb-4';
    description.textContent = item.description;
    contentContainer.appendChild(description);
    
    // Tags
    if (item.tags && item.tags.length > 0) {
        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'flex flex-wrap gap-2 mb-4';
        
        item.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs';
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });
        
        contentContainer.appendChild(tagsContainer);
    }
    
    // Link
    if (item.link) {
        const linkContainer = document.createElement('div');
        linkContainer.className = 'mt-4';
        
        const link = document.createElement('a');
        link.href = item.link;
        link.target = '_blank';
        link.className = 'inline-flex items-center text-blue-600 hover:text-blue-800';
        
        let linkText;
        let linkIcon;
        
        switch (contentType) {
            case 'blog-posts':
                linkText = 'Read Post';
                linkIcon = 'fa-arrow-right';
                break;
            case 'conference-talks':
                linkText = 'Watch Talk';
                linkIcon = 'fa-video';
                break;
            case 'articles':
                linkText = 'Read Article';
                linkIcon = 'fa-file-alt';
                break;
            case 'tutorials':
                linkText = 'View Tutorial';
                linkIcon = 'fa-book-open';
                break;
            default:
                linkText = 'Learn More';
                linkIcon = 'fa-arrow-right';
        }
        
        link.innerHTML = `${linkText} <i class="fas ${linkIcon} ml-1"></i>`;
        linkContainer.appendChild(link);
        
        contentContainer.appendChild(linkContainer);
    }
    
    card.appendChild(contentContainer);
    return card;
}

function getContentByType(contentType) {
    // Return content data based on type
    switch (contentType) {
        case 'blog-posts':
            return [
                {
                    title: "Implementing RAG Architecture for Enhanced QE Automation",
                    date: "March 2023",
                    platform: "Medium",
                    description: "A deep dive into how Retrieval-Augmented Generation can transform QE automation by providing context-aware test generation and execution.",
                    tags: ["RAG", "LLMs", "QE Automation", "Vector Databases"],
                    image: "https://miro.medium.com/max/1400/1*vLFrXX4ES-QUiyNGi5rN3A.jpeg",
                    link: "#"
                },
                {
                    title: "The Future of Test Automation with AI: Beyond Simple Script Generation",
                    date: "May 2023",
                    platform: "Dev.to",
                    description: "Exploring how AI is transforming test automation beyond just generating scripts, including intelligent test maintenance and self-healing tests.",
                    tags: ["AI", "Test Automation", "Machine Learning", "Future Tech"],
                    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--V0ekZaVJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/xndmxrfhliweofif9jty.png",
                    link: "#"
                },
                {
                    title: "Observability in AI Systems: Implementing Langfuse for LLM Monitoring",
                    date: "July 2023",
                    platform: "Towards Data Science",
                    description: "A practical guide to implementing Langfuse for monitoring and improving LLM-based applications with real-world examples from production systems.",
                    tags: ["Langfuse", "Observability", "LLMs", "AI Monitoring"],
                    image: "https://miro.medium.com/max/1400/1*8wNWI0XhVNGNKp0JUXDc_Q.jpeg",
                    link: "#"
                }
            ];
            
        case 'conference-talks':
            return [
                {
                    title: "Revolutionizing QE with AI: Lessons from the Trenches",
                    date: "October 2023",
                    venue: "TestCon Europe 2023",
                    description: "A comprehensive talk on implementing AI-powered testing solutions at scale, covering challenges, solutions, and measurable outcomes.",
                    tags: ["AI Testing", "Enterprise Implementation", "Case Study"],
                    image: "https://images.unsplash.com/photo-1475721027785-f74ec9c409d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                },
                {
                    title: "Building Intelligent Test Frameworks with Vector Embeddings",
                    date: "August 2023",
                    venue: "SeleniumConf 2023",
                    description: "How to enhance test frameworks with vector embeddings for smarter test selection, better maintenance, and improved reporting.",
                    tags: ["Vector Databases", "Embeddings", "Test Framework"],
                    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                },
                {
                    title: "From Automation to Intelligence: The AI-QE Evolution",
                    date: "December 2023",
                    venue: "AI Testing Summit",
                    description: "A keynote presentation on the evolution from traditional test automation to AI-powered intelligent quality engineering.",
                    tags: ["AI", "QE Evolution", "Future of Testing"],
                    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                }
            ];
            
        case 'articles':
            return [
                {
                    title: "Semantic Search in Technical Documentation: A Game Changer for Engineering Teams",
                    date: "September 2023",
                    platform: "InfoQ",
                    description: "How implementing semantic search across technical documentation can dramatically improve knowledge retrieval and team efficiency.",
                    tags: ["Semantic Search", "Knowledge Management", "Vector Databases"],
                    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                },
                {
                    title: "The ROI of AI in Quality Engineering: Measuring Real Impact",
                    date: "November 2023",
                    platform: "TechBeacon",
                    description: "A data-driven analysis of the return on investment when implementing AI technologies in quality engineering processes.",
                    tags: ["ROI", "AI Implementation", "Metrics", "Case Study"],
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                },
                {
                    title: "Architecting AI Observability Systems for Enterprise Applications",
                    date: "January 2024",
                    platform: "O'Reilly",
                    description: "A technical deep dive into building robust observability systems for AI applications in enterprise environments.",
                    tags: ["Observability", "Enterprise AI", "Architecture"],
                    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                }
            ];
            
        case 'tutorials':
            return [
                {
                    title: "Building Your First RAG-Powered QA System with LangChain",
                    date: "February 2024",
                    platform: "Towards AI",
                    description: "A step-by-step tutorial on implementing a Retrieval-Augmented Generation system for technical documentation using LangChain.",
                    tags: ["RAG", "LangChain", "Tutorial", "Python"],
                    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                },
                {
                    title: "Implementing Langfuse for LLM Monitoring: A Practical Guide",
                    date: "December 2023",
                    platform: "LogRocket Blog",
                    description: "A comprehensive tutorial on setting up Langfuse for monitoring LLM applications, with code examples and best practices.",
                    tags: ["Langfuse", "Observability", "Tutorial", "LLMs"],
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                },
                {
                    title: "Vector Databases for Test Engineers: A Hands-on Introduction",
                    date: "October 2023",
                    platform: "TestDriven.io",
                    description: "Learn how to use vector databases to enhance test case management, selection, and maintenance with practical code examples.",
                    tags: ["Vector Databases", "Testing", "Tutorial", "Python"],
                    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                }
            ];
            
        default:
            return [];
    }
}
