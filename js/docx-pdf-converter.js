// This file contains the actual conversion logic using docx-preview and pdf-lib

// Function to convert DOCX to PDF
async function convertDocxToPdf(docxBuffer) {
    try {
        // Create a container for the DOCX rendering
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.left = '-9999px';
        container.style.top = '-9999px';
        document.body.appendChild(container);
        
        // Render the DOCX to HTML
        await docx.renderAsync(docxBuffer, container, null, {
            className: 'docx-document',
            inWrapper: true,
            ignoreWidth: true,
            ignoreHeight: true,
            ignoreFonts: false,
            breakPages: true,
            ignoreLastRenderedPageBreak: true,
            experimental: false,
            trimXmlDeclaration: true,
            debug: false
        });
        
        // Create a PDF document
        const pdfDoc = await PDFLib.PDFDocument.create();
        
        // Get all pages from the rendered DOCX
        const pages = container.querySelectorAll('.docx-page');
        
        // Convert each page to PDF
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            
            // Create a canvas for the page
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            
            // Set canvas size to match page size
            const rect = page.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            
            // Render page to canvas using html2canvas
            await html2canvas(page, {
                canvas: canvas,
                scale: 2, // Higher scale for better quality
                useCORS: true,
                logging: false
            });
            
            // Convert canvas to image
            const imgData = canvas.toDataURL('image/png');
            
            // Add image to PDF
            const img = await pdfDoc.embedPng(imgData);
            const pdfPage = pdfDoc.addPage([img.width, img.height]);
            pdfPage.drawImage(img, {
                x: 0,
                y: 0,
                width: img.width,
                height: img.height
            });
        }
        
        // Clean up
        document.body.removeChild(container);
        
        // Save PDF
        const pdfBytes = await pdfDoc.save();
        return pdfBytes;
    } catch (error) {
        console.error('Error converting DOCX to PDF:', error);
        throw error;
    }
}
