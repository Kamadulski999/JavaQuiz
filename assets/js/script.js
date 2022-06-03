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
        question: "Inside which element do you place JavaScript?",
        answers: [
            {text: "<var>", correct: false},
            {text: "<script>", correct: true},
            {text: "<section>", correct: false},
            {text: "<code>", correct: false}
        
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            {text: "alertBox('Hello World');", correct: false},
            {text: "alert(Hello World);", correct: false},
            {text: "alert('Hello World');", correct: true},
            {text: "msg('Hello World');", correct: false}
        
        ]
    },
    {
        question: "Which of the following is the correct syntax to redirect a URL using JavaScript?",
        answers: [
            {text: "document.location=", correct: false},
            {text: "navigator.location=", correct: false},
            {text: "window.location=", correct: true},
            {text: "browser.location=", correct: false}
        
        ]
    },
    {
        question: "Which syntax is correct?",
        answers: [
            {text: "i =+ 1;", correct: false},
            {text: "i += 1;", correct: true},
            {text: "i = i++1;", correct: false},
            {text: "+i+;", correct: false}
        
        ]
    },
    {
        question: "Which array method sorts the elements of an array?",
        answers: [
            {text: "sort()", correct: true},
            {text: "changeOrder(order)", correct: false},
            {text: "order()", correct: false},
            {text: "None of the above ", correct: false}
        
        ]
    },
    {
        question: "How do you round the number 5.35 to the nearest integer?",
        answers: [
            {text: "rnd(5.35)", correct: false},
            {text: "Math.rnd(5.35)", correct: false},
            {text: "round(5.35)", correct: false},
            {text: "Math.round(5.35)", correct: true}
        
        ]
    },
    {
        question: "Which of the following events occurs when the user clicks on an HTML element ",
        answers: [
            {text: "onchange", correct: false},
            {text: "onmouseover", correct: false},
            {text: "onmouseclick", correct: false},
            {text: "onclick", correct: true}
        
        ]
    },
    {
        question: "Which of the following does the pop() method do?",
        answers: [
            {text: "It increments the total length by 1", correct: false},
            {text: "It decrements the total length by 1", correct: true},
            {text: "It prints the first element but no effect on the length", correct: false},
            {text: "None of the above options", correct: false}
        
        ]
    },
    {
        question: "let arr = [1,2,3,4,5]; /n arr.slice(0,3);",
        answers: [
            {text: "Returns [4,5]", correct: false},
            {text: "Returns [1,2,3,4]", correct: true},
            {text: "Returns [1,2,3]", correct: false},
            {text: "Returns [1,2,3,4,5]", correct: false}
        
        ]
    },
    {
        question: "What is a closure?",
        answers: [
            {text: "Scope where the variables of functions are resolved", correct: false},
            {text: "Function objects", correct: false},
            {text: "It is both scope where the variables of functions are resolved and function objects", correct: true},
            {text: "qone of the above options", correct: false}
        
        ]
    },
    {
        question: "What kind of scope does JavaScript use?",
        answers: [
            {text: "Literal scoping", correct: true},
            {text: "Dynamic scoping", correct: false},
            {text: "Generic scoping", correct: false},
            {text: "Static scoping", correct: false}
        
        ]
    },
    {
        question: "JavaScript is not a case-sensitive language.",
        answers: [
            {text: "True", correct: true},
            {text: "False", correct: false},        
        
        ]
    },
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        answers: [
            {text: "You should not use any of the JavaScript reserved keyword as variable name", correct: false},
            {text: "JavaScript variable names should not start with a numeral (0-9)", correct: false},
            {text: "Both of the above", correct: false},
            {text: "None of the above", correct: true}
        
        ]
    },
    {
        question: "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
        answers: [
            {text: "push()", correct: false},
            {text: "join()", correct: false},
            {text: "pop()", correct: false},
            {text: "map()", correct: true}
        
        ]
    },
    {
        question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
        answers: [
            {text: "reverse()", correct: false},
            {text: "shift()", correct: false},
            {text: "slice()", correct: true},
            {text: "some()", correct: false}
        
        ]
    },
    {
        question: "A Function Associated With An object is Called?",
        answers: [
            {text: "Function", correct: false},
            {text: "Method", correct: true},
            {text: "Link", correct: false},
            {text: "None", correct: false}
        
        ]
    },
    {
        question: "IsNaN() Evaluates And Argument To Determine if Given Value?",
        answers: [
            {text: "Is Not a Null", correct: false},
            {text: "Is Not a Number", correct: true},
            {text: "Is Not a New Object", correct: false},
            {text: "None Of The Above", correct: false}
        
        ]
    },
    {
        question: "Function is Used To Parse a String To Int",
        answers: [
            {text: "Integer.Parse", correct: false},
            {text: "Int.Parse", correct: false},
            {text: "Parse.Int", correct: true},
            {text: "None of the Above", correct: false}
        
        ]
    },
    {
        question: "Which Of The Dialog Boxes Displays a Message And a Data Entry Field?",
        answers: [
            {text: "Alert()", correct: false},
            {text: "Prompt()", correct: true},
            {text: "Confirm()", correct: false},
            {text: "Msg()", correct: false}
        
        ]
    },
    {
        question: "Given the following, what is the value of x? /n var x = typeof'abc';",
        answers: [
            {text: "String", correct: true},
            {text: "ABC", correct: false},
            {text: "Error", correct: false},
            {text: "Undefined", correct: false}
        
        ]
    },
    {
        question: "What is the value of the following express: 8 % 3?",
        answers: [
            {text: "5", correct: false},
            {text: "24", correct: false},
            {text: "3", correct: false},
            {text: "2", correct: true}
        
        ]
    },
    {
        question: "How do you use JavaScript via an external file ?",
        answers: [
            {text: "< script url = 'filename.js' > < / script >", correct: false},
            {text: "< script rel = 'filename.js' > < / script >", correct: false},
            {text: "< script href = 'filename.js' > < / script >", correct: false},
            {text: "< script src = 'filename.js' > < / script >", correct: true}
        
        ]
    }
]
    
    loadQuestion(questions[questionCounter])