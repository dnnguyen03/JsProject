const url = "https://course-api.com/javascript-store-single-product";
const productDOM = document.querySelector(".product");
const fetchProducts = async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const reps = await fetch(`${url}?id=${id}`);
  const data = await reps.json();
  return data;
};
const displayProduct = (data) => {
  const { name: title, price, company, colors, description } = data.fields;
  const { url: img } = data.fields.image[0];
  document.title = title.toUpperCase();
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join("");
  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>${price / 100} $</span>
          <div class="colors">
            ${colorsList}
          </div>
          <p>
           ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};
const displayListProd = fetchProducts().then((data) => {
  displayProduct(data);
});
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
