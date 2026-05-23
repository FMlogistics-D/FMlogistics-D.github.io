/* =========================
script.js
========================= */

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* =========================
SCROLL EFFECT NAVBAR
========================= */

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if(window.scrollY > 50){

    header.style.background = "rgba(3,7,18,0.92)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";

  }

  else{

    header.style.background = "rgba(7,17,31,0.65)";
    header.style.boxShadow = "none";

  }

});

/* =========================
FADE IN ANIMATION
========================= */

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

const hiddenElements = document.querySelectorAll(
  ".service-card, .team-card, .about-image, .about-content, .showcase-grid img"
);

hiddenElements.forEach((el) => {

  el.classList.add("hidden");
  observer.observe(el);

});

/* =========================
CONTACT FORM
========================= */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thank you! Your message has been sent.");

  form.reset();

});