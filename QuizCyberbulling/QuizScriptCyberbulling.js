const questions = [
    {
        question: `Что означает термин «кибербуллинг»?`,
        answers: [
            { text: "Обсуждение фильмов в тематических пабликах.", correct: false },
            { text: "Травля и оскорбления с помощью цифровых устройств.", correct: true },
            { text: "Случайная ссора в комментариях под фото.", correct: false },
            { text: "Реклама и спам в социальных сетях.", correct: false }
        ],
        comment: "По статистике, 37% молодежи сталкивались с кибербуллингом. Опасность в том, что травля не прекращается после школы, а длится 24/7.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Какое действие не является кибербуллингом?`,
        answers: [
            { text: "Рассылка чужих интимных фото без согласия.", correct: false },
            { text: "Создание фейковой страницы для травли.", correct: false },
            { text: "Ежедневные оскорбления в личных сообщениях.", correct: false },
            { text: "Учитель указывает на ошибки в школьном чате.", correct: true }
        ],
        comment: "Важно отличать критику от травли. Кибербуллинг всегда направлен на унижение личности, а не на улучшение результатов.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Одноклассник выложил мем с вашим фото, и класс смеется. Вам обидно. Что делать?`,
        answers: [
            { text: "Создать ответный мем, чтобы проучить обидчика.", correct: false },
            { text: "Удалить страницу, чтобы не давать новых поводов.", correct: false },
            { text: "Сказать, что вам неприятно, или обратиться к учителю.", correct: true },
            { text: "Смеяться со всеми, чтобы не прослыть слабаком.", correct: false }
        ],
        comment: "Игнорирование редко помогает. Лучше твердо сказать о чувствах. 80% случаев травли прекращаются после вмешательства взрослых.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Почему кибербуллинг опаснее травли в реальной жизни?`,
        answers: [
            { text: "Обидчика нельзя наказать физически.", correct: false },
            { text: "Травля идет 24/7, а свидетелей — тысячи.", correct: true },
            { text: "Агрессор всегда остается анонимным.", correct: false },
            { text: "За это не наказывают по закону.", correct: false }
        ],
        comment: "В реальности жертва может уйти домой и отдохнуть. В сети травля преследует через телефон, создавая постоянное давление.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Неизвестные угрожают вам расправой в соцсети. Ваши первые действия:`,
        answers: [
            { text: "Начать угрожать им в ответ.", correct: false },
            { text: "Сделать скриншоты, заблокировать и сообщить родителям.", correct: true },
            { text: "Написать жалобу, но родителям не говорить.", correct: false },
            { text: "Удалить диалог и надеяться, что всё обойдется.", correct: false }
        ],
        comment: "Скриншоты — главное доказательство. В Беларуси за угрозы и оскорбления предусмотрена ответственность (ст. 186 УК РБ).",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `В комментариях у блогера травят девочку за внешность. Ваши действия?`,
        answers: [
            { text: "Написать ей поддержку в личку и пожаловаться на агрессоров.", correct: true },
            { text: "Написать, что она сама виновата, раз выложила фото.", correct: false },
            { text: "Пройти мимо, ведь меня это не касается.", correct: false },
            { text: "Присоединиться к травле, чтобы быть как все.", correct: false }
        ],
        comment: "Одно сообщение поддержки снижает уровень стресса у жертвы на 30%. Вы можете спасти чей-то день.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что означает термин «буллицид»?`,
        answers: [
            { text: "Название популярной компьютерной игры.", correct: false },
            { text: "Самоубийство в результате длительной травли.", correct: true },
            { text: "Группа людей, занимающихся травлей.", correct: false },
            { text: "Программа для защиты от кибербуллинга.", correct: false }
        ],
        comment: "В Беларуси фиксируются случаи детских суицидов из-за травли. Это не просто 'шутки', а вопрос жизни и смерти.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Кто может стать жертвой кибербуллинга?`,
        answers: [
            { text: "Только дети, которые не умеют дать сдачи.", correct: false },
            { text: "Только те, у кого мало друзей в жизни.", correct: false },
            { text: "Любой активный пользователь интернета.", correct: true },
            { text: "Только публичные люди: блогеры и актеры.", correct: false }
        ],
        comment: "Жертвой может стать любой: от школьника до политика. Кибербуллинг не выбирает по возрасту или статусу.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Можно ли наказать кибербуллера по закону в Беларуси?`,
        answers: [
            { text: "Да, вплоть до уголовной ответственности за травлю.", correct: true },
            { text: "Нет, интернет — это зона без правил.", correct: false },
            { text: "Да, но только если обидчику больше 18 лет.", correct: false },
            { text: "Нет, максимум — блокировка страницы.", correct: false }
        ],
        comment: "В РБ за оскорбление грозит штраф или арест. Если травля привела к тяжким последствиям, наступает уголовная ответственность.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Какая черта помогает противостоять кибербуллингу?`,
        answers: [
            { text: "Агрессивность и умение дать отпор.", correct: false },
            { text: "Умение не принимать на свой счет и просить помощи.", correct: true },
            { text: "Скрытность и нежелание делиться проблемами.", correct: false },
            { text: "Желание нравиться всем окружающим.", correct: false }
        ],
        comment: "Психологическая устойчивость — главный щит. Проблема не в жертве, а в агрессоре. 9 из 10 буллеров имеют проблемы с психикой.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    }
];

const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const startQuizBtn = document.getElementById('start-quiz-btn');
const welcomeModal = document.getElementById('welcome-modal');

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
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

        if (!quizStarted) {
            quizStarted = true;
            startQuiz();
        }
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });

    if (!quizStarted) {
        quizStarted = true;
        startQuiz();
    }
});

function startQuiz(){
    quizStarted = true;
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Далее";

    answerButtons.style.pointerEvents = 'auto';
    answerButtons.style.opacity = '1';

    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
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
    while(answerButtons.firstChild) {
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

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    showComment();

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Вы набрали ${score} из ${questions.length}!`;
    nextButton.innerHTML = "Играть снова";
    nextButton.style.display = "block";
    backtomenu.innerHTML = "На главную";
    backtomenu.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        shuffleArray(questions);
        startQuiz();
    }
});

shuffleArray(questions);

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

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

window.addEventListener('load', function() {
    const videoModal = document.querySelector('.video-modal');
    if (videoModal && window.innerWidth <= 768) {
        const modalContent = videoModal.querySelector('.video-modal-content');
        if (modalContent) {
            modalContent.style.width = '95%';
        }
    }
});

window.addEventListener('resize', function() {
    if (!commentPopup.classList.contains('hidden')) {
        showComment();
    }
});