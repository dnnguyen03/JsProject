// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   }
//   throw new Error(
//     `Please check "${selection}" selector, no such element exists`
//   );
// }
// class Counter {
//   constructor(element, value) {
//     this.counter = element;
//     this.value = value;
//     this.resetBtn = element.querySelector(".reset");
//     this.increaseBtn = element.querySelector(".increase");
//     this.decreaseBtn = element.querySelector(".decrease");
//     this.valueDOM = element.querySelector(".value");
//     this.valueDOM.textContent = this.value;
//     this.increase = this.increase.bind(this);
//     this.decrease = this.decrease.bind(this);
//     this.reset = this.reset.bind(this);

//     this.increaseBtn.addEventListener("click", this.increase);
//     this.decreaseBtn.addEventListener("click", this.decrease);
//     this.resetBtn.addEventListener("click", this.reset);
//   }
//   increase() {
//     this.value++;
//     this.valueDOM.textContent = this.value;
//   }
//   decrease() {
//     this.value--;
//     this.valueDOM.textContent = this.value;
//   }
//   reset() {
//     this.value = 0;
//     this.valueDOM.textContent = this.value;
//   }
// }
// const firstCounter = new Counter(getElement(".first-counter"), 100);
// const secondCounter = new Counter(getElement(".second-counter"), 200);

function getElement(selection) {
  const element = document.querySelector(selection);
  return element;
}
function Counter(element, value) {
  var valueDOM;
  let x = 0;
  for (i = 0; i < element.children.length; i++) {
    if (element.children[i].classList.contains("button-container")) {
      x = i;
    }
    if (element.children[i].classList.contains("value")) {
      valueDOM = element.children[i];
    }
  }
  valueDOM.textContent = value;
  var btnContainer = element.children[x];
  var childrenBtn = btnContainer.children;
  for (let i = 0; i < childrenBtn.length; i++) {
    childrenBtn[i].addEventListener("click", () => {
      if (childrenBtn[i].classList.contains("decrease")) {
        value--;
        valueDOM.textContent = value;
      } else if (childrenBtn[i].classList.contains("reset")) {
        value = 0;
        valueDOM.textContent = value;
      } else if (childrenBtn[i].classList.contains("increase")) {
        value++;
        valueDOM.textContent = value;
      }
    });
  }
}
Counter(getElement(".first-counter"), 100);
Counter(getElement(".second-counter"), 200);
