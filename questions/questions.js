const questions = document.querySelectorAll(".item-question");
const questionsText = document.querySelectorAll(".question-text");
const questionsP = document.querySelectorAll(".question-text p");
questions.forEach(function (question, index) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show");
      }
    });
    questionsText.forEach((item) => {
      item.style.height = 0;
    });
    question.classList.toggle("show");
    if (question.classList.contains("show")) {
      questionsText[index].style.height =
        questionsP[index].getBoundingClientRect().height + "px";
    } else {
      questionsText[index].style.height = 0;
    }
  });
});
