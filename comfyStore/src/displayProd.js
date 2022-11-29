import detailProd from "./showDetailProd.js";

function displayProd(element, data) {
  if (data.length == 0) {
    return (element.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`);
  }
  element.innerHTML = data
    .map((item) => {
      const { id } = item;
      const { name, price } = item.fields;
      const { url } = item.fields.image[0];
      return `<article class="product">
      <div class="product-container">
        <img src="${url}" class="product-img" alt="" />
        <div class="product-icons">
          <a href="./singleProd/singleProd.html" class="product-icon" target="_blank">
            <i class="fas fa-search"></i>
          </a>
          <button class="product-cart-btn product-icon" data-id="${id}">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <footer>
        <p class="product-name">${name}</p>
        <h4 class="product-price">$${price / 100}</h4>
      </footer>
    </article> `;
    })
    .join("");
  detailProd();
}
export default displayProd;
