const hamburger = document.querySelector(".hamburger");
const lines = document.querySelectorAll(".line");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  lines[0].classList.toggle("open");
  lines[2].classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
