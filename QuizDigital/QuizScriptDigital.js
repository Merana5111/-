const questions = [
    {
        question: `Почему важно регулярно обновлять ОС и приложения с учётом роста ИИ-угроз?`,
        answers: [
            {text: "Обновления закрывают уязвимости.", correct: true},
            {text: "Чтобы интерфейс выглядел современнее.", correct: false},
            {text: "Чтобы освободить место на устройстве.", correct: false},
            {text: "Это необязательно, если всё работает.", correct: false},
        ],
        comment: "Злоумышленники используют ИИ для автоматического поиска уязвимостей, поэтому регулярные обновления критически важны. Обновление — это 'заплатка' от взлома.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Чем опасен открытый публичный Wi-Fi в эпоху ИИ-слежки?`,
        answers: [
            {text: "Он медленный и нестабильный.", correct: false},
            {text: "Перехват данных в сети.", correct: true},
            {text: "Он автоматически устанавливает вирусы.", correct: false},
            {text: "Он быстро разряжает батарею.", correct: false},
        ],
        comment: "Злоумышленники, в том числе с помощью ИИ-инструментов, могут перехватывать незашифрованный трафик. Используйте VPN или мобильный интернет.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Приложение "Фонарик" с ИИ-функциями запрашивает доступ к контактам. Что делать?`,
        answers: [
            {text: "Дать доступ — вдруг он нужен для работы.", correct: false},
            {text: "Дать доступ, но потом удалить приложение.", correct: false},
            {text: "Отказать — права избыточны.", correct: true},
            {text: "Перезагрузить телефон и попробовать снова.", correct: false},
        ],
        comment: "Принцип минимальных привилегий: даже ИИ-приложения не должны запрашивать лишние права. Избыточные права — признак шпионажа.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое вредоносное ПО (малварь) и как ИИ усиливает его опасность?`,
        answers: [
            {text: "Программы для ускорения работы устройства.", correct: false},
            {text: "Рекламные баннеры в браузере.", correct: false},
            {text: "Временные файлы, замедляющие систему.", correct: false},
            {text: "Программы для кражи, слежки, вреда.", correct: true},
        ],
        comment: "К малвари относятся вирусы, трояны, шпионы, шифровальщики. ИИ может использоваться как для создания умных вирусов, так и для борьбы с ними.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Зачем нужна антивирусная защита на смартфоне, если ИИ создаёт новые вирусы?`,
        answers: [
            {text: "Смартфоны тоже уязвимы.", correct: true},
            {text: "Смартфоны не могут заразиться вирусами.", correct: false},
            {text: "Антивирус нужен только на старых моделях.", correct: false},
            {text: "Он только замедляет работу телефона.", correct: false},
        ],
        comment: "Особенно на Android, где можно устанавливать приложения из сторонних источников. Современные антивирусы используют ИИ для обнаружения новых угроз.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое резервное копирование (бэкап) и зачем оно нужно при атаках с использованием ИИ?`,
        answers: [
            {text: "Копия паролей для восстановления.", correct: false},
            {text: "Копия данных на случай потери.", correct: true},
            {text: "Дубликат операционной системы.", correct: false},
            {text: "Архив удалённых сообщений.", correct: false},
        ],
        comment: "При атаке шифровальщика (ransomware) только бэкап спасёт данные. ИИ может помочь в восстановлении, но лучше иметь копии.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Безопасно ли скачивать программы с торрентов или непроверенных сайтов, учитывая ИИ-маскировку малвари?`,
        answers: [
            {text: "Да, если файл имеет расширение .exe.", correct: false},
            {text: "Да, если скачать через VPN.", correct: false},
            {text: "Нет, файлы содержат вирусы.", correct: true},
            {text: "Только если сайт выглядит официально.", correct: false},
        ],
        comment: "Пиратский софт — главный канал малвари. ИИ-злоумышленники маскируют вредоносный код под легальные программы.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое "цифровой след" и как ИИ использует его против вас?`,
        answers: [
            {text: "История поиска в браузере.", correct: false},
            {text: "Отпечаток пальца для разблокировки телефона.", correct: false},
            {text: "Лог-файлы на серверах провайдера.", correct: false},
            {text: "Совокупность онлайн-действий", correct: true},
        ],
        comment: "Цифровой след используется для профилирования, таргетинга, а ИИ делает анализ таких данных массовым и дешёвым. Это угрожает приватности.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Нужно ли заклеивать веб-камеру на ноутбуке, если ИИ может найти уязвимости?`,
        answers: [
            {text: "Да, защита от взлома камеры.", correct: true},
            {text: "Нет, это паранойя.", correct: false},
            {text: "Только если вы известный человек.", correct: false},
            {text: "Только на рабочих устройствах.", correct: false},
        ],
        comment: "Даже с антивирусом ИИ-эксплойты могут включить камеру. Наклейка — дешёвый барьер.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что нужно сделать со старым смартфоном перед продажей, чтобы защитить данные от ИИ-восстановления?`,
        answers: [
            {text: "Просто удалить все фото и контакты.", correct: false},
            {text: "Удалить только приложения банков.", correct: false},
            {text: "Полный сброс и выход из аккаунтов.", correct: true},
            {text: "Отдать как есть — новый владелец сам настроит.", correct: false},
        ],
        comment: "Простое удаление не гарантирует исчезновение данных. ИИ может восстановить их. Сброс + шифрование + выход из аккаунтов — минимум.",
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
        titleText = 'Ваша цифровая защита под угрозой!';
        imageSrc = 'imgQuiz/bad.jpg';
        mainText = 'Вы набрали всего ' + score + ' баллов. К сожалению, ваши знания о цифровой гигиене пока недостаточны. Это опасно: простые ошибки (слабые пароли, отсутствие обновлений) делают вас легкой добычей для мошенников и хакеров. Рекомендуем внимательно изучить основы безопасности и пройти тест снова.';
    } else if (score >= 4 && score <= 6) {
        titleText = 'Неплохо, но есть уязвимые места!';
        imageSrc = 'imgQuiz/normal.jpg';
        mainText = 'Вы набрали ' + score + ' баллов. Вы знаете базовые правила, но некоторые важные нюансы цифровой гигиены ускользнули от вашего внимания. Повторите материал, чтобы надежно защитить свои данные, устройства и приватность в сети.';
    } else {
        titleText = 'Отлично! Вы — эксперт по кибербезопасности!';
        imageSrc = 'imgQuiz/good.jpg';
        mainText = 'Поздравляем! Вы набрали ' + score + ' баллов. Ваши знания помогут вам избежать фишинга, взломов и утечек данных. Вы умеете защищать себя и можете помочь друзьям настроить безопасность их устройств. Так держать!';
    }
    
    if (score >= 7) {
        mainText += '<br><br>Помните: безопасность — это процесс, а не разовое действие. Регулярно обновляйте ПО, используйте менеджер паролей и включайте двухфакторную аутентификацию везде, где это возможно.';
    }

    const hashtagHtml = '<h2 style="color: #2f2385; margin-bottom: 15px;">#КиберПраво</h2>';

    const supportNumbers = `
        <div class="support-numbers">
            <p>Если вы стали жертвой кибермошенников или обнаружили утечку данных — не молчите!</p>
            <p>МВД: 102</p>
            <p>ГУБОПиК: +375 (17) 218-71-89</p>
            <p>Департамент охраны: +375 (17) 309-77-01</p>
            <p>CERT.BY: +375 (17) 327-27-01</p>
            <p>Горячая линия: +375 (17) 390-22-72</p>
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
            <iframe src="https://www.youtube.com/embed/pSq17T44YRc?rel=0" 
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
            modalIframe.src = 'https://www.youtube.com/embed/pSq17T44YRc?rel=0';
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
