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



var timeCounter;
var currentTime = 60; // total amount of seconds on the clock 
var score = 0; // starting score
var firstQuestion = 0; // first question to begin with and continue on until time runs out
var scoreBoard = []; // will hold the values of the scores, currently empty