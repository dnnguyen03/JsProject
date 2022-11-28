import { addProdToCart } from "../../src/cart/addProdToCart.js";
import displayProd from "../../src/displayProd.js";
const containerProduct = document.querySelector(".products-container");
const companiesDOM = document.querySelector(".companies");
const searchInput = document.querySelector(".search-input");
let filteredProducts = [];
function setupCompany(data) {
  console.log(data);
  const buttons = [
    "all",
    ...new Set(data.map((product) => product.fields.company)),
  ];
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join("");
  companiesDOM.addEventListener("click", (e) => {
    const btn = e.target;
    if (btn.classList.contains("company-btn")) {
      if (btn.dataset.id === "all") {
        filteredProducts = data;
      } else {
        filteredProducts = data.filter((product) => {
          return product.fields.company === btn.dataset.id;
        });
      }
      searchInput.value = "";

      displayProd(containerProduct, filteredProducts);
      addProdToCart(containerProduct, filteredProducts);
    }
  });
}
export default setupCompany;
