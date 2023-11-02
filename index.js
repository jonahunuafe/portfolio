const hamburgerIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const navLinks = document.querySelector(".nav-links");

hamburgerIcon.addEventListener("click", () => {
    navLinks.style.display = "block";
});

closeIcon.addEventListener("click", () => {
    navLinks.style.display = "none";
});

document.body.addEventListener("click", (event) => {
    if (event.target !== hamburgerIcon) {
        navLinks.style.display = "none";
    }
});