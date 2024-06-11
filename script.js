document.addEventListener("DOMContentLoaded", function() {
    // JavaScript for scroll-based animations
    const elements = document.querySelectorAll('.glow');

    function checkScroll() {
        const scrollPos = window.scrollY + window.innerHeight;
        elements.forEach(el => {
            if (scrollPos > el.offsetTop + el.offsetHeight / 2) {
                el.classList.add('scrolled');
            } else {
                el.classList.remove('scrolled');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
});
