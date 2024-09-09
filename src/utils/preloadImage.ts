export const preloadImages = (imageUrls:string[]) => {
    return new Promise((resolve, reject) => {
        let loadedImages = 0;
        const totalImages = imageUrls.length;

        if (totalImages === 0) {
            resolve(null);
            return;
        }

        imageUrls.forEach(url => {
            const img = new Image();
            img.onload = () => {
                loadedImages++;
                if (loadedImages === totalImages) {
                    resolve(null);
                }
            };
            img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
            img.src = url;
        });
    });
};
