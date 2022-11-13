const burger = document.querySelector(".burger");
const nav = document.querySelector("#mobile-nav");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
});