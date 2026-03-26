const questions = [
    {
        question: `Вам приходит СМС: «Ваша карта заблокирована. Перезвоните 8-903...». Что делать?`,
        answers: [
            { text: "Срочно перезвонить, чтобы разблокировать карту.", correct: false },
            { text: "Позвонить в банк по номеру с оборотной стороны карты.", correct: true },
            { text: "Отправить код из СМС в ответном сообщении.", correct: false },
            { text: "Перезвонить с городского телефона — это дешевле.", correct: false }
        ],
        comment: "Мошенники подделывают номера банков. Настоящий номер банка всегда указан на самой карте. Не звони по номерам из подозрительных сообщений.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что означает термин «фишинг» в интернете?`,
        answers: [
            { text: "Вид спортивной рыбалки на реке.", correct: false },
            { text: "Рассылка спама на электронную почту.", correct: false },
            { text: "Создание сайтов-клонов для кражи паролей.", correct: true },
            { text: "Способ взлома общественных Wi-Fi сетей.", correct: false }
        ],
        comment: "Фишинг — это «ловля» ваших данных. Вас заманивают на сайт-подделку, внешне похожий на настоящий. Когда вы вводите пароль, он уходит мошенникам.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `«Друг» пишет ВКонтакте: «Срочно нужно 5000 рублей, кинь на карту». Ваши действия?`,
        answers: [
            { text: "Срочно перевести деньги — друг же в беде.", correct: false },
            { text: "Написать: «Держись, сейчас помогу деньгами».", correct: false },
            { text: "Позвонить другу или задать личный вопрос.", correct: true },
            { text: "Попросить прислать фото паспорта для проверки.", correct: false }
        ],
        comment: "Аккаунты взламывают тысячами. Мошенники рассылают сообщения всем контактам. Только звонок или личный вопрос подтвердит, что это действительно друг.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `На Авито продают iPhone за 3000 рублей. Продавец просит предоплату. Это:`,
        answers: [
            { text: "Отличная сделка, нужно срочно платить.", correct: false },
            { text: "Стоит попробовать поторговаться до 2000 рублей.", correct: false },
            { text: "Мошенник: цена слишком низкая и просят предоплату.", correct: true },
            { text: "Нужно съездить в другой город и купить лично.", correct: false }
        ],
        comment: "Правило «бесплатный сыр» работает и в интернете. Цена в 20 раз ниже рыночной — 100% развод. Никаких предоплат незнакомцам, только личная встреча.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое двухфакторная аутентификация?`,
        answers: [
            { text: "Вход на сайт по паспорту или правам.", correct: false },
            { text: "Подтверждение входа паролем и кодом из СМС.", correct: true },
            { text: "Использование двух разных паролей для входа.", correct: false },
            { text: "Проверка аккаунта службой безопасности.", correct: false }
        ],
        comment: "Двухфакторка — это второй замок. Даже если мошенник узнает пароль, без кода с телефона он не войдет. Включи ее прямо сейчас в настройках.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Вы продаете диван. Покупатель перевел 5000 вместо 2000 и просит вернуть разницу. В чем подвох?`,
        answers: [
            { text: "Покупатель просто богатый и очень щедрый.", correct: false },
            { text: "Деньги могут быть с чужой карты, банк их потом спишет.", correct: true },
            { text: "Это проверка вашей честности продавцом.", correct: false },
            { text: "Он ошибся, нужно честно вернуть излишек.", correct: false }
        ],
        comment: "Схема «ошибка оператора». Перевод делается с ворованной карты. Когда владелец оспорит операцию, банк спишет 5000, а вы потеряете свои 3000, которые вернули.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Какой способ оплаты безопасен при покупке у незнакомца?`,
        answers: [
            { text: "Перевод на банковскую карту по номеру.", correct: false },
            { text: "Перевод на электронный кошелек Qiwi.", correct: false },
            { text: "Оплата при получении на почте или через безопасную сделку.", correct: true },
            { text: "Перевод в криптовалюте без посредников.", correct: false }
        ],
        comment: "Безопасная сделка — ваша страховка. Вы платите деньги только после проверки товара. При переводе на карту частного лица вернуть деньги невозможно.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что нельзя сообщать никому, даже «сотруднику банка»?`,
        answers: [
            { text: "Шестнадцатизначный номер карты.", correct: false },
            { text: "Срок действия карты (месяц и год).", correct: false },
            { text: "Имя и фамилию владельца карты.", correct: false },
            { text: "Код на обороте (CVV) и пароли из СМС.", correct: true }
        ],
        comment: "CVV и СМС-пароли — ваша цифровая подпись. Кто их знает — может украсть деньги. Настоящий сотрудник банка никогда не спросит CVV или код из СМС.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Вы поняли, что перевели деньги мошенникам. Ваши первые действия?`,
        answers: [
            { text: "Удалить переписку, чтобы не расстраиваться.", correct: false },
            { text: "Написать гневный пост в социальных сетях.", correct: false },
            { text: "Позвонить в банк, затем идти в полицию.", correct: true },
            { text: "Позвонить мошеннику и просить вернуть деньги.", correct: false }
        ],
        comment: "Каждая минута важна. Сначала звоните в банк — транзакцию иногда можно отменить. Потом сразу в полицию с чеками и перепиской.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Пришло письмо: «Вы выиграли миллион». Для получения нужно оплатить налог 30 рублей. Это:`,
        answers: [
            { text: "Обычная процедура, платите и получайте приз.", correct: false },
            { text: "Развод: мошенники заберут 30 рублей и исчезнут.", correct: true },
            { text: "Так блогеры проверяют лояльность подписчиков.", correct: false },
            { text: "Можно согласиться, если сумма налога маленькая.", correct: false }
        ],
        comment: "Если вы не участвовали в конкурсе — вы не могли выиграть. Налоги всегда вычитаются из приза, а не платятся отдельно на карту «менеджера».",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    }
];

