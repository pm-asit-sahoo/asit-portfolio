/**
 * AI Impact Visualization
 * This script creates interactive visualizations showing the impact of AI projects
 * using Chart.js for data visualization
 */

document.addEventListener('DOMContentLoaded', function() {
    // Give the showcase a moment to load
    setTimeout(() => {
        const showcaseContainer = document.getElementById('ai-showcase-container');
        if (showcaseContainer) {
            initializeVisualizations();
        }
    }, 1000);
});

function initializeVisualizations() {
    try {
        console.log('Initializing AI showcase visualizations...');
        // Add visualization container to each project in the showcase
        const aiProjects = document.querySelectorAll('.ai-project-card');
        console.log(`Found ${aiProjects.length} AI project cards`);
        
        if (aiProjects.length === 0) {
            console.warn('No AI project cards found. Retrying in 500ms...');
            setTimeout(initializeVisualizations, 500);
            return;
        }
        
        aiProjects.forEach(project => {
            try {
                const projectId = project.getAttribute('data-project-id');
                console.log(`Processing project: ${projectId}`);
                const metricsSection = project.querySelector('.project-metrics');
                
                if (metricsSection) {
                    // Create canvas for chart
                    const chartContainer = document.createElement('div');
                    chartContainer.className = 'chart-container mt-6';
                    chartContainer.style.height = '300px';
                    
                    const canvas = document.createElement('canvas');
                    canvas.id = `chart-${projectId}`;
                    chartContainer.appendChild(canvas);
                    
                    metricsSection.appendChild(chartContainer);
                    
                    // Create visualization based on project type
                    createVisualizationForProject(projectId, canvas.id);
                } else {
                    console.warn(`No metrics section found for project: ${projectId}`);
                }
            } catch (projectError) {
                console.error(`Error processing project: ${projectError.message}`);
            }
        });
    } catch (error) {
        console.error(`Error initializing visualizations: ${error.message}`);
    }
    
    // Add overall impact visualization section
    createOverallImpactVisualization();
}

function createVisualizationForProject(projectId, canvasId) {
    const chartData = getChartDataForProject(projectId);
    if (!chartData) return;
    
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // Create appropriate chart type based on the data
    if (chartData.type === 'line') {
        createLineChart(ctx, chartData);
    } else if (chartData.type === 'bar') {
        createBarChart(ctx, chartData);
    } else if (chartData.type === 'radar') {
        createRadarChart(ctx, chartData);
    } else if (chartData.type === 'doughnut') {
        createDoughnutChart(ctx, chartData);
    }
}

function createLineChart(ctx, data) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: data.datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }
            }
        }
    });
}

function createBarChart(ctx, data) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: data.datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }
            }
        }
    });
}

function createRadarChart(ctx, data) {
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: data.labels,
            datasets: data.datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    pointLabels: {
                        color: '#fff'
                    },
                    ticks: {
                        color: '#fff',
                        backdropColor: 'transparent'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }
            }
        }
    });
}

function createDoughnutChart(ctx, data) {
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.labels,
            datasets: data.datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }
            }
        }
    });
}

function createOverallImpactVisualization() {
    // Create container for overall impact visualization
    const showcaseContainer = document.getElementById('ai-showcase-container');
    const overallImpactSection = document.createElement('div');
    overallImpactSection.className = 'overall-impact-section mt-16 p-8 bg-blue-800 bg-opacity-50 rounded-xl';
    
    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'text-2xl font-bold text-white mb-6 text-center';
    sectionTitle.textContent = 'AI Implementation Impact Overview';
    overallImpactSection.appendChild(sectionTitle);
    
    // Create grid for multiple charts
    const chartGrid = document.createElement('div');
    chartGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-8';
    
    // Efficiency Improvement Chart
    const efficiencyChartContainer = document.createElement('div');
    efficiencyChartContainer.className = 'chart-container bg-blue-900 bg-opacity-50 p-6 rounded-lg';
    efficiencyChartContainer.style.height = '350px';
    
    const efficiencyTitle = document.createElement('h4');
    efficiencyTitle.className = 'text-xl font-semibold text-white mb-4 text-center';
    efficiencyTitle.textContent = 'Efficiency Improvements';
    efficiencyChartContainer.appendChild(efficiencyTitle);
    
    const efficiencyCanvas = document.createElement('canvas');
    efficiencyCanvas.id = 'efficiency-chart';
    efficiencyChartContainer.appendChild(efficiencyCanvas);
    chartGrid.appendChild(efficiencyChartContainer);
    
    // ROI Chart
    const roiChartContainer = document.createElement('div');
    roiChartContainer.className = 'chart-container bg-blue-900 bg-opacity-50 p-6 rounded-lg';
    roiChartContainer.style.height = '350px';
    
    const roiTitle = document.createElement('h4');
    roiTitle.className = 'text-xl font-semibold text-white mb-4 text-center';
    roiTitle.textContent = 'Return on Investment';
    roiChartContainer.appendChild(roiTitle);
    
    const roiCanvas = document.createElement('canvas');
    roiCanvas.id = 'roi-chart';
    roiChartContainer.appendChild(roiCanvas);
    chartGrid.appendChild(roiChartContainer);
    
    // Quality Metrics Chart
    const qualityChartContainer = document.createElement('div');
    qualityChartContainer.className = 'chart-container bg-blue-900 bg-opacity-50 p-6 rounded-lg';
    qualityChartContainer.style.height = '350px';
    
    const qualityTitle = document.createElement('h4');
    qualityTitle.className = 'text-xl font-semibold text-white mb-4 text-center';
    qualityTitle.textContent = 'Quality Metrics';
    qualityChartContainer.appendChild(qualityTitle);
    
    const qualityCanvas = document.createElement('canvas');
    qualityCanvas.id = 'quality-chart';
    qualityChartContainer.appendChild(qualityCanvas);
    chartGrid.appendChild(qualityChartContainer);
    
    // Technology Adoption Chart
    const adoptionChartContainer = document.createElement('div');
    adoptionChartContainer.className = 'chart-container bg-blue-900 bg-opacity-50 p-6 rounded-lg';
    adoptionChartContainer.style.height = '350px';
    
    const adoptionTitle = document.createElement('h4');
    adoptionTitle.className = 'text-xl font-semibold text-white mb-4 text-center';
    adoptionTitle.textContent = 'AI Technology Adoption';
    adoptionChartContainer.appendChild(adoptionTitle);
    
    const adoptionCanvas = document.createElement('canvas');
    adoptionCanvas.id = 'adoption-chart';
    adoptionChartContainer.appendChild(adoptionCanvas);
    chartGrid.appendChild(adoptionChartContainer);
    
    overallImpactSection.appendChild(chartGrid);
    showcaseContainer.appendChild(overallImpactSection);
    
    // Create the charts
    createEfficiencyChart();
    createROIChart();
    createQualityMetricsChart();
    createAdoptionChart();
}

