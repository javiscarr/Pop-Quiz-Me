var scoreView = document.querySelector("#custom-score");
var timerView = document.querySelector("#timer");
var titleView = document.querySelector("#custom-header");
var startButton = document.querySelector("#start-button");
var questionView = document.querySelector("#show-question");
var quizView = document.querySelector("#question");
var answerOne = document.querySelector("#answer1");
var answerTwo = document.querySelector("#answer2");
var answerThree = document.querySelector("#answer3");
var answerFour = document.querySelector("#answer4");
var gameOverView = document.querySelector("#game-over");
var gameOverPop = document.querySelector("#game-over-pop");
var userNameForm = document.querySelector("#user_name_frm");
var userName = document.querySelector("#userName");
var highScoreList = document.querySelector("#score-board");
var scoreList = document.querySelector("#scoreList");
var submitBtn = document.querySelector("#submit-btn");



var timeCounter;
var currentTime = 0; // total amount of seconds on the clock 
var score = 0; // starting score
var firstQuestion = 0; // first question to begin with and continue on until time runs out
var scoreBoard = []; // will hold the values of the scores, currently empty


//questions




//array of questions
var quizArray = [
    hyperText,
    boolean,
    css,
    prevent,
    consoleLog,
    document,
];

//defining visibility will hide q&a, score and timer until game has started and finished

scoreView.hidden = false;
timerView.hidden= false;
questionView.hidden = true;


//script initiates
init();

//grabs previous scores stored in local storage
function init() {

    var storeScoreList = JSON.parse(localStorage.getItem("scoreBoard"));


    if (storeScoreList !== null) {
        scoreBoard = storeScoreList;
    }

    renderScoreBoard();

    firstQuestion = 0;
}

function beginQuiz(event) {
    event.preventDefault();
    footer.hidden = true;
    startButton.hidden = true;
    titleView.hidden = true;
    firstQuestion = 0; 
    questionView.hidden = false;


    scoreView.textContent = "Score: 00" + score;
    scoreView.hidden = false;
    timerView.textContent = "Time: " + currentTime;
    timerView.hidden = false;

    setTimeout();

    renderQuestion();

}

function setTime() {
    //countdown begins
    timeCounter = setInterval(function () {
        currentTime--;
        timerView.textContent = "Time: " + currentTime;

        if (currentTime <= 0) {
            clearInterval(timeCounter);
            gameOver();
        }

        if (currentTime <= 10){
            timerView.setAttribute("style", "box-shadow: 0px 5px 2px red");
        }

    }, 1000);
}

