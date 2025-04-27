AOS.init({
    duration: 1200,
    easing: 'easeInOutCubic',
    once: true,
    mirror: true,
});

const header = document.getElementById('header');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.getElementById('hamburger');
const navLinksItems = document.querySelectorAll('.nav-links li a');


function toggleNavbar() {
    navLinks.classList.toggle('active');
}

hamburger.addEventListener('click', toggleNavbar);

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 769) {
            toggleNavbar();
        }
    });
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});