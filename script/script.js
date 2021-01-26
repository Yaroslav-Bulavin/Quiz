document.addEventListener("DOMContentLoaded", function () {

    const btnOpenModal = document.querySelector("#btnOpenModal");
    const modalBlock = document.querySelector("#modalBlock");
    const closeModal = document.querySelector("#closeModal");
    const questionTitle = document.querySelector("#question");
    const formAnswers = document.querySelector("#formAnswers");
    const prevButton = document.querySelector("#prev");
    const nextButton = document.querySelector("#next");
    const questions = [
        {
            question: "Какого цвета бургер?",
            answers: [
                {
                    id: 1,
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
                    id: 2,
                    title: 'Черный',
                    url: './image/burgerBlack.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Из какого мяса котлета?",
            answers: [
                {
                    id: 1,
                    title: 'Курица',
                    url: './image/chickenMeat.png'
                },
                {
                    id: 2,
                    title: 'Говядина',
                    url: './image/beefMeat.png'
                },
                {
                    id: 3,
                    title: 'Свинина',
                    url: './image/porkMeat.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Дополнительные ингредиенты?",
            answers: [
                {
                    id: 1,
                    title: 'Помидор',
                    url: './image/tomato.png'
                },
                {
                    id: 2,
                    title: 'Огурец',
                    url: './image/cucumber.png'
                },
                {
                    id: 3,
                    title: 'Салат',
                    url: './image/salad.png'
                },
                {
                    id: 4,
                    title: 'Лук',
                    url: './image/onion.png'
                }
            ],
            type: 'checkbox'
        },
        {
            question: "Добавить соус?",
            answers: [
                {
                    id: 1,
                    title: 'Чесночный',
                    url: './image/sauce1.png'
                },
                {
                    id: 2,
                    title: 'Томатный',
                    url: './image/sauce2.png'
                },
                {
                    id: 3,
                    title: 'Горчичный',
                    url: './image/sauce3.png'
                }
            ],
            type: 'radio'
        }
    ];


    btnOpenModal.addEventListener("click", function () {
        modalBlock.classList.add("d-block");
        playTest();
    });

    closeModal.addEventListener("click", function () {
        modalBlock.classList.remove("d-block");
    });

    function playTest() {
        let numberQuestion = 0;

        function renderAnswers(index) {
            questions[index].answers.forEach((answer) => {
                const answerItem = document.createElement("div");
                answerItem.classList.add("answers-item", "d-flex", "flex-column");

                answerItem.innerHTML = `<input type="${questions[index].type}" id="${answer.id}" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" id="burgerImage" src="${answer.url}" alt="burger">
                  <span>${answer.title}</span>
                </label>`;

                formAnswers.appendChild(answerItem);
                console.log(answerItem);
            });

        }

        const renderQuestions = (indexQuestion) => {
            formAnswers.innerHTML = "";
            questionTitle.textContent = `${questions[indexQuestion].question}`;

            renderAnswers(indexQuestion);

            if (numberQuestion === 0) {
                prevButton.hidden = true;
            } else if (numberQuestion === questions.length - 1) {
                nextButton.hidden = true
            } else {
                prevButton.hidden = false;
                nextButton.hidden = false;
            }
        };
        renderQuestions(numberQuestion);


        prevButton.onclick = () => {
            numberQuestion--;
            renderQuestions(numberQuestion);
        };
        nextButton.onclick = () => {
            numberQuestion++;
            renderQuestions(numberQuestion);
        };


    }
});