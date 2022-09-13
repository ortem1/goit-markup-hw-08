const openBtn = document.querySelector("[data-menu-open]")
const menu = document.querySelector(".menu")
const closeBtn = document.querySelector("[data-menu-close]")



openBtn.addEventListener("click", toggleMenu)
closeBtn.addEventListener("click", toggleMenu)



function toggleMenu () {
    menu.classList.toggle("is-visible")
}