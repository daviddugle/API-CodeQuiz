// should pull the high score from the previous (locally stored) page and add to a list

var highScoreEl = document.querySelector("#high-scores");


var playerOne = JSON.parse(localStorage.getItem("playerOne"));
var userInit = playerOne.playInit;
var userScore= playerOne.score;


var li1El = document.createElement("li");
        li1El.textContent = (userInit + " " + userScore);
        highScoreEl.appendChild(li1El);





//using this as a guide to help build the high score

// var li1El = document.createElement("li");
//     qScreenE1.appendChild(li1El);
//     li1El.textContent = quizQuests[currentQuestionIndex].choices[1];
//     var br1El = document.createElement("br");
//     li1El.appendChild(br1El);