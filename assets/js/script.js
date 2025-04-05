document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".navlinks");
    const menuLinks = document.querySelectorAll(".navlinks ul li a"); 

    hamburger.addEventListener("click", (event) => {
        event.stopPropagation();
        navLinks.classList.toggle("active");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});

if (window.location.hostname === "adrishikharchowdhury.github.io") {
    const baseTag = document.createElement("base");
    baseTag.href = "/Find-Your-Aesthetic/"; // Adjust to your project name
    document.head.appendChild(baseTag);
}
