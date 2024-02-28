
let menu = document.querySelector(".icono i");
let menu1 = document.querySelector(".menu");
let menuE = document.querySelector(".menu-e");
let activo = true;
menu.addEventListener("click", () => {
    if ( activo ) {
        menuE.classList.add("active");
        menu1.classList.add("active");
        activo = false;
    } else {
        menuE.classList.remove("active");
        menu1.classList.remove("active")
        activo = true;
    }
})