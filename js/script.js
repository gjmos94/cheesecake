// Keep global footprint small
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll to the menu button
  document.getElementById("see-menu").addEventListener("click", function () {
    const section = document.getElementById("menu");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  });

  // Mobile nav toggle
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // close nav on link click (mobile)
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
