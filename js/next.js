/* ---- CHRONOMETER ---- */

let chronometer = 30;
let intervalID;
let score = 0;

let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let startBtn = document.getElementById("next-start-button")
let input = document.getElementById("next-answer")

function twoDigits(chronometer) {
    if (chronometer < 10) {
        return `0${chronometer}`
    } else return `${chronometer}`
};

function printSeconds() {
    let twoDigitsSeconds = twoDigits(chronometer);
    secDec.textContent = twoDigitsSeconds[0];
    secUni.textContent = twoDigitsSeconds[1];
}

function inputFocus(){
    input.focus();
}

/* ---- WHAT'S NEXT GAME ---- */

let testArr = [
    {question: `<div id="question-container" style="background-image: url(./img/next1.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next2.jpg); background-position: center;">
    </div>`, answer: 1},
    {question: `<div id="question-container" style="background-image: url(./img/next3.jpg); background-position: center;">
    </div>`, answer: 5},
    {question: `<div id="question-container" style="background-image: url(./img/next4.jpg); background-position: center;">
    </div>`, answer: 4},
    {question: `<div id="question-container" style="background-image: url(./img/next5.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next6.jpg); background-position: center;">
    </div>`, answer: 6},
    {question: `<div id="question-container" style="background-image: url(./img/next7.jpg); background-position: center;">
    </div>`, answer: 4},
    {question: `<div id="question-container" style="background-image: url(./img/next8.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next9.jpg); background-position: center;">
    </div>`, answer: 1},
    {question: `<div id="question-container" style="background-image: url(./img/next10.jpg); background-position: center;">
    </div>`, answer: 5},
    {question: `<div id="question-container" style="background-image: url(./img/next11.jpg); background-position: center;">
    </div>`, answer: 2},
    {question: `<div id="question-container" style="background-image: url(./img/next12.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next13.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next14.jpg); background-position: center;">
    </div>`, answer: 1},
    {question: `<div id="question-container" style="background-image: url(./img/next15.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next16.jpg); background-position: center;">
    </div>`, answer: 2},
    {question: `<div id="question-container" style="background-image: url(./img/next17.jpg); background-position: center;">
    </div>`, answer: 5},
    {question: `<div id="question-container" style="background-image: url(./img/next18.jpg); background-position: center;">
    </div>`, answer: 2},
    {question: `<div id="question-container" style="background-image: url(./img/next19.jpg); background-position: center;">
    </div>`, answer: 4},
    {question: `<div id="question-container" style="background-image: url(./img/next20.jpg); background-position: center;">
    </div>`, answer: 1},
    {question: `<div id="question-container" style="background-image: url(./img/next21.jpg); background-position: center;">
    </div>`, answer: 4},
    {question: `<div id="question-container" style="background-image: url(./img/next22.jpg); background-position: center;">
    </div>`, answer: 2},
    {question: `<div id="question-container" style="background-image: url(./img/next23.jpg); background-position: center;">
    </div>`, answer: 1},
    {question: `<div id="question-container" style="background-image: url(./img/next24.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next25.jpg); background-position: center;">
    </div>`, answer: 4},
    {question: `<div id="question-container" style="background-image: url(./img/next26.jpg); background-position: center;">
    </div>`, answer: 1},
    {question: `<div id="question-container" style="background-image: url(./img/next27.jpg); background-position: center;">
    </div>`, answer: 4},
]


let nextProblem = document.getElementById("next-problem");
let rightAnswer;

//get random number between 0 - max
function randomNum(max){
    return Math.round(Math.random() * max);
}


function randomQuestion(){
    let newArr = [...testArr]
    let pair = newArr[randomNum(newArr.length-1)]
    let image = pair.question;
    rightAnswer = pair.answer;

    nextProblem.innerHTML = image;
    

}


input.onkeypress = function(event) {
    if (event.keyCode == 13 && input.value == rightAnswer) {
        score++;
        randomQuestion();
        input.value="";
    } else if (event.keyCode == 13 && input.value != rightAnswer) {
        randomQuestion();
        input.value="";
    }
}


//the player has a good score
function goodScore(){
    nextProblem.removeAttribute("id");
    nextProblem.setAttribute("id", "next-end");
    nextProblem.innerText = `${score} correct answers in 30sec. Great Job!`;
    document.getElementById("next-character").innerHTML = `<img src="./img/happy.png" alt="happy" id="happy">`
    nextProblem.innerHTML +=
    `
    <div id="end-button">
        <button><a href="next.html">TRY AGAIN</a></button>
        <button><a href="menu.html">HOME</a></button>
    </div>
    `;
    input.onkeypress = function() {return ""}
}


//the player has a bad score
function badScore(){
    nextProblem.removeAttribute("id");
    nextProblem.setAttribute("id", "next-end");
    nextProblem.innerText = `${score} correct answers in 30sec. Keep Trying...`;
    document.getElementById("next-character").innerHTML = `<img src="./img/sad.png" alt="sad">`
    nextProblem.innerHTML +=
    `
    <div id="end-button">
        <button><a href="next.html">TRY AGAIN</a></button>
        <button><a href="menu.html">HOME</a></button>
    </div>
    `;
    input.onkeypress = function() {return ""}
}


function startGame() {
    randomQuestion();
    inputFocus();
    intervalID = setInterval(() => {
        chronometer--;
        printSeconds();
        if (chronometer === 0) {
            clearInterval(intervalID);
            if (score < 4) {
                badScore();
            } else goodScore();
        }
    },1000);
}

startBtn.onclick = startGame;