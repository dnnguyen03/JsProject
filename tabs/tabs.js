// const about = document.querySelector(".about");
// const btns = document.querySelectorAll(".tab-btn");
// const articles = document.querySelectorAll(".content");
// about.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     btns.forEach(function (btn) {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     articles.forEach(function (article) {
//       article.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });
const tabItem = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".content");
tabItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < tabItem.length; i++) {
      tabItem[i].classList.remove("active");
      tabContent[i].classList.remove("active");
    }
    tabItem[index].classList.add("active");
    tabContent[index].classList.add("active");
  });
});
