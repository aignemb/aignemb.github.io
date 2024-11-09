document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('#navbar');

    function fadeNavBar() {
        const scrollPosition = window.scrollY;
        const maxScroll = 400;
        const opacity = Math.min(scrollPosition / maxScroll, 1);
        navbar.style.backgroundColor = `rgba(200, 200, 200, ${opacity})`;
    }
    window.addEventListener('scroll', fadeNavBar);
});

