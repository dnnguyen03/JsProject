const data = [
  {
    id: 1,
    href: "./colorFlipper/color.html",
    imgSrc: "img/img1.webp",
    imgFooter: "Color Flipper",
  },
  {
    id: 2,
    href: "./counter/counter.html",
    imgSrc: "img/img2.webp",
    imgFooter: "Simple Counter",
  },
  {
    id: 3,
    href: "./starter/starter.html",
    imgSrc: "img/img3.webp",
    imgFooter: "Review/Quotes",
  },
  {
    id: 4,
    href: "./navbar/navbar.html",
    imgSrc: "img/img4.webp",
    imgFooter: "Navbar",
  },
  {
    id: 5,
    href: "./sidebar/sidebar.html",
    imgSrc: "img/img5.webp",
    imgFooter: "sidebar",
  },
  {
    id: 6,
    href: "./modal/modal.html",
    imgSrc: "img/img6.webp",
    imgFooter: "modal",
  },
  {
    id: 7,
    href: "./questions/questions.html",
    imgSrc: "img/img7.webp",
    imgFooter: "questions",
  },
  {
    id: 8,
    href: "./menu/menu.html",
    imgSrc: "img/img8.webp",
    imgFooter: "menu",
  },
  {
    id: 9,
    href: "./videoJs/video.html",
    imgSrc: "img/img9.webp",
    imgFooter: "video",
  },
  {
    id: 10,
    href: "./scroll/scroll.html",
    imgSrc: "img/img10.webp",
    imgFooter: "scoll",
  },
  {
    id: 11,
    href: "./tabs/tabs.html",
    imgSrc: "img/img11.webp",
    imgFooter: "Tabs",
  },
  {
    id: 12,
    href: "./countdown/countdown.html",
    imgSrc: "img/img12.webp",
    imgFooter: "countdown timer",
  },
  {
    id: 13,
    href: "./loremIpsum/lorem.html",
    imgSrc: "img/img13.webp",
    imgFooter: "lorem ipsum",
  },
  {
    id: 14,
    href: "./groceryBud/grocerybud.html",
    imgSrc: "img/img14.webp",
    imgFooter: "grocery bud",
  },
  {
    id: 15,
    href: "./slider/slider.html",
    imgSrc: "img/img15.webp",
    imgFooter: "slider",
  },
  {
    id: 16,
    href: "./counter2/counter2.html",
    imgSrc: "img/img16.webp",
    imgFooter: "counter",
  },
  {
    id: 19,
    href: "./darkMode/darkMode.html",
    imgSrc: "img/img19.webp",
    imgFooter: "dark mode",
  },
  {
    id: 20,
    href: "./filters/filters.html",
    imgSrc: "img/img20.webp",
    imgFooter: "filters",
  },
  {
    id: 21,
    href: "./dadJoker/dadJoker.html",
    imgSrc: "img/img21.webp",
    imgFooter: "dad jokes",
  },
];
const DomPj = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded", function () {
  displayDataItems(data);
  const listItem = document.querySelectorAll(".item-section");
  listItem.forEach((item) => {
    if (item.offsetTop - window.scrollY < 850) {
      item.classList.add("activeShowTop");
    }
  });
  document.addEventListener("scroll", () => {
    console.log(listItem[1].offsetTop - window.scrollY);
    listItem.forEach((item) => {
      if (item.offsetTop - window.scrollY < 850) {
        item.classList.add("activeShowTop");
      }
      // if (item.offsetTop - window.scrollY < -440) {
      //   item.classList.remove("activeShowTop");
      //   item.classList.add("activeShowBottom");
      // }
    });
  });
});
function displayDataItems(dataItem) {
  let displayData = dataItem.map(function (item) {
    return `<a href="${item.href}" target="_blank">
        <div class="item-section">
          <div class="img-container">
            <img src="${item.imgSrc}" alt="" />
          </div>
          <div class="img-footer">${item.imgFooter}</div>
        </div>
      </a>`;
  });
  displayData = displayData.join("");
  DomPj.innerHTML = displayData;
}
