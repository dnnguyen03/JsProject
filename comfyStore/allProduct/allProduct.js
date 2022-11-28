import "../src/sideBar/toggleSideBar.js";
import "../src/cart/addProdToCart.js";
import { urlAllProd } from "../src/api.js";
import displayProd from "../src/displayProd.js";
import fetchProd from "../src/fetchProd.js";
import { addProdToCart, updateItemCount } from "../src/cart/addProdToCart.js";
import setupSearch from "./src/searchForm.js";
import setupCompany from "./src/company.js";
import setupPrice from "./src/filterRange.js";
import detailProd from "../src/showDetailProd.js";
const containerProduct = document.querySelector(".products-container");
fetchProd(urlAllProd).then((data) => {
  updateItemCount();
  displayProd(containerProduct, data);
  addProdToCart(containerProduct, data);
  setupSearch(data);
  setupCompany(data);
  setupPrice(data);
});
