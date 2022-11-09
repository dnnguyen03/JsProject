const date = document.getElementById("date");
date.textContent = new Date().getFullYear();
const nav = document.getElementById("nav");
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("scroll-nav");
  } else {
    nav.classList.remove("scroll-nav");
  }
});
const links = document.querySelector(".links");
const bars = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
var x = window.matchMedia("(max-width: 800px)");
function toggleLinks() {
  const linksHeight = links.getBoundingClientRect().height;
  if (linksContainer.getBoundingClientRect().height == 0) {
    linksContainer.style.height = linksHeight + "px";
  } else {
    linksContainer.style.height = 0 + "px";
  }
}
bars.addEventListener("click", () => {
  if (x.matches) {
    toggleLinks();
  }
});
const scrollLink = document.querySelectorAll(".scroll-link");
scrollLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    linksContainer.style.height = 0 + "px";
    const linksHeight = links.getBoundingClientRect().height;
    const id = e.currentTarget.getAttribute("href").slice(1);
    const navScroll = nav.classList.contains("scroll-nav");
    let navHeight = 0;
    if (x.matches) {
      navHeight = nav.getBoundingClientRect().height - linksHeight;
    } else {
      navHeight = nav.getBoundingClientRect().height;
    }
    let positon = navHeight;
    if (!navScroll && x.matches) {
      positon = positon + navHeight + linksHeight;
    }
    if (!navScroll && !x.matches) {
      positon = positon + navHeight;
    }
    if (link.classList.contains("btn") && x.matches) {
      positon = positon + linksHeight;
    }
    document.getElementById(`${id}`).style.scrollMarginTop = positon + "px";
  });
});
// const scrollLink = document.querySelectorAll(".scroll-link");
// scrollLink.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     linksContainer.style.height = 0 + "px";
//     const linksHeight = links.getBoundingClientRect().height;
//     const navScroll = nav.classList.contains("scroll-nav");
//     let navHieght = 0;
//     if (x.matches) {
//       navHieght = nav.getBoundingClientRect().height - linksHeight;
//     } else {
//       navHieght = nav.getBoundingClientRect().height;
//     }
//     e.preventDefault();
//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const topToSection = document.getElementById(id).offsetTop;
//     let positon = topToSection - navHieght;
//     if (!navScroll && x.matches) {
//       positon = positon - linksHeight - navHieght;
//     }
//     if (!navScroll && !x.matches) {
//       positon = positon - navHieght;
//     }
//     if (link.classList.contains("btn") && x.matches) {
//       positon = positon - linksHeight;
//     }
//     window.scrollTo({
//       top: positon,
//     });
//   });
// });
