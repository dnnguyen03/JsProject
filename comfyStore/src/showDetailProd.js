function detailProd() {
  const searchIcon = document.querySelectorAll(".product-icons a");
  searchIcon.forEach((btn) => {
    btn.addEventListener("click", () => {
      const product = btn.nextElementSibling.dataset.id;
      localStorage.setItem("product", product);
    });
  });
}
export default detailProd;
