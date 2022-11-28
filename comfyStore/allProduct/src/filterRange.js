import { addProdToCart } from "../../src/cart/addProdToCart.js";
import displayProd from "../../src/displayProd.js";
const containerProduct = document.querySelector(".products-container");
const priceInput = document.querySelector(".price-filter");
const priceValue = document.querySelector(".price-value");
function setupPrice(data) {
  let maxPrice = Math.max(...data.map((product) => product.fields.price));
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceInput.value = maxPrice;
  priceValue.textContent = `Value: $${priceInput.value}`;
  priceInput.addEventListener("input", () => {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value: $${value}`;
    let filteredProducts = data.filter(
      (product) => product.fields.price / 100 < value
    );
    displayProd(containerProduct, filteredProducts);
    addProdToCart(containerProduct, filteredProducts);
  });
}
export default setupPrice;
