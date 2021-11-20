var showScore = document.querySelector(".score");
var showTimer = document.querySelector(".timer");
var showTitle = document.querySelector(".title");
var start_btn = document.querySelector(".start_button");
var showQuestions = document.querySelector("questions");
var showGameOver = document.querySelector(".game-over");
/*var gameOverOverlay = document.querySelector("#overlay-background");*/
var gameOverScore = document.querySelector(".game-over-score");
/*var gameOverSplash = document.querySelector("#game-over-splash");*/
var userNameInput = document.querySelector(".name-input");
var userName = document.querySelector(".userName");
var showHighScore = document.querySelector(".high-score");
/*var dynamicList = document.querySelector("#dynamic-list");*/
var submit = document.querySelector(".submit-button");
var retake = document.querySelector(".take-again");
var removeHighScores = document.querySelector(".clear-scores");
var retakeQuiz = document.querySelector("#retake-quiz");
var footer = document.querySelector("#footer");


const start_btn = document.querySelector(".start_btn");
const quiz_rules = document.querySelector(".quiz_rules");
const exit = quiz_rules.querySelector(".buttons .exit");
const begin = quiz_rules.querySelector(".buttons .begin");
const quiz_area = document.querySelector("quiz_area");
const results = document.querySelector(".results");
const choices = document.querySelector(".choices");
const timeClock = document.querySelector(".timer .timeRemaining");
const counter = document.querySelector(".timer .timer_count");
const quizQuestion = document.querySelector(".questions");



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

    if (storedScoreBoard !=== null) {

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

        if (currentTime <== 0) {
            clearInterval(timeInterval);
            gameOverScore();
        }

        if (currentTime <= 10){
            showTimer.setAttribute("style", "color: read");
        }
        
    }, 1000);
}

const retake = results.querySelector(".buttons .retake");
const exit = results.querySelector(".buttons .exit");

retake.onclick = function () {
    quiz_area.classList.add("activeQuiz");
    results.classList.remove("activeResult");
    timeValue = 60;
    ques_count = 0;
    currentQuestion = 0;
    userScore = 0;
    widthValue = 0;
    showQuestions(ques_count);
    quesCounter(ques_numb);
    clearInterval(counter);
    startTimer(timeValue);
    timeClock.textContent = "Time Remaining:";

    
}

exit.onclick = function () {
    window.location.reload();

}

quizQuestion.textContent = questions[]
