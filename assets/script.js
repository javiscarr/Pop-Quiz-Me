const start_btn = document.querySelector(".start_btn");
const quiz_rules = document.querySelector(".quiz_rules");
const exit = quiz_rules.querySelector(".buttons .exit");
const begin = quiz_rules.querySelector(".buttons .begin");
const quiz_area = document.querySelector("quiz_area");
const results = document.querySelector(".results");
const choices = document.querySelector(".choices");
const timeClock = document.querySelector(".timer .time_remaining");
const counter = document.querySelector(".timer .timer_count");

start_btn.onclick = ()=> {
    quiz_rules.classList.add("activeRules");

}

exit.onclick = () => {
    quiz_rules.classList.remove("activeRules");

}

begin.onclick = () => {
    quiz_rules.classList.remove("actvieRules");
    quiz_area.classList.add("activeQuiz");
    showQuestions(0);
    quesCounter(1);
    startTimer(60);
}

let timeValue = 60;
let ques_count = 0;
let ques_numb = 1;
let userScore = 0;
let counter;
let widthValue = 0;

const retake = results.querySelector(".buttons .retake");
const exit = results.querySelector(".buttons .exit");

retake.onclick = () => {
    quiz_area.classList.add("activeQuiz");
    results.classList.remove("activeResult");
    timeValue = 60;
    ques_count = 0;
    ques_num = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(ques_count);
    quesCounter(ques_numb);
    clearInterval(counter);
    
}