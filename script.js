// Greet the user in Arabic upon visiting the page with a stylish popup
function greetUser() {
  Swal.fire({
    title: "Assalāmu 'Alaykum!",
    text: "Welcome to my Simple Webpage.",
    icon: "success",
    confirmButtonText: "Enter",
    background: "rgba(0, 0, 0, 0.95)",
    color: "#ffffff",
    customClass: {
      popup: 'swal2-rounded'
    }
  });
}

// Toggle between dark and light mode (optional)
function toggleDarkMode() {
  document.body.classList.toggle("light-mode");
}

// Animate content fade-in (PowerPoint-style morph effect)
function morphTransition() {
  const elements = document.querySelectorAll("section, .header, .nav, .footer");
  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "scale(0.95) translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = 1;
      el.style.transform = "scale(1) translateY(0)";
    }, index * 200);
  });
}

// Slideshow for gallery photos
let slideIndex = 0;
function showSlides() {
  const images = document.querySelectorAll(".gallery img");
  images.forEach((img) => {
    img.style.display = "none";
  });

  slideIndex++;
  if (slideIndex > images.length) {
    slideIndex = 1;
  }

  images[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Highlight nav buttons when clicked (optional if using <button>)
function setupNavButtons() {
  const links = document.querySelectorAll(".nav a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

// Run when the page loads
window.onload = function () {
  greetUser();
  morphTransition();
  showSlides();
  setupNavButtons();
};