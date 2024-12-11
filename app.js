document.addEventListener("DOMContentLoaded", () => {
    const menuItem = document.querySelector(".menu-item");
    const dropdown = document.querySelector(".dropdown");

    let hideTimeout;

    menuItem.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout); // Cancelar ocultamiento si el usuario vuelve
        menuItem.classList.add("dropdown-active");
    });

    menuItem.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(() => {
            menuItem.classList.remove("dropdown-active");
        }, 2000); // 4 segundos de retardo antes de ocultar
    });

    dropdown.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout); // Cancelar ocultamiento si el usuario entra al menú
    });

    dropdown.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(() => {
            menuItem.classList.remove("dropdown-active");
        }, 2000); // Mantener los 4 segundos en el menú
    });
});