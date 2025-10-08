document.addEventListener("DOMContentLoaded", function () {
  // -------------------------------
  // Product page image gallery
  // -------------------------------
  const galleryContainer = document.querySelector(".item-gallery");
  const prevBtn = document.querySelector(".gallery-prev");
  const nextBtn = document.querySelector(".gallery-next");

  if (galleryContainer && prevBtn && nextBtn) {
    let galleryImages = JSON.parse(galleryContainer.dataset.images);
    let currentIndex = 0;

    // Clear container and build all images
    const imgElements = galleryImages.map((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Product image " + (i + 1);
      img.className = "gallery-image";
      if (i === 0) img.classList.add("active");
      galleryContainer.appendChild(img);
      return img;
    });

    function showImage(index) {
      imgElements.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
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

  // Smooth scroll function
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Attach click listener to "See Our Menu" button
  const menuButton = document.getElementById("see-menu");
  if (menuButton) {
    menuButton.addEventListener("click", () => scrollToSection("menu"));
  }

});