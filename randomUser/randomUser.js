import getUser from "./utils/getUser.js";
const getClass = (classes) => document.querySelector(classes);
const title = getClass(".user-title");
const value = getClass(".user-value");
const img = getClass(".user-img");
const btn = getClass(".btn");
const btnIcon = document.querySelectorAll(".icon");
const showUser = async () => {
  const person = await getUser();
  displayUser(person);
};
function displayUser(person) {
  img.src = person.img;
  value.textContent = person.name;
  btnIcon.forEach((btn) => {
    btn.classList.remove("active");
  });
  btnIcon[0].classList.add("active");
  btnIcon.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is `;
      value.textContent = person[label];
      btnIcon.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}
window.addEventListener("DOMContentLoaded", showUser());
btn.addEventListener("click", showUser);
