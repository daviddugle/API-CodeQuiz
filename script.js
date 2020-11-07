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
    "Commonly used data types DO NOT include",
    "A very useful tool used during development and debugging for printing to the debugger is?",
    "The condition if aor if/else statement is enclosed within?",
    "Arrays in JavaScript can be used to store _____.",
    ];

var quizAnswers = ["Strings", "Booleans", "Alerts", "numbers"];
var quizAns2= ["Javascript","terminal bath","for loops","console log"];
var quizAns3= ["quotes","curly brackets","parenthesis","square brackets"];
var quizAns4=["numbers and strings","other arrays","booleans","all of the above"];
// 
     


var currentQuestionIndex = 0;
qScreenE1.setAttribute("style", "font-size:40px; font-weight:bold; color:blue;");
//display of the questions
function displayQuestion() {
    var currentQuestion = quizQuests[currentQuestionIndex];
    quizQuests[currentQuestionIndex].answerIndex;
    qScreenE1.style.display = "block";
    qScreenE1.textContent = currentQuestion;
   

    var li1El = document.createElement("button");
    qScreenE1.appendChild(li1El);
    li1El.textContent = quizAnswers[0];
    var br1El = document.createElement("br");
    li1El.appendChild(br1El);


    var li2El = document.createElement("button");
    li1El.appendChild(li2El);
    li2El.textContent = quizAnswers[1];
    var br2El = document.createElement("br");
    li2El.appendChild(br2El);


    var li3El = document.createElement("button");
    li2El.appendChild(li3El);
    li3El.textContent = quizAnswers[2];
    var br3El = document.createElement("br");
    li3El.appendChild(br3El);


    var li4El = document.createElement("button");
    li3El.appendChild(li4El);
    li4El.textContent = quizAnswers[3];
    var br4El = document.createElement("br");
    li4El.appendChild(br4El);

    li3El.addEventListener("click", function () {

        qScreenE1.style.display = "none";
        return;
        question2();
    });
    li1El.addEventListener("click", function(){
        // timeLeft - 10;
        qScreenE1.style.display = "none";
        return;
        question2();
    });
    li2El.addEventListener("click", function(){
        // timeLeft - 10;
        qScreenE1.style.display = "none";
        return;
        question2();
    });
    li4El.addEventListener("click", function(){
        // timeLeft - 10;
        qScreenE1.style.display = "none";
        return;
        question2();
    });


}

function question2(){
currentQuestion++;
qScreenE1.style.display = "block";
    qScreenE1.textContent = currentQuestion;
   

    var li1El = document.createElement("button");
    qScreenE1.appendChild(li1El);
    li1El.textContent = quizAns2[0];
    var br1El = document.createElement("br");
    li1El.appendChild(br1El);


    var li2El = document.createElement("button");
    li1El.appendChild(li2El);
    li2El.textContent = quizAns2[1];
    var br2El = document.createElement("br");
    li2El.appendChild(br2El);


    var li3El = document.createElement("button");
    li2El.appendChild(li3El);
    li3El.textContent = quizAns2[2];
    var br3El = document.createElement("br");
    li3El.appendChild(br3El);


    var li4El = document.createElement("button");
    li3El.appendChild(li4El);
    li4El.textContent = quizAns2[3];
    var br4El = document.createElement("br");
    li4El.appendChild(br4El);

    li3El.addEventListener("click", function () {
        // timeLeft - 10;
        qScreenE1.style.display = "none";
        return;
        question3();

    });
    li1El.addEventListener("click", function(){
        // timeLeft - 10;
        qScreenE1.style.display = "none";
        return;
        question3();
    });
    li2El.addEventListener("click", function(){
        // timeLeft - 10;
        qScreenE1.style.display = "none";
        return;
        question3();
    });
    li4El.addEventListener("click", function(){
        
        qScreenE1.style.display = "none";
        return;
        question3();
        
    });



};




// need to have a way to click on an answer from the list and check to see if it is correct. time should be adjusted if correct or incorrect.

// once all questions have been asked, the game over screen should populate with a high score link to the other page and should locally store the high score and initials


