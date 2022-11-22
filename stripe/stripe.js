import sublinks from "./data.js";
const mainMenu = document.querySelectorAll(".nav-links > li > ul");
sublinks
  .map((item) => {
    const { links, page } = item;
    console.log(links, page);
    mainMenu.forEach((btn) => {
      if (page == btn.dataset.id) {
        btn.innerHTML = `<article >
      <h4>${page}</h4>
      <div class="sidebar-sublinks">
      ${links
        .map((link) => {
          return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
        })
        .join("")}
      </div>
      </article>`;
      }
    });
  })
  .join("");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar-links");
const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.toggle("show");
});
closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.toggle("show");
});
sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article >
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
    ${links
      .map((link) => {
        return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
      })
      .join("")}
    </div>
    </article>`;
  })
  .join("");
