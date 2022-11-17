function getElement(selection) {
  const element = document.querySelector(selection);
  return element;
}
let i = 0;
function Gallary(element) {
  const listImg = [...element.querySelectorAll(".img")];
  const modal = getElement(".modal");
  const modalImg = getElement(".main-img");
  const imgName = getElement(".image-name");
  const modalImages = getElement(".modal-images");
  const nextBtn = getElement(".next-btn");
  const prevBtn = getElement(".prev-btn");
  // dùng onclick thay vì addevenlistener
  prevBtn.onclick = () => {
    const selected = modalImages.querySelector(".selected");
    const prev =
      selected.previousElementSibling || modalImages.lastElementChild;
    selected.classList.remove("selected");
    prev.classList.add("selected");
    setImgMain(prev);
  };
  nextBtn.onclick = () => {
    const selected = modalImages.querySelector(".selected");
    const next = selected.nextElementSibling || modalImages.firstElementChild;
    selected.classList.remove("selected");
    next.classList.add("selected");
    setImgMain(next);
  };
  function setImgMain(item) {
    modalImg.src = item.src;
    imgName.innerHTML = item.title;
  }
  listImg.forEach((item) => {
    item.addEventListener("click", () => {
      modal.classList.add("open");
      setImgMain(item);
      modalImages.innerHTML = listImg
        .map((itemImg) => {
          return `<img src="${itemImg.src}" title="${itemImg.title}" data-id="${
            itemImg.dataset.id
          }" class="${
            item === itemImg ? "modal-img selected" : "modal-img"
          }"/>`;
        })
        .join("");
    });
  });
  modalImages.addEventListener("click", (e) => {
    const selected = modalImages.querySelector(".selected");
    selected.classList.remove("selected");
    setImgMain(e.target);
    e.target.classList.add("selected");
  });
  const closeModal = getElement(".close-btn");
  closeModal.addEventListener("click", () => {
    modal.classList.remove("open");
  });
}
Gallary(getElement(".nature"));
Gallary(getElement(".city"));
