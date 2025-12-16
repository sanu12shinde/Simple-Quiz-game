const questions=[
    {
        question:" The external javascript file contain the script tag ?",
        answers:[
            {
                text: "false", correct: false
            },
            {
                text: "true", correct: true
            },
            // {
            //     text: "elephant", correct: false
            // },
            // {text: "girafee", correct: false}

        ]
    },
    {
        question:"How do you write 'Hello World' in an alert box ?",
        answers:[
            {
                text: "alert('Hello World');", correct: true
            },
            {
                text: "msgBox('Hello World');", correct: false
            },
            {
                text: "alertBox('Hello world');", correct: false
            },
            {text: "msg('Hello World');", correct: false}

        ]
    },
    {
        question:"How do you  create a function in javascript ?",
        answers:[
            {
                text: "function myfunction()", correct: true
            },
            {
                text: "function=myfunction()", correct: false
            },
            {
                text: "function:myfunction()", correct: false
            },
            {text: "function, myfunction()", correct: false}

        ]
    },
    {
        question:"How do you write 'Hello World' in an alert box ?",
        answers:[
            {
                text: "alert('Hello World');", correct: true
            },
            {
                text: "msgBox('Hello World');", correct: false
            },
            {
                text: "alertBox('Hello world');", correct: false
            },
            {text: "msg('Hello World');", correct: false}

        ]
    },
    {
        question:" What does SQL stand for?",
        answers:[
            {
                text: "Structured Query Language", correct: true
            },
            {
                text: "Structure Question Language", correct: false
            },
            {
                text: "Structure Question Language", correct: false
            },
            {text: "Structure Query Logarithm", correct: false}

        ]
    },
    {
        question:" Which SQL statement is used to extract data from a database?",
       answers:[
            {
                text: "SELECT",correct: true 
            },
            {
                text:"OPEN",correct:false
            },
            {
                text: "GET",correct:false
            },
            {text: "EXTRACT",correct:false}

        ]
    },


];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextbutton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + " ." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button. classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextbutton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild( answerButtons.firstChild);

    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect=selectedBtn .dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
}

function showscore(){
    resetState();
    questionElement.innerHTML =`you scored ${score} outof ${questions.length}!`;
    nextbutton.innerHTML="play again";
    nextbutton.style.display="block";

}
 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showscore();
    }
 }

nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();