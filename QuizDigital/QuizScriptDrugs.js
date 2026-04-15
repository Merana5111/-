const questions = [
    {
        question: `Почему важно регулярно обновлять ОС и приложения?`,
        answers: [
            {text : "Чтобы интерфейс выглядел современнее.", correct: false},
            {text : "Обновления закрывают уязвимости безопасности.", correct: true},
            {text : "Чтобы освободить место на устройстве.", correct: false},
            {text : "Это необязательно, если всё работает.", correct: false},
        ],
        comment: "Злоумышленники активно эксплуатируют известные уязвимости в устаревших версиях ПО. Обновление — это 'заплатка' от взлома.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Чем опасен открытый публичный Wi-Fi?`,
        answers: [
            {text : "Он медленный и нестабильный.", correct: false},
            {text : "Злоумышленник может перехватить ваши данные.", correct: true},
            {text : "Он автоматически устанавливает вирусы.", correct: false},
            {text : "Он быстро разряжает батарею.", correct: false},
        ],
        comment: "В открытых сетях трафик часто не шифруется. Используйте VPN или мобильный интернет для важных операций (банк, почта).",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Приложение "Фонарик" запрашивает доступ к контактам. Что делать?`,
        answers: [
            {text : "Дать доступ — вдруг он нужен для работы.", correct: false},
            {text : "Отказать — это избыточные права для такой функции.", correct: true},
            {text : "Дать доступ, но потом удалить приложение.", correct: false},
            {text : "Перезагрузить телефон и попробовать снова.", correct: false},
        ],
        comment: "Принцип минимальных привилегий: приложение должно запрашивать только те права, которые реально нужны для его функций. Избыточные права — признак шпионажа.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое вредоносное ПО (малварь)?`,
        answers: [
            {text : "Программы для ускорения работы устройства.", correct: false},
            {text : "Программы для кражи данных, слежки или повреждения системы.", correct: true},
            {text : "Рекламные баннеры в браузере.", correct: false},
            {text : "Временные файлы, замедляющие систему.", correct: false},
        ],
        comment: "К малвари относятся вирусы, трояны, шпионы, шифровальщики. Они могут украсть пароли, заблокировать файлы или включить камеру без вашего ведома.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Зачем нужна антивирусная защита на смартфоне?`,
        answers: [
            {text : "Смартфоны не могут заразиться вирусами.", correct: false},
            {text : "Мобильные устройства тоже уязвимы к вредоносным приложениям.", correct: true},
            {text : "Антивирус нужен только на старых моделях.", correct: false},
            {text : "Он только замедляет работу телефона.", correct: false},
        ],
        comment: "Особенно это важно на Android, где можно устанавливать приложения из сторонних источников. Антивирус блокирует фишинг и скрытые угрозы.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое резервное копирование (бэкап) и зачем оно нужно?`,
        answers: [
            {text : "Копия паролей для восстановления.", correct: false},
            {text : "Копия важных данных на случай потери, поломки или атаки.", correct: true},
            {text : "Дубликат операционной системы.", correct: false},
            {text : "Архив удаленных сообщений.", correct: false},
        ],
        comment: "При атаке шифровальщика (ransomware) только актуальный бэкап позволит восстановить файлы без выкупа. Храните копии в облаке и на внешнем диске.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Безопасно ли скачивать программы с торрентов или непроверенных сайтов?`,
        answers: [
            {text : "Да, если файл имеет расширение .exe.", correct: false},
            {text : "Нет, такие файлы часто содержат вирусы или шпионское ПО.", correct: true},
            {text : "Да, если скачать через VPN.", correct: false},
            {text : "Только если сайт выглядит официально.", correct: false},
        ],
        comment: "Пиратский софт — один из главных каналов распространения малвари. Взломанные программы часто содержат 'сюрпризы': майнеры, стилеры паролей, бэкдоры.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что такое "цифровой след"?`,
        answers: [
            {text : "История поиска в браузере.", correct: false},
            {text : "Совокупность данных о ваших действиях в интернете: посты, лайки, покупки, геолокация.", correct: true},
            {text : "Отпечаток пальца для разблокировки телефона.", correct: false},
            {text : "Лог-файлы на серверах провайдера.", correct: false},
        ],
        comment: "Цифровой след может использоваться для профилирования, таргетированной рекламы, а в некоторых случаях — для дискриминации, шантажа или кражи личности.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Нужно ли заклеивать веб-камеру на ноутбуке?`,
        answers: [
            {text : "Нет, это паранойя.", correct: false},
            {text : "Да, это простая защита от несанкционированного доступа к камере.", correct: true},
            {text : "Только если вы известный человек.", correct: false},
            {text : "Только на рабочих устройствах.", correct: false},
        ],
        comment: "Даже с антивирусом уязвимости могут позволить злоумышленнику включить камеру без вашего ведома. Наклейка — дешевый и эффективный барьер.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что нужно сделать со старым смартфоном перед продажей?`,
        answers: [
            {text : "Просто удалить все фото и контакты.", correct: false},
            {text : "Выполнить полный сброс до заводских настроек и выйти из всех аккаунтов.", correct: true},
            {text : "Отдать как есть — новый владелец сам настроит.", correct: false},
            {text : "Удалить только приложения банков.", correct: false},
        ],
        comment: "Простое удаление файлов не гарантирует их полное исчезновение. Сброс + шифрование + выход из аккаунтов — обязательный минимум для защиты ваших данных.",
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

    const supportNumbers = `
        <div class="support-numbers">
            <p>Если вы стали жертвой кибермошенников или обнаружили утечку данных — не молчите!</p>
            <p>Департамент по кибербезопасности МВД РБ: <strong>102</strong> (круглосуточно)</p>
            <p>Единый портал электронных услуг: <strong>portal.gov.by</strong></p>
            <p>Национальный центр защиты персональных данных: <strong>www.pd.gov.by</strong></p>
            <p>Белорусская ассоциация банков: консультации по безопасности онлайн-платежей</p>
            <p>Антивирусные лаборатории (Kaspersky, Dr.Web) — бесплатная помощь при заражении</p>
            <p><strong>Помните:</strong> чем быстрее вы сообщите о инциденте, тем выше шансы вернуть доступ или средства!</p>
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
            <iframe src="https://www.youtube.com/embed/lz_3EgpQAcQ?rel=0" 
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
            modalIframe.src = 'https://www.youtube.com/embed/lz_3EgpQAcQ?rel=0';
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
