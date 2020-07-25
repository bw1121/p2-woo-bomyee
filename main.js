// Hamburger Menu Icon Toggle
var mobileMenu = document.querySelector('.hamburger');
var menuList = document.querySelector('.menu-links');

function toggleMenu() {
    mobileMenu.classList.toggle('close');
    menuList.classList.toggle('show-menu');
}

mobileMenu.addEventListener('click', toggleMenu);


// Desktop Menu Dropdown
var menuDropDown = document.querySelector('.menu-dropdown');
var dropDown = document.querySelector('.dropdown'); 
var dropItem = document.querySelector('.drop-item');

function showDropDown() {
    menuDropDown.style.display = 'block';
    dropItem.style.backgroundColor = "#F2F2F2";
}

function hideDropDown() {
    menuDropDown.style.display = 'none';
    dropItem.style.backgroundColor = "#FFFFFF";
}

dropDown.addEventListener('mouseover', showDropDown);
dropDown.addEventListener('mouseout', hideDropDown);


// Exit Site Btn
var exitBtn = document.querySelector('.exit-btn');

function exit() {
    window.location = 'https://www.google.com';
}

exitBtn.addEventListener('click', exit);

// Footer Disclosure Drop Down
var disclosure = document.querySelector('.disclosure');
var disclosureLabel = document.querySelector('.disclosure-label');
var plusSymbol = document.querySelector('.plus');

function showDisclosure() {
    if (disclosure.style.display === 'none') {
        disclosure.style.display = 'block';
        plusSymbol.innerHTML = '&#8722;';
    } 
    else {
        disclosure.style.display = 'none';
        plusSymbol.innerHTML = '&#43;';
    }
}

disclosureLabel.addEventListener('click', showDisclosure);