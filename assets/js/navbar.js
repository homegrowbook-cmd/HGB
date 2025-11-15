// Navbar / Mobile-Menü
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("navBurger");
    const mobile = document.getElementById("navMobile");

    if (!burger || !mobile) return;

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        mobile.classList.toggle("open");
    });

    // Mobile Menü schließen beim Klick auf Link
    mobile.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.remove("active");
            mobile.classList.remove("open");
        });
    });
});
