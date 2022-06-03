window.alert("Welcome to the JavaScript Quiz App! \n \nYour final score is determined by the number of questions answered correctly within the time limit. A skipped question will incur a penalty that reduces your remaining time.  Click START to begin.")
var skipButton = document.querySelector('#skip-btn')
var startButton = document.querySelector('#start-btn')
var questionContainer = document.querySelector('#question-container')
var questionEl = document.querySelector("#question")
var answerButton = document.querySelector("#answer-buttons")
var questionCounter = 0


// Loads question from the question array
function loadQuestion(question) { 

    // ensures there are questions remaining or sends to endGame if none
    if(questionCounter < questions.length) {

    //gets question from questions array
    questionEl.innerText = question.question

    // keeps track of which item in the answers array we are iterating through
    var arrayCount = 0

    //creates a button for each answer in the answers array with class of btn
    question.answers.forEach(function(answer){
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')       
    // copy data attribute from answers array to each button 
       button.dataset.correct = (question.answers[arrayCount].correct)
       
    // appends answer button to HTML          
    answerButton.appendChild(button)

    //Increments the answers array count
    arrayCount ++
    })
  } else {
    console.log("game over bucko!")
    // this will go to endGame function
 }
}


// if skip is pressed increments question counter by 1. Deletes the answer buttons and loads the next set
var skipQuestion = function() {
    console.log("skip button was clicked")
    questionCounter ++
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
    loadQuestion(questions[questionCounter])

}
// if an answer button is clicked checks to see if the button has the true data characteristic set 

var checkAnswer = function() {
    var checkAnswer = event.target.getAttribute("data-correct")
    if (checkAnswer == "true") {
        console.log("right answer")
    } else {
        console.log("wrong answer")
    }
}
var startGame = function() {
    startButton.classList.add("hide")
    questionContainer.classList.remove("hide")
    skipButton.classList.remove("hide")

}


// Event listeners
answerButton.addEventListener('click', checkAnswer)
skipButton.addEventListener('click', skipQuestion)
startButton.addEventListener('click', startGame)



//questions 
var questions = [
    {
        question: "This is the first question",
        answers: [
            {text: "q1 answer 1 text", correct: true},
            {text: "q1 answer 2 text", correct: false},
            {text: "q1 answer 3 text", correct: false},
            {text: "q1 answer 4 text", correct: false}
        
        ]
    },
    {
        question: "This is the second question",
        answers: [
            {text: "q2 answer 1 text", correct: false},
            {text: "q2 answer 2 text", correct: true},
            {text: "q2 answer 3 text", correct: false},
            {text: "q2 answer 4 text", correct: false}
        
        ]
    },
    {
        question: "This is the third question",
        answers: [
            {text: "q3 answer 1 text", correct: false},
            {text: "q3 answer 2 text", correct: false},
            {text: "q3 answer 3 text", correct: true},
            {text: "q3 answer 4 text", correct: false}
        
        ]
    },
    {
        question: "This is the fourth question",
        answers: [
            {text: "q3 answer 1 text", correct: false},
            {text: "q3 answer 2 text", correct: false},
            {text: "q3 answer 3 text", correct: false},
            {text: "q3 answer 4 text", correct: true}
        
        ]
    }
]
    
    loadQuestion(questions[questionCounter])