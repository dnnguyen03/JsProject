import fetchProd from "../src/fetchProd.js";
import { urlSingleProd } from "../src/api.js";
const id = localStorage.getItem("product");
const imgProd = document.querySelector(".single-product-img");
const titleProd = document.querySelector(".single-product-title");
const priceProd = document.querySelector(".single-product-price");
const titlePage = document.querySelector(".page-hero-title");
const textCompany = document.querySelector(".single-product-company");
const detailProd = document.querySelector(".single-product-desc");
const colorProd = document.querySelector(".single-product-colors");
fetchProd(`${urlSingleProd}?id=${id}`).then((data) => {
  const { id } = data;
  const { name, price, company, description, colors } = data.fields;
  const { url } = data.fields.image[0];
  document.title = `${name.toUpperCase()} | Comfy`;
  titlePage.textContent = `Home / ${name}`;
  textCompany.textContent = `by ${company}`;
  detailProd.textContent = description;
  colorProd.innerHTML = colors

    .map((item) => {
      return `<span class="product-color" style="background-color: ${item};"></span>`;
    })
    .join("");
  imgProd.src = url;
  titleProd.textContent = name;
  priceProd.textContent = `${price / 100}$`;
});
