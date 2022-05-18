const hamburger = document.querySelector('.hamburger'),
    overlay = document.querySelector('.menu__overlay'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});
overlay.addEventListener('click', () => {
    menu.classList.remove('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});