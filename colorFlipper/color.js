const btn = document.querySelector(".btn");
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");
const menu = document.querySelectorAll("ul li");
menu.forEach((items) => {
  items.addEventListener("click", () => {
    menu.forEach((items) => {
      items.classList.remove("active");
    });
    items.classList.add("active");
    reset();
  });
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
function getRandomNumberhex() {
  return Math.floor(Math.random() * hex.length);
}
btn.addEventListener("click", () => {
  if (document.querySelector(".active").innerHTML == "simple") {
    clickSimple();
  } else {
    clickHex();
  }
});
function reset() {
  document.body.style.backgroundColor = "white";
  color.textContent = "#F1f5f8";
}
function clickSimple() {
  while (1) {
    const randomNumber = getRandomNumber();
    if (colors[randomNumber] != color.innerHTML) {
      document.body.style.backgroundColor = colors[randomNumber];
      color.textContent = colors[randomNumber];
      break;
    }
  }
}
function clickHex() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumberhex()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}
