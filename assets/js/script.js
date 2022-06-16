window.alert("Welcome to the JavaScript Quiz App! \n \nThe Quiz consists of 20 questions. Your final score is determined by the number of questions answered correctly within the 100 second time limit. A missed answer or skipped question will incur a penalty that reduces your remaining time by 5 seconds.  Click the START button to begin.")

var skipButton = document.querySelector('#skip-btn')
var startButton = document.querySelector('#start-btn')
var restartButton = document.querySelector("#restart-btn")
var questionContainer = document.querySelector('#question-container')
var banner = document.querySelector("#banner")
var scoreBoard = document.querySelector('.scoreBoard')
var questionEl = document.querySelector("#question")
var answerButton = document.querySelector("#answer-buttons")
var timerDisplay = document.querySelector("#timer-display")
var scoreDisplay = document.querySelector("#score-display")
var highScoreList = document.querySelector("#highScoreList")
var playerScore = 0
var questionCounter = 0
var timePenalty = 0
var highScores = []
var playerInitials
var gameTimer
var timeRemaining = 100
var timeCounter = 0
 





// Loads question from the question array
function loadQuestion(question) { 
   
    


    // ensures there are questions remaining or sends to endGame if none
    if(questionCounter < questions.length) {

    //gets question from questions array
    questionEl.innerText = question.question

    // keeps track of which item in the answers Array we are iterating through
    var answerArrayCount = 0

    //creates a button for each answer in the answers Array 
    question.answers.forEach(function(answer){
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')       

    // copy data attribute from Answers array to each button 
       button.dataset.correct = (question.answers[answerArrayCount].correct)
       
    // appends answer button to HTML          
    answerButton.appendChild(button)

    //Increments the answers array count
    answerArrayCount ++
    })
    
  } else {
    endGame()    
 }
}


// if skip is pressed increments question counter by 1. Removes previous question and replaces it with a new one
var skipQuestion = function() {
    timePenalty += 5
    questionCounter ++
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
    loadQuestion(questions[questionCounter])

}
// if an answer button is clicked checks to see if the button has the data characteristic of "true" indicating a correct answer

var checkAnswer = function() {
    var checkAnswer = event.target.getAttribute("data-correct")
    if (checkAnswer == "true") {
        playerScore ++
        questionCounter ++
        } 

     if (checkAnswer == "false") {
         timePenalty += 5        
        questionCounter ++ 
          
        }    
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)  
    }
    loadQuestion(questions[questionCounter])  
    }
   

var startGame = function() {    
    playerScore = 0
    scoreBoard.classList.add("hide")
    gameTimer = setInterval(timeIt, 1000)     
    startButton.classList.add("hide")
    questionContainer.classList.remove("hide")
    banner.classList.remove("hide")
    skipButton.classList.remove("hide")
    loadQuestion(questions[questionCounter])
    
    }




var endGame = function() {  
    timeRemaining = 100
    timePenalty = 0  
    clearInterval(gameTimer)    
    timerDisplay.innerText = "Timer: 0"
    skipButton.classList.add("hide")
    questionContainer.classList.add("hide")
    banner.classList.add("hide")
    scoreBoard.classList.remove("hide")
    restartButton.classList.remove("hide")
    questionCounter = 0
    loadScore()
  
}
var loadScore = function() {

    // retrieve saved scores from localStorage
    savedScores = JSON.parse(localStorage.getItem("highScores"));
    
   // if localStorage is empty creates an empty array to hold the player's score
    if (!savedScores) {
        savedScores = []
           }
  
    
        

    playerInitials = window.prompt("Please Enter Your Intials")

   // creates new object to store player and score
    var finalScore = { player: playerInitials, score: playerScore}
    
    //adds player score object to the array
    savedScores.push(finalScore)    

    // sorts the array based on score

   savedScores.sort((a,b) => {
    return b.score - a.score;
   })
   


   // trims the array so that only the top 5 scores are saved

  var scoreSlice = savedScores.slice(0,5)
  console.log(scoreSlice)

  for (i = 0; i < scoreSlice.length; i++) {  
  var highScoreEl = document.createElement("li")
  highScoreEl.innerText = scoreSlice[i].player + "  " + scoreSlice[i].score
  highScoreEl.classList.add('score-list-item') 
// appends answer button to HTML          

highScoreList.appendChild(highScoreEl)

  }
  

  
 
   



      
// save new highscore array to localStorage
    localStorage.setItem("highScores", JSON.stringify(scoreSlice));      
}
function timeIt() {     
    var countdown 
  
    if (countdown <= timePenalty) { 
     endGame()
        
        
    } else {  
   timeCounter++ 
   countdown = (timeRemaining - timeCounter) 
   var playerTime = countdown - timePenalty
   timerDisplay.innerText = "Time: " + playerTime
   scoreDisplay.innerText = "Score: " + playerScore  
   console.log(playerTime)
   if(playerTime < 0) {
    endGame()
}
   }
    
    };



var restartGame = function() {
    location.reload(true);
}


// Event listeners
answerButton.addEventListener('click', checkAnswer)
skipButton.addEventListener('click', skipQuestion)
startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', restartGame)



 
    


// Questions. The correct answer has a custom data item of correct set to "true"
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
            {text: "order()", correct: false},
            {text: "changeOrder(order)", correct: false},
            {text: "None of the above ", correct: false}
        
        ]
    },
    {
        question: "How do you round the number 5.35 to the nearest integer?",
        answers: [
            {text: "Math.round(5.35)", correct: true},
            {text: "rnd(5.35)", correct: false},
            {text: "Math.rnd(5.35)", correct: false},
            {text: "round(5.35)", correct: false}            
        
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
        question: "let arr = [1,2,3,4,5];   \n\n arr.slice(0,3)",
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
            {text: "a function that references variables in the outer scope from its inner scope.", correct: true},
            {text: "a variable is bound to the most recent value assigned to that variable", correct: false},
            {text: "Function objects", correct: false},        
            {text: "none of the above options", correct: false}
            
        
        ]
    },
    {
        question: "What kind of scope does JavaScript use?",
        answers: [
            {text: "Lexical scoping", correct: true},
            {text: "Dynamic scoping", correct: false},
            {text: "Generic scoping", correct: false},
            {text: "Static scoping", correct: false}
        
        ]
    },
    {
        question: "JavaScript is not a case-sensitive language.",
        answers: [
            {text: "True", correct: false},
            {text: "False", correct: true},        
        
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
        question: "Which of the following Array functions extracts a section of an existing Array and returns a new Array?",
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
        question: "Function used To Parse a String To Int",
        answers: [
            {text: "Integer.Parse", correct: false},
            {text: "Int.Parse", correct: false},
            {text: "Parse.Int", correct: true},
            {text: "None of the Above", correct: false}
        
        ]
    },
    {
        question: "Which Of the following dialog boxes displays a message And a data entry field?",
        answers: [
            {text: "Alert()", correct: false},
            {text: "Prompt()", correct: true},
            {text: "Confirm()", correct: false},
            {text: "Msg()", correct: false}
        
        ]
    },
    {
        question: "Given the following, what is the value of x? \n var x = typeof'abc';",
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
            {text: " 5 ", correct: false},
            {text: " 24 ", correct: false},
            {text: " 3 ", correct: false},
            {text: " 2 ", correct: true}
        
        ]
    },
   
]
    
    