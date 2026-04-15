const questions = [
    {
        question: `Почему опасно использовать один пароль на всех сайтах?`,
        answers: [
            { text: "Это неудобно запоминать.", correct: false },
            { text: "При утечке на одном сайте злоумышленники получат доступ ко всем вашим аккаунтам.", correct: true },
            { text: "Пароли автоматически устаревают через месяц.", correct: false },
            { text: "Это нарушает правила большинства сайтов.", correct: false }
        ],
        comment: "Если база данных одного сайта будет скомпрометирована, злоумышленники попробуют этот же пароль на других сервисах (атака 'credential stuffing').",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Какой пароль считается наиболее надежным?`,
        answers: [
            { text: "12345678", correct: false },
            { text: "qwerty2026", correct: false },
            { text: "Gomel2026!", correct: false },
            { text: "7m$Kp9#vLq2@XnR", correct: true }
        ],
        comment: "Надежный пароль должен быть длинным (12+ символов), содержать буквы в разных регистрах, цифры и спецсимволы, и не содержать очевидных слов или дат.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое менеджер паролей?`,
        answers: [
            { text: "Программа для восстановления забытых паролей.", correct: false },
            { text: "Инструмент для безопасного хранения и генерации сложных паролей.", correct: true },
            { text: "Сервис для отправки паролей друзьям.", correct: false },
            { text: "Антивирус для защиты от кражи паролей.", correct: false }
        ],
        comment: "Менеджеры паролей (Bitwarden, 1Password, KeePass) шифруют ваши пароли и позволяют использовать уникальные сложные комбинации для каждого сайта.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое двухфакторная аутентификация (2FA)?`,
        answers: [
            { text: "Вход в аккаунт с двух разных устройств.", correct: false },
            { text: "Подтверждение входа двумя способами: пароль + дополнительный код/ключ.", correct: true },
            { text: "Использование двух паролей одновременно.", correct: false },
            { text: "Вход только по отпечатку пальца и лицу.", correct: false }
        ],
        comment: "2FA требует 'что-то, что вы знаете' (пароль) и 'что-то, что у вас есть' (код из приложения, СМС, аппаратный ключ).",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что безопаснее для получения кодов 2FA?`,
        answers: [
            { text: "СМС-сообщения", correct: false },
            { text: "Приложение-аутентификатор (Google Authenticator, Authy)", correct: true },
            { text: "Email-письма", correct: false },
            { text: "Голосовой звонок", correct: false }
        ],
        comment: "СМС уязвимы к перехвату (SIM-своппинг), тогда как приложения генерируют коды локально и не зависят от сети оператора.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Как часто рекомендуется менять пароли на важных аккаунтах?`,
        answers: [
            { text: "Каждую неделю", correct: false },
            { text: "Только если сайт попросит", correct: false },
            { text: "При подозрении на утечку или раз в 6–12 месяцев", correct: true },
            { text: "Никогда, если пароль сложный", correct: false }
        ],
        comment: "Частая смена паролей без причины может привести к использованию более простых комбинаций. Лучше менять при риске утечки и использовать 2FA.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Можно ли записывать пароли на бумажке и хранить дома?`,
        answers: [
            { text: "Категорически нельзя — это небезопасно", correct: false },
            { text: "Можно, если хранить в надежном месте, недоступном для посторонних", correct: true },
            { text: "Только если зашифровать их азбукой Морзе", correct: false },
            { text: "Только для аккаунтов с 2FA", correct: false }
        ],
        comment: "Физическая запись безопаснее, чем хранение в незашифрованном файле на компьютере. Главное — доступность только для вас.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое "брутфорс-атака"?`,
        answers: [
            { text: "Обман пользователя через фишинговое письмо", correct: false },
            { text: "Автоматический перебор паролей для подбора доступа", correct: true },
            { text: "Вирус, который крадет пароли из браузера", correct: false },
            { text: "Метод взлома через уязвимость в сайте", correct: false }
        ],
        comment: "Злоумышленники используют программы, которые перебирают тысячи комбинаций паролей в секунду. Сложный пароль значительно замедляет такую атаку.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Зачем нужна резервная почта или номер телефона при регистрации?`,
        answers: [
            { text: "Чтобы получать рекламные рассылки", correct: false },
            { text: "Для восстановления доступа при утере пароля или взломе", correct: true },
            { text: "Чтобы сайт мог продать ваши данные", correct: false },
            { text: "Это необязательно, можно пропустить", correct: false }
        ],
        comment: "Резервные контакты — это 'запасной ключ' для восстановления аккаунта. Убедитесь, что они тоже защищены!",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Безопасно ли сохранять пароли в браузере?`,
        answers: [
            { text: "Да, это абсолютно безопасно на любом устройстве", correct: false },
            { text: "Только на личном устройстве с надежным паролем на вход в систему", correct: true },
            { text: "Нет, браузеры никогда не шифруют пароли", correct: false },
            { text: "Да, но только если включен режим инкогнито", correct: false }
        ],
        comment: "Браузеры шифруют сохраненные пароли, но если кто-то получит доступ к вашему разблокированному устройству — он сможет их увидеть.",
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

    const supportNumbers = `
        <div class="support-numbers">
            <p>Если вы стали жертвой взлома или мошенников — действуйте быстро!</p>
            <p>Департамент по кибербезопасности МВД РБ: <strong>102</strong> (круглосуточно)</p>
            <p>Единый портал электронных услуг: <strong>portal.gov.by</strong></p>
            <p>Национальный центр защиты персональных данных: <strong>www.pd.gov.by</strong></p>
            <p>Ваш банк (горячая линия на обратной стороне карты) — при подозрении на кражу средств</p>
            <p>Белорусская ассоциация банков: консультации по безопасности онлайн-платежей</p>
            <p>Антивирусные лаборатории (Kaspersky, Dr.Web) — помощь при заражении устройств</p>
            <p><strong>Помните:</strong> чем быстрее вы смените пароль и сообщите о инциденте, тем выше шансы спасти аккаунт!</p>
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
