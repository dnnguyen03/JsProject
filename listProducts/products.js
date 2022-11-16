const url = "https://course-api.com/javascript-store-products";
const productsDOM = document.querySelector(".products-center");
const fetchProducts = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};
const displayProduct = (data) => {
  const productList = data
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      return `<a class="single-product" href="./product/product.html?id=${id}&name=john&age=25">
      <img src="${img}" class="single-product-img img" alt="${title}" />
      <footer>
        <h5 class="name">${title}</h5>
        <span class="price">${price / 100} $</span>
      </footer>
    </a>`;
    })
    .join("");
  productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};
const displayListProd = fetchProducts().then((data) => {
  displayProduct(data);
});
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
