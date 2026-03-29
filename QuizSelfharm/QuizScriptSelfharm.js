const questions = [
    {
        question: `Что означает термин «селфхарм» (самоповреждение)?`,
        answers: [
            { text: "Нанесение татуировок и пирсинга дома.", correct: false },
            { text: "Умышленное повреждение своего тела.", correct: true },
            { text: "Расстройство пищевого поведения.", correct: false },
            { text: "Желание изменить внешность хирургически.", correct: false }
        ],
        comment: "Селфхарм — это способ справиться с душевной болью, а не желание умереть. Это крик о помощи, который нельзя игнорировать.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Почему опасно ставить лайки под фото с порезами?`,
        answers: [
            { text: "За это могут заблокировать аккаунт.", correct: false },
            { text: "Это просто засоряет ленту новостей.", correct: false },
            { text: "Лайк становится одобрением опасных действий.", correct: true },
            { text: "Это не опасно, если фото красивое.", correct: false }
        ],
        comment: "Лайк = поддержка. Для человека в кризисе лайк под фото с порезом — это «зеленый свет» от общества, усиливающий опасное поведение.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Вы нашли паблик с фото порезов и советами, как скрыть их от родителей. Ваши действия?`,
        answers: [
            { text: "Подписаться и следить за обновлениями.", correct: false },
            { text: "Пожаловаться на сообщество администрации.", correct: true },
            { text: "Написать гневный комментарий админам.", correct: false },
            { text: "Выйти и забыть, это не моя проблема.", correct: false }
        ],
        comment: "Жалоба — не «стукачество», а способ сделать интернет безопаснее. Такие паблики подталкивают подростков к повторению опасных действий.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Чем пост о помощи отличается от пропаганды селфхарма?`,
        answers: [
            { text: "В посте о помощи говорят о чувствах, в пропаганде — романтизируют боль.", correct: true },
            { text: "Пропаганда всегда содержит мат, а пост о помощи написан красиво.", correct: false },
            { text: "Ничем, любой такой контент нужно удалять.", correct: false },
            { text: "В посте о помощи есть фото, в пропаганде только текст.", correct: false }
        ],
        comment: "Если автор ищет поддержку — это крик о помощи. Если восхваляет раны как «красоту» — это опасная пропаганда.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что означает термин «триггер-варнинг» (TW)?`,
        answers: [
            { text: "Техника нанесения самоповреждений.", correct: false },
            { text: "Название успокоительного лекарства.", correct: false },
            { text: "Предупреждение о тяжелом контенте перед постом.", correct: true },
            { text: "Призыв к опасным действиям.", correct: false }
        ],
        comment: "Триггер-варнинг — маркер эмпатии. Он дает человеку выбор: не смотреть контент, который может усугубить его состояние.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Друг выложил фото с порезом и подписью «Всем всё равно». Как лучше поступить?`,
        answers: [
            { text: "Написать: «Соберись, у всех проблемы».", correct: false },
            { text: "Игнорировать — он просто привлекает внимание.", correct: false },
            { text: "Отправить скриншот родителям для наказания.", correct: false },
            { text: "Написать: «Я рядом. Может, сходим к психологу?».", correct: true }
        ],
        comment: "Осуждение только убедит друга в никчемности. Лучшее — проявить заботу без осуждения и предложить реальную помощь.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Почему люди могут начать причинять себе боль?`,
        answers: [
            { text: "Потому что им это нравится физически.", correct: false },
            { text: "Чтобы получить порцию адреналина.", correct: false },
            { text: "Чтобы справиться с невыносимыми переживаниями.", correct: true },
            { text: "Потому что это модно в соцсетях.", correct: false }
        ],
        comment: "Физическая боль часто «перебивает» боль душевную или помогает почувствовать себя живым. Это всегда про внутренние страдания.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Верно ли: «Если подросток порезал руки, он точно хочет умереть»?`,
        answers: [
            { text: "Да, селфхарм всегда равен суициду.", correct: false },
            { text: "Нет, это просто способ привлечь внимание.", correct: false },
            { text: "Чаще это способ справиться с болью, но риск суицида повышен.", correct: true },
            { text: "Да, если порезы глубокие и их много.", correct: false }
        ],
        comment: "Селфхарм — способ выжить здесь и сейчас, а не умереть. Но он повышает риск суицида, поэтому важна помощь специалиста.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Кому можно анонимно обратиться за психологической помощью?`,
        answers: [
            { text: "К школьному охраннику или вахтеру.", correct: false },
            { text: "В паблик, где обсуждают селфхарм.", correct: false },
            { text: "На линию доверия 8-801-100-1616 (Беларусь).", correct: true },
            { text: "К случайным знакомым в интернете.", correct: false }
        ],
        comment: "Психологи на линии доверия не осудят и помогут найти выход. Звонок анонимный, бесплатный и круглосуточный.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что НЕ нужно делать, увидев контент с призывом к самоповреждению?`,
        answers: [
            { text: "Отправить жалобу модераторам сайта.", correct: false },
            { text: "Сделать репост к себе на стену.", correct: true },
            { text: "Поддержать автора в личных сообщениях.", correct: false },
            { text: "Сообщить взрослым (родителям, психологу).", correct: false }
        ],
        comment: "Репостя такой контент, вы становитесь распространителем и можете спровоцировать срыв у подписчиков. Лучше — репорт и личная поддержка.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    }
];
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

// Переменные состояния
let currentQuestionIndex = 0;
let score = 0;
let quizStarted = false;

// Переменные для робота
let robotGif = null;
let robotContainer = null;
let robotTimeout = null;

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

function initRobot() {
    robotContainer = document.getElementById('robotCompanion');
    robotGif = document.getElementById('robotGif');

    if (!robotContainer || !robotGif) {
        console.warn('Робот не найден на странице');
        return;
    }

    setRobotGif('../video/idle.gif');
}

function setRobotGif(gifPath) {
    if (!robotGif) return;

    robotContainer.classList.remove('reaction');
    void robotContainer.offsetWidth;
    robotContainer.classList.add('reaction');

    robotGif.src = gifPath;
}

function showRobotReaction(isCorrect) {
    if (!robotContainer || !robotGif) return;

    if (isCorrect) {
        setRobotGif('../video/happy.gif');
    } else {
        setRobotGif('../video/error.gif');
    }

    if (robotTimeout) {
        clearTimeout(robotTimeout);
    }

    robotTimeout = setTimeout(() => {
        setRobotGif('../video/idle.gif');
    }, 2500);
}

function resetRobot() {
    if (robotTimeout) {
        clearTimeout(robotTimeout);
    }
    setRobotGif('../video/idle.gif');
}

function startQuiz() {
    quizStarted = true;
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Далее";

    answerButtons.style.pointerEvents = 'auto';
    answerButtons.style.opacity = '1';

    resetRobot();

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

    // Реакция робота на ответ
    showRobotReaction(isCorrect);

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

    if (score >= 0 && score <= 3) {
        titleText = 'Нужно больше знать о селфхарме!';
        imageSrc = 'imgQuiz/bad.jpg';
        mainText = 'Вы набрали всего ' + score + ' баллов. К сожалению, ваши знания о самоповреждающем поведении пока невысоки. Непонимание этой проблемы может помешать вовремя помочь себе или близким. Рекомендуем внимательнее изучить тему и пройти тест снова.';
    } else if (score >= 4 && score <= 6) {
        titleText = 'Хороший старт, но есть куда расти!';
        imageSrc = 'imgQuiz/normal.jpg';
        mainText = 'Вы набрали ' + score + ' баллов. Вы уже кое-что знаете о селфхарме, но некоторые аспекты ускользнули. Ознакомьтесь с информацией ещё раз, чтобы научиться распознавать признаки и поддерживать тех, кто нуждается в помощи.';
    } else {
        titleText = 'Отлично! Вы хорошо разбираетесь в теме!';
        imageSrc = 'imgQuiz/good.jpg';
        mainText = 'Поздравляем! Вы набрали ' + score + ' баллов. Ваши знания помогут вам и вашим близким справляться с эмоциональными трудностями безопасными способами. Так держать!';
    }

    if (score >= 7) {
        mainText += '<br><br>Если вы или кто-то из ваших близких сталкивается с селфхармом, помните: помощь доступна. Поделитесь этими контактами: детский телефон доверия 8-800-2000-122 (круглосуточно, анонимно, бесплатно). Ваша поддержка может спасти жизнь.';
    }

    const supportNumbers = `
        <div class="support-numbers">
            <p>Если вы или ваши друзья столкнулись с самоповреждением — не молчите!</p>
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

function initVideoFunctionality() {
    const videoThumbnail = document.getElementById('video-thumbnail');
    const videoModal = document.createElement('div');
    videoModal.className = 'video-modal';
    videoModal.innerHTML = `
        <div class="video-modal-content">
            <div class="close-video-modal">×</div>
            <iframe src="https://www.youtube.com/embed/Wq-USYjI1Es?rel=0" 
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
            modalIframe.src = 'https://www.youtube.com/embed/Wq-USYjI1Es?rel=0';
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
            // Ничего не делаем
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

document.addEventListener('DOMContentLoaded', () => {
    initRobot();

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