function createEfficiencyChart() {
    const ctx = document.getElementById('efficiency-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Knowledge Retrieval', 'Test Case Creation', 'Bug Detection', 'Code Review', 'Documentation'],
            datasets: [{
                label: 'Before AI Implementation',
                data: [100, 100, 100, 100, 100],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'After AI Implementation',
                data: [30, 40, 65, 55, 45],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Time Required (% of baseline)',
                        color: '#fff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + '% of original time';
                        }
                    }
                }
            }
        }
    });
}

function createROIChart() {
    const ctx = document.getElementById('roi-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
            datasets: [{
                label: 'Investment',
                data: [100, 120, 130, 135, 140, 145],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: true
            }, {
                label: 'Return',
                data: [0, 40, 90, 150, 220, 310],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Value (normalized)',
                        color: '#fff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

function createQualityMetricsChart() {
    const ctx = document.getElementById('quality-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Test Coverage',
                'Bug Detection',
                'Code Quality',
                'Documentation',
                'User Experience',
                'Performance'
            ],
            datasets: [{
                label: 'Before AI',
                data: [65, 59, 70, 60, 56, 55],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
            }, {
                label: 'After AI',
                data: [85, 90, 85, 95, 80, 85],
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    pointLabels: {
                        color: '#fff',
                        font: {
                            size: 12
                        }
                    },
                    ticks: {
                        color: '#fff',
                        backdropColor: 'transparent'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

function createAdoptionChart() {
    const ctx = document.getElementById('adoption-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'RAG Architecture',
                'Vector Databases',
                'LangChain',
                'Langfuse',
                'MCP Server',
                'Fine-tuned LLMs'
            ],
            datasets: [{
                data: [30, 20, 15, 12, 10, 13],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#fff',
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.raw + '% adoption';
                        }
                    }
                }
            }
        }
    });
}

function getChartDataForProject(projectId) {
    // Return specific chart data based on project ID
    switch(projectId) {
        case 'rag-chatbot':
            return {
                type: 'line',
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                datasets: [{
                    label: 'Response Accuracy (%)',
                    data: [65, 70, 75, 82, 87, 92],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    tension: 0.3
                }, {
                    label: 'Response Time (sec)',
                    data: [5.2, 4.8, 4.3, 3.7, 3.2, 2.8],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    tension: 0.3
                }]
            };
            
        case 'test-generator':
            return {
                type: 'bar',
                labels: ['Manual Creation', 'AI Generation', 'AI + Human Review'],
                datasets: [{
                    label: 'Time Required (minutes)',
                    data: [45, 3, 10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(54, 162, 235, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }, {
                    label: 'Test Coverage (%)',
                    data: [70, 85, 95],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            };
            
        case 'ai-observability':
            return {
                type: 'radar',
                labels: [
                    'Prompt Performance',
                    'Response Quality',
                    'Error Detection',
                    'Cost Optimization',
                    'User Satisfaction',
                    'System Reliability'
                ],
                datasets: [{
                    label: 'Before Langfuse',
                    data: [60, 65, 55, 50, 70, 75],
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
                }, {
                    label: 'After Langfuse',
                    data: [85, 90, 95, 80, 90, 85],
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
                }]
            };
            
        case 'semantic-search':
            return {
                type: 'doughnut',
                labels: [
                    'Exact Match',
                    'Semantic Match',
                    'Partial Match',
                    'No Match'
                ],
                datasets: [{
                    label: 'Traditional Search',
                    data: [25, 0, 15, 60],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(255, 99, 132, 0.7)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }, {
                    label: 'Vector Search',
                    data: [25, 55, 15, 5],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(255, 99, 132, 0.7)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            };
            
        default:
            return null;
    }
}
