const questions = document.querySelectorAll(".item-question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show");
      }
    });
    question.classList.toggle("show");
  });
});
