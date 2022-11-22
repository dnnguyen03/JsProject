const section = document.querySelector(".section-center");
function displayDrinks(data) {
  const drinks = data.drinks;
  const drink = drinks
    .map((item) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = item;
      return `<a href="./drink/drink.html">
    <article class="cocktail" data-id="${id}" >
    <img src="${image}" alt="${name}" />
    <h3>${name}</h3>
    </article>
    </a>`;
    })
    .join("");
  section.innerHTML = drink;
}
export default displayDrinks;
