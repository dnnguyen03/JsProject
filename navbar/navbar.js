const bars = document.querySelector(".nav-toggle i");
const links = document.querySelector(".links");
bars.addEventListener("click", () => {
  links.classList.toggle("show");
});
