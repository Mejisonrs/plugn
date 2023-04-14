const menu = document.querySelector(".aside");
const buttons = document.querySelectorAll(".menu");
const overlay = document.querySelector(".overlay");

buttons.forEach(button => button.addEventListener("click", toggleMenu));
overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", event => {
  if (event.ctrlKey && event.key === "z") {
    toggleMenu();
  }
});

function toggleMenu() {
  overlay.classList.toggle("active");
  menu.classList.toggle("active");
}

function closeMenu() {
  overlay.classList.remove("active");
  menu.classList.remove("active");
}
