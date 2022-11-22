import { urlDisplayDrinks } from "./src/api.js";
import displayDrinks from "./src/displayDrinks.js";
import fetchDrinks from "./src/fetchDrinks.js";
import reSearchForm from "./src/searchForm.js";
const section = document.querySelector(".section-center");
section.addEventListener("click", (e) => {
  const id = e.target.parentElement.dataset.id;
  localStorage.setItem("drink", id);
});
window.addEventListener("DOMContentLoaded", () => {
  reSearchForm();
});
const drinks = fetchDrinks(urlDisplayDrinks).then((data) => {
  displayDrinks(data);
});
