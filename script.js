//Make questions
var quizQuestions = [
    {
        question: "What is a boolean?",
        answer: "All of the above",
        choices: [
            "True",
            "False",
            "All of the above"
            
        ]
    },
    {
        question: "JavaScript was developed in how many days?",
        answer: "Ten",
        choices: [
            "Ten",
            "Seven",
            "Four"
        
        ]
    },
    {
        question: "Who created JavaScript?",
        answer: "Brendan Eich",
        choices: [
            "Michael Jordan",
            "Brendan Eich",
            "Elon Musk"
        
        ]

    }
]

var questionEl = document.getElementById("question")
var ans1 = document.getElementById("choice-one")
var ans2 = document.getElementById("choice-two")
var ans3 = document.getElementById("choice-three")
var timeEl = document.getElementById("timer")
var scoreEl = document.getElementById("score")
var startBtn = document.getElementById("start")
//Set a timer with an event listener
var secondsLeft = 60;
//need a start button with an event listener waiting for user to click it
var startButton= document.getElementById("start");
//get quiz text element
var quizTextEl = document.getElementById("quiz-text");
var quizIndex = 0 
var playerScore = 0

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "time remaining: " + secondsLeft ;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
    
      }
  
    }, 1000);
  }

function askQuestion() {
    
        // const i = quizQuestions[i].question;
        questionEl.textContent = quizQuestions[quizIndex].question;
        ans1.textContent = quizQuestions[quizIndex].choices[0];
        ans2.textContent = quizQuestions[quizIndex].choices[1];
        ans3.textContent = quizQuestions[quizIndex].choices[2];
          
}

        ans1.addEventListener("click", quizListener)   
        ans2.addEventListener("click", quizListener)  
        ans3.addEventListener("click", quizListener)
// 
startButton.addEventListener("click", function(){
    setTime();
    startButton.remove()
    quizTextEl.remove()
    askQuestion();
    
})

 function quizListener(e){
    if (e.target.textContent === quizQuestions[quizIndex].answer) {
        playerScore++
        secondsLeft+=10;
    } else {
        secondsLeft-=10;
    }
    if (quizIndex === quizQuestions.length-1){
        endGame()
    }else{
      quizIndex++  
      askQuestion()
    }
    
}

function endGame(){
    const textEl = document.createElement("p")
    const inputEl = document.createElement("input")
    const btnEl = document.createElement("button")
    textEl.textContent = `Your score: ${playerScore}`
    btnEl.textContent = "Save score"
    scoreEl.appendChild(textEl)
    scoreEl.appendChild(inputEl)
    scoreEl.appendChild(btnEl)
    btnEl.addEventListener("click", function(e){
    const inputValue = inputEl.value
    const storageObject = {
        initials: inputValue,
        score: playerScore
    }
    localStorage.setItem("quizScore", JSON.stringify(storageObject))
    inputEl.remove()
    btnEl.remove()
    textEl.textContent = `Your score has been saved!`
    })
    
}