// Единственное объявление переменных
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const startQuizBtn = document.getElementById('start-quiz-btn');
const welcomeModal = document.getElementById('welcome-modal');
const resultModal = document.getElementById('result-modal');
const resultBody = document.querySelector('.result-body');
const restartBtn = document.getElementById('restart-quiz-btn');
const resultToMainBtn = document.getElementById('result-to-main-btn');

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backtomenu = document.getElementById("backtomenu-btn");
const commentPopup = document.getElementById("comment-popup");
const commentText = document.getElementById("comment-text");
const commentImage = document.getElementById("comment-image");

let currentQuestionIndex = 0;
let score = 0;
let quizStarted = false;

// Функции модальных окон
function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    const anyActive = document.querySelector('.modal.active');
    if (!anyActive) {
        overlay.classList.remove('active');
    }
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomNumber(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Логика квиза
function startQuiz() {
    quizStarted = true;
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Далее";

    answerButtons.style.pointerEvents = 'auto';
    answerButtons.style.opacity = '1';

    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    backtomenu.style.display = "none";
    commentPopup.classList.add('hidden');
    commentImage.classList.add('hidden');
    commentImage.src = "";
    commentText.classList.remove('hidden');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showComment() {
    const currentQuestion = questions[currentQuestionIndex];
    commentPopup.classList.remove('hidden');
    const isMobile = window.innerWidth <= 768;

    let imageSrc = '';
    if (isMobile && currentQuestion.mobileImage) {
        imageSrc = currentQuestion.mobileImage;
    } else if (currentQuestion.image) {
        imageSrc = currentQuestion.image;
    }

    if (imageSrc) {
        commentImage.src = imageSrc;
        commentImage.classList.remove('hidden');
        commentImage.style.display = 'block';
        commentText.textContent = currentQuestion.comment;
        commentText.classList.remove('hidden');
        commentText.style.position = 'absolute';
    } else {
        commentImage.classList.add('hidden');
        commentImage.style.display = 'none';
        commentText.textContent = currentQuestion.comment;
        commentText.classList.remove('hidden');
        commentText.style.position = 'relative';
        commentText.style.background = '#2f2385';
        commentText.style.minHeight = '150px';
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    showComment();

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showResultModal() {
    let titleText = '';
    let imageSrc = '';
    let mainText = '';

    if (score >= 1 && score <= 3) {
        titleText = 'Нужно больше знать о безопасности в интернете!';
        imageSrc = 'imgQuiz/bad.jpg';
        mainText = 'Вы набрали всего ' + score + ' баллов. К сожалению, ваши знания об интернет-мошенничестве пока невысоки. Это может быть опасно: вы рискуете попасться на удочку злоумышленников. Рекомендуем внимательнее изучить тему и пройти тест снова.';
    } else if (score >= 4 && score <= 6) {
        titleText = 'Хороший старт, но есть куда расти!';
        imageSrc = 'imgQuiz/normal.jpg';
        mainText = 'Вы набрали ' + score + ' баллов. Вы уже кое-что знаете о схемах обмана в интернете, но некоторые приёмы мошенников ускользнули. Ознакомьтесь с информацией ещё раз, чтобы уверенно защищать себя и своих близких.';
    } else {
        titleText = 'Отлично! Вы хорошо разбираетесь в теме!';
        imageSrc = 'imgQuiz/good.jpg';
        mainText = 'Поздравляем! Вы набрали ' + score + ' баллов. Ваши знания помогут вам не стать жертвой мошенников и научить друзей безопасному поведению в сети. Так держать!';
    }

    if (score >= 7) {
        mainText += '<br><br>Если вы столкнулись с подозрительной активностью в интернете, сообщите об этом. Поделитесь этими контактами: горячая линия «Мошеловка» 8-800-350-22-65 или сайт вашего регионального управления МВД. Быстрая реакция помогает предотвратить обман.';
    }

    const supportNumbers = `
        <div class="support-numbers">
            <p>Если вы или ваши друзья столкнулись с травлей — не молчите!</p>
            <p>Детская линия помощи: 8-801-100-16-11 (круглосуточно, анонимно)</p>
            <p>Телефон доверия для подростков: 170 (с мобильного)</p>
            <p>Республиканский центр психологической помощи: 8-017-300-10-06</p>
            <p>Помните: вы не одни, помощь рядом!</p>
        </div>
    `;

    resultBody.innerHTML = `
        <div style="text-align: center;">
            <h3 style="color: #2f2385; margin-bottom: 15px;">${titleText}</h3>
            <img src="${imageSrc}" alt="Результат" style="max-width: 80%; border-radius: 20px; margin: 10px auto; border: 4px solid #fff;">
            <p>${mainText}</p>
            ${supportNumbers}
        </div>
    `;

    openModal(resultModal);
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResultModal();
    }
}

// Обработчики событий
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
});

if (startQuizBtn) {
    startQuizBtn.addEventListener('click', () => {
        closeModal(welcomeModal);
        quizStarted = true;
        startQuiz();
    });
}

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
        if (modal === resultModal) {
        } else if (!quizStarted) {
            quizStarted = true;
            startQuiz();
        }
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        if (modal.id !== 'result-modal') {
            closeModal(modal);
        }
    });
    if (!quizStarted) {
        quizStarted = true;
        startQuiz();
    }
});

