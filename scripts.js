document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for "Scroll Down" button
    const scrollButton = document.getElementById('scrollButton');
    if (scrollButton) { // Check if the button exists (to prevent errors if it's removed later)
        scrollButton.addEventListener('click', function() {
            document.getElementById('projects').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('#navbar a[href^="#"]'); // Select all anchor links in navbar that start with #
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump-to-anchor behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target section id (remove #)
            const targetSection = document.getElementById(targetId);

            if (targetSection) { // Check if the target section exists
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});