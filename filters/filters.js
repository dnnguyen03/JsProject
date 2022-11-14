let filteredProducts = [...products];
const productsContainer = document.querySelector(".products-container");
// hiển thị product ra màn hình
const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }
  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, price } = product;
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}$</span>
          </footer>
        </article>`;
    })
    .join("");
};
displayProducts();

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");
//lấy value liên tục từ search input
//tìm value có tồn tại trong title product ko, true thì trả về
form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  console.log(inputValue);
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

const companiesDOM = document.querySelector(".companies");
// lọc company, hiển thị lên màn hình
const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join("");
};
displayButtons();

// lọc product bằng button và reset input
companiesDOM.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = "";
    displayProducts();
  }
});
