/** @format */

const nav = document.getElementById("nav-links");
const burger = document.querySelector(".toggle-button");
const navlink = document.querySelectorAll(".nav-link");
burger.addEventListener("click", function () {
  console.log("pankaj");
  nav.classList.toggle("nav-active");
});

navlink.forEach((link, index) => {
  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s `;
});
