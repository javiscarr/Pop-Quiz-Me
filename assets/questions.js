 // variables for page elements
// time and score
let timeEl = document.querySelector("p.time");
let secondsLeft = 75;
let scoreEl = document.querySelector("#score");

// sections
// section intro
const introEl = document.querySelector("#intro");

// section questions
//question section
const questionsEl = document.querySelector("#questions");
//where question goes
let questionEl = document.querySelector("#question");
// how many questions they have answered
let questionCount = 0;
// div yaynay
const rightWrongEl = document.querySelector("#rightWrong");

// section final
const finalEl = document.querySelector("#final");
// user initials
let initialsInput = document.querySelector("#initials");
// section highscores
const highscoresEl = document.querySelector("#highscores");
// ordered list
let scoreListEl = document.querySelector("#score-list");
// array of scores
let scoreList = [];

// buttons
// start
const startBtn = document.querySelector("#start");
// answer button class
const ansBtn = document.querySelectorAll("button.ansBtn")
// answer1
const ans1Btn = document.querySelector("#answer1");
// answer2
const ans2Btn = document.querySelector("#answer2");
// answer3
const ans3Btn = document.querySelector("#answer3");
// answer4
const ans4Btn = document.querySelector("#answer4");
// submit-score
const submitScrBtn = document.querySelector("#submit-score");
// goback
const goBackBtn = document.querySelector("#goback");
// clearscores
const clearScrBtn = document.querySelector("#clearscores");
// view-scores
const viewScrBtn = document.querySelector("#view-scores");

 //object array
 const questions = [ 
{
    
       question: "What does HTML stand for?",
       choices: 
            ["HyperText MarkUp Language",
            "HyperTension Marking Language",
            "HyperText MakeUp Language",
            "HyperText MarkUp Lagoon"],

            
        answer: "HyperText MarkUp Language",
    },

{
    
       question: "What data type does var x represent? x = true",
       choices: ["String", "Bit", "Boolean", "Object"],
       answer: "Boolean",

    },

{

        question: "What is a Cascading Spread Sheet (CSS)?",
        choices: [
            "A language of status rules that allows the developer to change the content of HTML",
            "A scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else",
            "A language of style rules that we use to apply styling to our HTML content",
            "A language that we use to structure and give meaning to our web content"],
    
        answer: "A language of style rules that we use to apply styling to our HTML content",
    
    },

{
        question:
          "Which function should we call after a submit event to prevent data loss?",
        choices: [
          "event.onLoad();",
          "event.preventRefresh();",
          "event.stopLoad();",
          "event.preventDefault();"
        ],
        answer: "event.preventDefault();",
    },
    
{

     
        question: "Which expression is the most useful and recommended debugging tool?",
        choices: ["alert(x);", "confirm(x);", "console.log(x);", "prompt(x);"],
        answer: "console.log(x);",
      
    },

{
     
        question: "What is Document Object Model (DOM)?",
        choices : [
            "The data representation of the objects that comprise the structure and content of a document on the web",
            "Read-only property of the document interface returns the document location as a string.",
            "Returns the element that is the root element of the document",
            "Abstract interface represents a Node object that contains characters. "
        ],
        answer: "The data representation of the objects that comprise the structure and content of a document on the web",
    
    },

];

// Functions

// timer
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
}