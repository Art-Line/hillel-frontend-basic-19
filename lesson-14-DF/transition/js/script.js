const btn = document.querySelector('.js-mobile-menu-btn');
const menu = document.querySelector('.js-menu');

btn.addEventListener("click", (e) => {
    btn.classList.add("active");
    menu.classList.add("active");
});