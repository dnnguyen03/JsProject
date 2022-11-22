import fetchDrinks from "../src/fetchDrinks.js";
const id = localStorage.getItem("drink");
const imgDrink = document.querySelector(".single-drink img");
const drinkName = document.querySelector(".drink-name");
const drinkDesc = document.querySelector(".drink-desc");

fetchDrinks(
  `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
).then((data) => {
  const drink = data.drinks;
  const { idDrink, strDrink, strDrinkThumb, strInstructions } = drink[0];
  document.title = strDrink;
  imgDrink.src = strDrinkThumb;
  drinkName.textContent = strDrink;
  drinkDesc.textContent = strInstructions;
});
