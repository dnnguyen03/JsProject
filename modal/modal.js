const btn = document.querySelector(".container button");
const modal = document.querySelector(".modal-overlay");
const btnClose = document.querySelector(".modal-overlay i");

function show() {
  modal.classList.toggle("hiden");
}
btn.addEventListener("click", () => {
  show();
});
btnClose.addEventListener("click", () => {
  show();
});
