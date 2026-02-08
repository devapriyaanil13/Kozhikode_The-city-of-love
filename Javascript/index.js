document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card-btn").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            document.getElementById(btn.dataset.nav)
                .classList.add("hover-active");
        });

        btn.addEventListener("mouseleave", () => {
            document.getElementById(btn.dataset.nav)
                .classList.remove("hover-active");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > header.offsetHeight - navbar.offsetHeight) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

});
