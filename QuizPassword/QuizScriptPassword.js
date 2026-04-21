const questions = [
    {
        question: `Почему опасно использовать один пароль на всех сайтах в эпоху ИИ-атак?`,
        answers: [
            { text: "Утечка раскроет все аккаунты.", correct: true },
            { text: "Это неудобно запоминать.", correct: false },
            { text: "Пароли автоматически устаревают через месяц.", correct: false },
            { text: "Это нарушает правила большинства сайтов.", correct: false }
        ],
        comment: "Если база данных одного сайта скомпрометирована, ИИ быстро подберёт этот пароль к другим сервисам (атака 'credential stuffing').",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Какой пароль считается наиболее надежным против ИИ-перебора?`,
        answers: [
            { text: "12345678", correct: false },
            { text: "K#8m$2Qr", correct: true },
            { text: "qwerty2026", correct: false },
            { text: "Gomel2026!", correct: false }
        ],
        comment: "Надежный пароль должен быть длинным (12+ символов), содержать буквы в разных регистрах, цифры и спецсимволы. ИИ легко взламывает короткие и словарные пароли.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое менеджер паролей и как ИИ влияет на его выбор?`,
        answers: [
            { text: "Программа для восстановления забытых паролей.", correct: false },
            { text: "Сервис для отправки паролей друзьям.", correct: false },
            { text: "Хранит и генерирует пароли.", correct: true },
            { text: "Антивирус для защиты от кражи паролей.", correct: false }
        ],
        comment: "Менеджеры паролей (Bitwarden, 1Password, KeePass) шифруют ваши данные. ИИ может помогать угадывать слабые пароли, поэтому использование менеджера критично.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое двухфакторная аутентификация (2FA) в условиях ИИ-фишинга?`,
        answers: [
            { text: "Вход в аккаунт с двух разных устройств.", correct: false },
            { text: "Использование двух паролей одновременно.", correct: false },
            { text: "Вход только по отпечатку пальца и лицу.", correct: false },
            { text: "Пароль + дополнительный код.", correct: true }
        ],
        comment: "2FA требует 'что-то, что вы знаете' (пароль) и 'что-то, что у вас есть' (код). ИИ усложняет фишинг, но не защищает от SIM-своппинга.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что безопаснее для получения кодов 2FA с учетом ИИ-уязвимостей?`,
        answers: [
            { text: "Аутентификатор", correct: true },
            { text: "СМС-сообщения", correct: false },
            { text: "Email-письма", correct: false },
            { text: "Голосовой звонок", correct: false }
        ],
        comment: "СМС уязвимы к перехвату (SIM-своппинг), тогда как приложения генерируют коды локально. ИИ может автоматизировать атаки на СМС.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Как часто рекомендуется менять пароли на важных аккаунтах при ИИ-мониторинге утечек?`,
        answers: [
            { text: "Каждую неделю", correct: false },
            { text: "При утечке или раз в полгода", correct: true },
            { text: "Только если сайт попросит", correct: false },
            { text: "Никогда, если пароль сложный", correct: false }
        ],
        comment: "Частая смена без причины ведёт к простым паролям. ИИ-сервисы отслеживают утечки, поэтому меняйте пароль при их обнаружении.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Можно ли записывать пароли на бумажке и хранить дома, если ИИ не может украсть бумагу?`,
        answers: [
            { text: "Категорически нельзя — это небезопасно", correct: false },
            { text: "Только если зашифровать их азбукой Морзе", correct: false },
            { text: "Можно, если в надежном месте", correct: true },
            { text: "Только для аккаунтов с 2FA", correct: false }
        ],
        comment: "Физическая запись безопаснее незашифрованного файла на ПК. ИИ не украдёт бумажку, но убедитесь, что она недоступна посторонним.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое "брутфорс-атака" и как ИИ ускоряет её?`,
        answers: [
            { text: "Обман пользователя через фишинговое письмо", correct: false },
            { text: "Вирус, который крадет пароли из браузера", correct: false },
            { text: "Метод взлома через уязвимость в сайте", correct: false },
            { text: "Перебор паролей автоматически", correct: true }
        ],
        comment: "Злоумышленники используют программы для перебора комбинаций. ИИ анализирует вероятные пароли на основе утекших данных, ускоряя атаку.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Зачем нужна резервная почта или номер телефона при регистрации в эпоху ИИ-восстановления?`,
        answers: [
            { text: "Для восстановления доступа", correct: true },
            { text: "Чтобы получать рекламные рассылки", correct: false },
            { text: "Чтобы сайт мог продать ваши данные", correct: false },
            { text: "Это необязательно, можно пропустить", correct: false }
        ],
        comment: "Резервные контакты — 'запасной ключ'. ИИ может помочь в восстановлении, но также и перехватить СМС, поэтому защитите их 2FA.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Безопасно ли сохранять пароли в браузере, если ИИ может украсть сессию?`,
        answers: [
            { text: "Да, это абсолютно безопасно на любом устройстве", correct: false },
            { text: "На личном устройстве с паролем", correct: true },
            { text: "Нет, браузеры никогда не шифруют пароли", correct: false },
            { text: "Да, но только если включен режим инкогнито", correct: false }
        ],
        comment: "Браузеры шифруют пароли, но при физическом доступе к разблокированному устройству ИИ-бот сможет их извлечь. Используйте мастер-пароль.",
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
        titleText = 'Ваши пароли под угрозой взлома!';
        imageSrc = 'imgQuiz/bad.jpg';
        mainText = 'Вы набрали всего ' + score + ' баллов. К сожалению, ваши знания о надежных паролях и аутентификации пока недостаточны. Простые ошибки (слабые пароли, отсутствие 2FA) делают вас легкой мишенью для хакеров и мошенников. Рекомендуем изучить основы защиты аккаунтов и пройти тест снова.';
    } else if (score >= 4 && score <= 6) {
        titleText = 'Неплохо, но есть уязвимые места!';
        imageSrc = 'imgQuiz/normal.jpg';
        mainText = 'Вы набрали ' + score + ' баллов. Вы знаете базовые правила, но некоторые важные нюансы защиты аккаунтов ускользнули. Повторите материал, чтобы надежно защитить свои данные от взлома и кражи.';
    } else {
        titleText = 'Отлично! Вы — эксперт по защите аккаунтов!';
        imageSrc = 'imgQuiz/good.jpg';
        mainText = 'Поздравляем! Вы набрали ' + score + ' баллов. Ваши знания помогут вам избежать взлома, фишинга и утечки данных. Вы умеете создавать надежные пароли и настраивать двухфакторную аутентификацию. Так держать!';
    }

    if (score >= 7) {
        mainText += '<br><br>Помните: безопасность — это привычка. Используйте менеджер паролей, включайте 2FA везде, где возможно, и никогда не передавайте коды из СМС посторонним.';
    }

    const hashtagHtml = '<h2 style="color: #2f2385; margin-bottom: 15px;">#КиберПраво</h2>';

    const supportNumbers = `
        <div class="support-numbers">
            <p>Если вы стали жертвой взлома или мошенников — действуйте быстро!</p>
            <p>МВД: 102</p>
            <p>ГУБОПиК: +375 (17) 218-71-89</p>
            <p>Департамент охраны: +375 (17) 309-77-01</p>
            <p>CERT.BY: +375 (17) 327-27-01</p>
            <p>Горячая линия: +375 (17) 390-22-72</p>
            <p><strong>Помните:</strong> чем быстрее вы смените пароль и сообщите о инциденте, тем выше шансы спасти аккаунт!</p>
        </div>
    `;
    resultBody.innerHTML = `
        <div style="text-align: center;">
            <h3 style="color: #2f2385; margin-bottom: 15px;">${titleText}</h3>
            <img src="${imageSrc}" alt="Результат" style="max-width: 80%; border-radius: 20px; margin: 10px auto; border: 4px solid #fff;">
            <p>${mainText}</p>
            ${hashtagHtml}
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
            <iframe src="https://www.youtube.com/embed/pAUzloZkxWE?rel=0" 
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
            modalIframe.src = 'https://www.youtube.com/embed/pAUzloZkxWE?rel=0';
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
