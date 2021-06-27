const quizData =[
{
   question:  "How old is Jason Todler?",
   a: '10',
   b: '22',
   c: '43',
   d: 'none of the above',
   correct: 'c'

},{
    question: 'What is the most used local language in South Africa?',
    a: 'Ndebele',
    b: 'Tswana',
    c: 'Zulu',
    d: 'Afrikaans',
    correct: 'd'
},
{
    question: 'Who is the President of South Africa?',
    a:'Ace Magashule',
    b: 'Cyril Ramaphosa',
    c: 'Julius Malema',
    d: 'Menzi Kubheka',
    correct: 'b'
},
{
    question: 'What is the capital city of Malawi?',
    a: 'Lilongwe',
    b: 'Luanda',
    c: 'Maputo',
    d: 'Harare',
    correct: 'a'
},
{
    question: 'Who is the founder of Econet Wireless?',
    a: 'Strive Masiyiwa',
    b: 'Nigel Chanakira',
    c: 'Bertha Mapfumo',
    d: 'Anashe Makoni',
    correct: 'a'
}
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl= document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   

    
}
function getSelected() {
   
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;

        }
    });
    return  answer;
    
}

function  deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    console.log(answer);

    if(answer)
     {
    if(answer === quizData[currentQuiz].correct)
    {
        score++;
    }

        currentQuiz++;
        
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
       //
       else {
           
            quiz.innerHTML = 
            `<h2> You answered correctly 
            ${score} / ${quizData.length} questions. </h2>
            <button onClick="location.reload()"> Reload </button>`
}
      
    }

});
