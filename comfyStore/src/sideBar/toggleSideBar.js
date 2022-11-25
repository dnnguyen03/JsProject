const sideBarOverlay = document.querySelector(".sidebar-overlay");
const closeSideBar = document.querySelector(".sidebar-close");
const toggleNav = document.querySelector(".toggle-nav");
// sideBarOverlay.addEventListener("click", () => {
//   sideBarOverlay.classList.remove("show");
// });
closeSideBar.addEventListener("click", () => {
  sideBarOverlay.classList.remove("show");
});
toggleNav.addEventListener("click", () => {
  sideBarOverlay.classList.add("show");
});
