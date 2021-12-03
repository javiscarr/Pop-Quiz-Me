// variables for page elements
// time and score
let timeEl = document.querySelector("p.time");
let secondsLeft = 90;
let scoreEl = document.querySelector("#score");

// section intro
const introEl = document.querySelector("#intro");

//question section
const questionsEl = document.querySelector("#questions");

//question area
let questionEl = document.querySelector("#question");

// questions answered
let questionCount = 0;

// div rightWrong
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
const ansBtn = document.querySelectorAll("button.ansBtn");
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
const backBtn = document.querySelector("#back");
// clearscores
const clearScrBtn = document.querySelector("#clearscores");
// view-scores
const viewScrBtn = document.querySelector("#view-scores");

//object array
const questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "a. HyperText MarkUp Language",
      "b. HyperTension Marking Language",
      "c. HyperText MakeUp Language",
      "d. HyperText MarkUp Lagoon",
    ],

    answer: "a",
  },

  {
    question: "What data type does var x represent? x = true",
    choices: ["a. String", "b. Bit", "c. Boolean", "d. Object"],
    answer: "c",
  },

  {
    question: "What is a Cascading Spread Sheet (CSS)?",
    choices: [
      "a. A language of status rules that allows the developer to change the content of HTML",
      "b. A scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else",
      "c. A language of style rules that we use to apply styling to our HTML content",
      "d. A language that we use to structure and give meaning to our web content",
    ],

    answer:
      "c",
  },

  {
    question:
      "Which function should we call after a submit event to prevent data loss?",
    choices: [
      "a. event.onLoad();",
      "b. event.preventRefresh();",
      "c. event.stopLoad();",
      "d. event.preventDefault();",
    ],
    answer: "d",
  },

  {
    question:
      "Which expression is the most useful and recommended debugging tool?",
    choices: ["a. alert(x);", "b. confirm(x);", "c. console.log(x);", "d. prompt(x);"],
    answer: "c",
  },

  {
    question: "What is Document Object Model (DOM)?",
    choices: [
      "a. The data representation of the objects that comprise the structure and content of a document on the web",
      "b. Read-only property of the document interface returns the document location as a string.",
      "c. Returns the element that is the root element of the document",
      "d. Abstract interface represents a Node object that contains characters. ",
    ],
    answer:
      "a",
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
// start quiz with timer and set up questions
function startQuiz() {
  introEl.style.display = "none";
  questionsEl.style.display = "block";
  questionCount = 0;

  setTime();
  setQuestion(questionCount);
}

// function to set question; takes in a count and displays the next question/answers
function setQuestion(id) {
  if (id < questions.length) {
    questionEl.textContent = questions[id].question;
    ans1Btn.textContent = questions[id].choices[0];
    ans2Btn.textContent = questions[id].choices[1];
    ans3Btn.textContent = questions[id].choices[2];
    ans4Btn.textContent = questions[id].choices[3];
  }
}

// function to check answer and then move to next question
function answerCheck(event) {
  event.preventDefault();

  // show section for rightWrong and append message
  rightWrongEl.style.display = "block";
  let p = document.createElement("p");
  rightWrongEl.appendChild(p);

  // time out after 1 second
  setTimeout(function () {
    p.style.display = "none";
  }, 1000);

  // answer checker
  if (questions[questionCount].answer === event.target.value) {
    p.textContent = "Correct!";
  } else if (questions[questionCount].answer !== event.target.value) {
    secondsLeft = secondsLeft - 10;
    p.textContent = "Wrong!";
  }
  console.log(answerCheck);

  // increment so the questions index is increased
  if (questionCount < questions.length) {
    questionCount++;
  }
  // call setQuestion to bring in next question when any ansBtn is clicked
  setQuestion(questionCount);
}



function addScore(event) {
    event.preventDefault();

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    let init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, score: secondsLeft });

    // sort scores
    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });

      scoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

    // Add to local storage
    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));

}

function displayScores() {
    // retrieve scores from localStorage
    // this will parse the string to an object
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    // If there were any scores captured in localStorage then update the score array list
    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

// clear stored scores
function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML="";

}

// EventListeners added to functions

// this will display the first question and start the timer when the start quiz button is clicked
startBtn.addEventListener("click", startQuiz);

// loop for the correct answer
ansBtn.forEach(item => {
    item.addEventListener('click', answerCheck);
});

// score is added
submitScrBtn.addEventListener("click", addScore);

// button to go backwards
backBtn.addEventListener("click", function (){
    highscoresEl.style.display = "none";
    introEl.style.display = "block";
    secondsLeft = 90;
    timeEl.textContent = `Time:${secondsLeft}s`;
});

// scores are cleared
clearScrBtn.addEventListener("click", clearScores);

// button to view or hide scores
viewScrBtn.addEventListener("click", function(){
    if (highscoresEl.style.display === "none"){
        highscoresEl.style.display = "block";
    } 
    else if (highscoresEl.style.display === "block"){
        highscoresEl.style.display = "none";
    }
    else {
        return alert ("There are no scores to show!");
    }
});