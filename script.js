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

var questionEL = document.getElementById("question")
var ans1 = document.getElementById("choice-one")
var ans2 = document.getElementById("choice-two")
var ans3 = document.getElementById("choice-three")
var listEl = document.getElementById("quiz-choices")




//Add a start button
var startBtn = document.getElementById("start button")


//Set a timer with an event listener
var secondsLeft = 60;

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



//need a start button with an event listener waiting for user to click it
var startButton= document.getElementById("start");

//when button is clicked start the timer
var timeEl = document.getElementById("timer");

//get quiz text element
var quizTextEl = document.getElementById("quiz-text");

function startQuiz() {
    for (let i = 0; i < quizQuestions.length; i++) {
        // const i = quizQuestions[i].question;
        questionEL.textContent = quizQuestions[i].question;
        ans1.textContent = quizQuestions[i].choices[0];
        ans2.textContent = quizQuestions[i].choices[1];
        ans3.textContent = quizQuestions[i].choices[2];
        

        
    }
}
// 
startButton.addEventListener("click", function(){
    setTime();
    startQuiz();
})

listEl.addEventListener("click", function(e){
    if (e.target === quizQuestions[i].answer) {
        i++;
        secondsLeft+=10;
    }

}) 


//Subtract time from timer when I answer incorrectly

//When all question are answered or if timer reaches zero game is over

//Save my initails and score

