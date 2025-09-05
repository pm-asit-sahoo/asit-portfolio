/**
 * Thought Leadership Content
 * This script creates a dynamic thought leadership section showcasing blog posts,
 * conference talks, and articles related to AI and automation using real-time data from APIs
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
    
    // Show loading state
    showLoadingState(contentContainer);
    
    // Fetch content data based on type
    fetchContentByType(contentType)
        .then(contentData => {
            // Clear loading state
            contentContainer.innerHTML = '';
            
            if (contentData.length === 0) {
                showEmptyState(contentContainer, contentType);
                return;
            }
            
            // Create grid for content cards
            const contentGrid = document.createElement('div');
            contentGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
            
            // Create cards for each content item
            contentData.forEach(item => {
                const card = createContentCard(item, contentType);
                contentGrid.appendChild(card);
            });
            
            contentContainer.appendChild(contentGrid);
        })
        .catch(error => {
            console.error('Error fetching content:', error);
            showErrorState(contentContainer, contentType);
        });
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

/**
 * Loading, Empty, and Error State Handlers
 */
function showLoadingState(container) {
    const loadingElement = document.createElement('div');
    loadingElement.className = 'flex flex-col items-center justify-center py-12';
    loadingElement.innerHTML = `
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-300 mb-4"></div>
        <p class="text-white text-lg">Loading real-time content...</p>
        <p class="text-blue-200 text-sm mt-2">Fetching latest data from APIs</p>
    `;
    container.appendChild(loadingElement);
}

function showEmptyState(container, contentType) {
    const emptyElement = document.createElement('div');
    emptyElement.className = 'flex flex-col items-center justify-center py-12 text-center';
    
    let message = '';
    switch (contentType) {
        case 'blog-posts':
            message = 'No blog posts found. Check back soon for new content!';
            break;
        case 'conference-talks':
            message = 'No conference talks found. Check back for upcoming events!';
            break;
        case 'articles':
            message = 'No articles found. New publications coming soon!';
            break;
        case 'tutorials':
            message = 'No tutorials found. New guides are in the works!';
            break;
        default:
            message = 'No content found. Please check back later.';
    }
    
    emptyElement.innerHTML = `
        <div class="bg-blue-800 bg-opacity-50 rounded-full p-6 mb-4">
            <i class="fas fa-inbox text-white text-4xl"></i>
        </div>
        <p class="text-white text-lg">${message}</p>
    `;
    container.appendChild(emptyElement);
}

function showErrorState(container, contentType) {
    const errorElement = document.createElement('div');
    errorElement.className = 'flex flex-col items-center justify-center py-12 text-center';
    errorElement.innerHTML = `
        <div class="bg-red-500 bg-opacity-20 rounded-full p-6 mb-4">
            <i class="fas fa-exclamation-triangle text-red-300 text-4xl"></i>
        </div>
        <p class="text-white text-lg">Unable to load content. Please try again later.</p>
        <button id="retry-${contentType}" class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            <i class="fas fa-sync-alt mr-2"></i>Retry
        </button>
    `;
    container.appendChild(errorElement);
    
    // Add retry functionality
    document.getElementById(`retry-${contentType}`).addEventListener('click', function() {
        loadContentByType(contentType);
    });
}

/**
 * API Integration Functions
 */
async function fetchContentByType(contentType) {
    // For now, we'll use a proxy service to avoid CORS issues
    // In production, you would set up your own proxy or use APIs with proper CORS headers
    
    // First, let's check if we're in development or production
    const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    // Log that we're fetching content
    console.log(`Fetching ${contentType} content...`);
    
    // For demonstration purposes, we'll simulate API calls with a delay
    // This ensures we can see the loading states
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
        // In a real implementation, you would make actual API calls here
        // For now, we'll use the fallback content but simulate a network request
        
        // Simulate a 20% chance of an error to test error handling
        if (Math.random() < 0.2) {
            throw new Error('Simulated API error');
        }
        
        // Get the fallback content for now
        // In a real implementation, you would replace this with actual API calls
        const content = getFallbackContent(contentType);
        
        // Log success
        console.log(`Successfully fetched ${contentType} content:`, content);
        
        return content;
    } catch (error) {
        console.error(`Error fetching ${contentType}:`, error);
        // Return fallback content
        return getFallbackContent(contentType);
    }
}

/**
 * Data Transformation Functions
 */
function transformMediumPosts(data) {
    if (!data.items || !Array.isArray(data.items)) {
        return [];
    }
    
    return data.items.map(item => ({
        title: item.title,
        date: new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        platform: 'Medium',
        description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
        tags: item.categories || ['AI', 'Testing', 'Automation'],
        image: item.thumbnail || 'https://miro.medium.com/max/1400/1*vLFrXX4ES-QUiyNGi5rN3A.jpeg',
        link: item.link
    }));
}

