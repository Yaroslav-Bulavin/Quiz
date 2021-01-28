document.addEventListener("DOMContentLoaded", () => {
    const btnOpenModal = document.getElementById("btnOpenModal");
    const modal = document.getElementById("modalBlock");
    const closeModal = document.getElementById("closeModal");
    const questionTitle = document.getElementById("question");
    const formAnswers = document.getElementById("formAnswers");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const send = document.getElementById("send");

    const questions = [
        {
            question: "Какого цвета бургер?",
            answers: [
                {
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
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
                    title: 'Курица',
                    url: './image/chickenMeat.png'
                },
                {
                    title: 'Говядина',
                    url: './image/beefMeat.png'
                },
                {
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
                    title: 'Помидор',
                    url: './image/tomato.png'
                },
                {
                    title: 'Огурец',
                    url: './image/cucumber.png'
                },
                {
                    title: 'Салат',
                    url: './image/salad.png'
                },
                {
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
                    title: 'Чесночный',
                    url: './image/sauce1.png'
                },
                {
                    title: 'Томатный',
                    url: './image/sauce2.png'
                },
                {
                    title: 'Горчичный',
                    url: './image/sauce3.png'
                }
            ],
            type: 'radio'
        }
    ];

    btnOpenModal.addEventListener("click", () => {
        modal.classList.add("d-block");
        playTest();

    });
    closeModal.addEventListener("click", () => {
        modal.classList.remove("d-block");
    });
    const playTest = () => {
        let numberQuestion = 0;
        const finalAnswers = [];
        const renderAnswers = (index) => {
            questions[index].answers.forEach((answer) => {
                const answerItem=document.createElement('div');
                answerItem.classList.add('answers-item','d-flex', 'justify-content-center');
                answerItem.innerHTML = `
                    <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none" value="${answer.title}">
                    <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="${answer.url}" alt="burger">
                    <span>${answer.title}</span>
                    </label>
                `;
                formAnswers.appendChild(answerItem)
            })
        };

        const renderQuestions = (indexQuestion) => {

            formAnswers.innerHTML = '';

            switch (true) {
                case (numberQuestion === 0) :
                    questionTitle.textContent=`${questions[indexQuestion].question}`;
                    prev.classList.add("d-none");
                    next.classList.remove("d-none");
                    send.classList.add("d-none");
                    renderAnswers(indexQuestion);
                    break;
                case (numberQuestion >= 0 && numberQuestion <= questions.length - 1) :
                    questionTitle.textContent=`${questions[indexQuestion].question}`;
                    prev.classList.remove("d-none");
                    next.classList.remove("d-none");
                    send.classList.add("d-none");
                    renderAnswers(indexQuestion);
                    break;
                case (numberQuestion === questions.length) :
                    prev.classList.add("d-none");
                    next.classList.add("d-none");
                    send.classList.remove("d-none");
                    formAnswers.innerHTML=`
                    <div class="form-group">
                    <label for="numberPhone"> Enter your number</label>
                    <input type="tel" class="form-control" id="numberPhone" placeholder="Номер телефона:">
                    </div>`;
                    break;
                case (numberQuestion === questions.length + 1) :
                    formAnswers.textContent='Спасибо за пройденный тест!';
                    setTimeout(() => {
                        modal.classList.remove("d-block");
                    }, 2000);
                    break;
            }



        };
        renderQuestions(numberQuestion);

        checkAnswer = () => {
            const obj = {};
            const inputs = [...formAnswers.elements].filter((input) => input.checked || input.id === 'numberPhone');
            inputs.forEach((input, index) => {
                if(numberQuestion >= 0 && numberQuestion <= questions.length - 1){
                    obj[`${index}_${questions[numberQuestion].question}`] = input.value
                }

                if(numberQuestion === questions.length){
                    obj['Номер телефона'] = input.value
                }
            });

            finalAnswers.push(obj)
        };
        next.onclick = () => {
            checkAnswer();
            numberQuestion++;
            renderQuestions(numberQuestion)

        };
        prev.onclick = () => {
            numberQuestion--;
            renderQuestions(numberQuestion)
        };

        send.onclick = () => {
            checkAnswer();
            numberQuestion++;
            renderQuestions(numberQuestion);
            console.log(finalAnswers)
        }
    }
});