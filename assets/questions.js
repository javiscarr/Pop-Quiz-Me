 var questions = [
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



// Declared variables
var score = 0;
var questionIndex = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var container = document.querySelector("#container");

// Seconds left is 12 seconds per question:
var secondsLeft = 76;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var deduction = 5;
// Creates new element
var ulCreate = document.createElement("ul");


// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Out of time!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].question;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - deduction;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        //  will append last page with user stats
        done();
        createDiv.textContent = "End of quiz!" + " " + "Your answered  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
//  will append last page
function done() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!";
    questionsDiv.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

     // Calculates time remaining and replaces it with score
     if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }
      // Label
      var createLabel = document.createElement("label");
      createLabel.setAttribute("id", "createLabel");
      createLabel.textContent = "Enter your initials: ";
  
      questionsDiv.appendChild(createLabel);
  
      // input
      var createInput = document.createElement("input");
      createInput.setAttribute("type", "text");
      createInput.setAttribute("id", "initials");
      createInput.textContent = "";
  
      questionsDiv.appendChild(createInput);
}
  // submit
  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";

  questionsDiv.appendChild(createSubmit);

  // Event listener to capture initials and local storage for initials and score
  createSubmit.addEventListener("click", function () {
      var initials = createInput.value;

      if (initials === null) {

          console.log("No value entered!");

      } else {
          var finalScore = {
              initials: initials,
              score: timeRemaining
          }
          console.log(finalScore);
          var allScores = localStorage.getItem("allScores");
          if (allScores === null) {
              allScores = [];
          } else {
              allScores = JSON.parse(allScores);
          }
          allScores.push(finalScore);
          var newScore = JSON.stringify(allScores);
          localStorage.setItem("allScores", newScore);
          // Travels to final page
          window.location.replace("./HighScores.html");
      }
  });