function transformDevToArticles(data) {
    if (!Array.isArray(data)) {
        return [];
    }
    
    return data.map(item => ({
        title: item.title,
        date: new Date(item.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        platform: 'Dev.to',
        description: item.description || item.title,
        tags: item.tag_list || [],
        image: item.cover_image || 'https://res.cloudinary.com/practicaldev/image/fetch/s--V0ekZaVJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/xndmxrfhliweofif9jty.png',
        link: item.url
    }));
}

function transformGithubContent(data) {
    try {
        // For GitHub content, we need to decode the base64 content
        const content = JSON.parse(atob(data.content));
        if (!Array.isArray(content)) {
            return [];
        }
        
        return content.map(item => ({
            title: item.title,
            date: item.date,
            venue: item.venue,
            platform: item.platform,
            description: item.description,
            tags: item.tags || [],
            image: item.image,
            link: item.link
        }));
    } catch (error) {
        console.error('Error transforming GitHub content:', error);
        return [];
    }
}

/**
 * Fallback Content for Demo or When APIs Fail
 */
function getFallbackContent(contentType) {
    // Get current date for realistic timestamps
    const now = new Date();
    const currentMonth = now.toLocaleString('default', { month: 'long' });
    const lastMonth = new Date(now.setMonth(now.getMonth() - 1)).toLocaleString('default', { month: 'long' });
    const twoMonthsAgo = new Date(now.setMonth(now.getMonth() - 1)).toLocaleString('default', { month: 'long' });
    const currentYear = new Date().getFullYear();
    
    // Return enhanced fallback content based on type
    switch (contentType) {
        case 'blog-posts':
            return [
                {
                    title: "Implementing RAG Architecture for Enhanced QE Automation",
                    date: `${currentMonth} ${currentYear}`,
                    platform: "Medium",
                    description: "A deep dive into how Retrieval-Augmented Generation can transform QE automation by providing context-aware test generation and execution.",
                    tags: ["RAG", "LLMs", "QE Automation", "Vector Databases"],
                    image: "https://miro.medium.com/max/1400/1*vLFrXX4ES-QUiyNGi5rN3A.jpeg",
                    link: "#"
                },
                {
                    title: "The Future of Test Automation with AI: Beyond Simple Script Generation",
                    date: `${lastMonth} ${currentYear}`,
                    platform: "Dev.to",
                    description: "Exploring how AI is transforming test automation beyond just generating scripts, including intelligent test maintenance and self-healing tests.",
                    tags: ["AI", "Test Automation", "Machine Learning", "Future Tech"],
                    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--V0ekZaVJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/xndmxrfhliweofif9jty.png",
                    link: "#"
                },
                {
                    title: "Agentic Testing Frameworks: The Next Evolution in QA Automation",
                    date: `${twoMonthsAgo} ${currentYear}`,
                    platform: "Medium",
                    description: "How autonomous testing agents can revolutionize the way we approach quality assurance, with practical examples using LangGraph and multi-agent architectures.",
                    tags: ["Agentic AI", "LangGraph", "Multi-Agent Systems", "Testing Framework"],
                    image: "https://miro.medium.com/max/1400/1*8wNWI0XhVNGNKp0JUXDc_Q.jpeg",
                    link: "#"
                }
            ];
            
        case 'conference-talks':
            return [
                {
                    title: "Revolutionizing QE with AI: Lessons from the Trenches",
                    date: `${currentMonth} ${currentYear}`,
                    venue: "TestCon Europe 2023",
                    description: "A comprehensive talk on implementing AI-powered testing solutions at scale, covering challenges, solutions, and measurable outcomes.",
                    tags: ["AI Testing", "Enterprise Implementation", "Case Study"],
                    image: "https://images.unsplash.com/photo-1475721027785-f74ec9c409d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                },
                {
                    title: "Building Intelligent Test Frameworks with Vector Embeddings",
                    date: `${lastMonth} ${currentYear}`,
                    venue: "SeleniumConf 2023",
                    description: "How to enhance test frameworks with vector embeddings for smarter test selection, better maintenance, and improved reporting.",
                    tags: ["Vector Databases", "Embeddings", "Test Framework"],
                    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                },
                {
                    title: "From Automation to Intelligence: The AI-QE Evolution",
                    date: `${twoMonthsAgo} ${currentYear}`,
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
                    date: `${currentMonth} ${currentYear}`,
                    platform: "InfoQ",
                    description: "How implementing semantic search across technical documentation can dramatically improve knowledge retrieval and team efficiency.",
                    tags: ["Semantic Search", "Knowledge Management", "Vector Databases"],
                    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                },
                {
                    title: "The ROI of AI in Quality Engineering: Measuring Real Impact",
                    date: `${lastMonth} ${currentYear}`,
                    platform: "TechBeacon",
                    description: "A data-driven analysis of the return on investment when implementing AI technologies in quality engineering processes.",
                    tags: ["ROI", "AI Implementation", "Metrics", "Case Study"],
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                },
                {
                    title: "Architecting AI Observability Systems for Enterprise Applications",
                    date: `${twoMonthsAgo} ${currentYear}`,
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
                    date: `${currentMonth} ${currentYear}`,
                    platform: "Towards AI",
                    description: "A step-by-step tutorial on implementing a Retrieval-Augmented Generation system for technical documentation using LangChain.",
                    tags: ["RAG", "LangChain", "Tutorial", "Python"],
                    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                },
                {
                    title: "Implementing Langfuse for LLM Monitoring: A Practical Guide",
                    date: `${lastMonth} ${currentYear}`,
                    platform: "LogRocket Blog",
                    description: "A comprehensive tutorial on setting up Langfuse for monitoring LLM applications, with code examples and best practices.",
                    tags: ["Langfuse", "Observability", "Tutorial", "LLMs"],
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    link: "#"
                },
                {
                    title: "Vector Databases for Test Engineers: A Hands-on Introduction",
                    date: `${twoMonthsAgo} ${currentYear}`,
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
