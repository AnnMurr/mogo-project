const sidebar = document.querySelector(".sidebar");
const menuBurger = document.querySelector(".menu__burger");
const menuBurgerBtn = document.querySelector(".menu__burger-btn");
const sidebarBtn = document.querySelector(".sidebar__nav");

function onBurgerClick() {
    sidebar.classList.toggle("sidebar_active");
    menuBurger.classList.toggle("menu__burger-btn_active");
    menuBurger.classList.toggle("menu__burger_active");
}

menuBurgerBtn.addEventListener('click', onBurgerClick);
sidebarBtn.addEventListener('click', onBurgerClick);

