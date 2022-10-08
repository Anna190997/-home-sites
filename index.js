const menu = document.getElementById("menu");
const showMenu = () => {
  const menuList = menu.classList;
  if (menuList.contains("invisible")) {
    menuList.toggle("invisible");
  } else {
    menuList.add("invisible");
  }
};
const listMenu = document.getElementById("list");
listMenu.addEventListener("click", showMenu);

const burgerMenu = document.getElementById("burger_menu");
const showBurgerMenu = () => {
  const burgerMenuList = burgerMenu.classList;
  if (burgerMenuList.contains("burger_menu")) {
    burgerMenuList.toggle("burger_menu");
  } else {
    burgerMenuList.add("burger_menu");
  }
};
const burger = document.getElementById("burger");
burger.addEventListener("click", showBurgerMenu);
