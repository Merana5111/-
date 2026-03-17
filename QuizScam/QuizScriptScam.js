const questions = [
    {
        question:`Вам приходит СМС: «Ваша карта заблокирована. Перезвоните по номеру 8-903-...». Что делать?`,
        answers: [
            {text : "Срочно перезвонить, чтобы разблокировать.", correct: false},
            {text : "Позвонить в банк по номеру, указанному на самой карте.", correct: true},
            {text : "Отправить ответное СМС с кодом.", correct: false},
            {text : "Набрать номер с городского телефона, это дешевле.", correct: false},
        ],
        comment: "Мошенники создают поддельные номера, похожие на банковские. Настоящий номер банка всегда указан на оборотной стороне карты. Никогда не перезванивай по номерам из подозрительных сообщений.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Что такое фишинг?`,
        answers: [
            {text : "Вид спортивной рыбалки.", correct: false},
            {text : "Рассылка спама по электронной почте.", correct: false},
            {text : "Создание сайтов-двойников для кражи паролей и данных карт.", correct: true},
            {text : "Способ взлома Wi-Fi сетей.", correct: false},
        ],
        comment: "Фишинг (от англ. fishing — рыбалка) — это ловля твоих данных. Тебя заманивают на сайт-подделку, который выглядит точь-в-точь как настоящий, а когда ты вводишь пароль — он уходит к ворам.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Вам пишет «друг» ВКонтакте: «Срочно нужно 5000 рублей, голодаю, кинь на эту карту». Ваши действия?`,
        answers: [
            {text : "Кинуть деньги, друг в беде.", correct: false},
            {text : "Написать: «Держись, сейчас кину».", correct: false},
            {text : "Позвонить другу по телефону или задать личный вопрос, который знаете только вы двое.", correct: true},
            {text : "Попросить его скинуть фото паспорта.", correct: false},
        ],
        comment: "Аккаунты взламывают тысячами. Мошенники рассылают однотипные сообщения всем друзьям. Только личный звонок или проверочный вопрос (например, «как звали нашу учительницу в 5 классе?») спасет от потери денег.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Вы нашли Айфон последней модели за 50 рублей на Авито. Продавец просит предоплату на карту, чтобы «забронировать». Это:`,
        answers: [
            {text : "Отличная сделка, нужно срочно платить, пока не перехватили.", correct: false},
            {text : "Стоит попробовать поторговаться до 30.", correct: false},
            {text : "Скорее всего мошенник, так как цена нереально низкая и просят предоплату незнакомцу.", correct: true},
            {text : "Нужно съездить в другой город и купить лично.", correct: false},
        ],
        comment: "Правило 'бесплатный сыр только в мышеловке' работает и в интернете. Если цена в 20 раз ниже рыночной — это 100% развод. Никаких предоплат незнакомцам, только личная встреча или безопасная сделка.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Что такое двухфакторная аутентификация?`,
        answers: [
            {text : "Вход на сайт по паспорту.", correct: false},
            {text : "Подтверждение входа не только паролем, но и кодом из СМС или приложения.", correct: true},
            {text : "Два разных пароля для одного аккаунта.", correct: false},
            {text : "Проверка аккаунта администрацией.", correct: false},
        ],
        comment: "Двухфакторка — это второй замок на двери. Даже если мошенник узнает твой пароль, без твоего телефона с кодом он не войдет. Включи ее прямо сегодня в настройках всех соцсетей.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question: `Вы продаете диван. Приходит покупатель, переводит 500 рублей вместо 200 и просит разницу вернуть на карту друга. В чем подвох?`,
        answers: [
            {text : "Покупатель просто богатый и щедрый.", correct: false},
            {text : "Деньги могут быть украдены с чужой карты, и позже банк их спишет, а вы потеряете свои 3000.", correct: true},
            {text : "Это тест на честность.", correct: false},
            {text : "Он ошибся, нужно честно вернуть деньги.", correct: false},
        ],
        comment: "Схема 'ошибка оператора' — классика. Перевод делается с ворованной карты. Когда настоящий владелец оспорит операцию, банк спишет 500 рублей обратно. А 300, которые ты 'вернул' другу мошенника, уйдут в никуда.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Какой способ оплаты самый безопасный при покупке у незнакомца в интернете?`,
        answers: [
            {text : "Перевод на карту Сбербанка.", correct: false},
            {text : "Перевод на электронный кошелек (Qiwi).", correct: false},
            {text : "Оплата при получении на почте (наложенный платеж) или через безопасную сделку на площадке.", correct: true},
            {text : "Оплата криптовалютой.", correct: false},
        ],
        comment: "Безопасная сделка или наложенный платеж — твоя страховка. Ты платишь деньги только после того, как получил товар и проверил его. При переводе на карту частного лица вернуть деньги невозможно.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Что НЕЛЬЗЯ сообщать никому, даже сотруднику банка?`,
        answers: [
            {text : "Номер карты.", correct: false},
            {text : "Срок действия карты.", correct: false},
            {text : "Имя и фамилию владельца.", correct: false},
            {text : "Трехзначный код на обороте (CVV/CVC) и коды из СМС.", correct: true},
        ],
        comment: "Номер карты и срок действия нужны для перевода денег тебе. А CVV-код и СМС-пароли — это твоя цифровая подпись. Кто их знает — тот может украсть все деньги. Настоящий сотрудник банка никогда не спросит CVV или код из СМС.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Что делать, если вы поняли, что вас только что обманули и перевели деньги мошенникам?`,
        answers: [
            {text : "Удалить историю переписки, чтобы не расстраиваться.", correct: false},
            {text : "Написать гневный пост в соцсетях.", correct: false},
            {text : "Срочно позвонить в банк (заблокировать карту и попытаться отменить операцию), затем идти в полицию.", correct: true},
            {text : "Позвонить мошеннику и просить вернуть деньги.", correct: false},
        ],
        comment: "Каждая минута на счету. Первым делом звони в банк — иногда транзакцию можно отменить, если она еще в обработке. Потом сразу в полицию с чеками и перепиской. Пост в соцсетях денег не вернет.",
        image: "imgQuiz/popmessage.png",
        mobileImage: "imgQuiz/popmobile.png"
    },
    {
        question:`Вам пришло письмо «Вы выиграли миллион» от известного блогера. Чтобы получить приз, нужно оплатить налог в 30 рублей. Это?`,
        answers: [
            {text : "Стандартная процедура, плати и получай миллион.", correct: false},
            {text : "Развод. Мошенники забирают 30 рублей и исчезают.", correct: true},
            {text : "Так блогеры проверяют лояльность подписчиков.", correct: false},
            {text : "На это можно согласиться, если сумма налога маленькая.", correct: false},
        ],
        comment: "Если ты не участвовал в конкурсе — ты не мог выиграть. Налоги всегда вычитаются из приза, а не платятся отдельно 'на карту менеджера'. Мошенники рассчитывают на 'жадность' и желание получить халяву.",
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
            <iframe src="https://www.youtube.com/embed/LFEvVOf0suo?rel=0" 
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
