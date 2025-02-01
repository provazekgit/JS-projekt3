document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const menuList = document.querySelector("nav");
    const hamburgerIcon = menuIcon.querySelector("i"); // Opravený výběr ikony

    menuIcon.addEventListener("click", () => {
        if (menuList.style.display === "none" || menuList.style.display === "") {
            hamburgerIcon.classList.add("fa-xmark");
            hamburgerIcon.classList.remove("fa-bars");
            menuList.style.display = "block"; // Zobrazí menu
        } else {
            hamburgerIcon.classList.add("fa-bars");
            hamburgerIcon.classList.remove("fa-xmark");
            menuList.style.display = "none"; // Skryje menu
        }
    });
});