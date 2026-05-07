console.log("✅ download.js loaded successfully");

document.addEventListener('DOMContentLoaded', () => {
    console.log("📄 DOM fully loaded - attaching double click listeners");

    const images = document.querySelectorAll('.card img');
    
    console.log(`Found ${images.length} images in .card elements`);

    if (images.length === 0) {
        console.warn("⚠️ No images found. Check if your images have class 'card' and contain <img> tags.");
    }

    images.forEach((img, index) => {
        img.style.cursor = 'zoom-in';
        
        img.addEventListener('dblclick', (e) => {
            console.log(`🖱️ Double clicked on image #${index + 1}`);
            e.preventDefault();
            e.stopImmediatePropagation();

            const imageUrl = img.src || img.currentSrc;
            
            if (!imageUrl) {
                console.error("❌ No src found on this image");
                return;
            }

            console.log("Downloading:", imageUrl);
            downloadImage(imageUrl, `anniversary-photo-${index + 1}.jpg`);
        });
    });

    function downloadImage(url, filename) {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log(`✅ Download triggered for ${filename}`);
    }
});