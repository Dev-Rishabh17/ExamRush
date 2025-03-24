
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


let isScrolling;
window.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            }
        });

        
        header.classList.toggle('sticky', window.scrollY > 100);
    }, 100); 
});


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


if (document.querySelector('.multiple-text')) {
    const typed = new Typed('.multiple-text', {
        strings: [' Bss pass ho jau', '8+ CGPA', '9+ CGPA'],
        typeSpeed: 80,
        backSpeed: 100,
        loop: true
    });
}

