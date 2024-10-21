
const slideshow = document.querySelector('.slideshow');
const imagesDir = 'images/';
const imageFiles = [
    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 
    'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 
    'image9.jpg', 'image10.jpg'
];

let scrollAmount = 0;

// Function to load images into the slideshow and clone them for continuous loop
function loadImages() {
    imageFiles.forEach(file => {
        const imageUrl = imagesDir + file;
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = file.split('.')[0]; // Alt text based on filename
        slideshow.appendChild(img);
    });

    // Clone images to create an infinite loop effect
    imageFiles.forEach(file => {
        const imageUrl = imagesDir + file;
        const imgClone = document.createElement('img');
        imgClone.src = imageUrl;
        imgClone.alt = file.split('.')[0]; // Alt text based on filename
        slideshow.appendChild(imgClone);
    });
}

// Function to slide the images continuously in a loop
function slideImages() {
    const totalWidth = slideshow.scrollWidth / 2; // Half the width since we cloned the images
    const imageWidth = slideshow.querySelector('img').clientWidth + 10; // Include margin

    // Slide the images by adjusting translateX continuously
    scrollAmount -= 1; // Negative value for leftward movement

    // Reset scroll when it's fully out of view
    if (Math.abs(scrollAmount) >= totalWidth) {
        scrollAmount = 0; // Reset scroll amount to seamlessly loop back
    }

    slideshow.style.transform = `translateX(${scrollAmount}px)`;
}

// Start the slideshow loop
function startSlideshow() {
    setInterval(slideImages, 50); // 50ms interval for smooth continuous movement
}

// Load images and start the slideshow on page load
loadImages();
startSlideshow();

// Hamburger menu toggle functionality
const menuIcon = document.getElementById('menu-icon');
const popupMenu = document.getElementById('popup-menu');

menuIcon.addEventListener('click', () => {
    popupMenu.classList.toggle('active'); // Toggle the active class
});

// Close the popup menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideMenu = popupMenu.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuIcon) {
        popupMenu.classList.remove('active'); // Remove active class to close menu
    }
});