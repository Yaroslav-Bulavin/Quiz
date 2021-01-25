document.addEventListener("DOMContentLoaded", function () {

    const btnOpenModal = document.querySelector("#btnOpenModal");
    const modalBlock = document.querySelector("#modalBlock");
    const closeModal = document.querySelector("#closeModal");
    const questionTitle = document.querySelector("#question");
    const formAnswers = document.querySelector("#formAnswers");
    const burgerImageFirst = `./image/burger.png`;
    const burgerImageSecond = `./image/burgerBlack.png`;
    const burgerTitleFirst = "Стандарт";
    const burgerTitleSecond = "Черный";


    btnOpenModal.addEventListener("click", function () {
        modalBlock.classList.add("d-block");
        playTest();
    });

    closeModal.addEventListener("click", function () {
        modalBlock.classList.remove("d-block");
    });

    function playTest() {
        const renderQuestions = () => {
            questionTitle.textContent = "Какого цвета бургер вы желаете?";
            formAnswers.innerHTML = `<div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" id="burgerImage" src="${burgerImageFirst}" alt="burger">
                  <span>${burgerTitleFirst}</span>
                </label>
              </div>
              <div class="answers-item d-flex justify-content-center">
                <input type="radio" id="answerItem2" name="answer" class="d-none">
                <label for="answerItem2" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${burgerImageSecond}" alt="burger">
                  <span>${burgerTitleSecond}</span>
                </label>
              </div>`
        };
        renderQuestions();
    }
});