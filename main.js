// Hamburger Menu
var mobileMenu = document.querySelector('.hamburger');

function toggleMenu() {
    mobileMenu.classList.toggle('close');
}

mobileMenu.addEventListener('click', toggleMenu);