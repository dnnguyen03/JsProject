const containerBtn = document.querySelector(".btn-container");
function displayButton() {
  let thisPage = 1;
  let limit = 10;
  let list = document.querySelectorAll(".container .card");
  function loadItem(thisPage) {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, index) => {
      if (index >= beginGet && index <= endGet) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
    listPage();
  }
  loadItem(thisPage);

  function listPage() {
    let count = Math.ceil(list.length / limit);
    containerBtn.innerHTML = "";
    let prev = document.createElement("li");
    prev.innerHTML = `<button class="prev-next">Prev</button>`;
    containerBtn.appendChild(prev);
    for (let i = 1; i <= count; i++) {
      let newPage = document.createElement("li");
      newPage.innerHTML = `<button class="page-btn ${
        i == thisPage ? "active" : "null"
      }">
      ${i}
      </button>`;
      containerBtn.appendChild(newPage);
    }
    let next = document.createElement("li");
    next.innerHTML = `<button class="prev-next">Next</button>`;
    containerBtn.appendChild(next);
    const litsBtn = document.querySelectorAll(".btn-container button");
    litsBtn.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.classList.contains("page-btn")) {
          changePage(Number(item.innerHTML));
        }
        if (item.classList.contains("prev-next")) {
          item.innerHTML == "Prev"
            ? changePage(thisPage == 1 ? (thisPage = count) : thisPage - 1)
            : changePage(thisPage == count ? (thisPage = 1) : thisPage + 1);
        }
      });
    });
  }
  function changePage(x) {
    thisPage = x;
    loadItem(thisPage);
  }
}

export default displayButton;
