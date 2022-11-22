import people from "./data.js";

let data = [...people];
const container = document.querySelector(".slide-container");
container.innerHTML = data
  .map((person, index) => {
    return `<article class="slide">
    <img src=${person.img} class="img" alt="${person.name}"/>
    <h4>${person.name}</h4>
    <p class="title">${person.job}</p>
    <p class="text">
     ${person.text}
    </p>
  <div class="quote-icon">
  <i class="fas fa-quote-right"></i>
  </div>
   </article>`;
  })
  .join("");

const next = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn");
next.onclick = () => {
  let list = document.querySelectorAll(".slide-container .slide");
  console.log(list);
  container.appendChild(list[0]);
};
prev.onclick = () => {
  let list = document.querySelectorAll(".slide-container .slide");
  container.prepend(list[list.length - 1]);
};
