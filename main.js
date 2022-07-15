let hamb = document.querySelector('.open-menu');
let crest = document.querySelector('.close-menu');
let menu = document.querySelector('.links');
let overlay = document.querySelector('.overlay');

hamb.addEventListener('click', () => {
    hamb.classList.add('open-menu-active');
    menu.classList.add('links-active');
    crest.classList.add('close-menu-active');
    overlay.classList.add('overlay-active');
});

crest.addEventListener('click', () => {
    crest.classList.remove('close-menu-active');
    menu.classList.remove('links-active');
    hamb.classList.remove('open-menu-active');
    overlay.classList.remove('overlay-active');
});

let features = document.querySelector('.features');
let featuresDropdown = document.querySelector('.features-dropdown');
let featuresArrow = document.querySelector('.features-arrow');
let company = document.querySelector('.company');
let companyDropdown = document.querySelector('.company-dropdown');
let companyArrow = document.querySelector('.company-arrow');

features.addEventListener('click', () => {
    featuresDropdown.classList.toggle('dropdown-active');
    featuresArrow.classList.toggle('arrow-active');
});

company.addEventListener('click', () => {
    companyDropdown.classList.toggle('dropdown-active');
    companyArrow.classList.toggle('arrow-active');
});