// Hamburger Menu Icon Toggle
var mobileMenu = document.querySelector('.hamburger');
var menuList = document.querySelector('.menu-links');

function toggleMenu() {
    mobileMenu.classList.toggle('close');
    menuList.classList.toggle('show');
}

mobileMenu.addEventListener('click', toggleMenu);