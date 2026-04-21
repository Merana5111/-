const questions = [
    {
        question: `Почему опасно публиковать фото с геометками в реальном времени?`,
        answers: [
            { text: "Показывает, что вас нет дома.", correct: true },
            { text: "Это занимает много трафика.", correct: false },
            { text: "Соцсеть автоматически удаляет такие фото.", correct: false },
            { text: "Это нарушает авторские права.", correct: false }
        ],
        comment: "Публикуйте фото из отпуска уже после возвращения — так вы не «приглашаете» воров к себе домой. Геолокация в реальном времени раскрывает ваше местоположение посторонним.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Почему не стоит указывать в профиле дату рождения, школу или девичью фамилию матери?`,
        answers: [
            { text: "Это скучно и неинтересно.", correct: false },
            { text: "Помогают взломать аккаунт.", correct: true },
            { text: "Соцсеть заблокирует аккаунт за такую информацию.", correct: false },
            { text: "Это нарушает правила платформы.", correct: false }
        ],
        comment: "Многие сервисы используют эти данные как «секретные вопросы». Если они в открытом доступе, злоумышленник легко взломает ваш аккаунт или восстановит пароль.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что важно проверить в настройках приватности соцсети в первую очередь?`,
        answers: [
            { text: "Цвет темы оформления.", correct: false },
            { text: "Частоту уведомлений.", correct: false },
            { text: "Кто видит ваш профиль.", correct: true },
            { text: "Язык интерфейса.", correct: false }
        ],
        comment: "Ограничьте видимость профиля: «Только друзья» вместо «Все пользователи» — базовая мера защиты. Проверьте, кто может комментировать ваши посты и видеть ваши фото.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Можно ли доверять сторонним приложениям, которые просят доступ к аккаунту («Узнай, кто заходил»)?`,
        answers: [
            { text: "Да, если у приложения много скачиваний.", correct: false },
            { text: "Да, если приложение бесплатное.", correct: false },
            { text: "Только если оно от известного бренда.", correct: false },
            { text: "Нет, они крадут данные.", correct: true }
        ],
        comment: "Предоставляя доступ, вы фактически даёте приложению права действовать от вашего имени. Проверяйте разрешения: зачем «фонарику» доступ к вашим сообщениям?",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что делать, если друг прислал подозрительную ссылку в личном сообщении?`,
        answers: [
            { text: "Позвонить другу и спросить.", correct: true },
            { text: "Сразу перейти — вдруг это что-то важное.", correct: false },
            { text: "Переслать ссылку другим друзьям для проверки.", correct: false },
            { text: "Немедленно пожаловаться в поддержку соцсети.", correct: false }
        ],
        comment: "Аккаунт друга мог быть взломан. Мошенники рассылают фишинговые ссылки от имени реальных людей. Всегда перепроверяйте необычные сообщения через другой канал связи.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Почему опасно проходить викторины «Какой ты персонаж?» с вводом личных данных?`,
        answers: [
            { text: "Они скучные и отнимают время.", correct: false },
            { text: "Крадут ваши данные.", correct: true },
            { text: "Они автоматически подписывают вас на платные услуги.", correct: false },
            { text: "Они замедляют работу соцсети.", correct: false }
        ],
        comment: "Вводя имя, дату рождения, город, вы пополняете базу данных, которую могут использовать мошенники. «Бесплатный» тест часто стоит ваших персональных данных.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Как мошенники используют соцсети для социальной инженерии?`,
        answers: [
            { text: "Рассылают спам в комментариях.", correct: false },
            { text: "Взламывают сервера соцсети.", correct: false },
            { text: "Изучают вас, чтобы обмануть.", correct: true },
            { text: "Меняют ваш пароль через поддержку.", correct: false }
        ],
        comment: "Зная, где вы работаете, кто ваши друзья и чем увлекаетесь, злоумышленник может правдоподобно представиться «своим» и обмануть вас. Не делитесь лишним в открытом профиле.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Исчезают ли ваши данные после удаления аккаунта в соцсети?`,
        answers: [
            { text: "Да, всё удаляется мгновенно.", correct: false },
            { text: "Только если вы напишете в поддержку.", correct: false },
            { text: "Только фото, но не тексты.", correct: false },
            { text: "Часть данных остаётся.", correct: true }
        ],
        comment: "Перед удалением изучите политику платформы: что удаляется, что архивируется, что передается третьим лицам. Полное удаление данных может занять до 90 дней.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Зачем отключать автоматическую загрузку фото в облако и синхронизацию контактов?`,
        answers: [
            { text: "Чтобы экономить заряд батареи.", correct: false },
            { text: "Чтобы не тратить трафик.", correct: false },
            { text: "Для защиты от утечки данных.", correct: true },
            { text: "Это требование закона.", correct: false }
        ],
        comment: "Если облачный аккаунт скомпрометирован, злоумышленник получит доступ ко всему, что туда синхронизировалось. Контролируйте, что и куда загружается автоматически.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что делать в первую очередь, если ваш аккаунт в соцсети взломали?`,
        answers: [
            { text: "Написать пост «Меня взломали!».", correct: false },
            { text: "Сменить пароль и 2FA.", correct: true },
            { text: "Удалить аккаунт и создать новый.", correct: false },
            { text: "Игнорировать — само восстановится.", correct: false }
        ],
        comment: "Быстрая реакция минимизирует ущерб: смените пароль, завершите все сессии, проверьте, не привязаны ли чужие почты/телефоны. Затем предупредите друзей о взломе.",
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
        titleText = 'Ваша приватность под угрозой утечки!';
        imageSrc = 'imgQuiz/bad.jpg';
        mainText = 'Вы набрали всего ' + score + ' баллов. К сожалению, ваши знания о настройках приватности и защите личных данных пока недостаточны. Излишняя откровенность в профилях, геометки и открытые фото могут использовать мошенники, сталкеры или злоумышленники. Рекомендуем изучить основы цифровой приватности и пройти тест снова.';
    } else if (score >= 4 && score <= 6) {
        titleText = 'Неплохо, но есть «дыры» в приватности!';
        imageSrc = 'imgQuiz/normal.jpg';
        mainText = 'Вы набрали ' + score + ' баллов. Вы знаете базовые правила, но некоторые важные нюансы защиты профиля ускользнули. Повторите материал, чтобы надежно скрыть личную информацию от посторонних глаз и контролировать свой «цифровой след».';
    } else {
        titleText = 'Отлично! Вы — эксперт по приватности!';
        imageSrc = 'imgQuiz/good.jpg';
        mainText = 'Поздравляем! Вы набрали ' + score + ' баллов. Ваши знания помогут вам безопасно делиться моментами жизни, не раскрывая лишнего. Вы умеете настраивать видимость профиля и распознавать угрозы в безобидных публикациях. Так держать!';
    }

    if (score >= 7) {
        mainText += '<br><br>Помните: приватность — это ваш выбор. Регулярно проверяйте настройки доступа, отключайте синхронизацию лишних данных и не участвуйте в викторинах, собирающих персональную информацию.';
    }

    const hashtagHtml = '<h2 style="color: #2f2385; margin-bottom: 15px;">#КиберПраво</h2>';

    const supportNumbers = `
        <div class="support-numbers">
            <p>Если ваши личные данные утекли в сеть или аккаунт взломан — действуйте!</p>
            <p>МВД: 102</p>
            <p>ГУБОПиК: +375 (17) 218-71-89</p>
            <p>Департамент охраны: +375 (17) 309-77-01</p>
            <p>CERT.BY: +375 (17) 327-27-01</p>
            <p>Горячая линия: +375 (17) 390-22-72</p>
            <p><strong>Помните:</strong> чем быстрее вы смените пароль и ограничите доступ, тем меньше ущерба!</p>
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
            <iframe src="https://www.youtube.com/embed/-f2AIfRAZRY?rel=0" 
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
            modalIframe.src = 'https://www.youtube.com/embed/-f2AIfRAZRY?rel=0';
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
