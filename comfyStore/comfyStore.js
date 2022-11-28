import "./src/sideBar/toggleSideBar.js";
import "./src/cart/toggleCart.js";
import { urlAllProd } from "./src/api.js";
import displayProd from "./src/displayProd.js";
import fetchProd from "./src/fetchProd.js";
import { addProdToCart, updateItemCount } from "./src/cart/addProdToCart.js";
const featured = document.querySelector(".featured-center");

fetchProd(urlAllProd).then((data) => {
  const featuredPro = data.filter((item) => {
    return item.fields.featured == true;
  });
  updateItemCount();
  displayProd(featured, featuredPro);
  addProdToCart(featured, data);
});
