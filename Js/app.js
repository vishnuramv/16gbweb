const hamburger = document.querySelector(".hamburger");
const lines = document.querySelectorAll(".line");
const navLinks = document.querySelector(".nav-linkss");
const links = document.querySelectorAll(".nav-linkss li");
const body = document.querySelector("body");


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  lines[1].classList.toggle("open");
  body.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fadee");
  });
});

links.forEach((link) => {
  link.addEventListener("click", ()=>{
    navLinks.classList.toggle("open")
    lines[1].classList.toggle("open");
    body.classList.remove("open");

  })
});



window.onscroll = () => {
  const nav = document.querySelector('#navss');
  if(this.scrollY <= 100) nav.className = ''; else nav.className = 'scroll';
};