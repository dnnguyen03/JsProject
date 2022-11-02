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
    href: "#",
    imgSrc: "img/img10.webp",
    imgFooter: "scoll",
  },
  {
    id: 11,
    href: "#",
    imgSrc: "img/img11.webp",
    imgFooter: "Tabs",
  },
  {
    id: 12,
    href: "#",
    imgSrc: "img/img12.webp",
    imgFooter: "countdown timer",
  },
  {
    id: 13,
    href: "#",
    imgSrc: "img/img13.webp",
    imgFooter: "lorem ipsum",
  },
  {
    id: 14,
    href: "#",
    imgSrc: "img/img14.webp",
    imgFooter: "grocery bud",
  },
  {
    id: 15,
    href: "#",
    imgSrc: "img/img15.webp",
    imgFooter: "slider",
  },
];
const DomPj = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded", function () {
  displayDataItems(data);
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
