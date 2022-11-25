import { openCart } from "./toggleCart.js";

const featured = document.querySelector(".featured");
const ContainerProdInCart = document.querySelector(".cart-items");
const itemCount = document.querySelector(".cart-item-count");
const textTotalPrice = document.querySelector(".cart-total");
var listProdInCart = [];
function increase(id) {
  listProdInCart.find((item) => {
    const allAmount = [
      ...ContainerProdInCart.querySelectorAll(".cart-item-amount"),
    ];
    const newAmount = allAmount.find((value) => value.dataset.id === id);
    if (item.id === id) {
      item.amount += 1;
      newAmount.textContent = item.amount;
    }
  });
  totalPrice();
}
function decrease(id) {
  listProdInCart.find((item) => {
    const allAmount = [
      ...ContainerProdInCart.querySelectorAll(".cart-item-amount"),
    ];
    const newAmount = allAmount.find((value) => value.dataset.id === id);
    if (item.id === id) {
      item.amount -= 1;
      if (item.amount == 0) {
        removeItem(item.id);
      } else {
        newAmount.textContent = item.amount;
      }
    }
  });
  totalPrice();
}
export function updateItemCount() {
  const amount = listProdInCart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  itemCount.innerHTML = amount;
}
function removeItem(id) {
  listProdInCart = listProdInCart.filter((item) => item.id != id);
  totalPrice();
}
export function totalPrice() {
  let total = listProdInCart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  textTotalPrice.textContent = `Total : ${total / 100} $`;
}
ContainerProdInCart.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("increase")) {
    increase(element.parentElement.dataset.id);
  }
  if (element.classList.contains("decrease")) {
    if (element.parentElement.previousElementSibling.innerHTML == 1) {
      removeItem(element.parentElement.dataset.id);
      element.parentElement.parentElement.parentElement.remove();
    } else {
      decrease(element.parentElement.dataset.id);
    }
  }
  if (element.classList.contains("cart-item-remove-btn")) {
    console.log(element.dataset.id);
    removeItem(element.dataset.id);
    element.parentElement.parentElement.remove();
  }
  localStorage.setItem("cart", JSON.stringify(listProdInCart));
  totalPrice();
});
export function addProdToCart(data) {
  const allAddCart = featured.querySelectorAll(".product-cart-btn");
  allAddCart.forEach((btn) => {
    btn.addEventListener("click", () => {
      data.forEach((product) => {
        if (btn.dataset.id == product.id) {
          const { id } = product;
          const { name, price } = product.fields;
          const { url } = product.fields.image[0];
          const prod = {
            id: id,
            name: name,
            price: price,
            url: url,
            amount: 1,
          };
          const update = listProdInCart.find((item) => item.id == prod.id);
          if (update) {
            increase(prod.id);
          }
          if (!update) {
            const article = document.createElement("article");
            article.className = "cart-item";
            article.setAttribute("data-id", prod.id);
            article.innerHTML = `<img src="${prod.url}"
              class="cart-item-img"
              alt="${prod.name}"/>  
            <div>
              <h4 class="cart-item-name">${prod.name}</h4>
              <p class="cart-item-price">$ ${prod.price / 100}</p>
              <button class="cart-item-remove-btn" data-id="${
                prod.id
              }">remove</button>
            </div>
            <div>
              <button class="cart-item-increase-btn" data-id="${prod.id}">
                <i class="fas fa-chevron-up increase"></i>
              </button>
              <p class="cart-item-amount" data-id="${prod.id}">${
              prod.amount
            }</p>
              <button class="cart-item-decrease-btn" data-id="${prod.id}">
                <i class="fas fa-chevron-down decrease"></i>
              </button>
            </div>`;
            ContainerProdInCart.appendChild(article);
            listProdInCart.push(prod);
          }
          openCart();
          totalPrice();
          localStorage.setItem("cart", JSON.stringify(listProdInCart));
        }
      });
    });
  });
}
function getLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}
listProdInCart = getLocalStorage();
listProdInCart.forEach((item) => {
  const article = document.createElement("article");
  article.className = "cart-item";
  article.setAttribute("data-id", item.id);
  article.innerHTML = `<img src="${item.url}"
      class="cart-item-img"
      alt="${item.name}"/>  
    <div>
      <h4 class="cart-item-name">${item.name}</h4>
      <p class="cart-item-price">$ ${item.price / 100}</p>
      <button class="cart-item-remove-btn" data-id="${item.id}">remove</button>
    </div>
    <div>
      <button class="cart-item-increase-btn" data-id="${item.id}">
        <i class="fas fa-chevron-up increase"></i>
      </button>
      <p class="cart-item-amount" data-id="${item.id}">${item.amount}</p>
      <button class="cart-item-decrease-btn" data-id="${item.id}">
        <i class="fas fa-chevron-down decrease"></i>
      </button>
    </div>`;
  ContainerProdInCart.appendChild(article);
  totalPrice();
});
