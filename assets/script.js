const start_btn = document.querySelector(".start_btn button");
const information_area = document.querySelector(".information_area");
const exit_btn = information_area.querySelector(".buttons .quit");
const continue_btn = information_area.querySelector(".buttons .restart");
const quiz_area = document.querySelector(".quiz_area");
const score_area = document.querySelector(".score_area");
const choice_list = document.querySelector(".choice_list");
const timeLeft = document.querySelector(".timer .time_left");
const timeCountdown = document.querySelector(".timer .timer_sec");


// if startQuiz button clicked
start_btn.onclick = ()=>{
    information_area.classList.add("activeInfo"); //show information area
}
// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    information_area.classList.remove("activeInfo"); // this will hide information area
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    information_area.classList.remove("activeInfo"); //hide info box
    quiz_area.classList.add("activeQuiz"); //show quiz box
    showQuestions(0); //calling showQuestions function
    questionCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    
}

let timeValue =  60;
let question_count = 0;
let question_numb = 1;
let userScore = 0;
let counter;

const restart_quiz = score_area.querySelector(".buttons .restart");
const quit_quiz = score_area.querySelector(".buttons .quit");
// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_area.classList.add("activeQuiz"); //show quiz box
    score_area.classList.remove("activeResult"); //hide result box
    timeValue = 60; 
    question_count = 0;
    question_numb = 1;
    userScore = 0;
    showQuestions(question_count); //calling showQestions function
    questionCounter(question_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    startTimer(timeValue); //calling startTimer function
    timeText.textContent = "Time Left: "; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
// if Next Que button clicked
next_btn.onclick = ()=>{
    if(question_count < questions.length - 1){ //if question count is less than total question length
        question_count++; //increment the question_count value
        question_numb++; //increment the question_numb value
        showQuestions(question_count); //calling showQuestions function
        questionCounter(question_numb); //passing question_numb value to questionCounter
        clearInterval(counter); //clear counter
        startTimer(timeValue); //calling startTimer function
        timeText.textContent = "Time Left: "; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        showResult(); //calling showResult function
    }
}
// getting questions and options from array
function showQuestions(index){
    const question_text = document.querySelector(".que_text");
    //creating a new span and div tag for question and option and passing the value using array index
    let question_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let choice_tag = '<div class="choice"><span>'+ questions[index].choice[0] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choice[1] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choice[2] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choice[3] +'</span></div>';
    + '<div class="choice"><span>'+ questions[index].choice[4] +'</span></div>';
    + '<div class="choice"><span>'+ questions[index].choice[5] +'</span></div>';
    question_text.innerHTML = question_tag; //adding new span tag inside question_tag
    choice_list.innerHTML = choice_tag; //adding new div tag inside choice_tag
    
    const choice = choice_list.querySelectorAll(".choice");
    // set onclick attribute to all available choice
    for(i=0; i < choice.length; i++){
        choice[i].setAttribute("onclick", "choiceSelected(this)");
    }
}

function choiceChosen(answer){
    clearInterval(counter); //clear counter
    let userChoice = answer.textContent; //getting user selected option
    let correctAnswer = questions[question_count].answer; //getting correct answer from array
    const everyChoice = choice_list.children.length; //getting all option items
    
    if(userChoice == correctAnswer){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        console.log("Correct Answer");
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        console.log("Wrong Answer");
