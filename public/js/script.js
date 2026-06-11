document.addEventListener("DOMContentLoaded", function () {

  // ── Mobile menu toggle ──────────────────────────────────
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu when a nav link is tapped (nice on mobile)
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Set hamburger icon initially
  if (menuToggle) menuToggle.textContent = "☰";

  // ── Product page image gallery ──────────────────────────
  const galleryContainer = document.querySelector(".item-gallery");
  const prevBtn = document.querySelector(".gallery-prev");
  const nextBtn = document.querySelector(".gallery-next");

  if (galleryContainer && prevBtn && nextBtn) {
    let galleryImages = JSON.parse(galleryContainer.dataset.images);
    let currentIndex = 0;

    const imgElements = galleryImages.map(function (src, i) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Product image " + (i + 1);
      img.className = "gallery-image";
      if (i === 0) img.classList.add("active");
      galleryContainer.appendChild(img);
      return img;
    });

    function showImage(index) {
      imgElements.forEach(function (img, i) {
        img.classList.toggle("active", i === index);
      });
    }

    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showImage(currentIndex);
    });
  }

  // ── "See Our Menu" smooth scroll ────────────────────────
  const menuButton = document.getElementById("see-menu");
  if (menuButton) {
    menuButton.addEventListener("click", function () {
      const section = document.getElementById("menu");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    });
  }

  // ── Dynamic footer year ──────────────────────────────────
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});