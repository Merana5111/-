const questions = [
    {
        question:`Что содержится в паре вейпа?`,
        answers: [
            {text : "Чистый водяной пар, безопасный для окружающих.", correct: false},
            {text : "Глицерин, пропиленгликоль, ароматизаторы и часто никотин.", correct: true},
            {text : "Лекарственные травы.", correct: false},
            {text : "Витамины и минералы.", correct: false},
        ],
        comment: "Исследования показывают: в паре содержится более 30 химических соединений, включая формальдегид и ацетальдегид. Даже помеченные как 'безникотиновые', жидкости часто содержат этот яд.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Почему вейпы особенно опасны для подростков?`,
        answers: [
            {text : "Они очень дорого стоят.", correct: false},
            {text : "Они пахнут слишком сладко, привлекая внимание учителей.", correct: false},
            {text : "Они не опаснее, чем жевательная резинка.", correct: false},
            {text : "Они вызывают привыкание быстрее, чем сигареты, и ухудшают память и концентрацию внимания у незрелого мозга.", correct: true},
        ],
        comment: "Мозг подростка развивается до 25 лет. Никотин нарушает этот процесс, 'консервируя' его в состоянии тревожности и импульсивности. Зависимость формируется в 4 раза быстрее, чем у взрослых.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Как называется болезнь легких, напрямую связанная с курением вейпов?`,
        answers: [
            {text : "Бронхит.", correct: false},
            {text : "Пневмония.", correct: false},
            {text : "Попкорновая болезнь легких (облитерирующий бронхиолит).", correct: true},
            {text : "Эмфизема.", correct: false},
        ],
        comment: "Диацетил в составе 'сладких' жидкостей вызывает рубцевание мелких дыхательных путей. Легкие перестают пропускать воздух — это необратимо, и спасти может только пересадка.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Помогают ли вейпы бросить курить обычные сигареты?`,
        answers: [
            {text : "Да, это официальный метод, одобренный Минздравом.", correct: false},
            {text : "Нет, это просто замена одной зависимости на другую, часто с большим количеством никотина.", correct: true},
            {text : "Помогают, если курить ментоловые жидкости.", correct: false},
            {text : "Да, если курить безникотиновые жидкости.", correct: false},
        ],
        comment: "Всемирная организация здравоохранения не рекомендует вейпы как средство отказа от курения. 90% людей, пытавшихся 'заместить', продолжают курить оба продукта одновременно.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Правда ли, что безникотиновые жидкости абсолютно безвредны?`,
        answers: [
            {text : "Да, раз нет никотина, то нет вреда.", correct: false},
            {text : "Нет, продукты нагрева глицерина и ароматизаторов могут быть токсичны и вызывать аллергию и раздражение легких.", correct: true},
            {text : "Да, они даже полезны для голоса.", correct: false},
            {text : "Вредны, только если парить каждый день.", correct: false},
        ],
        comment: "Термическое разложение глицерина и пропиленгликоля выделяет акролеин — токсичное вещество, использовавшееся как химическое оружие в Первую мировую. Никотин здесь не главная угроза.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Из чего сделана жидкость для вейпа?`,
        answers: [
            {text : "Из пропиленгликоля, растительного глицерина, ароматизаторов и (не всегда) никотина.", correct: true},
            {text : "Из воды и спирта.", correct: false},
            {text : "Из масла и никотина.", correct: false},
            {text : "Из расплавленного сахара.", correct: false},
        ],
        comment: "Смесь этих компонентов при нагреве превращается в аэрозоль, содержащий микрочастицы металлов (свинец, никель) из спирали нагревателя. С каждым 'паром' ты вдыхаешь мелкодисперсную пыль.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Что такое «солевой никотин» или «поды»?`,
        answers: [
            {text : "Название брендов одежды.", correct: false},
            {text : "Виды вейп-устройств, которые часто содержат большое количество никотина в виде солей.", correct: true},
            {text : "Жидкости без никотина.", correct: false},
            {text : "Способы затяжки.", correct: false},
        ],
        comment: "Солевой никотин химически модифицирован, чтобы проникать в кровь быстрее и в более высоких дозах без жесткого удара по горлу. Одна 'подик' может равняться пачке сигарет по крепости.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Может ли вейп взорваться?`,
        answers: [
            {text : "Нет, это миф.", correct: false},
            {text : "Может, если его уронить в воду.", correct: false},
            {text : "Да, из-за перегрева аккумулятора или его замыкания были случаи взрывов в кармане и во рту.", correct: true},
            {text : "Может, если использовать некачественную жидкость.", correct: false},
        ],
        comment: "В отличие от телефонов, в вейпах нет жестких стандартов безопасности аккумуляторов. Ежегодно фиксируются десятки случаев взрывов, приводящих к переломам челюсти и ожогам.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Влияет ли пар от вейпа на окружающих (пассивное курение)?`,
        answers: [
            {text : "Да, в выдыхаемом паре содержатся никотин и мелкодисперсные частицы, которые оседают в легких окружающих.", correct: true},
            {text : "Нет, это же не дым.", correct: false},
            {text : "Влияет, только если парить в закрытом помещении.", correct: false},
            {text : "Влияет, только если окружающие — дети.", correct: false}
        ],
        comment: "Концентрация некоторых токсинов в 'пассивном паре' может превышать концентрацию в 'активном'. Находясь рядом с вейпером, вы тоже вдыхаете никотин и тяжелые металлы.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Что из перечисленного является ПОСЛЕДСТВИЕМ курения вейпов?`,
        answers: [
            {text : "Улучшение работы легких.", correct: false},
            {text : "Никотиновая зависимость, проблемы с сосудами и риск развития попкорновой болезни легких.", correct: true},
            {text : "Отбеливание зубов.", correct: false},
            {text : "Ускорение метаболизма и похудение.", correct: false},
        ],
        comment: "Никотин сужает сосуды, вызывая эректильную дисфункцию у юношей и преждевременное старение кожи у девушек. 'Сухость во рту' — лишь вершина айсберга обезвоживания организма.",
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
            <iframe src="https://www.youtube.com/embed/PBR-Yev5vO8?rel=0" 
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
