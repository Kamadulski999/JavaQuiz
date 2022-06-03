window.alert("Welcome to the JavaScript Quiz App! \n \nYour final score is determined by the number of questions answered correctly within the *** second time limit. A skipped question will incur a penalty of *** seconds. Click START to begin.")
var skipButton = document.querySelector('#skip-btn')
var questionContainer = document.querySelector('#question-container')
var questionEl = document.querySelector("#question")
var answerButton = document.querySelector("#answer-buttons")
var questionCounter = 0


// Loads question from the question array
function loadQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(function(answer){
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')
        button.classList.add('answer-btn')
     
            
        answerButton.appendChild(button)
    })
}


console.log("working")

// if skip is pressed increments question counter by 1. Deletes the answer buttons and loads the next set
var skipQuestion = function() {
    console.log("skip button was clicked")
    questionCounter ++
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
    loadQuestion(questions[questionCounter])

}
// if an answer button is clicked checks to see if answer is right or wrong 

var checkAnswer = function() {
    console.log("answer button was clicked")
}

skipButton.addEventListener('click', skipQuestion)
answerButton.addEventListener('click', checkAnswer)




var questions = [
    {
        question: "This is the first question",
        answers: [
            {text: "q1 answer 1 text", correct: true},
            {text: "q1 answer 2 text", correct: false},
            {text: "q1answer 3 text", correct: false},
            {text: "q1 answer 4 text", correct: false}
        
        ]
    },
    {
        question: "This is the second question",
        answers: [
            {text: "q2 answer 1 text", correct: true},
            {text: "q2 answer 2 text", correct: false},
            {text: "q2 answer 3 text", correct: false},
            {text: "q2 answer 4 text", correct: false}
        
        ]
    },
    {
        question: "This is the third question",
        answers: [
            {text: "q3 answer 1 text", correct: true},
            {text: "q3 answer 2 text", correct: false},
            {text: "q3 answer 3 text", correct: false},
            {text: "q3 answer 4 text", correct: false}
        
        ]
    }

    ]

    loadQuestion(questions[questionCounter])