var timerEl = document.querySelector("#timer");
var welcomeEl = document.querySelector("#welcome-screen");
var startEl = document.querySelector("#start-button");
var questScrnEl = document.querySelector("#queston-screen");
var bodyEl = document.querySelector("#body");
var qScreenE1 = document.querySelector("#question-screen");
var mainQuestEl = document.querySelector("#question");
var but1El = document.querySelector("#but1");
var but1E2 = document.querySelector("#but2");
var but1E3 = document.querySelector("#but3");
var but1E4 = document.querySelector("#but4");
var responseEl = document.querySelector("#response");
var initialsEl = document.querySelector("#initials");
var highScoreEl = document.querySelector("#high-score");
var scoreScrnEl = document.querySelector("#score-screen");
var yourScoreEl = document.querySelector("#your-score");
var formEl = document.querySelector("#form");





bodyEl.onload = function () {

    qScreenE1.style.display = "none";
    scoreScrnEl.style.display = "none";

    // qScreenE1.setAttribute("style", "display:none");
    // scoreScrnEl.setAttribute("style","display:none");

};



// need to have a button that starts the quiz and the timer. the start button should hide the welcome screen
var timer = 60;


startEl.addEventListener("click", function () {


    welcomeEl.style.display = "none";
    startClock();

});

// need to set up the timer. timer should end the game at 0
function startClock() {
    var timeLeft = 70;
    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft;
        timeLeft--;

        if (timeLeft <= 0) {
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }


    }, 1000);

    displayQuestion();

};





// need to have an array of questions to ask for the quiz


var quizQuests = [
    {
        q: "Commonly used data types DO NOT include",
        choices: ["Strings", "Booleans", "Alerts", "numbers"],
        answerIndex: 2
    },
    {
        q: "A very useful tool used during development and debugging for printing to the debugger is?",
        choices: ["Javascript","terminal bath","for loops","console log"],
        answerIndex: 3
    },
    {
        q: "The condition if or if/else statement is enclosed within?",
        choices: ["quotes","curly brackets","parenthesis","square brackets"],
        answerIndex: 1
    },
    {
        q: "Arrays in JavaScript can be used to store _____.",
        choices: ["numbers and strings","other arrays","booleans","all of the above"],
        answerIndex: 3
    }];

var currentQuestionIndex = 0;
qScreenE1.setAttribute("style", "font-size:40px; font-weight:bold; color:blue;");
//display of the questions
function displayQuestion() {
    var currentQuestion = quizQuests[currentQuestionIndex].q;
    quizQuests[currentQuestionIndex].answerIndex;
    qScreenE1.style.display = "block";
    qScreenE1.textContent = currentQuestion;
   

    var li1El = document.createElement("li");
    qScreenE1.appendChild(li1El);
    li1El.textContent = quizQuests[currentQuestionIndex].choices[0];
    var br1El = document.createElement("br");
    li1El.appendChild(br1El);


    var li1El = document.createElement("li");
    qScreenE1.appendChild(li1El);
    li1El.textContent = quizQuests[currentQuestionIndex].choices[1];
    var br1El = document.createElement("br");
    li1El.appendChild(br1El);


    var li1El = document.createElement("li");
    qScreenE1.appendChild(li1El);
    li1El.textContent = quizQuests[currentQuestionIndex].choices[2];
    var br1El = document.createElement("br");
    li1El.appendChild(br1El);


    var li1El = document.createElement("li");
    qScreenE1.appendChild(li1El);
    li1El.textContent = quizQuests[currentQuestionIndex].choices[3];
    var br1El = document.createElement("br");
    li1El.appendChild(br1El);
 

}





// need to have a way to click on an answer from the list and check to see if it is correct. time should be adjusted if correct or incorrect.

// once all questions have been asked, the game over screen should populate with a high score link to the other page and should locally store the high score and initials


