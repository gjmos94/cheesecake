// Keep global footprint small
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll to the menu button
  const seeMenuBtn = document.getElementById("see-menu");
  if (seeMenuBtn) {
    seeMenuBtn.addEventListener("click", function () {
      const section = document.getElementById("menu");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Mobile nav toggle
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close nav on link click (mobile)
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

  // -------------------------------
  // Product page image gallery
  // -------------------------------
  const galleryImage = document.querySelector(".gallery-image");
  const prevBtn = document.querySelector(".gallery-prev");
  const nextBtn = document.querySelector(".gallery-next");

  // Only run this if we're on a product page with a gallery
  if (galleryImage && prevBtn && nextBtn) {
    // Add all images you want in the gallery here
    const galleryImages = [
      "images/cheese2.png",
      "images/cheese2_slice.png",
      "images/cheese2_closeup.png"
    ];

    let currentIndex = 0;

    function showImage(index) {
      galleryImage.src = galleryImages[index];
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showImage(currentIndex);
    });
  }
});
