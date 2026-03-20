const questions = [
    {
        question:`Что такое наркотики?`,
        answers: [
            {text : "Способ расслабиться в компании.", correct: false},
            {text : "Яд, разрушающий организм и психику.", correct: true},
            {text : "Быстрое снятие стресса.", correct: false},
            {text : "Расширение сознания.", correct: false},
        ],
        comment: "Наркотики — это яды, которые медленно разрушают организм изнутри. Они вызывают необратимые изменения в мозге, печени, сердце и приводят к полной деградации личности.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Почему наркотики особенно опасны для подростков?`,
        answers: [
            {text : "У подростков быстрый метаболизм.", correct: false},
            {text : "Разрушают незрелый мозг.", correct: true},
            {text : "Сложнее достать деньги на дозу.", correct: false},
            {text : "Слабый иммунитет.", correct: false},
        ],
        comment: "Мозг подростка активно развивается до 20-25 лет. Наркотики разрушают нейронные связи, 'консервируя' психику в детском состоянии, вызывают шизофрению, паранойю и глубокую депрессию.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Что такое «передозировка»?`,
        answers: [
            {text : "Когда наркотик перестал действовать.", correct: false},
            {text : "Отказ организма: остановка дыхания и сердца.", correct: true},
            {text : "Глубокий сон для восстановления.", correct: false},
            {text : "Усиление кайфа в 10 раз.", correct: false},
        ],
        comment: "Передозировка может случиться даже с первого раза. Организм может просто не выдержать токсической атаки. Скорая помощь не всегда успевает — счет идет на минуты.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Можно ли попробовать один раз и не стать зависимым?`,
        answers: [
            {text : "Многие пробовали и бросили.", correct: false},
            {text : "Риск зависимости с первого раза.", correct: true},
            {text : "Можно с витаминами.", correct: false},
            {text : "Можно под контролем взрослых.", correct: false},
        ],
        comment: "90% наркоманов начинали с фразы «просто попробую». Зависимость — как минное поле: никогда не знаешь, взорвется ли с первого шага. Но ставки слишком высоки.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Бывают ли «легкие» наркотики без привыкания?`,
        answers: [
            {text : "В некоторых странах разрешены.", correct: false},
            {text : "Любые вызывают зависимость.", correct: true},
            {text : "Растительные существовали веками.", correct: false},
            {text : "Помогают творческим людям.", correct: false},
        ],
        comment: "Синтетические 'спайсы' в 5 раз сильнее марихуаны и убивают почки за полгода. 'Легких' наркотиков не бывает — бывает только 'легкое' отношение к своей жизни.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Что происходит с организмом?`,
        answers: [
            {text : "Появляется выносливость и сила.", correct: false},
            {text : "Разрушаются органы и психика.", correct: true},
            {text : "Организм очищается от шлаков.", correct: false},
            {text : "Улучшается память.", correct: false},
        ],
        comment: "Наркотики убивают медленно, но гарантированно. Средняя продолжительность жизни наркомана — 5-10 лет с момента начала употребления. Человек буквально сгорает заживо.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Почему люди начинают употреблять?`,
        answers: [
            {text : "Из любопытства или за компанию.", correct: true},
            {text : "Чтобы укрепить здоровье.", correct: false},
            {text : "Так прописал врач.", correct: false},
            {text : "Чтобы стать успешным.", correct: false},
        ],
        comment: "Чаще всего первый шаг делают из-за желания казаться взрослее или 'своим' в компании. Но расплата наступает мгновенно: за иллюзию 'крутости' приходится платить жизнью.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Как наркотики влияют на внешность?`,
        answers: [
            {text : "Кожа становится здоровой.", correct: false},
            {text : "Человек быстро стареет.", correct: true},
            {text : "Уходит лишний вес.", correct: false},
            {text : "Меняется только восприятие.", correct: false},
        ],
        comment: "За 1-2 года регулярного употребления 20-летний человек может выглядеть на 50. Наркотики убивают коллаген, разрушают зубы и превращают лицо в маску смерти.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Что такое ломка?`,
        answers: [
            {text : "Сильная боль без новой дозы.", correct: true},
            {text : "Легкая простуда.", correct: false},
            {text : "Выдумка врачей.", correct: false},
            {text : "Очищение организма.", correct: false}
        ],
        comment: "Ломка — это адская боль во всем теле. Наркоман готов на все, чтобы ее прекратить: украсть, убить, продать все, что есть. Ради одной минуты кайфа — годы мучений.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Чем заканчивается употребление?`,
        answers: [
            {text : "Тюрьма, психушка, смерть.", correct: true},
            {text : "Духовное просветление.", correct: false},
            {text : "Успех и большие деньги.", correct: false},
            {text : "Возврат к нормальной жизни.", correct: false},
        ],
        comment: "У наркомании три финала: передозировка со смертью, тюрьма за преступления ради дозы, или тяжелая инвалидность из-за разрушенного мозга и органов. Четвертого не дано.",
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