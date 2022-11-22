import { urlSearch } from "./api.js";
import fetchDrinks from "./fetchDrinks.js";

function reSearchForm() {
  const section = document.querySelector(".section-center");
  const searchForm = document.querySelector(".search-form");
  const input = document.querySelector(".drink");
  const listDrinks = [];
  fetchDrinks(urlSearch).then((data) => {
    const drinks = data.drinks;
    drinks.forEach((item) => {
      const { idDrink, strDrink, strDrinkThumb } = item;
      const drink = {
        id: idDrink,
        title: strDrink,
        img: strDrinkThumb,
      };
      listDrinks.push(drink);
    });
    searchForm.addEventListener("keyup", () => {
      const inputValue = input.value;
      let filterDrink = listDrinks.filter((drink) => {
        return drink.title.toLowerCase().includes(inputValue);
      });
      section.innerHTML = filterDrink
        .map((drink) => {
          return `<a href="./drink/drink.html">
        <article class="cocktail" data-id="${drink.id}" >
        <img src="${drink.img}" alt="${drink.title}" />
        <h3>${drink.title}</h3>
        </article>
        </a>`;
        })
        .join("");
    });
  });
}
export default reSearchForm();
