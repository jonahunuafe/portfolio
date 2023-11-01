const navLinks = document.querySelector(".nav-links");

function showMenu() {
    navLinks.style.display = "block";
}

function hideMenu() {
    navLinks.style.display = "none";
}

document.querySelector(".fa-bars").addEventListener("click", showMenu);
document.querySelector(".fa-times").addEventListener("click", hideMenu);