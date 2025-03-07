document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded");

    // Theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    });

    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Contact form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Message sent!");
    });
});
