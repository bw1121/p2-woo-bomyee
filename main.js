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
    if (disclosure.style.display === 'block') {
        disclosure.style.display = 'none';
        plusSymbol.innerHTML = '&#43;';
    } 
    else {
        disclosure.style.display = 'block';
        plusSymbol.innerHTML = '&#8722;';
    }
}

disclosureLabel.addEventListener('click', showDisclosure);

// Accordions
var accordion = document.getElementsByClassName('label');

function openAccordion() {
    var info = this.nextElementSibling;
    var plus = this.children[1];

    if (info.style.display === 'block') {
        info.style.display = 'none';
        plus.innerHTML = '&#43;';
    }
    else {
        info.style.display = 'block';
        plus.innerHTML = '&#8722;';
    }
}

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', openAccordion);   
}

// Quotes API 
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        // Random quote
        var randQuote = document.getElementById('randQuote');
        var circle = document.querySelector('.background-circle');

        function showQuote() {
            randQuote.innerHTML = apiResult.slip.advice;
            randQuote.style.fontWeight = '400';
        }

        circle.addEventListener('click', showQuote);

    }
};
xmlhttp.open('GET', 'https://api.adviceslip.com/advice', true);
xmlhttp.send();