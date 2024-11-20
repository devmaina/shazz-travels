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
