import { updateItemCount } from "./addProdToCart.js";
const cartOverlay = document.querySelector(".cart-overlay");
const cart = document.querySelector(".toggle-cart");
const btnClose = document.querySelector(".cart-close");
cart.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});
btnClose.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
  updateItemCount();
});
// cartOverlay.addEventListener("click", () => [
//   cartOverlay.classList.remove("show"),
// ]);
export const openCart = () => {
  cartOverlay.classList.add("show");
};
