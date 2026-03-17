const questions = [
    {
        question:`Что такое кибербуллинг?`,
        answers: [
            {text : "Обсуждение фильмов и музыки в тематическом чате.", correct: false},
            {text : "Целенаправленные оскорбления, угрозы и травля с помощью цифровых устройств.", correct: true},
            {text : "Случайный конфликт в комментариях, который закончился через 5 минут.", correct: false},
            {text : "Реклама товаров в социальных сетях.", correct: false},
        ],
        comment: "По статистике, 37% молодых людей сталкивались с кибербуллингом. Самое опасное — травля не прекращается после школы, а продолжается онлайн 24/7.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Какое из действий НЕ является кибербуллингом?`,
        answers: [
            {text : "Распространение фото интимного характера бывшего партнера без его согласия.", correct: false},
            {text : "Создание фейковой страницы человека, чтобы писать от его имени глупости.", correct: false},
            {text : "Систематические оскорбления в личных сообщениях.", correct: false},
            {text : "Учитель указывает на ошибки в домашнем задании в школьном чате.", correct: true},
        ],
        comment: "Важно отличать конструктивную критику от травли. Кибербуллинг всегда направлен на унижение личности, а не на улучшение результатов.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Ваш одноклассник создал мем с вашей фотографией, и весь класс смеется. Вам обидно. Что делать?`,
        answers: [
            {text : "Сделать ответный мем, чтобы посмеялись над ним.", correct: false},
            {text : "Удалить свою страницу, чтобы никто не мог выложить новое фото.", correct: false},
            {text : "Сказать однокласснику, что вам неприятно, а если не поймет — обратиться к классному руководителю.", correct: true},
            {text : "Смеяться вместе со всеми, чтобы не показаться слабым.", correct: false},
        ],
        comment: "Игнорирование работает редко. Лучшая стратегия — твердо сказать о своих чувствах. 80% буллинга прекращается после вмешательства взрослых.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Почему кибербуллинг может быть опаснее, чем травля в реальной жизни?`,
        answers: [
            {text : "Обидчика нельзя ударить в ответ.", correct: false},
            {text : "Он происходит 24/7, так как интернет всегда под рукой, а свидетелей могут быть тысячи.", correct: true},
            {text : "Он всегда анонимный.", correct: false},
            {text : "За него не наказывают по закону.", correct: false},
        ],
        comment: "В реальной жизни жертва может уйти домой и отдохнуть. В интернете травля следует за тобой в телефон, создавая постоянное давление.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Если неизвестные начали угрожать вам расправой в социальной сети, ваши первые действия:`,
        answers: [
            {text : "Начать угрожать в ответ.", correct: false},
            {text : "Сделать скриншоты переписки, заблокировать обидчика и сообщить родителям или в полицию.", correct: true},
            {text : "Написать жалобу в техподдержку, но родителям не говорить, чтобы не ругали за интернет.", correct: false},
            {text : "Удалить диалог и забыть, надеясь, что само исправится.", correct: false},
        ],
        comment: "Скриншоты — главное доказательство. В Беларуси предусмотрена ответственность за оскорбления и угрозы, вплоть до уголовной (ст. 186 УК РБ за оскорбление).",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Вы увидели, что в комментариях под постом известного блогера травят девочку за внешность. Ваши действия?`,
        answers: [
            {text : "Написать девочке поддержку в личные сообщения, а на агрессоров нажать «Пожаловаться».", correct: true},
            {text : "Написать, что она сама виновата, раз выложила фото.", correct: false},
            {text : "Пройти мимо, меня это не касается.", correct: false},
            {text : "Присоединиться к травле, чтобы быть как все.", correct: false},
        ],
        comment: "Исследования показывают: даже одно сообщение поддержки снижает уровень стресса у жертвы на 30%. Ты можешь спасти чей-то день.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Что такое «буллицид»?`,
        answers: [
            {text : "Вид компьютерной игры.", correct: false},
            {text : "Самоубийство, совершенное в результате длительной травли.", correct: true},
            {text : "Группа людей, занимающихся травлей.", correct: false},
            {text : "Программа для защиты от кибербуллинга.", correct: false},
        ],
        comment: "К сожалению, в Беларуси, как и во всем мире, фиксируются случаи детских суицидов из-за травли. Это не просто 'шутки' — это вопрос жизни и смерти.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Кто может быть жертвой кибербуллинга?`,
        answers: [
            {text : "Только дети, которые не умеют дать сдачи.", correct: false},
            {text : "Только те, у кого мало друзей в реальной жизни.", correct: false},
            {text : "Любой активный пользователь интернета.", correct: true},
            {text : "Только публичные люди (блогеры, актеры).", correct: false},
        ],
        comment: "Жертвой может стать кто угодно: от обычного школьника до известного политика. Кибербуллинг не выбирает по возрасту или статусу.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Можно ли привлечь кибербуллера к ответственности по закону в Беларуси?`,
        answers: [
            {text : "Да, за оскорбления или доведение до самоубийства предусмотрена ответственность вплоть до уголовной.", correct: true},
            {text : "Нет, интернет — зона без правил.", correct: false},
            {text : "Да, но только если буллер старше 18 лет.", correct: false},
            {text : "Нет, максимальное что грозит — блокировка страницы.", correct: false,}
        ],
        comment: "В Беларуси за оскорбление предусмотрен штраф или административный арест. Если же травля привела к тяжким последствиям, наступает уголовная ответственность.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Какая черта характера помогает противостоять кибербуллингу?`,
        answers: [
            {text : "Агрессивность.", correct: false},
            {text : "Умение не принимать всё на свой счет и обращаться за помощью.", correct: true},
            {text : "Скрытность.", correct: false},
            {text : "Желание нравиться всем.", correct: false},
        ],
        comment: "Психологическая устойчивость — главный щит. Важно помнить: проблема не в тебе, а в агрессоре. 9 из 10 буллеров сами имеют психологические проблемы.",
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
            <iframe src="https://www.youtube.com/embed/exmFZkWP3lc?rel=0" 
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
            modalIframe.src = 'https://youtu.be/exmFZkWP3lc?si=A1t3r1l-KEnrNSLU';
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
