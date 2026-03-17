const questions = [
    {
        question:`Что означает термин «селфхарм» (самоповреждение)?`,
        answers: [
            {text : "Нанесение татуировок в домашних условиях.", correct: false},
            {text : "Умышленное повреждение своего тела (порезы, ожоги, удары) по причинам чаще всего без суицидальных намерений.", correct: true},
            {text : "Расстройства приёма пищи.", correct: false},
            {text : "Желание изменить внешность с помощью пластической хирургии.", correct: false},
        ],
        comment: "Важно понимать: селфхарм — это способ справиться с невыносимой душевной болью, а не просто желание навредить себе. Это крик о помощи, который нельзя игнорировать.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Почему опасно ставить лайки или делать репосты фото с порезами?`,
        answers: [
            {text : "За это могут заблокировать аккаунт.", correct: false},
            {text : "Это «засоряет» ленту друзей.", correct: false},
            {text : "Для человека в кризисе лайк может стать знаком одобрения его действий и усилить желание повторять их.", correct: true},
            {text : "Это не опасно, если фото эстетично.", correct: false},
        ],
        comment: "Лайк = поддержка. Для того, кто причиняет себе боль, лайк под фото с порезом — это 'зеленый свет' от общества, что усиливает его опасное поведение.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Вы наткнулись на паблик, где публикуют фото порезов и советы, как скрыть их от родителей. Ваши действия?`,
        answers: [
            {text : "Подписаться, чтобы быть в курсе.", correct: false},
            {text : "Пожаловаться на сообщество администрации сайта, так как оно распространяет опасный контент.", correct: true},
            {text : "Написать гневный комментарий и переругаться с админами.", correct: false},
            {text : "Выйти из паблика и забыть, это не моя проблема.", correct: false},
        ],
        comment: "Жалоба (репорт) — это не 'стукачество', а способ сделать интернет безопаснее. Такие сообщества подталкивают подростков к повторению опасных действий.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Чем отличается пост о помощи от пропаганды селфхарма?`,
        answers: [
            {text : "В посте о помощи человек обычно говорит о чувствах и просит поддержки, а в пропаганде — призывает повторять или романтизирует боль.", correct: true},
            {text : "Пропаганда всегда содержит мат, а пост о помощи написан красиво.", correct: false},
            {text : "Ничем, любой такой контент нужно удалять.", correct: false},
            {text : "В посте о помощи всегда есть фото, а в пропаганде только текст.", correct: false},
        ],
        comment: "Главное различие — цель. Если автор ищет поддержку, чтобы справиться с болью — это крик о помощи. Если же он восхваляет раны как 'красоту' — это опасная пропаганда.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Что такое «триггер-варнинг»?`,
        answers: [
            {text : "Техника нанесения порезов.", correct: false},
            {text : "Название лекарства.", correct: false},
            {text : "Предупреждение перед постом/видео о том, что контент может вызвать тяжелые переживания.", correct: true},
            {text : "Призыв к действию.", correct: false},
        ],
        comment: "Триггер-варнинг (TW) — это маркер эмпатии. Он дает человеку выбор: подготовиться или не смотреть контент, который может усугубить его состояние.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Если ваш друг выложил в сеть фото с порезом и подписью «Всем всё равно», как лучше поступить?`,
        answers: [
            {text : "Написать в комментариях: «Соберись, тряпка, у всех проблемы».", correct: false},
            {text : "Игнорировать, он просто привлекает внимание.", correct: false},
            {text : "Отправить скриншот его родителям, чтобы наказали.", correct: false},
            {text : "Написать в личку: «Я вижу, что тебе больно. Я рядом. Может, сходим к психологу вместе?».", correct: true},
        ],
        comment: "Осуждение или игнорирование только убедят друга в его никчемности. Лучшее, что можно сделать — проявить заботу без осуждения и предложить реальную помощь.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Почему люди могут начать причинять себе боль?`,
        answers: [
            {text : "Потому что им это нравится физически.", correct: false},
            {text : "Чтобы получить новую порцию адреналина.", correct: false},
            {text : "Чтобы справиться с невыносимыми душевными переживаниями или чувством пустоты.", correct: true},
            {text : "Потому что это модно в ТикТоке.", correct: false},
        ],
        comment: "Физическая боль часто становится способом 'перебить' боль душевную или почувствовать себя живым в состоянии эмоционального ступора. Это всегда про внутренние страдания.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Верно ли утверждение: «Если подросток порезал руки, он точно хочет умереть»?`,
        answers: [
            {text : "Да, селфхарм всегда равен суициду.", correct: false},
            {text : "Нет, это просто способ привлечь внимание.", correct: false},
            {text : "Чаще всего это способ справиться с невыносимыми переживаниями, но это не равно желанию умереть, хотя риск суицида действительно повышен.", correct: true},
            {text : "Да, если порезы глубокие и их много.", correct: false},
        ],
        comment: "Селфхарм — это способ выжить здесь и сейчас, справиться с болью, а не умереть. Но он повышает риск суицида, поэтому так важна помощь специалиста.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`К кому можно обратиться за анонимной психологической помощью в трудной ситуации?`,
        answers: [
            {text : "К вахтёру в школе.", correct: false},
            {text : "В тематический паблик, где обсуждают селфхарм.", correct: false},
            {text : "На экстренную психологическую помощь по номеру 8-801-100-1616 (Беларусь).", correct: true},
            {text : "К случайным знакомым в интернете.", correct: false},
        ],
        comment: "Психологи на линии доверия проходят специальную подготовку. Там не осудят, не накричат и помогут найти выход. Звонок анонимный и бесплатный.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Что НЕ нужно делать, если вы увидели контент с призывом к самоповреждению?`,
        answers: [
            {text : "Отправить жалобу модераторам.", correct: false},
            {text : "Сделать репост к себе на стену с подписью «Посмотрите, какой ужас».", correct: true},
            {text : "Поддержать автора в личных сообщениях, если он ваш знакомый.", correct: false},
            {text : "Сообщить взрослым (родителям, психологу).", correct: false},
        ],
        comment: "Репостя такой контент, вы невольно становитесь распространителем опасной информации и можете спровоцировать срыв у кого-то из подписчиков. Лучший способ — репорт и личная поддержка (если это ваш друг).",
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
