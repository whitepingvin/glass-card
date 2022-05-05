const quizData = [
    {
        question: "Что означает HTML?",
        a: "Helicopters Terminal Motorboats Lamborginis",
        b: "Hypertext Markup Laguage",
        c: "Hyperloop Machine Language",
        correct: "b",
    },
    {
        question: "Что означает CSS?",
        a: "Cascading Style Sheets",
        b: "Cars SUVs Sailboats",
        c: "Central Style Sheets",
        correct: "a",
    },
    {
        question: "В каком году появился JavaScript?",
        a: "1899",
        b: "2005",
        c: "1995",
        correct: "c",
    },
    {
        question: "Кто является автором языка JavaScript?",
        a: "Bill Gates",
        b: "Brendan Eich",
        c: "Steve Jobs",
        correct: "b",
    },
    {
        question: "На каком языке написан этот проект?",
        a: "JavaScript",
        b: "Ruby",
        c: "C++",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<div class="finish"><h2>Вы правильно ответили на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Пройти ещё раз</button></div>
            `;
        }
    }
});

