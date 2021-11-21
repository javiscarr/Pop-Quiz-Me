var showScore = document.querySelector(".score");
var showTimer = document.querySelector(".timer");
var showTitle = document.querySelector(".title");
var start_btn = document.querySelector(".begin");
var showQuestions = document.querySelector("questions");
var quiz = document.querySelector(".questions");
var showGameOver = document.querySelector(".game-over");
var gameOverScore = document.querySelector(".game-over-score");
var userNameInput = document.querySelector(".name-input");
var userName = document.querySelector(".userName");
var showHighScore = document.querySelector(".high-score");
var submit = document.querySelector(".submit-button");
var retake = document.querySelector(".take-again");
var removeHighScores = document.querySelector(".clear-scores");
var retakeQuiz = document.querySelector(".retake-quiz");
var dynamicList = document.querySelector(".dynamic-list");



var timeInterval;
var currentTime = 60;
var activeQuestion = 0;
var userScore = 0;
var scoreBoard = [];

showScore.hidden = true;
showTimer.hidden = true;
showQuestions.hidden = true;
showGameOver.hidden = true;
showHighScore.hidden = true;
retakeQuiz.hidden = true;

init();

function init() {

    var storedScoreBoard = JSON.parse(localStorage.getItem("scoreBoard"));

    if (storedScoreBoard !== null) {

        scoreBoard = storedScoreBoard;
    }

    renderScoreBoard();

    activeQuestion = 0;

}

function beginQuiz(event) {
    event.preventDefault();
    showTitle.hidden = true;
    start_btn.hidden = true;
    userScore = 000;
    currentTime = 60;
    showQuestions.hidden = false;

    showScore.textContent = "Score: 00" + userScore;
    showScore.hidden = false;
    showTimer.textContent = "Time: " + currentTime;
    showTimer.hidden = false; 

    setTime();

    renderQuestion();
}

function setTime() {
    timeInterval = setInterval(function() {
        currentTime--;
        showTimer.textContent = "Time: " + currentTime;

        if (currentTime <= 0) {
            clearInterval(timeInterval);
            gameOverScore();
        }

        if (currentTime <= 10){
            showTimer.setAttribute("style", "color: read");
        }
        
    }, 1000);
}

function renderQuestion (){
    
    if (activeQuestion >= questions.length){
        gameOver();
        return;
    }

quiz.textContent = questions[activeQuestion].question;

var answerChoices = document.querySelectorAll("p");
for (var i = 0; i < questions[activeQuestion].answers.length; i ++){
    answerChoices[i].textContent = questions[activeQuestion].answers[i];
}

}

function validate(event) {
    event.preventDefault();

    var thisChoice = event.target;

    var timeOutId = 0;

    if (

        thisChoice.textContent === questions[activeQuestion].correctAnswer
    ) {

        thisChoice.setAttribute (

            "style",
            "background-color: green; color: white;"
        );
    
            score = score + 250;
            activeQuestion++; 

            showScore.textContent = "Score: " + score;
            showScore.setAttribute (
                "style", "background-color: green; color white"
            );


            timeOutId = window.setTimeout(renderQuestion, 700);         
            
    } else {

        thisChoice.setAttribute (
            "style","background-color: red; color: white" 
        );

        showTimer.setAttribute("style", "background-color: yellow; color: white");
        currentTime = currentTime - 5;
        activeQuestion++;

        timeOutId = window.setTimeout(renderQuestion, 700);
    }
}

function gameOver(){
    showGameOver.hidden = false;
    userNameInput.hidden = false;
    removeHighScores.hidden = false;
    retakeQuiz.hidden = false;
    showHighScore.hidden = false;

clearInterval(timeInterval);

gameOverScore.textContent= "Game Over!! You achieved a score of " + score + "!";
}

function renderScoreBoard() {

    dynamicList.innerHTML = "";

    for (var i = 0; i < scoreBoard.length; i++) {
        var storedScores = scoreBoard[i];
        var li = document.createElement("li");
        li.textContent = scoreBoard[i].name + " -- || --" + scoreBoard[i].highScore;
        dynamicList.appendChild(li);
    }
}

function submitScores(event) {
    event.preventDefault();

    var user = userName.ariaValueMax.trim();

    userName.value = "";
    if (user === "") {
        return;
    }
    var personScore = { 
        name: user,
        highScore: score,
    };
    
    scoreBoard.push(personScore);

    storedScores();
    userNameInput.hidden = true;
    showHighScore.hidden. false;
    retakeQuiz.hidden = false;
    renderScoreBoard();
}

function clearScores(event) {

    event.preventDefault();
    dynamicList.innerHTML = "";
    localStorage.clear();
    scoreBoard = [];

}

start_btn.addEventListener("mouseup", beginQuiz);
answerChoices.addEventListener("click", validate);
submit.addEventListener("click", submitScores);
userNameInput.addEventListener("submit", submitScores);
removeHighScores.addEventListener("mouseup", clearScores);

retakeQuiz.addEventListener("mouseup", function (event) {
    event.preventDefault();
    showGameOver.hidden = true;
    showQuestions.hidden = true;
    showScore.hidden = true;
    showTimer.hidden = true;
    showTitle.hidden = false;
    start_btn.hidden = false;
});