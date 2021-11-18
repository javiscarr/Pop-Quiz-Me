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


//questions

var hyperText = {
    question: "What does HTML stand for?",
    answers: [
        "HyperText MarkUp Language",
        "HyperTension Marking Language",
        "HyperText MakeUp Language",
        "HyperText MarkUp Lagoon"
        ],
        correctAnswer: "HyperText MarkUp Language",
};

var boolean = {
    question: "What data type does var x represent? x = true",
    answers: ["String", "Bit", "Boolean", "Object"],
    correctAnswer: "Boolean",
  };

var css = {
    question: "What is a Cascading Spread Sheet (CSS)?",
    answers : [
        "A language of status rules that allows the developer to change the content of HTML",
        "A scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else",
        "A language of style rules that we use to apply styling to our HTML content",
        "A language that we use to structure and give meaning to our web content"
],
    correctAnswer: "A language of style rules that we use to apply styling to our HTML content",
};

var prevent = {
    question:
      "Which function should we call after a submit event to prevent data loss?",
    answers: [
      "event.onLoad();",
      "event.preventRefresh();",
      "event.stopLoad();",
      "event.preventDefault();"
    ],
    correctAnswer: "event.preventDefault();",
};
var consoleLog = {
    question:
      "Which expression is the most useful and recommended debugging tool?",
    answers: ["alert(x);", "confirm(x);", "console.log(x);", "prompt(x);"],
    correctAnswer: "console.log(x);",
  };