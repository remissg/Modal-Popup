// Select elements
const openButtons = document.querySelectorAll(".open-modal-btn");
const closeButtons = document.querySelectorAll(".close-btn");
const overlay = document.getElementById("overlay");
const themeToggle = document.getElementById("themeToggle");

// Open correct modal
openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let modalId = btn.getAttribute("data-modal");
        let modal = document.getElementById(modalId);

        modal.classList.add("active");
        overlay.classList.add("active");
    });
});

// Close modal when clicking X
closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".modal.active").classList.remove("active");
        overlay.classList.remove("active");
    });
});

// Close modal by clicking overlay
overlay.addEventListener("click", () => {
    document.querySelector(".modal.active").classList.remove("active");
    overlay.classList.remove("active");
});

// Theme toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
