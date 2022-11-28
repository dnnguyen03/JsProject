import { addProdToCart } from "../../src/cart/addProdToCart.js";
import displayProd from "../../src/displayProd.js";

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");
const containerProduct = document.querySelector(".products-container");
let filteredProducts = [];
function setupSearch(data) {
  form.addEventListener("keyup", () => {
    const valueInput = searchInput.value;
    filteredProducts = data.filter((product) => {
      //   console.log(product.fields.name);
      return product.fields.name.toLowerCase().includes(valueInput);
    });
    displayProd(containerProduct, filteredProducts);
    addProdToCart(containerProduct, filteredProducts);
  });
}
export default setupSearch;