restartBtn.addEventListener('click', () => {
    closeModal(resultModal);
    startQuiz();
});

resultToMainBtn.addEventListener('click', () => {
    closeModal(resultModal);
    window.location.href = '../index.html';
});

function initVideoFunctionality() {
    const videoThumbnail = document.getElementById('video-thumbnail');
    const videoModal = document.createElement('div');
    videoModal.className = 'video-modal';
    videoModal.innerHTML = `
        <div class="video-modal-content">
            <div class="close-video-modal">×</div>
            <iframe src="https://www.youtube.com/embed/JhAqw0SyEOM?rel=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        </div>
    `;
    document.body.appendChild(videoModal);

    if (videoThumbnail) {
        videoThumbnail.addEventListener('click', function() {
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            const modalIframe = videoModal.querySelector('iframe');
            modalIframe.src = 'https://www.youtube.com/embed/JhAqw0SyEOM?rel=0';
        });
    }

    const closeVideoBtn = videoModal.querySelector('.close-video-modal');
    if (closeVideoBtn) {
        closeVideoBtn.addEventListener('click', function() {
            videoModal.classList.remove('active');
            document.body.style.overflow = '';
            const modalIframe = videoModal.querySelector('iframe');
            modalIframe.src = '';
        });
    }

    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            document.body.style.overflow = '';
            const modalIframe = videoModal.querySelector('iframe');
            modalIframe.src = '';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            videoModal.classList.remove('active');
            document.body.style.overflow = '';
            const modalIframe = videoModal.querySelector('iframe');
            modalIframe.src = '';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        openModal(welcomeModal);
    }, 500);
    questionElement.textContent = "Нажмите 'Начать квиз', чтобы приступить";

    answerButtons.style.pointerEvents = 'none';
    answerButtons.style.opacity = '0.7';

    const placeholderAnswers = [
        "Ответ появится после начала",
        "Ответ появится после начала",
        "Ответ появится после начала",
        "Ответ появится после начала"
    ];

    placeholderAnswers.forEach(text => {
        const button = document.createElement("button");
        button.innerHTML = text;
        button.classList.add("btn");
        button.disabled = true;
        answerButtons.appendChild(button);
    });

    initVideoFunctionality();
});

window.addEventListener('resize', function() {
    if (!commentPopup.classList.contains('hidden')) {
        showComment();
    }
});

shuffleArray(questions);