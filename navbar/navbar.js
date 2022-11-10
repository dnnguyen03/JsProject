const bars = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
bars.addEventListener("click", () => {
  links.classList.toggle("show");
  bars.classList.toggle("clickNav");
});
