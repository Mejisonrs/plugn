const menu = document.querySelector(".aside");
const buttons = document.querySelectorAll(".menu");
const overlay = document.querySelector(".overlay");
/*const cliner = document.querySelector('input[name="q"]');*/

buttons.forEach(button => button.addEventListener("click", toggleMenu));
overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", event => {
  if (event.ctrlKey && event.key === "z") {
    toggleMenu();
    /*cliner.focus();
    cliner.value = "";*/
  }
});

function toggleMenu() {
  overlay.classList.toggle("active");
  menu.classList.toggle("active");
}

function closeMenu(event) {
  overlay.classList.remove("active");
  menu.classList.remove("active");
}
