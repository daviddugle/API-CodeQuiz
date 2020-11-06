var timerEl = document.querySelector("#timer");
var welcomeEl = document.querySelector("#welcome-screen");
var startEl = document.querySelector("#start-button");
var questScrnEl=document.querySelector("#queston-screen");
var bodyEl=document.querySelector("#body");
var qScreenE1=document.querySelector("#question-screen");


bodyEl.onload = function(){

    qScreenE1.style.display ="none";
};



// need to have a button that starts the quiz and the timer. the start button should hide the welcome screen
var timer = 60;


startEl.addEventListener("click", function () {


    welcomeEl.style.display = "none";
    startClock();

});


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

};





// need to have an array of questions to ask for the quiz





// need to set up the timer. timer should end the game at 0


// need to have a way to click on an answer from the list and check to see if it is correct. time should be adjusted if correct or incorrect.

// once all questions have been asked, the game over screen should populate with a high score link to the other page and should locally store the high score and initials


