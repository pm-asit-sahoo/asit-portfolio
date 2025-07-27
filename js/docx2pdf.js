// Function to handle CV download with conversion attempt
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadCV');
    
    if (downloadButton) {
        downloadButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const docxPath = 'Asit Resume_Lead_SDET.docx';
            const fileName = 'Asit Resume_Lead_SDET';
            
            // Show loading state
            const originalText = downloadButton.innerHTML;
            downloadButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Converting...';
            
            // Check if the required libraries are loaded
            if (typeof docx !== 'undefined' && typeof PDFLib !== 'undefined' && typeof html2canvas !== 'undefined') {
                // Load the docx file
                fetch(docxPath)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to fetch the DOCX file');
                        }
                        return response.arrayBuffer();
                    })
                    .then(buffer => {
                        // Convert DOCX to PDF using our converter
                        return convertDocxToPdf(buffer);
                    })
                    .then(pdfBytes => {
                        // Create a blob from the PDF buffer
                        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                        const url = URL.createObjectURL(blob);
                        
                        // Create a link and trigger download
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = fileName + '.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        
                        // Release the blob URL
                        setTimeout(() => URL.revokeObjectURL(url), 100);
                    })
                    .catch(error => {
                        console.error('Error during conversion:', error);
                        console.log('Falling back to DOCX download');
                        fallbackToDirectDownload(docxPath);
                    })
                    .finally(() => {
                        // Restore button text
                        setTimeout(() => {
                            downloadButton.innerHTML = originalText;
                        }, 1000);
                    });
            } else {
                console.log('Required libraries not available, falling back to direct download');
                fallbackToDirectDownload(docxPath);
                
                // Restore button text
                setTimeout(() => {
                    downloadButton.innerHTML = originalText;
                }, 1000);
            }
        });
    }
    
    // Function to fall back to direct DOCX download
    function fallbackToDirectDownload(filePath) {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = filePath.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
